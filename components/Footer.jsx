import React from "react";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const router = useRouter();

  // Handler for navigation
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-950 text-gray-800 dark:text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Contact Section */}
          <div className="mb-8 md:mb-0 w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm mb-2">
              Feel free to reach out to us anytime.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 px-3 py-1 rounded-full text-white hover:bg-green-600 transition duration-300 text-sm w-40 justify-center"
            >
              <FaWhatsapp className="mr-2" size={14} />
              <span className="text-center">Chat with us</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Info */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-xs mt-8">
          <p>© 2024 Alfabeto Certified Translation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
