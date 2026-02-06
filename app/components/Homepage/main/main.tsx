"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import services, { Service } from "./services";

export interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

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
        <div className="mb-6">
          <div className="inline-flex p-4 rounded-xl bg-[#0a0a0a] border border-gray-800 transition-all duration-200">
            <IconComponent
              className={`w-10 h-10 ${service.iconColor} transition-all duration-200`}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-500 transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <div className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-gray-500 text-xs"
            >
              <Sparkles className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-emerald-500 text-sm font-medium transition-all duration-200"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <div className="relative w-full bg-[#111111] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              WHAT WE DO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Services We{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Comprehensive technology solutions designed to transform your
            business and drive sustainable growth in the digital age.
          </p>

          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/services"
              className="btn-primary"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
