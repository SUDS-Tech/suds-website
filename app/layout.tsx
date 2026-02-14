/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/app/components/common/navBar";
import Footer from "./components/common/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SUDS Technologies Ltd | Software & IT Solutions Company",
    template: "%s | SUDS Technologies Ltd",
  },
  description:
    "SUDS Technologies Ltd is a leading software development and IT solutions company in Kampala, Uganda — specializing in web, mobile, cloud, and digital transformation.",
  keywords: [
    "SUDS",
    "SUDS Technologies",
    "SUDS Technologies Ltd",
    "software company Uganda",
    "IT solutions Kampala",
    "web development",
    "mobile app development",
    "cloud engineering",
    "custom software development",
    "technology company",
  ],
  metadataBase: new URL("https://www.suds-tech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SUDS Technologies Ltd | Software & IT Solutions",
    description:
      "Innovative software development & technology solutions — web, mobile, cloud, and enterprise systems by SUDS Technologies Ltd.",
    url: "https://www.suds-tech.com",
    siteName: "SUDS Technologies Ltd",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUDS Technologies Ltd",
    description:
      "Secure, Unique, Durable Systems — custom software development & IT solutions in Kampala, Uganda.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SUDS Technologies Ltd",
  url: "https://www.suds-tech.com",
  logo: "https://www.suds-tech.com/logo.png",
  description:
    "Innovation-driven software lab building secure, unique, and durable digital solutions for businesses and enterprises.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+256-757-212-246",
      contactType: "sales",
      email: "info@suds-tech.com",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+256-701-521-269",
      contactType: "sales",
      email: "info@suds-tech.com",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/17ZCFenDMb/",
    "https://x.com/sudstech26",
    "https://www.linkedin.com/company/suds-technologies-ltd/",
    "https://www.instagram.com/sudstechnologies",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
