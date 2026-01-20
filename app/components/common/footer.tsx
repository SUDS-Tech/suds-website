import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-gray-800 to-gray-950 py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo and Description Section */}
          <div className="md:w-1/4">
            <div className="flex items-center gap-2 mb-6">
              <div>
                <h2 className="bg-linear-to-r from-green-300 to-green-700 bg-clip-text text-transparent font-bold text-2xl">
                  SUDS
                </h2>
              </div>
            </div>
            <p className="text-white mb-6">
              As we look toward the future, SUDS Technologies Ltd is committed
              to expanding its global footprint. We are investing heavily in
              AI-driven automation and sustainable tech practices. Our goal is
              to become the primary catalyst for digital evolution, helping the
              next generation of "Unicorn" startups and Fortune 500 companies
              build the foundations of tomorrow.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-[#4eca78] text-white p-3 rounded-full hover:bg-[#3db967] transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* More Links */}
            <div>
              <div className="mb-6">
                <h3 className="text-gray-400 font-medium mb-2">MORE LINKS</h3>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-[#4eca78] mr-2"></div>
                  <div className="h-px grow bg-gray-300"></div>
                </div>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-white hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-white hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-white hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-white hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Our Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-white hover:text-[#4eca78]"
                  >
                    <ChevronRight className="text-[#4eca78] mr-2" size={18} />
                    Who We Are?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
