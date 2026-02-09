import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function CustomSoftware() {
  return (
    <section
      id="custom-software"
      aria-labelledby="custom-software-heading"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <header>
          <h2 id="custom-software-heading" className="text-4xl font-bold mb-4">
            Custom Software Development Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Every business is unique — we engineer custom software for enterprises
            designed specifically for your workflows, scale, and long-term goals.
          </p>
        </header>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Ideal For</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Process automation</li>
              <li>Enterprise systems</li>
              <li>Internal tools and platforms</li>
              <li>Complex domain-specific software</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Key Focus</h3>
            <p className="text-gray-300">
              We focus on durability, minimizing technical debt, while enabling
              future growth.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CustomSoftware;
