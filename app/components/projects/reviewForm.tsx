"use client";

import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Send, Loader2 } from "lucide-react";
import StarRating from "./starRating";
import GoogleReviewPrompt from "./googleReviewPrompt";

interface ReviewFormProps {
  projectId: string;
  onReviewSubmitted: () => void;
}

export default function ReviewForm({ projectId, onReviewSubmitted }: ReviewFormProps) {
  const { data: session, status } = useSession();

  const [rating, setRating] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showGooglePrompt, setShowGooglePrompt] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  useEffect(() => {
    if (session?.user?.name && !authorName) {
      setAuthorName(session.user.name);
    }
  }, [session?.user?.name]);

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
      setAuthorName(session?.user?.name ?? "");
      setContent("");
      onReviewSubmitted();
      setShowGooglePrompt(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (status === "loading") {
    return (
      <div className="card flex items-center justify-center py-10">
        <Loader2 className="w-5 h-5 animate-spin text-emerald-500" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="card text-center">
        <h3 className="text-lg font-semibold text-white mb-2">Leave a Review</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Sign in with Google to submit a verified review. Your name and photo
          from Google will appear on your review.
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: window.location.href })}
          className="inline-flex items-center justify-center gap-3 w-full px-4 py-2.5 bg-white hover:bg-gray-100 text-gray-800 font-medium text-sm rounded-lg transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Leave a Review</h3>

        {/* Signed-in user identity */}
        <div className="flex items-center justify-between mb-5 p-3 bg-[#0d1117] rounded-lg border border-gray-800">
          <div className="flex items-center gap-2.5">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt=""
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-semibold text-xs">
                {session?.user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-white text-sm font-medium leading-tight">{session?.user?.name}</p>
              <p className="text-gray-500 text-xs">{session?.user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            Switch
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Star picker */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your rating</label>
            <StarRating value={rating} onChange={setRating} size="lg" />
            {fieldErrors.rating && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.rating}</p>
            )}
          </div>

          {/* Display name */}
          <div>
            <label htmlFor="review-name" className="block text-sm text-gray-400 mb-1">
              Display name
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
