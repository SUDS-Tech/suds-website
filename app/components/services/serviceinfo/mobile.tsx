import { ArrowRight } from "lucide-react";
import React from "react";

function MobileApp() {
  return (
    <section
      id="mobile-app-development"
      aria-labelledby="mobile-app-development-heading"
      className="py-24 bg-gray-900"
    >
      <header>
        <h2
          id="mobile-app-development-heading"
          className="text-4xl font-bold mb-4"
        >
          Mobile Application Development Services
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl">
          We create reliable mobile applications for businesses and startups,
          delivering seamless performance across iOS and Android devices.
        </p>
      </header>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Capabilities</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Android, iOS, and cross-platform apps</li>
            <li>Secure backend integrations</li>
            <li>Offline-first and performance-optimized apps</li>
            <li>Scalable mobile architectures</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Use Cases</h3>
          <p className="text-gray-300">
            Business apps, customer platforms, internal tools, MVPs
          </p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="/contact"
          className="btn-primary inline-flex items-center gap-2"
        >
          Discuss Your Project
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default MobileApp;
