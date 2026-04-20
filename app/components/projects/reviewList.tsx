"use client";

import { useState, useEffect } from "react";
import { Heart, MessageSquare, Send, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import StarRating from "./starRating";
import { Review, Reply } from "./types";

const LIKED_KEY = "suds_liked_reviews";

function getLiked(): Set<string> {
  try {
    const raw = localStorage.getItem(LIKED_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function saveLiked(set: Set<string>) {
  localStorage.setItem(LIKED_KEY, JSON.stringify([...set]));
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

interface ReplyFormProps {
  reviewId: string;
  projectId: string;
  onReplied: (reply: Reply) => void;
}

function ReplyForm({ reviewId, projectId, onReplied }: ReplyFormProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(
        `/api/projects/${projectId}/reviews/${reviewId}/replies`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ authorName: name, content }),
        }
      );
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Failed to submit reply.");
        return;
      }
      onReplied(data.reply);
      setName("");
      setContent("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-3 space-y-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
        className="w-full bg-[#0d1117] border border-gray-800 rounded-lg px-3 py-2 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
      />
      <div className="flex gap-2">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a reply…"
          required
          className="flex-1 bg-[#0d1117] border border-gray-800 rounded-lg px-3 py-2 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-3 py-2 bg-emerald-800 hover:bg-emerald-600 text-white rounded-lg transition-colors disabled:opacity-60"
          aria-label="Send reply"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
      </div>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </form>
  );
}

interface ReviewCardProps {
  review: Review;
  projectId: string;
}

function ReviewCard({ review, projectId }: ReviewCardProps) {
  const [likes, setLikes] = useState(review.likes);

  useEffect(() => {
    setLikes(review.likes);
  }, [review.likes]);
  const [liked, setLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState<Reply[]>(review.replies ?? []);

  useEffect(() => {
    setLiked(getLiked().has(review.id));
  }, [review.id]);

  useEffect(() => {
    setReplies(review.replies ?? []);
  }, [review.replies]);

  async function handleLike() {
    if (liked || likeLoading) return;
    setLikeLoading(true);
    try {
      const res = await fetch(
        `/api/projects/${projectId}/reviews/${review.id}/like`,
        { method: "POST" }
      );
      const data = await res.json();
      if (data.success) {
        setLikes(data.likes);
        setLiked(true);
        const set = getLiked();
        set.add(review.id);
        saveLiked(set);
      }
    } finally {
      setLikeLoading(false);
    }
  }

  function handleReplied(reply: Reply) {
    setReplies((prev) => [...prev, reply]);
    setShowReplyForm(false);
    setShowReplies(true);
  }

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-semibold text-sm">
            {review.authorName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-white font-medium text-sm">{review.authorName}</p>
            <p className="text-gray-500 text-xs">{timeAgo(review.createdAt)}</p>
          </div>
        </div>
        <StarRating value={review.rating} readonly size="sm" />
      </div>

      {/* Content */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{review.content}</p>

      {/* Actions */}
      <div className="flex items-center gap-4 border-t border-gray-800 pt-3">
        <button
          onClick={handleLike}
          disabled={liked || likeLoading}
          className={`flex items-center gap-1.5 text-xs transition-colors ${
            liked
              ? "text-red-400 cursor-default"
              : "text-gray-500 hover:text-red-400"
          }`}
          aria-label="Like this review"
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-red-400" : ""}`} />
          {likes > 0 && <span>{likes}</span>}
          <span>{liked ? "Liked" : "Like"}</span>
        </button>

        <button
          onClick={() => setShowReplyForm((v) => !v)}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors"
          aria-label="Reply to this review"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Reply</span>
        </button>

        {replies.length > 0 && (
          <button
            onClick={() => setShowReplies((v) => !v)}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors ml-auto"
          >
            {showReplies ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {replies.length} {replies.length === 1 ? "reply" : "replies"}
          </button>
        )}
      </div>

      {/* Reply form */}
      {showReplyForm && (
        <ReplyForm
          reviewId={review.id}
          projectId={projectId}
          onReplied={handleReplied}
        />
      )}

      {/* Replies list */}
      {showReplies && replies.length > 0 && (
        <div className="mt-4 space-y-3 pl-4 border-l border-gray-800">
          {replies.map((reply) => (
            <div key={reply.id}>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white text-xs font-medium">{reply.authorName}</span>
                <span className="text-gray-600 text-xs">{timeAgo(reply.createdAt)}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface ReviewListProps {
  reviews: Review[];
  projectId: string;
}

export default function ReviewList({ reviews, projectId }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 text-sm">
        No reviews yet. Be the first to share your experience!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} projectId={projectId} />
      ))}
    </div>
  );
}
