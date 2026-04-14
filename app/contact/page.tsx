import ContactForm from "../components/contact/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "/contact",
  },
  description:
    "Get in touch with SUDS Tech Company Ltd. Contact us for custom software development, web and mobile app development, cloud engineering, and IT consultancy services.",
  keywords: [
    "contact SUDS Tech Company Ltd",
    "software development inquiry",
    "IT consultancy contact",
    "hire software developers",
    "get a quote",
  ],
  openGraph: {
    title: "Contact Us | SUDS Tech Company Ltd",
    description:
      "Reach out to SUDS Tech Company Ltd for your software development and IT solutions needs.",
    url: "https://www.suds-tech.com/contact",
    siteName: "SUDS Tech Company Ltd",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
