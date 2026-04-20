import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateReply } from "@/lib/projects-validation";
import { getEnv } from "@/lib/env";
import crypto from "crypto";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; reviewId: string }> }
) {
  const { reviewId } = await params;

  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json(
      { success: false, error: "Sign in with Google to reply." },
      { status: 401 }
    );
  }

  const { email, name, image } = session.user;

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(`reply:${email ?? ip}`)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { valid, errors, sanitized } = validateReply(body);

    if (!valid || !sanitized) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const teamEmails = getEnv()
      .TEAM_EMAILS.split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    let verified: "team" | "client" | null = null;

    if (teamEmails.includes(email!.toLowerCase())) {
      verified = "team";
    } else {
      const newsletterSnap = await getDb()
        .collection("newsletter")
        .where("email", "==", email)
        .limit(1)
        .get();
      if (!newsletterSnap.empty && newsletterSnap.docs[0].data().active !== false) {
        verified = "client";
      }
    }

    const reply = {
      id: crypto.randomUUID(),
      authorName: sanitized.authorName,
      authorPhoto: image ?? null,
      verified,
      content: sanitized.content,
      createdAt: new Date().toISOString(),
    };

    await getDb()
      .collection("reviews")
      .doc(reviewId)
      .update({ replies: FieldValue.arrayUnion(reply) });

    return NextResponse.json({ success: true, reply });
  } catch (err) {
    console.error("Failed to submit reply:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit reply" },
      { status: 500 }
    );
  }
}
