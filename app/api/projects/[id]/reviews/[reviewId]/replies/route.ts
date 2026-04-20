import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateReply } from "@/lib/projects-validation";
import crypto from "crypto";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; reviewId: string }> }
) {
  const { reviewId } = await params;

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(`reply:${ip}`)) {
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

    const reply = {
      id: crypto.randomUUID(),
      authorName: sanitized.authorName,
      content: sanitized.content,
      createdAt: new Date().toISOString(),
    };

    const db = getDb();
    await db
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
