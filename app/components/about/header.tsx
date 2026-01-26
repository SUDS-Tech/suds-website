"use client";

import Image from "next/image";
import image from "./images/girl.jpg";
import { motion } from "motion/react";
function Header() {
  return (
    <div className="bg-linear-to-r from-gray-800 to-gray-950 pt-14">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-96"
        >
          <p className=" text-white">
            At SUDS Technologies Ltd, we believe that software should be more
            than just functional.it should be a resilient asset. Our name
            reflects our foundational engineering philosophy:{" "}
            <span className=" border-b border-white text-green-600 text-shadow-green-400/50">
              Secure, Unique, Durable Systems
            </span>
            . As an innovation-driven lab, we go beyond traditional outsourcing.
            We act as a strategic technology partner, helping our clients
            navigate the complexities of digital transformation through rigorous
            R&D, bespoke software engineering, and a relentless focus on
            future-ready architectures.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt="girl smiling"
            width={500}
            height={400}
            className="rounded-3xl p-2"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
