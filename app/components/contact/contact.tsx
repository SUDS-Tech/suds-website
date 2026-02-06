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

  //handle submit  function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = handleValidate();

    if (isValid) {
      // Handle form submission
      setForm({ name: "", email: "", message: "" });
      setSuccessMessage("Form submitted successfully");
      setTimeout(() => {
        setSuccessMessage("");
      }, 800);
    } else {
      setSuccessMessage("Failed to submit form");
      setTimeout(() => {
        setSuccessMessage("");
      }, 800);
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-800 to-gray-950 relative overflow-hidden pt-14">
      <div className="mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Information */}
          <div className="space-y-8 flex justify-center items-center flex-col shadow-2xl shadow-cyan-800 rounded-xl py-2">
            <div className="space-y-4">
              <p className="text-teal-500 font-medium tracking-wider uppercase text-sm">
                SAY HELLO
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get in touch with us
              </h1>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-green-500 font-medium mb-1">Call us now</p>
                  <p className="text-xl font-semibold text-white">
                    +256 757 212 246 / +256 701 521 269
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-green-500 font-medium mb-1">
                    Support email
                  </p>
                  <p className="text-xl font-semibold text-white">
                    info@suds-tech.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-green-500 font-medium mb-1">Our address</p>
                  <p className="text-xl font-semibold text-white">
                    Kampala,Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden  min-h-125 shadow-2xl shadow-cyan-800">
            {/* Form content */}
            <div className="relative z-10 bg-transparent shadow-2xl shadow-blue-400 p-8 backdrop-blur-sm">
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
                    className={`placeholder:text-white w-full h-12 px-4 py-2 border-b ${errors.name ? "border-red-600" : "border-b-green-600"}  rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white`}
                  />
                  <p className="text-red-600">{errors.name}</p>
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
                    className={`placeholder:text-white w-full h-12 px-4 py-2 border-b ${errors.email ? "border-b-red-600" : "border-b-green-400"} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white`}
                  />
                  <p className="text-red-600">{errors.email}</p>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium"
                  >
                    Your Message(required)
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    name="message"
                    className={`placeholder:text-white w-full min-h-30 px-4 py-2 border-b ${errors.message ? "border-b-red-600" : "border-b-green-400"}  rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white`}
                    placeholder="Enter your message here..."
                  />
                  <p className="text-red-600">{errors.message}</p>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-linear-to-r from-green-600 to-green-950 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
                <p className="text-green-500 text-xl">{successMessage}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
