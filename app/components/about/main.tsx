"use client";
import Image from "next/image";
import image from "./images/world.jpg";
import { motion } from "motion/react";
export default function Overview() {
  return (
    <div className="relative w-full bg-linear-to-b from-gray-800 to-gray-950 px-4 md:px-16 lg:px-20 py-7">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-white tracking-wider text-sm sm:text-2xl font-bold border-b border-amber-50">
          Future Outlook & Growth Vision
        </h3>
      </div>

      {/* Main Content */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="flex justify-between items-center">
            <p className="text-white font-medium text-sm sm:text-2xl">
              As we look toward the future, SUDS Technologies Ltd is committed
              to expanding its global footprint. We are investing heavily in
              AI-driven automation and sustainable tech practices. Our goal is
              to become the primary catalyst for digital evolution, helping the
              next generation of "Unicorn" startups and Fortune 500 companies
              build the foundations of tomorrow
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative "
        >
          <Image
            src={image}
            alt="Team collaborating on a project"
            width={600}
            height={400}
            className="rounded-full object-cover h-100"
          />
        </motion.div>
      </div>
    </div>
  );
}
