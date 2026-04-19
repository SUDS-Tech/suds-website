"use client";

import { motion } from "motion/react";
import { ArrowRight, FolderKanban } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "../Homepage/particle-background";

export default function ProjectsHeader() {
  return (
    <header className="relative w-full min-h-[70vh] bg-[#0d1117] overflow-hidden pt-20 flex items-center">
      <ParticleBackground />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            <FolderKanban className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              OUR WORK
            </span>
          </motion.div>
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Projects We&apos;ve{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Delivered
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            From client-facing products to internal tools, every SUDS project is
            built to be secure, unique, and durable. Explore our work  and if
            we&apos;ve worked together, we&apos;d love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <Link href="/contact">
              <button className="btn-primary">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/services">
          
              <button className="btn-secondary">Our Services</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
