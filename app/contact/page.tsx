import ContactForm from "../components/contact/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SUDS Technologies Ltd. Contact us for custom software development, web and mobile app development, cloud engineering, and IT consultancy services.",
  keywords: [
    "contact SUDS Technologies",
    "software development inquiry",
    "IT consultancy contact",
    "hire software developers",
    "get a quote",
  ],
  openGraph: {
    title: "Contact Us | SUDS Technologies Ltd",
    description:
      "Reach out to SUDS Technologies Ltd for your software development and IT solutions needs.",
    url: "https://www.suds-tech.com/contact",
    siteName: "SUDS Technologies Ltd",
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
