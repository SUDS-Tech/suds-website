import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; reviewId: string }> }
) {
  const { reviewId } = await params;

  try {
    const db = getDb();
    const ref = db.collection("reviews").doc(reviewId);
    await ref.update({ likes: FieldValue.increment(1) });
    const updated = await ref.get();
    return NextResponse.json({ success: true, likes: updated.data()?.likes ?? 0 });
  } catch (err) {
    console.error("Failed to like review:", err);
    return NextResponse.json(
      { success: false, error: "Failed to like review" },
      { status: 500 }
    );
  }
}
