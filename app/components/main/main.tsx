"use client";
import { easeOut, motion } from "motion/react";
import services from "./services";

export default function ServiceCards() {
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
    <div className="w-full bg-gray-950 py-16 px-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center pb-5"
      >
        <h1 className="text-sm sm:text-2xl text-white font-bold border-b border-white">
          Services we offer
        </h1>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="bg-linear-to-r from-gray-800 to-gray-950 rounded-lg shadow-inner shadow-cyan-700 hover:shadow-md transition-shadow duration-300 p-8 text-center"
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
                    className={`w-16 h-16 mx-auto ${service.iconColor} stroke-[1.5] hover:text-emerald-400 transition-colors duration-300`}
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-amber-50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
