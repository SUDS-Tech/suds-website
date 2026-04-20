import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDb } from "@/lib/firebase-admin";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateReview } from "@/lib/projects-validation";
import { getProjectById } from "@/app/components/projects/projects";
import { getEnv } from "@/lib/env";
import { getResend } from "@/lib/resend";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!getProjectById(id)) {
    return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
  }

  try {
    const db = getDb();
    const snap = await db
      .collection("reviews")
      .where("projectId", "==", id)
      .get();

    const reviews = snap.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as { id: string; createdAt: string; [key: string]: unknown }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, reviews });
  } catch (err) {
    console.error("Failed to fetch reviews:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!getProjectById(id)) {
    return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
  }

  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json(
      { success: false, error: "Sign in with Google to submit a review." },
      { status: 401 }
    );
  }

  const { email, name, image } = session.user;

  if (!checkRateLimit(`review:${email}`)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { valid, errors, sanitized } = validateReview(body);

    if (!valid || !sanitized) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const db = getDb();

    // One review per Google account per project
    const existing = await db
      .collection("reviews")
      .where("authorEmail", "==", email)
      .get();

    const alreadyReviewed = existing.docs.some((doc) => doc.data().projectId === id);
    if (alreadyReviewed) {
      return NextResponse.json(
        { success: false, error: "You have already reviewed this project." },
        { status: 409 }
      );
    }

    // Determine verification tier
    const teamEmails = getEnv()
      .TEAM_EMAILS.split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    let verified: "team" | "client" | null = null;

    if (teamEmails.includes(email.toLowerCase())) {
      verified = "team";
    } else {
      const newsletterSnap = await db
        .collection("newsletter")
        .where("email", "==", email)
        .limit(1)
        .get();

      if (!newsletterSnap.empty && newsletterSnap.docs[0].data().active !== false) {
        verified = "client";
      }
    }

    const docRef = await db.collection("reviews").add({
      projectId: id,
      authorName: sanitized.authorName,
      authorEmail: email,
      authorPhoto: image ?? null,
      rating: sanitized.rating,
      content: sanitized.content,
      verified,
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
    });

    
    try {
      const project = getProjectById(id);
      await getResend().emails.send({
        from: "SUDS Tech <noreply@suds-tech.com>",
        to: email!,
        subject: `Thank you for your review, ${sanitized.authorName}!`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
            <div style="background:#0d1117;padding:32px 32px 24px;text-align:center;">
              <h1 style="color:#10b981;font-size:24px;margin:0;">SUDS Tech Company Ltd</h1>
            </div>
            <div style="padding:32px;">
              <h2 style="color:#111827;font-size:20px;margin:0 0 16px;">Thank you, ${sanitized.authorName}! 🙏</h2>
              <p style="color:#374151;line-height:1.6;margin:0 0 16px;">
                Your ${sanitized.rating}-star review of <strong>${project?.title ?? "our project"}</strong> means a lot to the SUDS Tech team.
                Feedback like yours helps us grow and deliver even better work.
              </p>
              ${verified === "client" ? `
              <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:0 0 16px;">
                <p style="color:#15803d;margin:0;font-size:14px;">
                   <strong>Verified Client badge applied</strong> — your review is now highlighted as a verified client review.
                </p>
              </div>` : ""}
              ${verified === "team" ? `
              <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px;margin:0 0 16px;">
                <p style="color:#1d4ed8;margin:0;font-size:14px;">
                   <strong>SUDS Team badge applied</strong> to your review.
                </p>
              </div>` : ""}
              <p style="color:#374151;line-height:1.6;margin:0 0 24px;">
                If you haven't already, we'd love for you to share your experience on Google, it helps others discover us too.
              </p>
              <a href="https://g.page/r/Cf2hrUzaa0e_EBM/review" style="display:inline-block;background:#10b981;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px;">
                Leave a Google Review
              </a>
            </div>
            <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
              <p style="color:#9ca3af;font-size:12px;margin:0;text-align:center;">
                SUDS Tech Company Ltd · Kampala, Uganda · <a href="https://www.suds-tech.com" style="color:#10b981;">suds-tech.com</a>
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Failed to send review thank-you email:", emailErr);
    }

    return NextResponse.json({ success: true, reviewId: docRef.id, verified });
  } catch (err) {
    console.error("Failed to submit review:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
