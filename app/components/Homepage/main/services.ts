import {
  Smartphone,
  Code2,
  Settings,
  Cloud,
  Palette,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const services: Service[] = [
  {
    icon: Code2,
    iconColor: "text-emerald-500",
    title: "Custom Web Development Services",
    description:
      "Custom web development services for businesses, delivering scalable, high-performance web applications built with modern frameworks and optimized for exceptional user experience.",
    features: [
      "React, Next.js, Vue.js expertise",
      "Progressive Web Apps (PWA)",
      "Responsive & accessible design",
    ],
    link: "/services#web-development",
  },
  {
    icon: Smartphone,
    iconColor: "text-emerald-500",
    title: "Mobile App Development for iOS & Android",
    description:
      "End-to-end mobile app development services for iOS and Android, delivering secure, high-performance mobile applications for businesses and startups.",
    features: [
      "iOS & Android native apps",
      "React Native & Flutter",
      "App Store optimization",
    ],
    link: "/services#mobile-app-development",
  },
  {
    icon: Settings,
    iconColor: "text-emerald-500",
    title: "Custom Software Development for Enterprises",
    description:
      "Custom software development for enterprises, designed to automate workflows, modernize legacy systems, and solve complex business challenges through tailored solutions.",
    features: [
      "Business process automation",
      "Legacy system modernization",
      "API development & integration",
    ],
    link: "/services#custom-software",
  },
  {
    icon: Cloud,
    iconColor: "text-emerald-500",
    title: "Cloud & DevOps Solutions for Scalable Systems",
    description:
      "Cloud and DevOps services that help businesses build scalable, secure cloud infrastructure with automated CI/CD pipelines and reliable deployment workflows.",
    features: [
      "AWS, Azure, GCP expertise",
      "Container orchestration",
      "Infrastructure as Code (IaC)",
    ],
    link: "/services#devops-cloud",
  },
  {
    icon: Palette,
    iconColor: "text-emerald-500",
    title: "IT Consultancy for Digital Transformation",
    description:
      "Professional IT consultancy services guiding businesses through digital transformation, technology strategy and infrastructure optimization for sustainable growth.",
    features: [
      "Technology roadmap planning",
      "Architecture design reviews",
      "Performance optimization",
    ],
    link: "/services#it-consultancy",
  },
  {
    icon: Shield,
    iconColor: "text-emerald-500",
    title: "Enterprise Software Development Services",
    description:
      "Enterprise software development services delivering secure, scalable, and mission-critical systems tailored to complex organizational requirements.",
    features: [
      "AI/ML experimentation",
      "Blockchain & Web3 solutions",
      "IoT & edge computing",
    ],
    link: "/services#innovation-lab",
  },
];

export default services;
