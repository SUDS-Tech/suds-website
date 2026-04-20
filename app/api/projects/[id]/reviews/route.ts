import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/firebase-admin";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateReview } from "@/lib/projects-validation";
import { getProjectById } from "@/app/components/projects/projects";

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

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(`review:${ip}`)) {
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
    const docRef = await db.collection("reviews").add({
      projectId: id,
      authorName: sanitized.authorName,
      rating: sanitized.rating,
      content: sanitized.content,
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, reviewId: docRef.id });
  } catch (err) {
    console.error("Failed to submit review:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
