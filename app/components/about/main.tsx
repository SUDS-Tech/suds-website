"use client";
import Image from "next/image";
// Using optimized CDN image for the vision section
import { motion } from "motion/react";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

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

  return (
    <section className="relative w-full bg-[#0d1117] overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Future Vision Section */}
        <div className="mb-24">
          <motion.header
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
            <h4 className="text-4xl font-bold text-white mb-4">
              Future Outlook &{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Growth Vision
              </span>
            </h4>
          </motion.header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.article
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                As we look toward the future, SUDS Technologies Ltd is committed
                to expanding its global footprint. We are investing heavily in
                AI-driven automation and sustainable tech practices.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our goal is to become the primary catalyst for digital
                evolution, helping the next generation of "Unicorn" startups and
                Fortune 500 companies build the foundations of tomorrow.
              </p>

              {/* Stats */}
              <footer className="grid grid-cols-2 gap-4 pt-4">
                <div className="card text-center">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">
                    10+
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">
                    Projects Delivered
                  </div>
                </div>
              </footer>
            </motion.article>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl blur-lg opacity-50" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaborating on a project"
                width={800}
                height={400}
                className="relative rounded-2xl object-cover h-96 w-full border border-gray-800"
              />
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
            <h5 className="text-4xl font-bold text-white mb-4">
              What Drives{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Us Forward
              </span>
            </h5>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our core values shape every solution we build and every
              partnership we forge.
            </p>
          </motion.div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.article
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
                  <h6 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h6>
                  <footer className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </footer>
                </motion.article>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}
