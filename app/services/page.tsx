import React from "react";
import Header from "../components/services/header";
import Services from "../components/services/serviceCards";
import LetsWork from "../components/services/letsWork";

import type { Metadata } from "next";
import Webapp from "../components/services/serviceinfo/web";
import MobileApp from "../components/services/serviceinfo/mobile";
import ITConsultancy from "../components/services/serviceinfo/ITConsultancy";
import Devops from "../components/services/serviceinfo/Devops";
import SoftwareInnovation from "../components/services/serviceinfo/SoftwareInnovation";
import CustomSoftware from "../components/services/serviceinfo/customSoftware";

export const metadata: Metadata = {
  title: "Software Development Services | SUDS Technologies Ltd",
  description:
    "SUDS Technologies Ltd provides custom software development services including web applications, mobile apps, cloud engineering, DevOps, and IT consultancy for businesses and enterprises.",
  keywords: [
    "software development services",
    "web application development",
    "mobile app development",
    "custom software development",
    "DevOps services",
    "cloud engineering",
    "IT consultancy services",
  ],
  openGraph: {
    title: "Software Development Services | SUDS Technologies Ltd",
    description:
      "Custom web, mobile, cloud, and enterprise software development services for businesses and organizations.",
    url: "https://www.suds-tech.com/services",
    siteName: "SUDS Technologies Ltd",
    type: "website",
  },
};

function ServicesPage() {
  return (
    <main>
      <Header />
      {/* <Services /> */}
      <Webapp />
      <MobileApp />
      <ITConsultancy />
      <Devops />
      <SoftwareInnovation />
      <CustomSoftware />
      <LetsWork />
    </main>
  );
}

export default ServicesPage;
