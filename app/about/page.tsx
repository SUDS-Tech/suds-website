import React from "react";
import Header from "../components/about/header";
import Industries from "../components/about/industries";
import Overview from "../components/about/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services | SUDS Technologies Ltd",
  description:
    "SUDS Technologies Ltd provides custom software development services including web applications, mobile apps, cloud engineering, DevOps, and IT consultancy for businesses and enterprises.",
  openGraph: {
    title: "Software Development About | SUDS Technologies Ltd",
    description:
      "Custom web, mobile, cloud, and enterprise software development services for businesses and organizations.",
    url: "https://www.suds-tech.com/about",
    siteName: "SUDS Technologies Ltd",
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
