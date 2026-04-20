"use client";

import { BadgeCheck, Star } from "lucide-react";

export interface TestimonialItem {
  id: string;
  authorName: string;
  authorPhoto?: string | null;
  verified?: "client" | null;
  rating: number;
  content: string;
  projectTitle: string;
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const excerpt =
    item.content.length > 120 ? item.content.slice(0, 117) + "…" : item.content;

  return (
    <div className="w-80 shrink-0 card mx-3 flex flex-col gap-3 cursor-default select-none">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < item.rating ? "fill-amber-400 text-amber-400" : "text-gray-700"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1">"{excerpt}"</p>

      {/* Author */}
      <div className="flex items-center gap-2.5 pt-2 border-t border-gray-800">
        {item.authorPhoto ? (
          <img
            src={item.authorPhoto}
            alt=""
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-semibold text-xs shrink-0">
            {item.authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-white text-xs font-medium truncate">
              {item.authorName}
            </span>
            {item.verified === "client" && (
              <span title="Verified Client">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </span>
            )}
          </div>
          <p className="text-gray-600 text-xs truncate">{item.projectTitle}</p>
        </div>
      </div>
    </div>
  );
}

interface Props {
  row1: TestimonialItem[];
  row2: TestimonialItem[];
}

export default function TestimonialMarquee({ row1, row2 }: Props) {
  return (
    <div className="marquee-track overflow-hidden space-y-4 py-2">
      {/* Row 1 — scrolls left */}
      <div className="flex animate-marquee-left w-max">
        {[...row1, ...row1].map((item, i) => (
          <TestimonialCard key={`r1-${item.id}-${i}`} item={item} />
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex animate-marquee-right w-max">
        {[...row2, ...row2].map((item, i) => (
          <TestimonialCard key={`r2-${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
