import Image from "next/image";
import image from "./images/world.jpg";
export default function Overview() {
  return (
    <div className="relative w-full min-h-screen bg-linear-to-b from-gray-800 to-gray-950 px-4 md:px-16 lg:px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-white tracking-wider text-sm md:text-base font-medium">
          Future Outlook & Growth Vision
        </h3>
      </div>

      {/* Main Content */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <p className="text-white font-medium text-sm sm:text-3xl">
              As we look toward the future, SUDS Technologies Ltd is committed
              to expanding its global footprint. We are investing heavily in
              AI-driven automation and sustainable tech practices. Our goal is
              to become the primary catalyst for digital evolution, helping the
              next generation of "Unicorn" startups and Fortune 500 companies
              build the foundations of tomorrow
            </p>
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
