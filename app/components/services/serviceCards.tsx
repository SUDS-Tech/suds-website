"use client";
import { easeOut, motion } from "motion/react";
import services from "./service";

export default function Services() {
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
        <h1 className="text-sm sm:text-2xl text-white font-bold border-b border-amber-50">
          Industries We Serve
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
                className="bg-linear-to-r from-gray-800 to-gray-950 rounded-b-4xl shadow-2xl shadow-teal-700 hover:shadow-md transition-shadow duration-300 p-8 text-center"
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
                    className={`w-16 h-16 mx-auto ${service.iconColor} text-shadow-blue-500 text-shadow-2xs stroke-[1.5] hover:text-emerald-400 transition-colors duration-300`}
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 text-shadow-[4px] text-shadow-amber-300">
                  {service.title}
                </h3>
                <p className="text-amber-50 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-linear-to-r from-green-400 to-green-600 rounded-2xl">
                  <p className="text-white font-bold">
                    {service.descriptionTitle}
                  </p>
                </div>
                {service.features.map((item, index) => {
                  return (
                    <div key={index} className="flex justify-start items-start">
                      <ul className="list-disc">
                        <li className="text-green-500">{item}</li>
                      </ul>
                    </div>
                  );
                })}
                <p className="text-white bold border-b border-white">
                  {service.footertitle}
                </p>
                <p className="text-amber-300">{service.footerdescription}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
