import type { Metadata } from "next";
import { getDb } from "@/lib/firebase-admin";
import { PROJECTS } from "@/app/components/projects/projects";
import { ProjectWithStats } from "@/app/components/projects/types";
import ProjectsHeader from "@/app/components/projects/header";
import ProjectGrid from "@/app/components/projects/projectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the client and company projects delivered by SUDS Tech Company Ltd — from mobile apps and ERPs to open-source tools and internal platforms.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | SUDS Tech Company Ltd",
    description:
      "See the software and technology projects SUDS Tech has built for clients and internally.",
    url: "https://www.suds-tech.com/projects",
  },
};

async function getProjectStats(): Promise<
  Record<string, { averageRating: number; reviewCount: number }>
> {
  try {
    const db = getDb();
    const snap = await db.collection("reviews").get();

    const byProject: Record<string, number[]> = {};
    for (const doc of snap.docs) {
      const { projectId, rating } = doc.data();
      if (!byProject[projectId]) byProject[projectId] = [];
      byProject[projectId].push(rating);
    }

    const stats: Record<string, { averageRating: number; reviewCount: number }> = {};
    for (const [id, ratings] of Object.entries(byProject)) {
      const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      stats[id] = {
        averageRating: Math.round(avg * 10) / 10,
        reviewCount: ratings.length,
      };
    }
    return stats;
  } catch {
    return {};
  }
}

export default async function ProjectsPage() {
  const stats = await getProjectStats();

  const withStats: ProjectWithStats[] = PROJECTS.map((p) => ({
    ...p,
    averageRating: stats[p.id]?.averageRating ?? 0,
    reviewCount: stats[p.id]?.reviewCount ?? 0,
  }));

  const clientProjects = withStats.filter((p) => p.category === "client");
  const companyProjects = withStats.filter((p) => p.category === "company");

  return (
    <main>
      <ProjectsHeader />
      <ProjectGrid clientProjects={clientProjects} companyProjects={companyProjects} />
    </main>
  );
}
