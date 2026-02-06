"use client";

import { useState } from "react";
import { Zap, CheckCircle, ArrowRight } from "lucide-react";
import services, { Service } from "./service";

interface Industry {
  industry: Service;
  index: number;
}

const IndustryCard = ({ industry, index }: Industry) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = industry.icon;

  return (
    <div
      className="card h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 flex justify-center">
          <div className="p-5 rounded-xl bg-[#0d1117] border border-gray-800 transition-all duration-200">
            <IconComponent
              className={`w-14 h-14 ${industry.iconColor} transition-all duration-200`}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-emerald-500 transition-colors duration-200">
          {industry.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
          {industry.description}
        </p>

        {industry.descriptionTitle && (
          <div className="mb-4 px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
            <p className="text-emerald-500 font-semibold text-sm text-center">
              {industry.descriptionTitle}
            </p>
          </div>
        )}

        {industry.features && industry.features.length > 0 && (
          <div className="space-y-2 mb-6">
            {industry.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-gray-300 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {industry.footertitle && (
          <div className="mt-auto pt-6 border-t border-gray-800">
            <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" />
              {industry.footertitle}
            </h4>
            <p className="text-emerald-500 text-xs">
              {industry.footerdescription}
            </p>
          </div>
        )}

        <div
          className="mt-4 flex items-center justify-center gap-2 text-emerald-500 text-sm font-medium transition-all duration-200"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default function Industries() {
  return (
    <div className="relative w-full bg-[#0d1117] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              VERSATILE EXPERTISE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Industries We{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Serve
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
            Our versatile expertise allows us to deliver transformative impact
            across diverse sectors, from FinTech to Healthcare, E-commerce to
            Government services.
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
          {services.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/about" className="btn-secondary">
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
