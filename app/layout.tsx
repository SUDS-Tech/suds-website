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
    "SUDS Technologies Ltd is a leading software development and IT solutions company specializing in web, mobile, cloud, and digital transformation.",
  keywords: [
    "SUDS",
    "SUDS Technologies",
    "SUDS Technologies Ltd",
    "software company",
    "IT solutions",
    "web development",
    "technology company",
  ],
  metadataBase: new URL("https://www.suds-tech.com"),
  openGraph: {
    title: "SUDS Technologies Ltd",
    description:
      "Innovative software development & technology solutions by SUDS Technologies Ltd.",

    url: "https://www.suds-tech.com",
    siteName: "SUDS Technologies Ltd",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
