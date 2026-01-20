import services from "./services";

export default function ServiceCards() {
  return (
    <div className="w-full bg-gray-950 py-16 px-10">
      <div className="flex justify-center items-center pb-5">
        <h1 className="text-sm sm:text-2xl text-white font-bold">
          Services we offer
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-r from-gray-800 to-gray-950  rounded-lg  shadow-inner  shadow-cyan-700 hover:shadow-md transition-shadow duration-300 p-8 text-center"
              >
                <div className="mb-6">
                  <IconComponent
                    className={`w-16 h-16 mx-auto ${service.iconColor} stroke-[1.5] hover:text-emerald-400 transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-amber-50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
