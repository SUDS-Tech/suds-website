"use client";

import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Shield,
  Cpu,
  Globe,
} from "lucide-react";

export default function Overview() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Building resilient, enterprise-grade solutions that transform businesses and drive meaningful impact.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Pushing boundaries with cutting-edge R&D in AI, cloud infrastructure, and emerging technologies.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "Acting as strategic technology partners, not just vendors, throughout your digital journey.",
    },
    {
      icon: TrendingUp,
      title: "Future-Ready",
      description:
        "Architecting scalable systems designed to evolve with tomorrow's technological landscape.",
    },
  ];

  const pillars = [
    {
      icon: Shield,
      title: "Secure",
      description:
        "Security-first architecture with enterprise-grade protection at every layer of the stack.",
    },
    {
      icon: Cpu,
      title: "Unique",
      description:
        "Bespoke solutions engineered to your exact needs — no templates, no compromises.",
    },
    {
      icon: Globe,
      title: "Durable",
      description:
        "Systems built to last, designed for scalability, and ready for whatever comes next.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d1117] overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Our Philosophy Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-sm font-medium tracking-wider">
                OUR PHILOSOPHY
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              What{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                SUDS
              </span>{" "}
              Stands For
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every solution we build is grounded in three core engineering
              principles that define who we are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="card text-center group"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <IconComponent
                        className="w-10 h-10 text-emerald-500"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-sm font-medium tracking-wider">
                OUR VISION
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Future Outlook &{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Growth Vision
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#161b22] border border-gray-800 rounded-2xl p-8 md:p-12 space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                As we look toward the future, SUDS Technologies Ltd is committed
                to expanding its global footprint. We are investing heavily in
                AI-driven automation and sustainable tech practices.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our goal is to become the primary catalyst for digital evolution,
                helping the next generation of startups and enterprise companies
                build the foundations of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Drives{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Us Forward
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our core values shape every solution we build and every partnership
              we forge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center group"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <IconComponent
                        className="w-8 h-8 text-emerald-500"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
