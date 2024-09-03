import React from "react";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none space-y-8 text-center text-2xl sm:text-3xl md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          ALFABETO FOR TRANSLATING SERVICES
        </p>
        <div className="pointer-events-auto w-full max-w-md px-4">
          <form className="flex flex-col items-center space-y-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
              Sign up to receive our latest offers and newsletters.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:flex-1 px-4 py-2 text-base sm:text-lg md:text-xl text-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 text-base sm:text-lg md:text-xl bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
