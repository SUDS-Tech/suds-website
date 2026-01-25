import {
  BadgeDollarSign,
  Ambulance,
  Warehouse,
  ShoppingCart,
  Landmark,
} from "lucide-react";

const industries = [
  {
    icon: BadgeDollarSign,
    title: "FinTech",
    description:
      "High-security payment gateways and financial management systems",
    iconColor: "text-teal-500",
  },
  {
    icon: Ambulance,
    title: "Healthcare",
    description:
      "Data-compliant patient portals and health information systems",
    iconColor: "text-teal-500",
  },
  {
    icon: Warehouse,
    title: "Logistics & Supply Chain",
    description: "Real-time tracking and optimization software",
    iconColor: "text-green-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Scalable retail platforms with advanced user analytics",
    iconColor: "text-blue-500",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description: "Secure digital infrastructure and citizen-centric portals",
    iconColor: "text-blue-500",
  },
];

export default industries;
