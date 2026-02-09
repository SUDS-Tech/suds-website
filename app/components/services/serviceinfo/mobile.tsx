import { ArrowRight, CheckCircle, Smartphone } from "lucide-react";
import Link from "next/link";

export default function MobileApp() {
  return (
    <section
      id="mobile-app-development"
      aria-labelledby="mobile-app-development-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161b22]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Smartphone className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
            </div>
            <h2 id="mobile-app-development-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mobile Application Development
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We create reliable mobile applications for businesses and startups,
              delivering seamless performance across iOS and Android devices.
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
              <h3 className="text-lg font-semibold text-white mb-4">Our Capabilities</h3>
              <ul className="space-y-3">
                {["Android, iOS and cross-platform apps", "Secure backend integrations", "Offline-first and performance-optimized apps", "Scalable mobile architectures"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
              <p className="text-gray-400 text-sm">
                Business apps, customer platforms, internal tools, MVPs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
