"use client"

import { useState } from "react";
import {
  Shield,
  Award,
  Users,
  Rocket,
  CheckCircle,
} from "lucide-react";
import options,{Option} from "./options";

interface FeatureCardProps{
  feature: Option,
  index: number
}


const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = feature.icon;

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15 + 0.2}s both`,
      }}
    >
      
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
      
      
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 group-hover:border-emerald-500/50 transition-all duration-300 h-full overflow-hidden">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        
        <div className="relative p-8 flex flex-col items-center text-center h-full z-10">
          
          <div className="mb-6 relative">
            
            <div
              className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"
              style={{
                opacity: isHovered ? 0.5 : 0,
                transition: 'opacity 0.3s ease-out',
              }}
            />
            
            
            <div
              className="relative p-5 rounded-xl bg-gray-900/80 border border-gray-700/50 group-hover:bg-gradient-to-br group-hover:from-emerald-500/20 group-hover:to-blue-500/20 group-hover:border-emerald-500/50 transition-all duration-300"
              style={{
                transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <IconComponent
                className={`w-12 h-12 ${feature.iconColor} group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] transition-all duration-300`}
                strokeWidth={1.5}
              />
            </div>
          </div>

          
          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
            <span className="text-emerald-400 text-sm font-bold">{index + 1}</span>
          </div>

          
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
            {feature.title}
          </h3>
          
         
          <p className="text-gray-400 text-sm leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
            {feature.description}
          </p>

          
          <div
            className="mt-6 flex items-center gap-2 text-emerald-500 text-xs font-medium"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.3s ease-out',
            }}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Proven Excellence</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function SUDSWhyChoose() {
   

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wider">
              WHY CHOOSE US
            </span>
          </div>

          
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              SUDS Technologies?
            </span>
          </h1>

          
          <p
            className="text-gray-400 text-lg max-w-3xl mx-auto mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            We combine cutting-edge technology with proven methodologies to deliver 
            exceptional results that drive your business forward.
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

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {options.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

       
        <div
          className="text-center"
          style={{ animation: 'fadeInUp 0.6s ease-out 1.5s both' }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/about"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More About Us
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>

        
        <div
          className="mt-20 pt-12 border-t border-gray-800"
          style={{ animation: 'fadeInUp 0.6s ease-out 1.7s both' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "ISO Certified", color: "text-emerald-400" },
              { icon: Award, label: "Award Winning", color: "text-blue-400" },
              { icon: Users, label: "30+ Clients", color: "text-purple-400" },
              { icon: Rocket, label: "50+ Projects", color: "text-pink-400" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <Icon className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
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