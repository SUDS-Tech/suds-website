import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { ProjectWithStats } from "./types";

interface ProjectCardProps {
  project: ProjectWithStats;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    completed: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    ongoing: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  };

  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <div className="card h-full flex flex-col gap-4 cursor-pointer">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}
          >
            {project.status === "completed" ? "Completed" : "Ongoing"}
          </span>
          <span className="text-xs text-gray-500">{project.year}</span>
        </div>

        {/* Title & description */}
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          {project.client && (
            <p className="text-xs text-gray-500 mb-2">Client: {project.client}</p>
          )}
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-[#0d1117] border border-gray-800 text-gray-400 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-4">
          {project.reviewCount > 0 ? (
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-white font-semibold text-sm">
                {project.averageRating.toFixed(1)}
              </span>
              <span className="text-gray-500 text-xs">
                ({project.reviewCount} {project.reviewCount === 1 ? "review" : "reviews"})
              </span>
            </div>
          ) : (
            <span className="text-gray-600 text-xs">No reviews yet</span>
          )}

          <span className="flex items-center gap-1 text-emerald-500 text-sm font-medium group-hover:gap-2 transition-all">
            View <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
