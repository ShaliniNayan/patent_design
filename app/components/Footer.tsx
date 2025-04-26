import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 border-t mt-12 text-sm">
      {/* Navigation Links */}
      <nav className="space-x-4 mb-4">
        {["Home", "About", "Contact", "Gallery"].map((item) => (
          <Link
            key={item}
            href={`/${item === "Home" ? "" : item.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="text-gray-600 space-y-1 mb-4">
        <p className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-blue-600" />
          <a
            href="https://maps.google.com?q=123+Innovation+Lane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 transition duration-300"
          >
            123 Innovation Lane, Design City, IN 45678
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-blue-600" />
          <a
            href="tel:+15551234567"
            className="hover:underline hover:text-blue-600 transition duration-300"
          >
            +1 (555) 123-4567
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <a
            href="mailto:contact@patentdesign.com"
            className="hover:underline hover:text-blue-600 transition duration-300"
          >
            contact@patentdesign.com
          </a>
        </p>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-4 text-blue-600 mb-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
          aria-label="Facebook"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
          aria-label="Instagram"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={18} />
        </a>
      </div>

      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} PatentDesign. All rights reserved.
      </p>
    </footer>
  );
}
