import Image from "next/image";
import image from "./images/codes.jpg";
export default function BusinessProcess() {
  return (
    <div className="relative w-full min-h-screen bg-linear-to-b from-gray-800 to-gray-950 px-4 md:px-16 lg:px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-white tracking-wider text-sm md:text-base font-medium">
          ABOUT OUR COMPANY
        </h3>
      </div>

      {/* Main Content */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <p className="text-white font-medium text-sm sm:text-3xl">
              Whether you're looking to streamline your business processes or
              enhance your team's productivity, SUDS is here to help you achieve
              your goals.
            </p>
          </div>
          <div className="mt-12 border shadow-2xl shadow-blue-400 border-white bg-linear-to-r  from-gray-700 to-gray-900 bg-clip-padding w-32 h-16 p-3 flex text-center justify-center rounded-2xl">
            <button>
              <p className="text-white text-xl">Lets' Talk</p>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative ">
          <Image
            src={image}
            alt="Team collaborating on a project"
            width={600}
            height={400}
            className="rounded-3xl object-cover h-100"
          />
        </div>
      </div>
    </div>
  );
}
