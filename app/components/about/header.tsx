"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "../Homepage/particle-background";

function Header() {
  return (
    <header className="relative w-full min-h-[80vh] bg-[#0d1117] overflow-hidden pt-20 flex items-center">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              ABOUT US
            </span>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Secure, Unique &{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Durable Systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            At SUDS Technologies Ltd, we believe software should be more than
            just functional — it should be a resilient asset. We go beyond
            traditional outsourcing, acting as a strategic technology partner
            helping clients navigate digital transformation through rigorous
            R&D, bespoke engineering, and future-ready architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <Link href="/contact">
              <button className="btn-primary">
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/services">
              <button className="btn-secondary">Explore Our Services</button>
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center pt-8"
          >
            {[
              "Innovation Lab",
              "Enterprise Solutions",
              "Cloud & DevOps",
              "AI & Automation",
              "Strategic Partners",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#161b22] border border-gray-800 text-gray-300 text-sm rounded-lg hover:border-emerald-500/50 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
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
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
