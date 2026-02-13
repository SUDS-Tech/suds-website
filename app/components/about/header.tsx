"use client";

import Image from "next/image";
import image from "./images/girl.jpg";
import { motion } from "motion/react";
import ParticleBackground from "../Homepage/particle-background";

function Header() {
  return (
    <div className="relative bg-[#0d1117] pt-20 pb-10 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About{" "}
              <span className="text-emerald-500">SUDS Technologies</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              At SUDS Technologies Ltd, we believe that software should be more
              than just functional—it should be a resilient asset. Our name
              reflects our foundational engineering philosophy:{" "}
              <span className="text-emerald-500 font-semibold border-b border-emerald-500/30">
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
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-3xl blur-lg opacity-50" />
              <Image
                src={image}
                alt="SUDS Technologies Team"
                width={500}
                height={400}
                className="relative rounded-3xl border border-gray-800"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
