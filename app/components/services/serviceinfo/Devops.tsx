import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Devops() {
  return (
    <section
      id="devops-cloud"
      aria-labelledby="devops-cloud-heading"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <header>
          <h2 id="devops-cloud-heading" className="text-4xl font-bold mb-4">
            DevOps & Cloud Engineering Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            We streamline software delivery and cloud infrastructure for
            businesses through modern DevOps practices.
          </p>
        </header>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
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

export default Devops;
