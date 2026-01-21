import industries from "./industry";

export default function Option() {
  return (
    <div className="w-full bg-gray-950 py-16 px-10">
      <div className="flex justify-center items-center pb-5">
        <h1 className="text-sm sm:text-2xl text-white font-bold border-b border-amber-50">
          Industries We Serve
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-r from-gray-800 to-gray-950  rounded-b-4xl  shadow-2xl  shadow-teal-700 hover:shadow-md transition-shadow duration-300 p-8 text-center"
              >
                <div className="mb-6">
                  <IconComponent
                    className={`w-16 h-16 mx-auto ${industry.iconColor} text-shadow-blue-500 text-shadow-2xs stroke-[1.5] hover:text-emerald-400 transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-shadow-[4px] text-shadow-amber-300">
                  {industry.title}
                </h3>
                <p className="text-amber-50 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
