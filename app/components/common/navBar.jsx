"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <nav className="flex items-center justify-between bg-linear-to-b from-gray-800 to-gray-950 text-white text-xl sm:text-2xl py-4 px-4 sm:px-8 ">
        {/* Logo */}
        <div className="border-b border-b-white rounded-sm">
          <p className="bg-linear-to-r from-green-300 to-green-700 bg-clip-text text-transparent font-bold text-2xl">
            SUDS
          </p>
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex justify-center items-center gap-8">
          <Link href="/" className="hover:text-teal-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-200 transition-colors">
            About
          </Link>
          {/* <Link
            href="/services"
            className="hover:text-teal-200 transition-colors"
          >
            Services
          </Link> */}
          <Link
            href="/contact"
            className="hover:text-teal-200 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-gray-900 text-white text-xl flex flex-col items-center gap-4 py-4">
          <Link
            href="/"
            onClick={toggleMenu}
            className="hover:text-teal-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="hover:text-teal-200 transition-colors"
          >
            About
          </Link>
          {/* <Link
            href="/services"
            onClick={toggleMenu}
            className="hover:text-teal-200 transition-colors"
          >
            Services
          </Link> */}
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="hover:text-teal-200 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
