export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "client" | "company";
  tags: string[];
  status: "completed" | "ongoing";
  year: number;
  client?: string;
  techStack: string[];
  outcomes?: string[];
  link?: string;
}

export interface Reply {
  id: string;
  authorName: string;
  authorPhoto?: string | null;
  verified?: "team" | "client" | null;
  content: string;
  createdAt: string;
}

export interface Review {
  id: string;
  projectId: string;
  authorName: string;
  authorEmail: string;
  authorPhoto?: string | null;
  verified?: "team" | "client" | null;
  rating: number;
  content: string;
  likes: number;
  replies: Reply[];
  createdAt: string;
}

export interface ProjectWithStats extends Project {
  averageRating: number;
  reviewCount: number;
}
