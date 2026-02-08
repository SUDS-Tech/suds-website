"use client";
import { easeOut, motion } from "motion/react";
import industries from "./industry";

export default function Option() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="w-full bg-[#0d1117] py-16 px-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center pb-8"
      >
        <h2 className="text-2xl md:text-3xl text-white font-bold border-b border-emerald-500/30 pb-2">
          Industries We Serve
        </h2>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="card text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.15 + 0.4,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <IconComponent
                    className={`w-16 h-16 mx-auto ${industry.iconColor} stroke-[1.5] group-hover:text-emerald-500 transition-colors duration-300`}
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {industry.title}
                </h3>
                <footer className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </footer>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
