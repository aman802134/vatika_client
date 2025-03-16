import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "/Logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#344e41] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="VATIKA Logo"
                className="h-12 w-12 rounded-full animate-spin"
              />
              <h2 className="text-2xl font-serif font-bold text-[#cef0d3]">
                VATIKA
              </h2>
            </div>
            <p className="text-sm font-sans text-[#C9CEBD]">
              Bringing nature into your home since 2020. We offer a wide variety
              of indoor and outdoor plants, flowers, gardening supplies, and
              expert advice.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                to="https://facebook.com"
                className="hover:text-[#cef0d3] transition-colors duration-300 animate-pulse"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="https://twitter.com"
                className="hover:text-[#cef0d3] transition-colors duration-300 animate-pulse"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                to="https://instagram.com"
                className="hover:text-[#cef0d3] transition-colors duration-300 animate-pulse"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://pinterest.com"
                className="hover:text-[#cef0d3] transition-colors duration-300 animate-pulse"
              >
                <FaPinterest size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[#cef0d3]">
              Quick Links
            </h3>
            <ul className="space-y-2 font-sans">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[#cef0d3]">
              Our Services
            </h3>
            <ul className="space-y-2 font-sans">
              <li>
                <Link
                  to="/services/plant-care"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Plant Care Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/services/landscape-design"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/garden-maintenance"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Garden Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/plant-delivery"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Plant Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/services/custom-bouquets"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Custom Bouquets
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consultations"
                  className="hover:text-[#cef0d3] transition-colors duration-300"
                >
                  Plant Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-[#cef0d3]">
              Contact Us
            </h3>
            <ul className="space-y-3 font-sans">
              <li className="flex items-start space-x-3">
                <MdLocationOn className="text-[#cef0d3] text-xl flex-shrink-0 mt-1" />
                <span>
                  123 Green Avenue, Botanical Garden, Plant City - 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <MdPhone className="text-[#cef0d3] text-xl flex-shrink-0" />
                <span>+91 987 654 3210</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail className="text-[#cef0d3] text-xl flex-shrink-0" />
                <span>info@vatika.com</span>
              </li>
              <li className="pt-4">
                <h4 className="font-medium mb-2">Opening Hours:</h4>
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#12664F] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-serif font-semibold text-white">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-[#C9CEBD]">
                Get updates on new plants, care tips, and exclusive offers
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800 font-sans bg-yellow-50"
                />
                <button
                  type="submit"
                  className="bg-[#4c956c] hover:bg-[#cef0d3] hover:text-[#344e41] text-white px-4 py-2 rounded-r-md transition-colors duration-300 font-sans"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#1b2921] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#C9CEBD]">
            <p>
              &copy; {new Date().getFullYear()} VATIKA. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                to="/privacy-policy"
                className="hover:text-[#cef0d3] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-[#cef0d3] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/shipping-policy"
                className="hover:text-[#cef0d3] transition-colors duration-300"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
