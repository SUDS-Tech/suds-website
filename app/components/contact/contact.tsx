"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Form, FormErrors } from "./types";

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
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pt-14">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Information */}
          <div className="space-y-8 flex justify-center items-center flex-col card">
            <div className="space-y-4">
              <p className="text-emerald-500 font-medium tracking-wider uppercase text-sm">
                SAY HELLO
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get in touch with us
              </h1>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-emerald-500 font-medium mb-1">Call us now</p>
                  <p className="text-xl font-semibold text-white">
                    +256 757 212 246 / +256 701 521 269
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-emerald-500 font-medium mb-1">
                    Support email
                  </p>
                  <p className="text-xl font-semibold text-white">
                    info@suds-tech.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-emerald-500 font-medium mb-1">Our address</p>
                  <p className="text-xl font-semibold text-white">
                    Kampala, Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="relative rounded-2xl overflow-hidden card min-h-125">
            {/* Form content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8">Contact us</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium"
                  >
                    Your Name (required)
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    type="text"
                    className={`placeholder:text-gray-500 w-full h-12 px-4 py-2 bg-[#0a0a0a] border ${errors.name ? "border-red-500" : "border-gray-700"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white transition-all duration-200`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium"
                  >
                    Your Email (required)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email"
                    className={`placeholder:text-gray-500 w-full h-12 px-4 py-2 bg-[#0a0a0a] border ${errors.email ? "border-red-500" : "border-gray-700"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white transition-all duration-200`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium"
                  >
                    Your Message (required)
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    name="message"
                    rows={5}
                    className={`placeholder:text-gray-500 w-full px-4 py-2 bg-[#0a0a0a] border ${errors.message ? "border-red-500" : "border-gray-700"} rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white transition-all duration-200`}
                    placeholder="Enter your message here..."
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
                  <p className={`text-sm font-medium ${successMessage.includes('success') ? 'text-emerald-500' : 'text-red-500'}`}>
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
