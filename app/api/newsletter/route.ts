import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
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
