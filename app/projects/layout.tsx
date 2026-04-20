import SessionWrapper from "./session-wrapper";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <SessionWrapper>{children}</SessionWrapper>;
}
