import Image from "next/image";
import React from "react";
import image from "@/app/components/team/images/team.jpg";
import ParticleBackground from "../Homepage/particle-background";

function Header() {
  return (
    <div className="relative bg-[#0d1117] pt-20 pb-10 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-sm font-medium tracking-wider">
                OUR TEAM
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Meet the{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Innovators
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Behind every great product is a dedicated team driven by vision,
              innovation, and execution. At SUDS Technologies Ltd, our leadership
              combines strategic thinking with deep technical expertise to build
              scalable, impactful solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We are a lean, focused team — intentionally small, highly
              skilled, and committed to delivering real value for our clients and
              users.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-3xl blur-lg opacity-50" />
              <Image
                src={image}
                alt="SUDS Technologies Team"
                width={500}
                height={500}
                className="relative rounded-3xl w-full border border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
