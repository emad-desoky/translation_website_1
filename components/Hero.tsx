import React, { useRef } from "react";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  // Example beam options
  const beamOptions = {
    initialX: 0,
    translateX: 0,
    initialY: -200,
    translateY: 1800,
    rotate: 0,
    duration: 8,
    delay: 0,
    repeatDelay: 0,
  };

  return (
    <BackgroundBeamsWithCollision
      containerRef={containerRef}
      parentRef={parentRef}
      className="relative min-h-screen flex items-center justify-center bg-gray-800"
    >
      <div className="relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-white">Welcome to </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            AlfaBeto Certified Translation
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-300 mb-8"
        >
          Your trusted partner in accurate and reliable translation services.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:via-violet-600 hover:to-pink-600 transition-all"
        >
          Get in Touch
        </motion.a>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
