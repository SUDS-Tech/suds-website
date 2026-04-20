"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-7 h-7",
};

export default function StarRating({
  value,
  onChange,
  readonly = false,
  size = "md",
}: StarRatingProps) {
  const iconClass = sizes[size];

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          className={`transition-colors duration-150 ${
            readonly ? "cursor-default" : "cursor-pointer hover:scale-110"
          }`}
          aria-label={readonly ? `${value} out of 5 stars` : `Rate ${star} out of 5`}
        >
          <Star
            className={`${iconClass} transition-colors duration-150 ${
              star <= value
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-gray-600"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
