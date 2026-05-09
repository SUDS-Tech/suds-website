"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavLinkItemProps {
  link: NavLink;
  onClick?: () => void;
  isMobile?: boolean;
}

export function NavLinkItem({
  link,
  onClick,
  isMobile = false,
}: NavLinkItemProps) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={`
        relative group px-4 py-2 rounded-lg transition-all duration-200
        hover:bg-emerald-500/10
        ${isMobile ? "w-full text-center" : ""}
      `}
    >
      <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-200 py-6">
        {link.label}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-200" />
    </Link>
  );
}

// Dropdown component for Services
function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)}>
      <button
        className={`
          relative group px-4 py-2 rounded-lg transition-all duration-200
          hover:bg-emerald-500/10 text-gray-300 hover:text-white
        `}
      >
        <Link href={"/services"} className="relative z-10">
          Our Services
        </Link>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-200" />
      </button>
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 mt-1 w-56 bg-[#0d1117] border border-gray-800 rounded-lg shadow-lg overflow-hidden z-20"
        >
          <Link
            href="/services/web"
            className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-white transition-colors"
          >
            Web Development
          </Link>
          <Link
            href="/services/mobile"
            className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-white transition-colors"
          >
            Mobile Apps
          </Link>
          <Link
            href="/services/customsoftware"
            className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-white transition-colors"
          >
            Custom Software
          </Link>
          <Link
            href="/services/devops"
            className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-white transition-colors"
          >
            DevOps
          </Link>
          <Link
            href="/services/ITConsultancy"
            className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-white transition-colors"
          >
            IT Consultancy
          </Link>
          <Link
            href="/services/softwareInnovation"
            className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-white transition-colors"
          >
            Software Innovation
          </Link>
        </div>
      )}
    </div>
  );
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // "Our Services" handled separately in JS
    { label: "Our Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-200 p-3
        ${
          scrolled
            ? "bg-[#0d1117]/95 backdrop-blur-sm border-b border-gray-800/50"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group px-3 py-1.5 hover:text-white transition-colors duration-200"
          >
            <Image
              src="/logo.png"
              alt="SUDS Tech Company Ltd"
              width={160}
              height={64}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLinkItem key={link.label} link={link} />
            ))}
            <ServicesDropdown />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-[#161b22] border border-gray-800 hover:border-emerald-500/50 transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-emerald-500" />
            ) : (
              <Menu className="w-6 h-6 text-emerald-500" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden fixed inset-0 top-16 bg-[#0d1117]/98 backdrop-blur-sm
          transition-all duration-200 ease-in-out
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="mx-auto px-4 py-8 bg-[rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-6 mb-8">
            {/* Standard links */}
            {navLinks.map((link, index) => (
              <div
                key={link.label}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
                className={`
                  transform transition-all duration-200
                  ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }
                `}
              >
                <NavLinkItem
                  link={link}
                  onClick={handleLinkClick}
                  isMobile={true}
                />
              </div>
            ))}
            {/* Services sub‑links for mobile */}
            <div
              style={{
                transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
              }}
              className={`
                transform transition-all duration-200 flex flex-col gap-3
                ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }
              `}
            >
              <div className="text-gray-400 font-medium px-4 py-2">
                Our Services
              </div>
              <Link
                href="/services/web"
                onClick={handleLinkClick}
                className="pl-8 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="/services/mobile"
                onClick={handleLinkClick}
                className="pl-8 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Mobile Apps
              </Link>
              <Link
                href="/services/devops"
                onClick={handleLinkClick}
                className="pl-8 py-2 text-gray-300 hover:text-white transition-colors"
              >
                DevOps
              </Link>
              <Link
                href="/services/ITConsultancy"
                onClick={handleLinkClick}
                className="pl-8 py-2 text-gray-300 hover:text-white transition-colors"
              >
                IT Consultancy
              </Link>
              <Link
                href="/services/softwareInnvation"
                onClick={handleLinkClick}
                className="pl-8 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Software Innovation
              </Link>
              <Link
                href="/services/customsoftware"
                onClick={handleLinkClick}
                className="pl-8 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Custom Software
              </Link>
            </div>
          </div>

          <div
            className={`
              transform transition-all duration-300
              ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }
            `}
          >
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="btn-primary w-full justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
