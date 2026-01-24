import React from "react";

export default function Header() {
  return (
    <div className="bg-linear-to-r from-gray-800 to-gray-950 pt-24 flex justify-center items-center pb-7">
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <h1 className="text-white border-b border-white">Our services</h1>
        <div className="w-full max-w-5xl px-5 sm:px-0">
          <p className="text-white text-sm sm:text-2xl">
            At SUDS Technologies Ltd, we deliver {""}
            <span className="text-white font-bold">
              secure, scalable, and durable digital solutions
            </span>
            {""} engineered to solve real-world business challenges. Our
            services span the full software lifecycle{" "}
            <span className="text-green-400">
              {" "}
              from strategy and design to deployment and long-term optimization.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
