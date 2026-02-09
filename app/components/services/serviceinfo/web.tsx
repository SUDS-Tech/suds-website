import { ArrowRight, CheckCircle, Globe } from "lucide-react";
import Link from "next/link";

export default function Webapp() {
  return (
    <section
      id="web-development"
      aria-labelledby="web-development-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Globe className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
            </div>
            <h2 id="web-development-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Web Application Development
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We design and build high-performance web applications for businesses
              that require secure, scalable, and modern digital platforms.
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
              <h3 className="text-lg font-semibold text-white mb-4">What We Deliver</h3>
              <ul className="space-y-3">
                {["Custom web platforms and dashboards", "Enterprise-grade backend systems", "Responsive, modern user interfaces", "API-driven and cloud-ready architectures"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
              <p className="text-gray-400 text-sm">
                Next.js, React, TypeScript, Go, Rust, Python, PostgreSQL, AWS, Azure, GCP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
