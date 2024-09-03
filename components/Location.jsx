import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center py-12 bg-gradient-to-r from-blue-900 to-purple-900 space-y-8 md:space-y-0 md:space-x-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Map Section */}
      <motion.div
        className="w-full md:w-1/2 max-w-3xl p-6 bg-white shadow-2xl rounded-xl overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.7401693454184!2d-104.89208368459286!3d39.60668177945741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c79950489b0f3%3A0x6a2a1d1e90cc0a67!2s5670%20Greenwood%20Plaza%20Blvd%2C%20Suite%20404%2C%20Greenwood%20Village%2C%20CO%2080111!5e0!3m2!1sen!2sus!4v1615924819167!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
          className="rounded-xl"
        ></iframe>
      </motion.div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 max-w-3xl p-6 bg-white shadow-2xl rounded-xl flex flex-col justify-between space-y-6">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Our Office</h2>
          <p className="mt-2 text-gray-600">
            Visit us at our office located at 5670 Greenwood Plaza Blvd, Suite
            404, Greenwood Village, CO 80111. We're open from Monday to Friday,
            9 AM to 5 PM.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Location;
