import {
  Smartphone,
  Settings,
  Cloud,
  Sparkles,
  Layers,
  Search,
  PenTool,
  Shield,
  Globe,
  HandHelping,
  Code,
  Rocket,
  HeadphonesIcon,
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
    iconColor: "text-emerald-500",
    title: "Web Application Development Services",
    description:
      "We design and build high-performance web applications for businesses that require secure, scalable and modern digital platforms.",
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
    iconColor: "text-emerald-500",
    title: "Mobile Application Development Services",
    description:
      "We create reliable mobile applications for businesses and startups, delivering seamless performance across iOS and Android devices.",
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
    iconColor: "text-emerald-500",
    title: "Custom Software Development Solutions",
    description:
      "Every business is unique — we engineer custom software solutions for enterprises designed around specific workflows, scale and long-term goals.",
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
    iconColor: "text-emerald-500",
    title: "IT Consultancy & Digital Strategy",
    description:
      "We act as a strategic technology partner for organizations, helping leadership teams make confident, future-proof digital and infrastructure decisions.",
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
    iconColor: "text-emerald-500",
    title: "DevOps & Cloud Engineering Services",
    description:
      "We streamline software delivery and cloud infrastructure for businesses through modern DevOps practices that improve reliability and deployment speed.",
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
    iconColor: "text-emerald-500",
    title: "Software Innovation Lab",
    description:
      "Our Innovation Lab helps startups and enterprises transform ideas into production-ready software through rapid prototyping and experimentation.",
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

export const philosophy = [
  {
    icon: Shield,
    title: "Secure",
    description: "Security embedded at every layer of development",
  },
  {
    icon: Sparkles,
    title: "Unique",
    description: "Solutions designed for your specific challenges",
  },
  {
    icon: Layers,
    title: "Durable",
    description: "Architectures built to scale and last",
  },
];

export const processSteps = [
  {
    icon: Search,
    title: "Discovery & Requirements Analysis",
    description:
      "Deep dive into your business needs and technical requirements",
  },
  {
    icon: PenTool,
    title: "Secure Architecture Design",
    description: "Creating robust blueprints with security as the foundation",
  },
  {
    icon: Code,
    title: "Agile Development & Testing",
    description:
      "Iterative sprints with continuous integration and quality assurance",
  },
  {
    icon: Rocket,
    title: "Deployment & Optimization",
    description: "Seamless launch with performance tuning and monitoring",
  },
  {
    icon: HeadphonesIcon,
    title: "Continuous Support & Improvement",
    description: "Ongoing maintenance and feature enhancements",
  },
];

export default services;
