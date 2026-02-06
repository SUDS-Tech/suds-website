"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Form, FormErrors } from "./types";
import ParticleBackground from "../Homepage/particle-background";

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidate = () => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 5) {
      newErrors.name = "Name must be more than 5 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Message validation
    if (!form.message) {
      newErrors.message = "Please enter a message";
    } else if (form.message.length < 2) {
      newErrors.message = "Message is too short";
    }

    setErrors(newErrors);

    // Return whether form is valid
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  //handle submit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = handleValidate();

    if (isValid) {
      // Handle form submission
      setForm({ name: "", email: "", message: "" });
      setSuccessMessage("Form submitted successfully");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      setSuccessMessage("Failed to submit form");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] relative overflow-hidden pt-20">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-500 text-sm font-medium tracking-wider">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left side - Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Call us</p>
                    <p className="text-white font-medium text-sm">+256 757 212 246</p>
                    <p className="text-white font-medium text-sm">+256 701 521 269</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email us</p>
                    <p className="text-white font-medium text-sm">info@suds-tech.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Visit us</p>
                    <p className="text-white font-medium text-sm">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="card bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 border-emerald-500/20">
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-gray-400 text-sm">We typically respond within 24 hours during business days.</p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-span-3 card">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-medium"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  type="text"
                  className={`placeholder:text-gray-500 w-full h-12 px-4 py-2 bg-[#0d1117] border ${errors.name ? "border-red-500" : "border-gray-700"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white transition-all duration-200`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="john@example.com"
                  className={`placeholder:text-gray-500 w-full h-12 px-4 py-2 bg-[#0d1117] border ${errors.email ? "border-red-500" : "border-gray-700"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white transition-all duration-200`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  name="message"
                  rows={6}
                  className={`placeholder:text-gray-500 w-full px-4 py-3 bg-[#0d1117] border ${errors.message ? "border-red-500" : "border-gray-700"} rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white transition-all duration-200`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
              {successMessage && (
                <p className={`text-sm font-medium text-center ${successMessage.includes('success') ? 'text-emerald-500' : 'text-red-500'}`}>
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
