import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Devops() {
  return (
    <section
      id="devops-cloud"
      aria-labelledby="devops-cloud-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <header className="max-w-4xl mx-auto text-center">
        <h2 id="devops-cloud-heading" className="text-4xl font-bold mb-4">
          DevOps & Cloud Engineering Services
        </h2>
        <p className="text-lg text-gray-300">
          We streamline software delivery and cloud infrastructure for
          businesses through modern DevOps practices.
        </p>
      </header>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>CI/CD pipeline setup and optimization</li>
            <li>Secure cloud deployments</li>
            <li>Infrastructure automation</li>
            <li>Monitoring, scaling, and reliability engineering</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Outcome</h3>
          <p className="text-gray-300">
            Faster releases, higher uptime, and lower operational risk for your
            business.
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

export default Devops;
