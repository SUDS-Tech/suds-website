import options from "./options";

export default function Option() {
  return (
    <div className="w-full bg-gray-950 py-16 px-10">
      <div className="flex justify-center items-center pb-5">
        <h1 className="text-sm sm:text-2xl text-white font-bold">
          Why Choose SUDS Technologies Ltd?
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-r from-gray-800 to-gray-950  rounded-b-4xl  shadow-inner  shadow-teal-700 hover:shadow-md transition-shadow duration-300 p-8 text-center"
              >
                <div className="mb-6">
                  <IconComponent
                    className={`w-16 h-16 mx-auto ${option.iconColor} stroke-[1.5] hover:text-emerald-400 transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {option.title}
                </h3>
                <p className="text-amber-50 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
