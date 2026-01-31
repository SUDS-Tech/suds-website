import Link from "next/link";
import React from "react";

function JoinUs() {
  return (
    <div>
      <div className="bg-linear-to-b from-gray-800 to-gray-950 py-3 w-full flex justify-center items-center px-4">
        <div className="max-w-2xl flex flex-col justify-center items-center ">
          <h1 className="text-white">Join Us</h1>
          <p className="text-white">We're just getting started.</p>
          <p className="text-white">
            If you're passionate about technology, innovation, and solving
            real-world problems, Suds Technologies Ltd is building something
            you'll want to be part of.
          </p>
          <div className="flex flex-col sm:flex-row">
            <p className="text-white">
              Interested in working with us or joining the team?.
            </p>
            <Link href="/contact">
              <p className="text-green-500">Get in touch</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
