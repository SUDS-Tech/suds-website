import Header from "../components/team/header";
import TeamSection from "../components/team/teamCards";
import TeamCircle from "../components/team/teamcircle";
import JoinUs from "../components/team/JoinUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind SUDS Technologies Ltd. Our experienced engineers, designers, and strategists build enterprise-grade software solutions.",
  keywords: [
    "SUDS Technologies team",
    "software development team",
    "tech leadership",
    "engineering team",
  ],
  openGraph: {
    title: "Our Team | SUDS Technologies Ltd",
    description:
      "Meet the innovators behind SUDS Technologies Ltd's enterprise-grade software solutions.",
    url: "https://www.suds-tech.com/team",
    siteName: "SUDS Technologies Ltd",
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
