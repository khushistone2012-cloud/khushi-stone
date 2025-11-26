
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-100 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+918105979801" className="hover:text-white">
                +91 81059 79801
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+918861079069" className="hover:text-white">
                +91 88610 79069
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:khushistone2012@gmail.com" className="hover:text-white">
               khushistone2012@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <a
                href="https://maps.google.com/?q=Khushi+Stone+Factory"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Khushi Stone ,  
                Sy no. 52/3, Devaganahalli Village,Devanahalli Taluk,
                Bangalore Rural,<br/>Karnataka,India 
                562110
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/khushi_stone2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561041795512"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Khushi Stone. All rights reserved. |{" "}
        <Link href="/terms" className="hover:text-white underline">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
