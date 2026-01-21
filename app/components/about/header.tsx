import Image from "next/image";
import React from "react";
import image from "./images/girl.jpg";
function Header() {
  return (
    <div className="bg-linear-to-r from-gray-700 to-gray-900">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">
        <div className="w-96">
          <p className="text-white">
            At SUDS Technologies Ltd, we believe that software should be more
            than just functional—it should be a resilient asset. Our name
            reflects our foundational engineering philosophy:{" "}
            <span className="text-3xl text-green-300">
              Secure, Unique, Durable Systems
            </span>
            . As an innovation-driven lab, we go beyond traditional outsourcing.
            We act as a strategic technology partner, helping our clients
            navigate the complexities of digital transformation through rigorous
            R&D, bespoke software engineering, and a relentless focus on
            future-ready architectures.
          </p>
        </div>
        <div>
          <Image
            src={image}
            alt="girl smiling"
            width={500}
            height={400}
            className="rounded-3xl "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
