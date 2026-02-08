import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function ITConsultancy() {
  return (
    <section
      id="it-consultancy"
      aria-labelledby="it-consultancy-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <header className="max-w-4xl mx-auto text-center">
        <h2
          id="it-consultancy-heading"
          className="text-4xl font-bold mb-4 text-white"
        >
          IT Consultancy & Digital Strategy
        </h2>
        <p className="text-lg text-gray-300">
          We act as a strategic technology partner for organizations, helping
          leadership teams make confident, future-proof decisions.
        </p>
      </header>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-gray-300">
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Consulting Services Include
          </h3>
          <ul className="list-disc list-inside">
            <li>System architecture design</li>
            <li>Technology stack selection</li>
            <li>Digital transformation strategy</li>
            <li>Security and performance audits</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Approach</h3>
          <p>
            Practical, vendor-neutral, and engineering-driven guidance tailored
            to your organization.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center gap-2"
        >
          Discuss Your Project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export default ITConsultancy;
