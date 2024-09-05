import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const router = useRouter();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scroll down
      setShowNavbar(false);
    } else {
      // Scroll up
      setShowNavbar(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <motion.nav
      className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white p-4 shadow-lg animate-gradient fixed w-full top-0 left-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      transition={{ opacity: { duration: 0.5 } }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <motion.img
            src="/translator.png"
            alt="Logo"
            className="h-8"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
          <span className="text-xl font-bold text-white">
            Alf<span className="text-blue-300">a</span>
            <span className="text-purple-300"> Beto</span>
          </span>
        </div>

        {/* Tagline */}
        <div className="hidden lg:flex text-gray-300 text-sm italic font-light mx-auto">
          Bridging Languages, Connecting Cultures
        </div>

        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links, Language Switcher, and Quote Button */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 lg:items-center lg:ml-auto lg:mt-0 mt-2 w-full lg:w-auto`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((link) => (
            <motion.div
              key={link.name}
              className="nav-link text-lg font-semibold text-gray-300 block lg:inline-block mt-2 lg:mt-0 px-3 py-1 rounded-full"
              whileHover={{
                color: "#ffffff",
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "9999px", // Full rounding
              }}
              transition={{ duration: 0.2 }}
              onClick={() => router.push(link.path)}
            >
              {link.name}
            </motion.div>
          ))}

          {/* Language Switcher */}
          <select className="bg-transparent text-gray-300 border-none outline-none text-lg font-semibold block lg:inline-block mt-2 lg:mt-0 hover:text-white transition-colors duration-200 rounded-full">
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>

          {/* Quote Button */}
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-full font-semibold ml-4 block lg:inline-block mt-2 lg:mt-0"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4c51bf",
              borderRadius: "9999px", // Full rounding
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get a Quote
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
