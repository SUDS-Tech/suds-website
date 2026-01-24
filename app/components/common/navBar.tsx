"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
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
  const [servicelinks, setservicelinks] = useState<boolean>(false);

  const handleServiceLinks = () => {
    setservicelinks(!servicelinks);
  };
  return (
    <a
      href={link.href}
      onClick={onClick}
      className={`
        relative group px-4 py-2 rounded-lg transition-all duration-300
        hover:bg-emerald-500/10
        ${isMobile ? "w-full text-center" : ""}
      `}
    >
      <span className="relative z-10 flex items-center gap-1">
        <p
          className={`${link.label === "Services" ? "text-green-400" : "text-white"}`}
        >
          {link.label}
        </p>
        <p></p>

        {link.hasDropdown && <ChevronDown className="w-4 h-4 text-white" />}
      </span>

      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [services, setServices] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
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
  //service display function
  const handleServices = () => {
    setServices(!services);
  };
  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-emerald-500/5"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-blue-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900 p-2 rounded-lg border border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors duration-300">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                SUDS
              </h1>
              <p className="text-xs text-gray-400 tracking-wider">
                TECHNOLOGIES LTD
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLinkItem key={link.label} link={link} />
            ))}

            {/****service dropdown */}
            {navLinks.map((navlink, index) => {
              return (
                <div key={index}>
                  {navlink.label === "services" && (
                    <div className="bg-green-400 h-64 w-64">
                      <p className="text-white">Web Application Development</p>
                      <p>Mobile Application Development</p>
                      <p>Custom Software Solutions</p>
                      <p>IT Consultancy & Digital Strategy</p>
                      <p>DevOps & Cloud Engineering</p>
                      <p>Software Innovation Lab</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <a
              href="/contact"
              className="group relative px-6 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-gray-800/50 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-emerald-400" />
            ) : (
              <Menu className="w-6 h-6 text-emerald-400" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`
          lg:hidden fixed inset-0 top-20 bg-gray-900/95 backdrop-blur-xl
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="mx-auto px-4 py-8 bg-[rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link, index) => (
              <div
                key={link.label}
                className={`
                  transform transition-all duration-300 delay-${index * 100}
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
              transform transition-all duration-500
              ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }
            `}
          >
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="block w-full py-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-center font-semibold rounded-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow duration-300"
            >
              Get Started
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-center gap-6 text-gray-400">
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
