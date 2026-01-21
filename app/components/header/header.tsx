"use client";
import { motion } from "motion/react";
import HeroImage from "./heroImage";

export default function BusinessProcess() {
  const text =
    "Whether you're looking to streamline your business processes or enhance your team's productivity, SUDS is here to help you achieve your goals.";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative w-full min-h-screen bg-linear-to-b from-gray-800 to-gray-950 px-4 md:px-16 lg:px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-white tracking-wider text-sm md:text-base font-medium"
        >
          ABOUT OUR COMPANY
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <motion.p
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1.0 }}
              className="text-white font-medium text-sm sm:text-3xl"
            >
              {text.split("").map((char, i) => (
                <motion.span key={i} variants={child}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: text.length * 0.02 + 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 shadow-2xl border-l border-r shadow-emerald-700 border-white bg-linear-to-r from-gray-700 to-gray-900 bg-clip-padding w-32 h-16 p-3 flex text-center justify-center rounded-2xl"
          >
            <button>
              <p className="text-white text-xl">Lets' Talk</p>
            </button>
          </motion.div>
        </div>

        {/* Image Section */}
        <HeroImage />
      </div>
    </div>
  );
}
