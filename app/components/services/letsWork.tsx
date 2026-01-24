import React from "react";

function LetsWork() {
  return (
    <div className="bg-linear-to-r from-gray-800 to-gray-900">
      <div className="flex justify-center items-center">
        <h1 className="text-white font-bold text-2xl border-b border-white">
          Let&#39;s work together
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
        <div className="w-80">
          <p className="text-white border-b border-white">
            Our Engineering Standard
          </p>
          <p className="text-white">
            Every service at SUDS is guided by our core philosophy:
          </p>
          <ul>
            <li className="text-white">
              <span className="text-green-500 font-bold">Secure </span> Security
              embedded at every layer
            </li>
            <li className="text-white">
              <span className="text-green-500 font-bold">Unique</span> Solutions
              designed for your specific challenges
            </li>
            <li className="text-white">
              <span className="text-green-500 font-bold">Durable</span>{" "}
              Architectures built to scale and last
            </li>
          </ul>
        </div>

        <div className="w-80">
          <h1 className="text-white border-b border-white">How We Work</h1>
          <ul>
            <li className="text-white">Discovery & Requirements Analysis</li>
            <li className="text-white">Secure Architecture Design</li>
            <li className="text-white">Agile Development & Testing</li>
            <li className="text-white">Deployment & Optimization</li>
            <li className="text-white">Continuous Support & Improvement</li>
          </ul>
        </div>

        <div className="w-80">
          <h1 className="text-white border-b border-white">
            Let&#39;s Build Something Durable
          </h1>
          <p className="text-white">
            Whether you&#39;re launching a new product, modernizing legacy
            systems, or exploring innovation, SUDS Technologies Ltd is ready to
            partner with you.
          </p>
          <p className="text-white">Contact us to start your project</p>
        </div>
      </div>
    </div>
  );
}

export default LetsWork;
