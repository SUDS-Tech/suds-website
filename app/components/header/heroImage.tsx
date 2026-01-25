import Image from "next/image";
import image from "./images/codes.jpg";
function HeroImage() {
  return (
    <div>
      <div className="relative ">
        <Image
          src={image}
          alt="Team collaborating on a project"
          width={600}
          height={400}
          className="rounded-3xl object-cover h-100"
        />
      </div>
    </div>
  );
}

export default HeroImage;
