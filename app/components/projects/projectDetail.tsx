"use client";

import { useState, useCallback } from "react";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import StarRating from "./starRating";
import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";
import { Project, Review } from "./types";

interface ProjectDetailProps {
  project: Project;
  initialReviews: Review[];
  averageRating: number;
  reviewCount: number;
}

export default function ProjectDetail({
  project,
  initialReviews,
  averageRating: initialAvg,
  reviewCount: initialCount,
}: ProjectDetailProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [avg, setAvg] = useState(initialAvg);
  const [count, setCount] = useState(initialCount);

  const refetch = useCallback(async () => {
    try {
      const res = await fetch(`/api/projects/${project.id}/reviews`);
      const data = await res.json();
      if (data.success) {
        const fresh: Review[] = data.reviews;
        setReviews(fresh);
        if (fresh.length > 0) {
          const a = fresh.reduce((s: number, r: Review) => s + r.rating, 0) / fresh.length;
          setAvg(Math.round(a * 10) / 10);
          setCount(fresh.length);
        }
      }
    } catch {
      // silently ignore — stale data is acceptable
    }
  }, [project.id]);

  const statusColors = {
    completed: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    ongoing: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  };

  return (
    <main className="min-h-screen bg-[#0d1117] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Projects
        </Link>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}
            >
              {project.status === "completed" ? "Completed" : "Ongoing"}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#161b22] border border-gray-800 text-gray-400 capitalize">
              {project.category === "client" ? "Client Project" : "Company Project"}
            </span>
            <span className="text-gray-600 text-xs">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>

          {project.client && (
            <p className="text-gray-500 text-sm mb-4">Client: {project.client}</p>
          )}

          {/* Rating summary */}
          {count > 0 && (
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-white">{avg.toFixed(1)}</span>
              <StarRating value={Math.round(avg)} readonly size="md" />
              <span className="text-gray-400 text-sm">
                {count} {count === 1 ? "review" : "reviews"}
              </span>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 bg-[#161b22] border border-gray-800 text-gray-400 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 text-sm transition-colors"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: description + outcomes + tech */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <h2 className="text-lg font-semibold text-white mb-4">About this project</h2>
              <p className="text-gray-400 leading-relaxed">{project.fullDescription}</p>
            </motion.div>

            {project.outcomes && project.outcomes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="card"
              >
                <h2 className="text-lg font-semibold text-white mb-4">Outcomes</h2>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Reviews section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                Reviews{" "}
                {count > 0 && (
                  <span className="text-gray-500 font-normal text-base">({count})</span>
                )}
              </h2>
              <ReviewList reviews={reviews} projectId={project.id} />
            </motion.div>
          </div>

          {/* Right: tech stack + review form */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <h2 className="text-sm font-semibold text-white mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-emerald-500/5 border border-emerald-500/15 text-emerald-400 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ReviewForm projectId={project.id} onReviewSubmitted={refetch} />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
