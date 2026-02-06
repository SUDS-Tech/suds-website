"use client";

import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Zap,
  ArrowUpRight,
} from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialIconProps {
  social: SocialLink;
}

interface FooterLinkItemProps {
  link: FooterLink;
}

const SocialIcon = ({ social }: SocialIconProps) => {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-2.5 bg-[#111111] border border-gray-800 rounded-lg hover:border-emerald-500/50 transition-all duration-200"
      aria-label={social.name}
    >
      {social.icon}
    </a>
  );
};

const FooterLinkItem = ({ link }: FooterLinkItemProps) => {
  return (
    <li className="group">
      <a
        href={link.href}
        className="flex items-center text-gray-400 hover:text-emerald-500 transition-all duration-200 group-hover:translate-x-1 text-sm"
      >
        <ChevronRight
          className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200"
          size={14}
        />
        <p>{link.label}</p>
      </a>
    </li>
  );
};

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
      <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
        <Mail className="w-5 h-5 text-emerald-500" />
        Stay Updated
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        Join our newsletter for the latest tech insights.
      </p>
      <div className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-200"
          />
        </div>
        <button
          onClick={handleSubscribe}
          className="btn-primary w-full"
        >
          Subscribe
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: <Facebook size={18} className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" />,
    },
    {
      name: "X",
      href: "https://x.com",
      icon: (
        <svg
          className="w-4.5 h-4.5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin size={18} className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram size={18} className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" />,
    },
    {
      name: "Github",
      href: "https://github.com",
      icon: <Github size={18} className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" />,
    },
    {
      name: "Youtube",
      href: "https://youtube.com",
      icon: <Youtube size={18} className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me",
      icon: (
        <svg
          className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  const footerSections: FooterSection[] = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers (hiring soon)" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services" },
        { label: "Mobile Apps", href: "/services" },
        { label: "Cloud Solutions", href: "/services" },
        { label: "Custom Software", href: "/services" },
        { label: "Consultancy", href: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Projects" },
        { label: "Case Studies" },
        { label: "Blog" },
        { label: "Docs" },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#0a0a0a] overflow-hidden border-t border-gray-800">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-3 space-y-6">
            <a href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative bg-[#111111] p-2 rounded-lg border border-gray-800 group-hover:border-emerald-500/50 transition-colors duration-200">
                <Zap className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-emerald-500 tracking-tight">
                  SUDS
                </h2>
                <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                  Technologies Ltd
                </p>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Engineering secure, unique, and durable digital solutions. We
              build the future of software with precision and creativity.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-2">
              <ContactItem
                href="mailto:info@suds-tech.com"
                icon={<Mail className="w-4 h-4" />}
                text="info@suds-tech.com"
              />
              <ContactItem
                href="tel:+256757212246"
                icon={<Phone className="w-4 h-4" />}
                text="+256 757 212 246"
              />
              <ContactItem
                href="tel:+256701521269"
                icon={<Phone className="w-4 h-4" />}
                text="+256 701 521 269"
              />
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Kampala, Uganda</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.name} social={social} />
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <FooterLinkItem key={link.label} link={link} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <NewsletterSection />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SUDS Technologies Ltd.</p>

          <div className="flex gap-6">
            <a href="/" className="hover:text-emerald-500 transition-colors duration-200">
              Privacy
            </a>
            <a href="/" className="hover:text-emerald-500 transition-colors duration-200">
              Terms
            </a>
            <a href="/" className="hover:text-emerald-500 transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-gray-800 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-gray-600 text-[10px] font-medium uppercase tracking-wider">
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const ContactItem = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) => (
  <a
    href={href}
    className="flex items-center gap-3 text-gray-400 hover:text-emerald-500 transition-colors duration-200 group"
  >
    <span className="text-emerald-500/70 group-hover:text-emerald-500 transition-colors">
      {icon}
    </span>
    <span className="text-sm">{text}</span>
  </a>
);

export default Footer;
