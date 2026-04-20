import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/firebase-admin";
import { getResend } from "@/lib/resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateEmail } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { valid, sanitized, error } = validateEmail(body.email);

    if (!valid || !sanitized) {
      return NextResponse.json(
        { success: false, error: error || "Invalid email" },
        { status: 400 }
      );
    }

    const db = getDb();

    // Check for duplicate subscription
    const existing = await db
      .collection("newsletter")
      .where("email", "==", sanitized)
      .limit(1)
      .get();

    if (!existing.empty) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed!",
      });
    }

    await db.collection("newsletter").add({
      email: sanitized,
      subscribedAt: new Date().toISOString(),
      active: true,
    });

    
    try {
      await getResend().emails.send({
        from: "SUDS Tech <noreply@suds-tech.com>",
        to: sanitized,
        subject: "Welcome to the SUDS Tech community!",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
            <div style="background:#0d1117;padding:32px 32px 24px;text-align:center;">
              <h1 style="color:#10b981;font-size:24px;margin:0;">SUDS Tech Company Ltd</h1>
            </div>
            <div style="padding:32px;">
              <h2 style="color:#111827;font-size:20px;margin:0 0 16px;">Welcome aboard! 🎉</h2>
              <p style="color:#374151;line-height:1.6;margin:0 0 16px;">
                You're now part of the SUDS Tech client community. We'll keep you updated with our
                latest projects, tech insights, and company news.
              </p>
              <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:0 0 24px;">
                <p style="color:#15803d;margin:0;font-size:14px;">
                   <strong>Verified Client badge unlocked</strong> — any reviews you leave on our
                  projects will now display a green verified client badge.
                </p>
              </div>
              <p style="color:#374151;line-height:1.6;margin:0 0 24px;">
                Have a project in mind? We'd love to hear from you.
              </p>
              <a href="https://www.suds-tech.com/contact" style="display:inline-block;background:#10b981;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px;">
                Get in Touch
              </a>
            </div>
            <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
              <p style="color:#9ca3af;font-size:12px;margin:0;text-align:center;">
                SUDS Tech Company Ltd · Kampala, Uganda · <a href="https://www.suds-tech.com" style="color:#10b981;">suds-tech.com</a><br>
                You're receiving this because you subscribed at suds-tech.com.
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Failed to send newsletter welcome email:", emailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing!",
    });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return NextResponse.json(
      { success: false, error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
