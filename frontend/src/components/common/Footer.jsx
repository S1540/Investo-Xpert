import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Footer Grid.... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <img
              src="https://www.investoxpert.com/_next/image?url=%2FIX-white-logo.png&w=384&q=75"
              alt="Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm leading-relaxed mb-4">
              Helping you find your ideal property with trusted guidance and
              real estate expertise.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-pink-500 mt-1" />
                Sector 62, Noida, UP – 201301
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-pink-500" />
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 xxxxxxxxxx
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-pink-500" />
                <a
                  href="mailto:info@investoxpert.com"
                  className="hover:text-white"
                >
                  info@investoxpert.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} InvestoXpert. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
