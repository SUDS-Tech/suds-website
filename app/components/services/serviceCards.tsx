"use client"

import { useState } from "react";
import {
  Building2,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import services, {Service} from "./service";

interface Industry {
  industry: Service;
  index: number;
}

const IndustryCard = ({ industry, index }: Industry) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = industry.icon;

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15 + 0.2}s both`,
      }}
    >
      
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
      
      
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 group-hover:border-emerald-500/50 transition-all duration-300 h-full overflow-hidden">
        
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        
        <div className="relative p-8 flex flex-col h-full z-10">
          
          <div className="mb-6 flex justify-center">
            <div
              className="relative p-5 rounded-2xl bg-gray-900/80 border border-gray-700/50 group-hover:bg-gradient-to-br group-hover:from-emerald-500/20 group-hover:to-blue-500/20 group-hover:border-emerald-500/50 transition-all duration-300"
              style={{
                transform: isHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <IconComponent
                className={`w-14 h-14 ${industry.iconColor} group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-all duration-300`}
                strokeWidth={1.5}
              />
            </div>
          </div>

          
          <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-emerald-400 transition-colors duration-300">
            {industry.title}
          </h3>
          
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
            {industry.description}
          </p>

          
          {industry.descriptionTitle && (
            <div className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl border border-emerald-500/30">
              <p className="text-emerald-300 font-semibold text-sm text-center">
                {industry.descriptionTitle}
              </p>
            </div>
          )}

          
          {industry.features && industry.features.length > 0 && (
            <div className="space-y-2 mb-6">
              {industry.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Footer section */}
          {industry.footertitle && (
            <div className="mt-auto pt-6 border-t border-gray-700/50">
              <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                {industry.footertitle}
              </h4>
              <p className="text-emerald-400 text-xs">
                {industry.footerdescription}
              </p>
            </div>
          )}

          {/* Hover CTA */}
          <div
            className="mt-4 flex items-center justify-center gap-2 text-emerald-500 text-sm font-medium"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.3s ease-out',
            }}
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Industries() {

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider">
              VERSATILE EXPERTISE
            </span>
          </div>

          
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
          >
            Industries We{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Serve
            </span>
          </h1>

          
          <p
            className="text-gray-400 text-lg max-w-3xl mx-auto mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            Our versatile expertise allows us to deliver transformative impact across 
            diverse sectors, from FinTech to Healthcare, E-commerce to Government services.
          </p>

          
          <div
            className="flex items-center justify-center gap-2"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

        
          { 
          services.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>

        
        <div
          className="text-center"
          style={{ animation: 'fadeInUp 0.6s ease-out 1.5s both' }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/case-studies"
              className="px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </div>

       
        <div
          className="mt-20 flex justify-center"
          style={{ animation: 'fadeInUp 0.6s ease-out 1.7s both' }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/30 border border-gray-700/50 rounded-full">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-gray-300 text-sm">
              Trusted by leading organizations across multi
            </span>
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