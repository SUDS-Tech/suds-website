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
  content: string;
  createdAt: string;
}

export interface Review {
  id: string;
  projectId: string;
  authorName: string;
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
