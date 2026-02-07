"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "../Homepage/particle-background";

export default function ServicesHeader() {
  return (
    <div className="relative w-full min-h-screen bg-[#0d1117] overflow-hidden pt-20">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Particle Background */}
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              OUR SERVICES
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            From web and mobile applications to cloud infrastructure and
            AI-driven innovations, we deliver comprehensive technology solutions
            that transform businesses and drive growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/contact">
              <button className="btn-primary">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/about">
              <button className="btn-secondary">Learn More</button>
            </Link>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {[
              "Web Development",
              "Mobile Apps",
              "Cloud Solutions",
              "DevOps",
              "AI/ML",
              "Consultancy",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#161b22] border border-gray-800 text-gray-300 text-sm rounded-lg hover:border-emerald-500/50 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#161b22] border border-gray-800 rounded-lg hover:border-emerald-500/50 transition-colors duration-200"
            >
              <div className="text-3xl font-bold text-emerald-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
