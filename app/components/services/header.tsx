"use client";

import { useState, useEffect } from "react";
import { Code2, Zap, ArrowDown } from "lucide-react";

interface Animated {
  word: string;
  delay: number;
}

const AnimatedWord = ({ word, delay }: Animated) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className="inline-block mr-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 0.4s ease-out",
      }}
    >
      {word}
    </span>
  );
};

interface FloatingIconProps {
  Icon: any;
  delay: number;
  position: any;
}

const FloatingIcon = ({ Icon, delay, position }: FloatingIconProps) => {
  return (
    <div
      className="absolute opacity-10 animate-float"
      style={{
        ...position,
        animationDelay: `${delay}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    >
      <Icon className="w-16 h-16 text-emerald-400" strokeWidth={1} />
    </div>
  );
};

export default function ServicesHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text =
    "At SUDS Technologies Ltd, we deliver secure, scalable and durable digital solutions engineered to solve real-world business challenges. Our services span the full software lifecycle from strategy and design to deployment and long-term optimization.";

  const words = text.split(" ");

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating background icons */}
      <FloatingIcon
        Icon={Code2}
        delay={0}
        position={{ top: "10%", left: "5%" }}
      />
      <FloatingIcon
        Icon={Zap}
        delay={1}
        position={{ top: "60%", right: "8%" }}
      />
      <FloatingIcon
        Icon={Code2}
        delay={2}
        position={{ bottom: "15%", left: "10%" }}
      />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div
            className="flex justify-center mb-8"
            style={{ animation: "fadeInUp 0.6s ease-out" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium tracking-wider">
                COMPREHENSIVE SOLUTIONS
              </span>
            </div>
          </div>

          {/* Main title */}
          <div className="text-center mb-12">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
              style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
            >
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            {/* Decorative line */}
            <div
              className="flex items-center justify-center gap-2 mb-8"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            >
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
            </div>

            {/* Subtitle with animated word reveal */}
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
                {words.map((word, index) => {
                  // Highlight specific words
                  //if (word === "secure," || word === "scalable," || word === "durable") {
                  // return (
                  //   <AnimatedWord key={index} word={word} delay={index * 50}>
                  //     <span className="text-white font-bold">{word}</span>
                  //   </AnimatedWord>
                  //  );
                  //  }
                  //  if (word === "strategy" || word === "design" || word === "deployment" || word === "optimization.") {
                  //   return (
                  //     <AnimatedWord key={index} word={word} delay={index * 50}>
                  //      <span className="text-emerald-400 font-semibold">{word}</span>
                  //    </AnimatedWord>
                  //   );
                  //  }
                  return (
                    <AnimatedWord key={index} word={word} delay={index * 50} />
                  );
                })}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            style={{ animation: "fadeInUp 0.6s ease-out 0.5s both" }}
          >
            <a
              href="#services"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="flex justify-center mt-16"
            style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}
          >
            <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
