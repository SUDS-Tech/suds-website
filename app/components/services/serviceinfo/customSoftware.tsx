import { ArrowRight, CheckCircle, Settings } from "lucide-react";
import Link from "next/link";

export default function CustomSoftware() {
  return (
    <section
      id="custom-software"
      aria-labelledby="custom-software-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Settings className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
            </div>
            <h2 id="custom-software-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom Software Solutions
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every business is unique — we engineer custom software for enterprises
              designed specifically for your workflows, scale, and long-term goals.
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
              <h3 className="text-lg font-semibold text-white mb-4">Ideal For</h3>
              <ul className="space-y-3">
                {["Process automation", "Enterprise systems", "Internal tools and platforms", "Complex domain-specific software"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Key Focus</h3>
              <p className="text-gray-400 text-sm">
                Durability, minimizing technical debt, while enabling future growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
