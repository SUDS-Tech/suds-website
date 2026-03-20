import { StaticImageData } from "next/image";
import image1 from "@/app/components/team/images/kasim_512x512_px.png";
import image2 from "@/app/components/team/images/isaac_512x512_px.png";

interface Team {
  id: number;
  name: string;
  image: StaticImageData;
  title: string;
  description: string;
  alt: string;
}

const team: Team[] = [
  {
    id: 1,
    name: "Ssekindi Kasim",
    image: image1,
    alt: "kasim profile",
    title: "Chief Technology Officer (CTO)",
    description: "Technical Lead & Architect",
  },
  {
    id: 2,
    name: "Matovu Isaac",
    image: image2,
    alt: "isaac profile",
    title: "Chief Executive Officer (CEO)",
    description: "Founder & Vision Lead",
  },
];

export default team;
