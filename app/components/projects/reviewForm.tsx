"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import StarRating from "./starRating";
import GoogleReviewPrompt from "./googleReviewPrompt";

interface ReviewFormProps {
  projectId: string;
  onReviewSubmitted: () => void;
}

export default function ReviewForm({ projectId, onReviewSubmitted }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showGooglePrompt, setShowGooglePrompt] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    if (rating === 0) {
      setFieldErrors({ rating: "Please select a star rating" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/projects/${projectId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authorName, rating, content }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          const map: Record<string, string> = {};
          for (const e of data.errors) map[e.field] = e.message;
          setFieldErrors(map);
        } else {
          setError(data.error || "Something went wrong. Please try again.");
        }
        return;
      }

      setSubmittedName(authorName);
      setRating(0);
      setAuthorName("");
      setContent("");
      onReviewSubmitted();
      setShowGooglePrompt(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-6">Leave a Review</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Star picker */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your rating</label>
            <StarRating value={rating} onChange={setRating} size="lg" />
            {fieldErrors.rating && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.rating}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label htmlFor="review-name" className="block text-sm text-gray-400 mb-1">
              Your name
            </label>
            <input
              id="review-name"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="e.g. Jane Nakato"
              required
              className="w-full bg-[#0d1117] border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            {fieldErrors.authorName && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.authorName}</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label htmlFor="review-content" className="block text-sm text-gray-400 mb-1">
              Your review
            </label>
            <textarea
              id="review-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your experience working with SUDS Tech on this project..."
              required
              rows={4}
              className="w-full bg-[#0d1117] border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
            />
            {fieldErrors.content && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.content}</p>
            )}
            <p className="text-gray-600 text-xs mt-1 text-right">{content.length}/2000</p>
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Submit Review
              </>
            )}
          </button>
        </form>
      </div>

      <GoogleReviewPrompt
        open={showGooglePrompt}
        authorName={submittedName}
        onClose={() => setShowGooglePrompt(false)}
      />
    </>
  );
}
