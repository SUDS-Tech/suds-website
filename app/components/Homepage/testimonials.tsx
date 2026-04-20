

import { unstable_cache } from "next/cache";
import { getDb } from "@/lib/firebase-admin";
import { getProjectById } from "@/app/components/projects/projects";
import { Review } from "@/app/components/projects/types";
import TestimonialMarquee, { TestimonialItem } from "./testimonial-marquee";
import { Quote } from "lucide-react";

const getTopReviews = unstable_cache(
  async (): Promise<TestimonialItem[]> => {
    try {
      const snap = await getDb()
        .collection("reviews")
        .where("rating", ">=", 4)
        .get();

      return snap.docs
        .map((doc) => ({ id: doc.id, ...doc.data() } as Review))
        .filter((r) => r.verified !== "team" && (r.content?.length ?? 0) >= 30)
        .sort((a, b) => b.rating - a.rating || (b.likes ?? 0) - (a.likes ?? 0))
        .slice(0, 16)
        .map((r) => ({
          id: r.id,
          authorName: r.authorName,
          authorPhoto: r.authorPhoto ?? null,
          verified: r.verified === "client" ? "client" : null,
          rating: r.rating,
          content: r.content,
          projectTitle: getProjectById(r.projectId)?.title ?? "SUDS Tech Project",
        }));
    } catch {
      return [];
    }
  },
  ["homepage-testimonials"],
  { revalidate: 3600 }
);

export default async function Testimonials() {
  const reviews = await getTopReviews();

  if (reviews.length < 2) return null;

  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid);

  // Pad the shorter row so both rows have equal length for smooth animation
  while (row2.length < row1.length) row2.push(row1[row2.length % row1.length]);

  return (
    <section className="relative w-full bg-[#0d1117] py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-20 lg:w-32 bg-linear-to-r from-[#0d1117] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-20 lg:w-32 bg-linear-to-l from-[#0d1117] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
          <Quote className="w-4 h-4 text-emerald-500" />
          <span className="text-emerald-500 text-sm font-medium tracking-wider">
            WHAT CLIENTS SAY
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Real Reviews
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Verified by Google. Written by the people who worked with us.
        </p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-12 h-1 bg-linear-to-r from-transparent to-emerald-500 rounded-full" />
          <div className="w-24 h-1 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-full" />
          <div className="w-12 h-1 bg-linear-to-r from-emerald-600 to-transparent rounded-full" />
        </div>
      </div>

      <TestimonialMarquee row1={row1} row2={row2} />
    </section>
  );
}
