"use client";

import { useState } from "react";
import { Shield, CheckCircle } from "lucide-react";
import options, { Option } from "./options";

interface FeatureCardProps {
  feature: Option;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = feature.icon;

  return (
    <div
      className="card h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon */}
        <div className="mb-6 relative">
          <div className="p-5 rounded-xl bg-[#0d1117] border border-gray-800 transition-all duration-200">
            <IconComponent
              className={`w-12 h-12 ${feature.iconColor} transition-all duration-200`}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Number Badge */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
          <span className="text-emerald-500 text-sm font-bold">
            {index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#ABABAB] mb-4 group-hover:text-emerald-500 transition-colors duration-200">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed grow">
          {feature.description}
        </p>

        {/* CTA */}
        <div
          className="mt-6 flex items-center gap-2 text-emerald-500 text-xs font-medium transition-all duration-200"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <CheckCircle className="w-4 h-4" />
          <span>Proven Excellence</span>
        </div>
      </div>
    </div>
  );
};

export default function SUDSWhyChoose() {
  return (
    <div className="relative w-full bg-[#161b22] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            The SUDS{" "}
            <span className="bg-linear-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
            We combine technical excellence with business acumen to deliver
            solutions that drive real results for your organization.
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-linear-to-r from-transparent to-emerald-500 rounded-full" />
            <div className="w-24 h-1 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-full" />
            <div className="w-12 h-1 bg-linear-to-r from-emerald-600 to-transparent rounded-full" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {options.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <footer className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="/about" className="btn-primary">
              Learn More About Us
            </a>
            <a href="/contact" className="btn-secondary">
              Start Your Project
            </a>
          </div>
        </footer>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#0d1117] border border-gray-800 rounded-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">
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
