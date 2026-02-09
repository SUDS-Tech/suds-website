import { ArrowRight, CheckCircle, HandHelping } from "lucide-react";
import Link from "next/link";

export default function ITConsultancy() {
  return (
    <section
      id="it-consultancy"
      aria-labelledby="it-consultancy-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161b22]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <HandHelping className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
            </div>
            <h2 id="it-consultancy-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Consultancy & Digital Strategy
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We act as a strategic technology partner for organizations, helping
              leadership teams make confident, future-proof decisions.
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
              <h3 className="text-lg font-semibold text-white mb-4">Consulting Services</h3>
              <ul className="space-y-3">
                {["System architecture design", "Technology stack selection", "Digital transformation strategy", "Security and performance audits"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Our Approach</h3>
              <p className="text-gray-400 text-sm">
                Practical, vendor-neutral, and engineering-driven guidance tailored to your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
