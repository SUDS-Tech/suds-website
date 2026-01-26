"use client"

import { useState } from "react";
import {
  Shield,
  Code,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { philosophy,processSteps } from "./service";

interface ProcessStepProps {
  step: {
    title: string;
    description: string;
    icon: any;
  },
  index: number
}

interface PhilosophyCardProps {
 item:{
  title: string;
  description: string;
  icon: any;
 },
 index: number
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
        animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Step number and icon */}
      <div className="relative flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-500/60 transition-all duration-300"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <IconComponent className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
        </div>
        {/* Connecting line */}
        {index < 4 && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-emerald-500/30 to-transparent" />
        )}
      </div>

      {/* Step content */}
      <div className="flex-1 pb-8">
        <h3 className="text-white font-semibold mb-1 group-hover:text-emerald-400 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-gray-400 text-sm">{step.description}</p>
      </div>
    </div>
  );
};



const PhilosophyCard = ({ item, index }: PhilosophyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = item.icon;

  return (
    <div
      className="group flex items-start gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInLeft 0.6s ease-out ${index * 0.1 + 0.2}s both`,
      }}
    >
      <div
        className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300"
        style={{
          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
          transition: 'transform 0.3s ease-out',
        }}
      >
        <IconComponent className="w-5 h-5 text-emerald-400" />
      </div>
      <div className="flex-1">
        <h4 className="text-emerald-400 font-bold mb-1">{item.title}</h4>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    </div>
  );
};


export default function LetsWork() {
 
  

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{ animation: 'fadeInUp 0.6s ease-out' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider">
              PARTNERSHIP APPROACH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partner with Uganda's leading innovation lab to transform your ideas 
            into resilient, enterprise-grade technologies.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Engineering Standards */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm" />
            <div className="relative p-8 z-10">
              <div
                className="flex items-center gap-2 mb-6"
                style={{ animation: 'fadeInLeft 0.6s ease-out' }}
              >
                <Shield className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">
                  Our Engineering Standard
                </h2>
              </div>

              <p
                className="text-gray-300 mb-6 text-sm"
                style={{ animation: 'fadeInLeft 0.6s ease-out 0.1s both' }}
              >
                Every service at SUDS is guided by our core philosophy:
              </p>

              <div className="space-y-4">
                {philosophy.map((item, index) => (
                  <PhilosophyCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm" />
            <div className="relative p-8 z-10">
              <div
                className="flex items-center gap-2 mb-6"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
              >
                <Code className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">
                  How We Work
                </h2>
              </div>

              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <ProcessStep key={index} step={step} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/30 backdrop-blur-sm" />
            <div className="relative p-8 z-10 h-full flex flex-col">
              <div
                className="mb-6"
                style={{ animation: 'fadeInRight 0.6s ease-out 0.2s both' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Let's Build Something Durable
                  </h2>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Whether you're launching a new product, modernizing legacy systems, 
                  or exploring innovation, SUDS Technologies Ltd is ready to partner with you.
                </p>

                <p className="text-emerald-400 font-semibold mb-6">
                  Contact us to start your project
                </p>
              </div>

              {/* Contact options */}
              <div className="space-y-4 mt-auto">
                <a
                  href="mailto:info@suds-tech.com"
                  className="group flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800 transition-all duration-300"
                  style={{ animation: 'fadeInRight 0.6s ease-out 0.3s both' }}
                >
                  <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-xs mb-1">Email us</div>
                    <div className="text-white text-sm font-medium">info@suds-tech.com</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>

                <a
                  href="tel:+256757212246"
                  className="group flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800 transition-all duration-300"
                  style={{ animation: 'fadeInRight 0.6s ease-out 0.4s both' }}
                >
                  <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-xs mb-1">Call us</div>
                    <div className="text-white text-sm font-medium">+256 757 212 246</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>

                <a
                  href="/contact"
                  className="group w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ animation: 'fadeInRight 0.6s ease-out 0.5s both' }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}