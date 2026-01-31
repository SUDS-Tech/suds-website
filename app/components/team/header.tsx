import Image from "next/image";
import React from "react";
import image from "@/app/components/team/images/team.jpg";

function Header() {
  return (
    <div className="bg-linear-to-b from-gray-800 to-gray-950 pt-20">
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <div className="w-full px-2">
          <p className="text-sm sm:text-xl text-white ">
            Behind every great product is a dedicated team driven by vision,
            innovation, and execution. At Suds Technologies Ltd, our leadership
            combines strategic thinking with deep technical expertise to build
            scalable, impactful solutions.
          </p>
          <p className="text-sm sm:text-xl text-white ">
            We are a lean, focused team today intentionally small, highly
            skilled, and committed to delivering real value for our clients and
            users.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={image}
            alt="team"
            width={500}
            height={500}
            className="rounded-3xl w-full px-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
