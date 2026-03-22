import { Users, Code2, Lightbulb } from "lucide-react";
import rose from "./images/rose.jpg";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ssekindi Kasim",
    title: "Co-Founder",
    description: "Technical Lead & Architect",
    icon: Code2,
  },
  {
    name: "Matovu Isaac",
    title: "Co-Founder",
    description: "Managing Director",
    icon: Lightbulb,
  },
  {
    name: "Namubiru Rose",
    title: "Creative Director & UX Visionary",
    description: "UI / UX Designer",
    icon: Lightbulb,
    image: rose,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#0d1117] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Users className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A lean, focused team — intentionally small, highly skilled, and
            committed to delivering real value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div key={index} className="card text-center group">
                <div className="mb-6 flex justify-center">
                  {/* /**rose profile picture displays conditionally to cofounders icon placeholders */}
                  <div>
                    {member.name === "Namubiru Rose" ? (
                      <div className="w-75 h-75 rounded-full overflow-hidden shrink-0">
                        <Image src={rose} alt="Rose" width={300} height={300} />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                        <IconComponent
                          className="w-10 h-10 text-emerald-500"
                          strokeWidth={1.5}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-500 font-medium text-sm mb-2">
                  {member.title}
                </p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
