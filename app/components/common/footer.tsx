"use client";

import React, { useState, JSX } from "react";
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
  color: string;
}

interface FooterLink {
  label: string;
  href: string;
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
      className="group relative"
      aria-label={social.name}
    >
      <div
        className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 ${social.color}`}
      />
      <div className="relative p-2.5 bg-gray-800/80 border border-gray-700/50 rounded-full group-hover:border-emerald-500/50 transition-all duration-300 group-hover:-translate-y-1">
        {social.icon}
      </div>
    </a>
  );
};

const FooterLinkItem = ({ link }: FooterLinkItemProps) => {
  return (
    <li className="group">
      <a
        href={link.href}
        className="flex items-center text-gray-400 hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-1 text-sm"
      >
        <ChevronRight
          className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300"
          size={14}
        />
        {link.label}
      </a>
    </li>
  );
};

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      console.log("Newsletter subscription:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
      <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
        <Mail className="w-5 h-5 text-emerald-400" />
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
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300"
          />
        </div>
        <button
          onClick={handleSubscribe}
          className="group w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Subscribe
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
      icon: <Facebook size={18} className="text-white" />,
      color: "bg-blue-600",
    },
    {
      name: "X",
      href: "https://x.com",
      icon: (
        <svg
          className="w-[18px] h-[18px] text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "bg-black",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin size={18} className="text-white" />,
      color: "bg-blue-700",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram size={18} className="text-white" />,
      color: "bg-pink-600",
    },
    {
      name: "Github",
      href: "https://github.com",
      icon: <Github size={18} className="text-white" />,
      color: "bg-pink-600",
    },
     {
      name: "Youtube",
      href: "https://youtube.com",
      icon: <Youtube size={18} className="text-white" />,
      color: "bg-pink-600",
    },
  ];

  const footerSections: FooterSection[] = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services/web" },
        { label: "Mobile Apps", href: "/services/mobile" },
        { label: "Cloud Solutions", href: "/services/cloud" },
        { label: "Custom Software", href: "/services/custom-software" },
        { label: "Consultancy", href: "/services/consulting" },
        
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "Docs", href: "/docs" },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#0a0a0a] overflow-hidden border-t border-gray-800">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          
          <div className="lg:col-span-3 space-y-6">
            <a href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-black p-2 rounded-lg border border-gray-700">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  SUDS
                </h2>
                <p className="text-[10px] text-emerald-500 font-medium tracking-widest uppercase">
                  Technologies Ltd
                </p>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Engineering secure, unique, and durable digital solutions. We
              build the future of software with precision and creativity.
            </p>

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
                <MapPin className="w-4 h-4 text-emerald-500/70" />
                <span className="text-sm">Kampala, Uganda</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.name} social={social} />
                ))}
              </div>
            </div>
          </div>

          
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
            <a href="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-emerald-400 transition-colors">
              Terms
            </a>
            <a href="/cookies" className="hover:text-emerald-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>

        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 border border-gray-800 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-gray-600 text-[10px] font-medium uppercase tracking-wider">
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};


const ContactItem = ({ href, icon, text }: { href: string; icon: any; text: string }) => (
  <a
    href={href}
    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
  >
    <span className="text-emerald-500/70 group-hover:text-emerald-400 transition-colors">
      {icon}
    </span>
    <span className="text-sm">{text}</span>
  </a>
);

export default Footer;