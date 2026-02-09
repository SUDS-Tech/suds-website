/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

function JoinUs() {
  return (
    <div className="bg-[#161b22] py-16 w-full flex justify-center items-center px-4">
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Join Us</h2>
        <p className="text-xl text-gray-300 font-semibold">
          We're just getting started.
        </p>
        <p className="text-gray-400 text-base leading-relaxed">
          If you're passionate about technology, innovation, and solving
          real-world problems, SUDS Technologies Ltd is building something
          you'll want to be part of.
        </p>
        <div className="pt-4">
          <p className="text-white mb-4">
            Interested in working with us or joining the team?
          </p>
          <Link href="/contact">
            <button className="btn-primary">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
