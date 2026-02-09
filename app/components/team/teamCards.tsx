import React from "react";
import team from "./team";
import Image from "next/image";
function TeamSection() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-950 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold">Our Team</h1>
          <p className="text-gray-400 mt-2">Meet the minds behind SUDS Technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((item) => {
            return (
              <div
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group"
                key={item.id}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-emerald-500 transition-colors">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="160px"
                        className="object-cover object-center scale-110"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-emerald-400 font-medium mb-2">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
