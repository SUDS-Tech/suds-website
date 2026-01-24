import {
  Smartphone,
  Settings,
  Cloud,
  Palette,
  Shield,
  Globe,
  HandHelping,
} from "lucide-react";

export interface Service {
  icon: any;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
  descriptionTitle: string;
  footertitle: string;
  footerdescription?: string;
}

const services: Service[] = [
  {
    icon: Globe,
    iconColor: "text-blue-400",
    title: "Web Application Development",
    description:
      "We design and build high-performance web applications that are fast, secure, and scalable.",
    descriptionTitle: "What we deliver:",
    features: [
      "Custom web platforms and dashboards",
      "Enterprise-grade backend systems",
      "Responsive, modern user interfaces",
      "API-driven and cloud-ready architectures",
    ],
    footertitle: "Technologies:",
    footerdescription:
      "Next.js, React, TypeScript, Go, Rust, Python, PostgreSQL, Cloud platforms",
  },
  {
    icon: Smartphone,
    iconColor: "text-purple-400",
    title: "Mobile Application Development",
    description:
      "We create reliable mobile applications that deliver seamless performance across devices.",
    descriptionTitle: "Our capabilities:",
    features: [
      "Android,IOS and cross-platform applications",
      "Secure backend integrations",
      "Offline-first and performance-optimized apps",
      "Scalable mobile architectures",
    ],
    footertitle: "Use cases:",
    footerdescription:
      "Business apps, customer platforms, internal tools, MVPs",
  },
  {
    icon: Settings,
    iconColor: "text-emerald-400",
    title: "Custom Software Solutions",
    description:
      "Every business is unique — we engineer tailor-made software designed specifically for your workflows, scale, and long-term goals.",
    descriptionTitle: "Ideal for:",
    features: [
      "Process automation",
      "Enterprise systems",
      "Internal tools and platforms",
      "Complex domain-specific software",
    ],
    footertitle:
      "We focus on durability, minimizing technical debt while enabling future growth.",
  },
  {
    icon: HandHelping,
    iconColor: "text-cyan-400",
    title: "IT Consultancy & Digital Strategy",
    description:
      "We act as a strategic technology partner, helping organizations make confident, future-proof decisions.",
    descriptionTitle: "Consulting services include:",
    features: [
      "System architecture design",
      "Technology stack selection",
      "Digital transformation strategy",
      "Security and performance audits",
    ],
    footertitle:
      "Our guidance is practical, vendor-neutral, and engineering-driven.",
  },
  {
    icon: Cloud,
    iconColor: "text-pink-400",
    title: "DevOps & Cloud Engineering",
    description:
      "We streamline software delivery and infrastructure through modern DevOps practices.",
    descriptionTitle: "What we offer:",
    features: [
      "CI/CD pipeline setup and optimization",
      "Secure cloud deployments",
      "Infrastructure automation",
      "Monitoring,scaling and reliability engineering",
    ],
    footertitle:
      "The result: faster releases, higher uptime, and lower operational risk.",
  },
  {
    icon: Shield,
    iconColor: "text-red-400",
    title: "Software Innovation Lab",
    description:
      "Our Innovation Lab is where ideas evolve into production-ready solutions.",
    descriptionTitle: "Lab services:",
    features: [
      "MVP and prototype development",
      "Proof-of-concept systems",
      "AI,automation,data systems",
      "Product experimentation and validation",
    ],
    footertitle:
      "We help startups and enterprises move from concept to execution with speed and precision.",
  },
];

export default services;
