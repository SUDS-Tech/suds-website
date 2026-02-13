import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";

export default function SoftwareInnovation() {
  return (
    <section
      id="innovation-lab"
      aria-labelledby="innovation-lab-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161b22]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Shield className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
            </div>
            <h2 id="innovation-lab-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Software Innovation Lab
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our Innovation Lab helps startups and enterprises transform ideas into
              production-ready software through rapid prototyping and experimentation.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Lab Services</h3>
              <ul className="space-y-3">
                {["MVP and prototype development", "Proof-of-concept systems", "AI, automation, and data systems", "Product experimentation and validation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Who We Serve</h3>
              <p className="text-gray-400 text-sm">
                Startups and enterprises looking to move from concept to execution with speed and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
