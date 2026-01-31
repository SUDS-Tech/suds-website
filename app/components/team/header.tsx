import Image from "next/image";
import React from "react";
import image from "@/app/components/team/images/team.jpg";

function Header() {
  return (
    <div className="bg-linear-to-b from-gray-800 to-gray-950 pt-20">
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <div className="w-125 px-2">
          <p className="text-xl text-white ">
            Behind every great product is a dedicated team driven by vision,
            innovation, and execution. At Suds Technologies Ltd, our leadership
            combines strategic thinking with deep technical expertise to build
            scalable, impactful solutions.
          </p>
          <p className="text-2xl text-white ">
            We are a lean, focused team today intentionally small, highly
            skilled, and committed to delivering real value for our clients and
            users.
          </p>
        </div>
        <div className="w-150 h-100 flex justify-center items-center">
          <Image
            src={image}
            alt="team"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
