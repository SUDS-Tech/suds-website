import Header from "../components/team/header";
import TeamSection from "../components/team/teamCards";
import TeamCircle from "../components/team/teamcircle";
import JoinUs from "../components/team/JoinUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  alternates: {
    canonical: "/team",
  },
  description:
    "Meet the team behind SUDS Tech Company Ltd. Our experienced engineers, designers, and strategists build enterprise-grade software solutions.",
  keywords: [
    "SUDS Technologies team",
      "SUDS Tech Company team",
    "software development team",
    "tech leadership",
    "engineering team",
  ],
  openGraph: {
    title: "Our Team | SUDS Tech Company Ltd",
    description:
      "Meet the innovators behind SUDS Tech Company Ltd's enterprise-grade software solutions.",
    url: "https://www.suds-tech.com/team",
    siteName: "SUDS Tech Company Ltd",
    type: "website",
  },
};

export default function Team() {
  return (
    <main>
      <Header />
      <TeamSection />
      <TeamCircle />
      <JoinUs />
    </main>
  );
}
