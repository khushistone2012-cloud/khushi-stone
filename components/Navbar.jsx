"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MessageCircle } from "lucide-react"; // ✅ WhatsApp icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  const logoSrc = "/logo-new.png";

  // Pages that have a hero image (no extra padding)
  const heroPages = ["/about", "/services", "/gallery", "/contact", "/terms"];
  const needsPadding = !heroPages.includes(pathname);

  // WhatsApp setup
  const waNumber = "918105979801"; // No + sign, no spaces
  const waMessage =
    "Hello Khushi Stone, I would like to enquire about your granite products.";
  const whatsappLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-6 py-4 md:py-5 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Khushi Stone Logo"
              width={220}
              height={70}
              className="h-14 md:h-18 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/gallery" && pathname.startsWith("/gallery/"));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-medium text-lg text-blue-900 hover:text-red-600 transition-colors duration-200 ${
                      isActive
                        ? "after:block after:w-full after:h-0.5 after:bg-red-600 after:absolute after:-bottom-1 after:left-0"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Email Button */}
            <a
              href="mailto:khushistone2012@gmail.com"
              className="ml-6 px-4 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
            >
              Reach Out to Us
            </a>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center flex-1 justify-between">
            {/* Center: WhatsApp CTA */}
            <div className="flex-1 flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full font-medium text-sm shadow-md transition-all"
              >
                <MessageCircle size={18} />
                <span>Whatsapp Us</span>
              </a>
            </div>

            {/* Right: Hamburger */}
            <button
              className="text-blue-900 focus:outline-none text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-medium text-lg text-blue-900 hover:text-red-600 transition-colors duration-200 ${
                    isActive ? "border-l-4 border-red-600 pl-2" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      {/* Add top spacing only for pages that need it */}
      {needsPadding && <div className="pt-28 md:pt-32"></div>}
    </>
  );
}
