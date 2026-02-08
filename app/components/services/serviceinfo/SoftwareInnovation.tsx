import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function SoftwareInnovation() {
  return (
    <section
      id="innovation-lab"
      aria-labelledby="innovation-lab-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <header className="max-w-4xl mx-auto text-center">
        <h2
          id="innovation-lab-heading"
          className="text-4xl font-bold mb-4 text-white"
        >
          Software Innovation Lab
        </h2>
        <p className="text-lg text-gray-300">
          Our Innovation Lab helps startups and enterprises transform ideas into
          production-ready software through rapid prototyping and
          experimentation.
        </p>
      </header>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-gray-300">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Lab Services</h3>
          <ul className="list-disc list-inside">
            <li>MVP and prototype development</li>
            <li>Proof-of-concept systems</li>
            <li>AI, automation, and data systems</li>
            <li>Product experimentation and validation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Who We Serve</h3>
          <p>
            Startups and enterprises looking to move from concept to execution
            with speed and precision.
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

export default SoftwareInnovation;
