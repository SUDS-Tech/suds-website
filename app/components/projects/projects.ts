

import { Project } from "./types";

export const PROJECTS: Project[] = [
  // ──────────────── CLIENT PROJECTS ────────────────
  {
    id: "gen2040-web-app",
    title: "Generation 2040 Website",
    shortDescription:
      "An Official website for Generation 2040, a Non Government Organisation in Uganda.",
    fullDescription:
      "An Official website for Generation 2040, A Non-Governmental Organization in Uganda working through psycho-social services, economic empowerment, and food security programs in Buikwe District. The website serves as a platform to showcase the organization's mission, projects, and impact in empowering communities and promoting sustainable development. It features a modern design, intuitive navigation, and responsive layout to provide an engaging user experience across devices.",
    category: "client",
    client: "Generation 2040",
    tags: ["Web", "NGO", "Agriculture"],
    status: "completed",
    year: 2025,
    techStack: ["Next.js", "Node.js", "Firebase", "TypeScript"],
    outcomes: [
      "Mobile responsive design with 99% uptime",
      "Integrated CMS for easy content updates",
    ],
    link: "https://generation2040.org",
  },

  // ──────────────── COMPANY PROJECTS ────────────────
  {
    id: "suds-tech-website",
    title: "SUDS Tech Company Website",
    shortDescription:
      "The official company website for SUDS Tech Company Ltd — showcasing services, projects, and client work.",
    fullDescription:
      "The official digital presence of SUDS Tech Company Ltd, built entirely in-house. The website serves as a showcase for our services, project portfolio, and company story. It features a verified review system powered by Google OAuth, an animated testimonials section, a newsletter with verified client badges, and a contact system all backed by Firebase and delivered via a high-performance Next.js App Router architecture with ISR and SWR-style client revalidation.",
    category: "company",
    tags: ["Web", "Next.js", "Firebase", "Auth"],
    status: "ongoing",
    year: 2026,
    techStack: [
      "Next.js",
      "TypeScript",
      "Firebase",
    ],
    outcomes: [
      "Google OAuth verified review system with trust badges",
      "Dual-row infinite marquee testimonials on homepage",
      "Newsletter subscription with verified client perks",
      "ISR + SWR data strategy for always-fresh content",
    ],
    link: "https://suds-tech.com",
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getProjectsByCategory(
  category: "client" | "company"
): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}

export function totalProjects(): number {
  return PROJECTS.length;
}
