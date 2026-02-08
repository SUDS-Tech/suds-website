import { ArrowRight } from "lucide-react";
import React from "react";

function Webapp() {
  return (
    <>
      <section
        id="web-development"
        aria-labelledby="web-development-heading"
        className="py-24 bg-gray-900"
      >
        <header>
          <h2 id="web-development-heading" className="text-4xl font-bold mb-4">
            Web Application Development Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            We design and build high-performance web applications for businesses
            that require secure, scalable, and modern digital platforms.
          </p>
        </header>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">What We Deliver</h3>
            <ul className="list-disc list-inside text-gray-300 ">
              <li>Custom web platforms and dashboards</li>
              <li>Enterprise-grade backend systems</li>
              <li>Responsive, modern user interfaces</li>
              <li>API-driven and cloud-ready architectures</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Technologies We Use</h3>
            <p className="text-gray-300">
              Next.js, React, TypeScript, Go, Rust, Python, PostgreSQL, AWS,
              Azure, GCP
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
    </>
  );
}

export default Webapp;
