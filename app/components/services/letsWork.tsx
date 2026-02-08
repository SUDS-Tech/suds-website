"use client";

import { useState } from "react";
import {
  Shield,
  Code,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import { philosophy, processSteps } from "./service";
import Link from "next/link";

interface ProcessStepProps {
  step: {
    title: string;
    description: string;
    icon: any;
  };
  index: number;
}

interface PhilosophyCardProps {
  item: {
    title: string;
    description: string;
    icon: any;
  };
  index: number;
}

const ProcessStep = ({ step, index }: ProcessStepProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = step.icon;

  return (
    <div
      className="group flex items-start gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Step icon */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-500/60 transition-all duration-200">
          <IconComponent className="w-5 h-5 text-emerald-500 transition-colors duration-200" />
        </div>
        {/* Connecting line */}
        {index < 4 && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-emerald-500/30 to-transparent" />
        )}
      </div>

      {/* Step content */}
      <div className="flex-1 pb-8">
        <h3 className="text-white font-semibold mb-1 group-hover:text-emerald-500 transition-colors duration-200">
          {step.title}
        </h3>
        <p className="text-gray-400 text-sm">{step.description}</p>
      </div>
    </div>
  );
};

const PhilosophyCard = ({ item, index }: PhilosophyCardProps) => {
  const IconComponent = item.icon;

  return (
    <div
      className="group flex items-start gap-3"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-200">
        <IconComponent className="w-5 h-5 text-emerald-500" />
      </div>
      <div className="flex-1">
        <h4 className="text-emerald-500 font-bold mb-1">{item.title}</h4>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default function LetsWork() {
  return (
    <div className="relative w-full bg-[#0d1117] overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              PARTNERSHIP APPROACH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-transparent rounded-full" />
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partner with Uganda's leading innovation lab to transform your ideas
            into resilient, enterprise-grade technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Process Steps */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-8">Our Process</h2>
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>

          {/* Right Column - Philosophy & Contact */}
          <div className="space-y-8">
            <div>
              <p className="text-2xl font-bold text-white mb-8">
                Our Philosophy
              </p>
              <div className="space-y-4">
                {philosophy.map((item, index) => (
                  <PhilosophyCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 pt-8">
              <p className="text-2xl font-bold text-white mb-6">Get In Touch</p>

              <a href="mailto:info@suds-tech.com" className="card block group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-emerald-500 font-medium text-sm mb-1">
                      Email Us
                    </p>
                    <p className="text-white font-semibold">
                      info@suds-tech.com
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>

              <a href="tel:+256757212246" className="card block group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-emerald-500 font-medium text-sm mb-1">
                      Call Us
                    </p>
                    <p className="text-white font-semibold">+256 757 212 246</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
