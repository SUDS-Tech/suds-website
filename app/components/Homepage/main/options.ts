import { Award, Lightbulb, Layers, Rocket, Shield, Target, TrendingUp, Users } from "lucide-react";

export interface Option {
  icon: any;
  iconColor: string;
  title: string;
  description: string;
}

const options: Option[] = [
  {
    icon: Shield,
    iconColor: "text-emerald-500",
    title: "Security-First Approach",
    description: "We integrate robust security protocols into every layer of the development lifecycle, ensuring your data and systems are protected against modern threats.",
  },
  {
    icon: Lightbulb,
    iconColor: "text-emerald-500",
    title: "Innovation-Led Growth",
    description: "Our dedicated lab environment allows us to experiment with cutting-edge technologies like AI, Blockchain, and IoT before they become mainstream.",
  },
  {
    icon: Layers,
    iconColor: "text-emerald-500",
    title: "Durable Systems",
    description: "We build architectures designed for long-term scalability and minimal technical debt, ensuring your systems stand the test of time.",
  },
  {
    icon: Award,
    iconColor: "text-emerald-500",
    title: "Engineering Excellence",
    description: "We don't just write code; we architect systems. Every product is built to last with our 'Secure, Unique, Durable' framework.",
  },
  {
    icon: Users,
    iconColor: "text-emerald-500",
    title: "Client-Centric",
    description: "Your goals define our roadmap. We maintain transparency and high ethical standards in every partnership to ensure your success.",
  },
  {
    icon: Rocket,
    iconColor: "text-emerald-500",
    title: "Agile & Transparent",
    description: "We utilize agile methodologies to ensure rapid delivery, frequent communication, and iterative improvements throughout development.",
  },
  {
    icon: Target,
    iconColor: "text-emerald-500",
    title: "Future-Ready Scalability",
    description: "We build with the 'Day 1,000' mindset, ensuring systems can handle exponential growth in data, users, and complexity.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-emerald-500",
    title: "Proven Track Record",
    description: "With 50+ successful projects and 99% client satisfaction, we've established ourselves as Uganda's leading innovation lab.",
  },
];

export default options;
