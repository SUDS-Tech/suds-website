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
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
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
      className="group relative p-2.5 bg-[#161b22] border border-gray-800 rounded-lg hover:border-emerald-500/50 transition-all duration-200"
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
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setEmail("");
        setMessage(data.message || "Thank you for subscribing!");
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }

      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Network error. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800">
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
            className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-200"
            aria-label="Email address for newsletter"
          />
        </div>
        <button
          onClick={handleSubscribe}
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
          {!isSubmitting && <ArrowUpRight className="w-4 h-4" />}
        </button>
        {message && (
          <p className={`text-xs font-medium ${message.includes("Thank") || message.includes("already") ? "text-emerald-500" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/17ZCFenDMb/",
      icon: (
        <Facebook
          size={18}
          className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200"
        />
      ),
    },
    {
      name: "X",
      href: "https://x.com/sudstech26",
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
      href: "https://www.linkedin.com/company/suds-technologies-ltd/",
      icon: (
        <Linkedin
          size={18}
          className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200"
        />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sudstechnologies?igsh=MW4yZmJiOGdmYWM2MA%3D%3D&utm_source=qr",
      icon: (
        <Instagram
          size={18}
          className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200"
        />
      ),
    },
   // {
   //   name: "Youtube",
    //  href: "https://youtube.com",
    //  icon: (
     //   <Youtube
    //      size={18}
    //      className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-200"
     //   />
    //  ),
  //  },
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
        { label: "Web Development", href: "/services#web-development" },
        { label: "Mobile Apps", href: "/services#mobile-app-development" },
        { label: "Cloud Solutions", href: "/services#cloud-solutions" },
        { label: "Custom Software", href: "/services#custom-software" },
        { label: "Consultancy", href: "/services#it-consultancy" },
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
    <footer className="relative w-full bg-[#0d1117] overflow-hidden border-t border-gray-800">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-3 space-y-6">
            <a href="/" className="flex items-center group w-fit bg-white/90 rounded-lg px-3 py-1.5 hover:bg-white transition-colors duration-200">
              <Image
                src="/logo.png"
                alt="SUDS Technologies Ltd"
                width={160}
                height={64}
                className="h-14 w-auto"
              />
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
            <a
              href="/"
              className="hover:text-emerald-500 transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="/"
              className="hover:text-emerald-500 transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="/"
              className="hover:text-emerald-500 transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161b22] border border-gray-800 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[#ABABAB] text-[10px] font-medium uppercase tracking-wider">
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
