"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
    <a
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
    </a>
  );
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
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
          <a href="/" className="flex items-center group bg-white/90 rounded-lg px-3 py-1.5 hover:bg-white transition-colors duration-200">
            <Image
              src="/logo.png"
              alt="SUDS Technologies Ltd"
              width={160}
              height={64}
              priority
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLinkItem key={link.label} link={link} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="/contact" className="btn-primary">
              Get Started
            </a>
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
          </div>

          <div
            className={`
              transform transition-all duration-300
              ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }
            `}
          >
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="btn-primary w-full justify-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
