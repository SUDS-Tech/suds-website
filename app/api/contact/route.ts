import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { resend } from "@/lib/resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateContact } from "@/lib/validation";
import { loadEnv } from "dotenv-gad";
import schema from "@/env.schema";

const env = loadEnv(schema);

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
    const { valid, errors, sanitized } = validateContact(body);

    // Honeypot triggered — return fake success to not tip off the bot
    if (!valid && errors.some((e) => e.field === "honeypot")) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully. We will get back to you soon.",
      });
    }

    if (!valid || !sanitized) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Write to Firestore
    const docRef = await db.collection("contacts").add({
      name: sanitized.name,
      email: sanitized.email,
      message: sanitized.message,
      status: "pending",
      createdAt: new Date().toISOString(),
      ip,
    });

    // Send notification email (fire-and-forget)
    const notificationEmail = env.NOTIFICATION_EMAIL;

    resend.emails
      .send({
        from: "SUDS Website <noreply@suds-tech.com>",
        to: notificationEmail,
        subject: `New Contact Form Submission from ${sanitized.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">New Contact Submission</h2>
            <p><strong>Name:</strong> ${sanitized.name}</p>
            <p><strong>Email:</strong> ${sanitized.email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${sanitized.message}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;">
            <p style="font-size: 12px; color: #888;">
              Reference: ${docRef.id}<br>
              Submitted: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      })
      .catch((err: unknown) => console.error("Failed to send notification email:", err));

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. We will get back to you soon.",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
