import React from "react";
import team from "./team";
import Image from "next/image";
function TeamSection() {
  return (
    <div className="bg-linear-to-b from-gray-800 to-gray-950 py-4">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-2xl ">Our team</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        {team.map((item, id) => {
          return (
            <div
              className="bg-transparent gap-2 px-3 py-2 border border-white rounded-xl"
              key={id}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={300}
                height={300}
                className="rounded-full w-60 h-60"
              />
              <div className="flex justify-center items-center flex-col ">
                <p className="text-white">{item.name}</p>
                <p className="text-white">{item.title}</p>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
