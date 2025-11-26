"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Phone, Mail, MapPin, Building } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For mobile allow digits, plus sign, spaces and dashes
    if (name === "mobile") {
      const cleanedValue = value.replace(/[^\d+\s-]/g, ""); // keep digits, +, spaces, dashes
      setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // normalize digits (strip non-digits)
  const normalizeDigits = (str) => str.replace(/\D/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    // Basic validation
    if (!formData.name.trim()) {
      setStatus("error");
      setMessage("Please enter your name.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.mobile.trim()) {
      setStatus("error");
      setMessage("Please enter your phone number.");
      return;
    }

    // Accept:
    // - 10 digits (9876543210)
    // - +<countryCode><10digits>  or +<countryCode> <10digits>  e.g. +91 9876543210
    // We'll validate by checking total digits between 10 and 15
    const digitsOnly = normalizeDigits(formData.mobile);
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      setStatus("error");
      setMessage(
        "Please enter a valid phone number (with optional country code). Example: +91 9876543210 or 9876543210."
      );
      return;
    }

    if (!formData.description.trim()) {
      setStatus("error");
      setMessage("Please enter a description.");
      return;
    }

    // Build payload: standardize mobile to +<digits> (if starts with + keep, else if digits only and length 10 keep as-is)
    let finalMobile = formData.mobile.trim();
    if (finalMobile.startsWith("+")) {
      // remove spaces/dashes but keep leading +
      const d = normalizeDigits(finalMobile);
      finalMobile = `+${d}`;
    } else {
      // keep as digits (if 10 digits, keep 10-digit form; if longer, add + and digits)
      const d = digitsOnly;
      finalMobile = d.length === 10 ? d : `+${d}`;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: finalMobile,
      description: formData.description.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! Your enquiry has been submitted.");
        setFormData({ name: "", email: "", mobile: "", description: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Page Header */}
      <PageHeader title="Contact Us" />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Enquiry Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send an Enquiry
            </h2>

            {/* Status Banner */}
            {status && status !== "submitting" && (
              <div
                className={`mb-4 px-4 py-3 rounded ${
                  status === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Phone (e.g., +91 9876543210)"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <Building className="text-blue-900 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Factory Address</p>
                <p className="text-gray-700">
                  Khushi Stone <br />
                  52/3, Devaganahalli Village, Devanhalli Taluk, <br />
                  Bangalore Rural, Karnataka, India - 562110
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-900 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Phone</p>

                <a
                  href="tel:+918105979801"
                  className="text-gray-700 hover:text-blue-900 block"
                >
                  +91 81059 79801
                </a>

                <a
                  href="tel:+918861079069"
                  className="text-gray-700 hover:text-blue-900 block"
                >
                  +91 88610 79069
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-900 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <a
                  href="mailto:khushistone2012@gmail.com"
                  className="text-gray-700 hover:text-blue-900"
                >
                  khushistone2012@gmail.com
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-900 mt-1" />
              <div className="w-full h-48 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.676942823893!2d77.64486907462201!3d13.245579308813172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e1cc3cf37e85%3A0xbf74880632c68065!2sKhushi%20Stone!5e0!3m2!1sen!2sin!4v1759919686046!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
