"use client";

import React from "react";
import { motion, Variants } from "motion/react"; 
import {  ArrowRight} from "lucide-react";
import services from "./services";

export default function ServiceCards() {
  
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -45, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    hover: { 
      scale: 1.1, 
      rotate: 15,
      transition: { type: "spring", stiffness: 300 } 
    }
  };

  return (
    <div className="w-full bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-500 font-semibold tracking-wide uppercase text-sm mb-3">
            What We Do
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Services We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Offer</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative h-full"
              >
                
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 transition-colors duration-300 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]" />
                
                
                <div className="relative p-8 h-full flex flex-col items-center text-center z-10">
                  
                  
                  <motion.div 
                    variants={iconVariants}
                    className="mb-6 p-4 rounded-full bg-gray-900/50 border border-gray-700/50 shadow-inner group-hover:bg-gray-800/50 transition-colors duration-300"
                  >
                    <IconComponent
                      className={`w-10 h-10 ${service.iconColor} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  
                  <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}