import {
  Smartphone,
  Code2,
  Settings,
  Cloud,
  Palette,
  Shield,
} from "lucide-react";



export interface Service {
  icon: any;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
}


  const services: Service[] = [
    {
      icon: Code2,
      iconColor: "text-emerald-500",
      title: "Web Application Development",
      description: "High-performance, responsive web platforms built with modern frameworks and optimized for exceptional user experience.",
      features: [
        "React, Next.js, Vue.js expertise",
        "Progressive Web Apps (PWA)",
        "Responsive & accessible design",
      ],
    },
    {
      icon: Smartphone,
      iconColor: "text-emerald-500",
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile solutions that deliver seamless performance on iOS and Android devices.",
      features: [
        "iOS & Android native apps",
        "React Native & Flutter",
        "App Store optimization",
      ],
    },
    {
      icon: Settings,
      iconColor: "text-emerald-500",
      title: "Custom Software Solutions",
      description: "Tailored software engineered to automate workflows and solve specific enterprise challenges with precision.",
      features: [
        "Business process automation",
        "Legacy system modernization",
        "API development & integration",
      ],
    },
    {
      icon: Cloud,
      iconColor: "text-emerald-500",
      title: "DevOps & Cloud Engineering",
      description: "Streamlined CI/CD pipelines and secure cloud migrations to ensure maximum uptime and deployment efficiency.",
      features: [
        "AWS, Azure, GCP expertise",
        "Container orchestration",
        "Infrastructure as Code (IaC)",
      ],
    },
    {
      icon: Palette,
      iconColor: "text-emerald-500",
      title: "IT Consultancy",
      description: "Strategic advisory services on digital transformation, technology stacks, and infrastructure optimization.",
      features: [
        "Technology roadmap planning",
        "Architecture design reviews",
        "Performance optimization",
      ],
    },
    {
      icon: Shield,
      iconColor: "text-emerald-500",
      title: "Software Innovation Lab",
      description: "A dedicated R&D environment for prototyping, MVP development, and proof-of-concept testing for emerging technologies.",
      features: [
        "AI/ML experimentation",
        "Blockchain & Web3 solutions",
        "IoT & edge computing",
      ],
    },
  ];



export default services;
