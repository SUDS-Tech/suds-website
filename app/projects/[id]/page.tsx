import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDb } from "@/lib/firebase-admin";
import { getProjectById, PROJECTS } from "@/app/components/projects/projects";
import { Review } from "@/app/components/projects/types";
import ProjectDetail from "@/app/components/projects/projectDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      title: `${project.title} | SUDS Tech Company Ltd`,
      description: project.shortDescription,
      url: `https://www.suds-tech.com/projects/${id}`,
    },
  };
}

async function getReviews(projectId: string): Promise<Review[]> {
  try {
    const db = getDb();
    const snap = await db
      .collection("reviews")
      .where("projectId", "==", projectId)
      .get();

    return snap.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as Review))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch {
    return [];
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const reviews = await getReviews(id);

  const averageRating =
    reviews.length > 0
      ? Math.round(
          (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10
        ) / 10
      : 0;

  return (
    <ProjectDetail
      project={project}
      initialReviews={reviews}
      averageRating={averageRating}
      reviewCount={reviews.length}
    />
  );
}
