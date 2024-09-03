import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-950 text-gray-800 dark:text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-gray-900 dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl flex flex-col md:flex-row md:space-x-8 w-full md:w-3/4 mx-auto">
          {/* Left Side */}
          <div className="md:w-[55%] flex flex-col items-start space-y-6">
            <div className="flex space-x-3 mb-6">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            </div>
            <h2 className="text-3xl font-extrabold mb-6">Chat to Our Team</h2>
            <form className="space-y-6">
              {[
                "First Name",
                "Last Name",
                "Email",
                "Phone Number",
                "Number of Documents",
              ].map((label) => (
                <div key={label}>
                  <label
                    htmlFor={label.toLowerCase().replace(/\s+/g, "-")}
                    className="block text-sm font-semibold text-gray-300"
                  >
                    {label}
                  </label>
                  <input
                    type={
                      label === "Email"
                        ? "email"
                        : label === "Phone Number"
                        ? "tel"
                        : "text"
                    }
                    id={label.toLowerCase().replace(/\s+/g, "-")}
                    className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ))}
              <div className="flex items-center space-x-6">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded"
                />
                <label htmlFor="checkbox1" className="text-sm text-gray-300">
                  Option 1
                </label>
              </div>
              <div className="flex items-center space-x-6">
                <input
                  type="checkbox"
                  id="checkbox2"
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded"
                />
                <label htmlFor="checkbox2" className="text-sm text-gray-300">
                  Option 2
                </label>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500"
              >
                Get in Touch
              </button>
            </form>
          </div>

          {/* Right Side */}
          <motion.div
            className="md:w-[45%] flex flex-col items-center md:items-start mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative bg-gray-800 rounded-lg p-6 shadow-lg w-full h-full"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/translator.png"
                alt="Company Logo"
                width={120}
                height={120}
                className="absolute top-4 right-4"
              />
              <img
                src="/hero.jpg"
                alt="Contact Us"
                className="w-full h-auto object-cover rounded-lg border border-gray-700"
              />
              <div className="text-center mt-4">
                <p className="text-lg font-semibold text-gray-300">
                  More Features
                </p>
              </div>
            </motion.div>
            <div className="text-center md:text-left mt-6">
              <p className="text-xl font-extrabold text-gray-300">
                Your Company Name
              </p>
              <p className="text-md text-gray-400">Owner: Your Name</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
