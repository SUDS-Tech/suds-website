"use client";

import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import services, {Service} from "./services";


export interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 group-hover:border-emerald-500/50 transition-all duration-300" />
      
      
      <div className="relative p-8 h-full flex flex-col z-10">
        
        <div className="mb-6">
          <div
            className="inline-flex p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 group-hover:bg-gray-800/50 group-hover:border-emerald-500/30 transition-all duration-300"
            style={{
              transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <IconComponent
              className={`w-10 h-10 ${service.iconColor} group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300`}
              strokeWidth={1.5}
            />
          </div>
        </div>

        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
          {service.title}
        </h3>
        
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        
        <div className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-gray-500 text-xs group-hover:text-gray-400 transition-colors duration-300"
            >
              <Sparkles className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-emerald-500 text-sm font-medium transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(-8px)',
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
    <div className="relative w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm mb-4">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider">
              WHAT WE DO
            </span>
          </div>

          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Services We{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h1>

          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Comprehensive technology solutions designed to transform your business 
            and drive sustainable growth in the digital age.
          </p>

          
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/services"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
            >
              Request a Quote
            </a>
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
      `}</style>
    </div>
  );
}