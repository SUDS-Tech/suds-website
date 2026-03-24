import Header from "../components/about/header";
import Industries from "../components/about/industries";
import Overview from "../components/about/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SUDS Tech Company Ltd",
  description:
    "Learn about SUDS Tech Company Ltd — an innovation-driven software lab building secure, unique, and durable digital solutions for businesses and enterprises.",
  openGraph: {
    title: "About Us | SUDS Tech Company Ltd",
    description:
      "Learn about SUDS Tech Company Ltd — building secure, unique, and durable systems through rigorous R&D and bespoke software engineering.",
    url: "https://www.suds-tech.com/about",
    siteName: "SUDS Tech Company Ltd",
    type: "website",
  },
};

function About() {
  return (
    <main>
      <Header />
      <Industries />
      <Overview />
    </main>
  );
}

export default About;
