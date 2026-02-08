"use client";

import { Typewriter } from "./type-writer";
import Link from "next/link";
import ParticleBackground from "./particle-background";

export default function BusinessProcess() {
  const phrases = [
    "Secure. Unique. Durable.",
    "Engineering Excellence.",
    "Future-Ready Solutions.",
    "Innovation-Driven Growth.",
  ];

  return (
    <header className="relative w-full min-h-screen bg-[#0d1117] overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Subtle Particle Background */}
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              ABOUT OUR COMPANY
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <div className="flex flex-col">
                  <span className="bg-linear-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                    SUDS
                  </span>
                  <span className="text-gray-300">Technologies</span>
                </div>
              </h1>

              <div className="text-2xl md:text-3xl font-semibold text-emerald-500 h-20">
                <Typewriter phrases={phrases} />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Premier software innovation lab engineering high-performance
              digital ecosystems. We transform ambitious ideas into resilient,
              enterprise-grade technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="btn-primary">Let's Talk</button>
              </Link>
              <Link href="/services">
                <button className="btn-secondary">View Services</button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative bg-[#161b22] rounded-2xl overflow-hidden border border-gray-800 group-hover:border-emerald-500/50 transition-colors duration-300">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Advanced Technology Dashboard"
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Code Snippet Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#161b22] border border-gray-800 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <p className="text-gray-400 text-xs">secure-systems.ts</p>
              </div>
              <div className="font-mono text-xs text-emerald-500 space-y-1">
                <div>
                  const <span className="text-blue-400">innovation</span> ={" "}
                  <span className="text-yellow-300">"limitless"</span>;
                </div>
                <div>
                  const <span className="text-blue-400">security</span> ={" "}
                  <span className="text-yellow-300">"paramount"</span>;
                </div>
                <div className="text-white">// Building the future...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
