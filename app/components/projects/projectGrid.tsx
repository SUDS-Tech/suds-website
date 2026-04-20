"use client";

import { useState } from "react";
import ProjectCard from "./projectCard";
import { ProjectWithStats } from "./types";

interface ProjectGridProps {
  clientProjects: ProjectWithStats[];
  companyProjects: ProjectWithStats[];
}

const tabs = [
  { key: "client", label: "Client Projects" },
  { key: "company", label: "Company Projects" },
] as const;

export default function ProjectGrid({ clientProjects, companyProjects }: ProjectGridProps) {
  const [active, setActive] = useState<"client" | "company">("client");

  const projects = active === "client" ? clientProjects : companyProjects;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-[#161b22] border border-gray-800 rounded-lg w-fit mx-auto mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
              active === tab.key
                ? "bg-emerald-800 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                active === tab.key
                  ? "bg-emerald-700 text-emerald-100"
                  : "bg-[#0d1117] text-gray-500"
              }`}
            >
              {tab.key === "client" ? clientProjects.length : companyProjects.length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No {active} projects yet. Check back soon.
        </div>
      )}
    </section>
  );
}
