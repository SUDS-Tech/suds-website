"use client";

import { useState, useEffect } from "react";
import { Atom, Shield, Cloud, Bot } from "lucide-react";
import { Typewriter } from "./type-writer";
import ParticleBackground from "./particle-background";
import Link from "next/link";

export default function BusinessProcess() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phrases = [
    "Secure. Unique. Durable.",
    "Engineering Excellence.",
    "Future-Ready Solutions.",
    "Innovation-Driven Growth.",
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <ParticleBackground />

      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider">
              ABOUT OUR COMPANY
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  SUDS
                </span>
                <br />
                <span className="text-gray-300">Technologies</span>
              </h1>

              <div className="text-2xl md:text-3xl font-semibold text-emerald-400 h-20">
                <Typewriter phrases={phrases} />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Premier software innovation lab engineering high-performance
              digital ecosystems. We transform ambitious ideas into resilient,
              enterprise-grade technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105">
                  <span className="relative z-10">Let's Talk</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />

              <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Advanced Technology Dashboard"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Code Snippet Card */}
            <div className="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-md border border-emerald-500/30 rounded-xl p-4 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-gray-400 text-xs">secure-systems.ts</span>
              </div>
              <div className="font-mono text-xs text-emerald-400 space-y-1">
                <div>
                  const <span className="text-blue-400">innovation</span> ={" "}
                  <span className="text-yellow-300">"limitless"</span>;
                </div>
                <div>
                  const <span className="text-blue-400">security</span> ={" "}
                  <span className="text-yellow-300">"paramount"</span>;
                </div>
                <div className="text-gray-500">// Building the future...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
