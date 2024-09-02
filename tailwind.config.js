/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "nav-link-dark": "#666666", // Darker color for nav links
      },
      backgroundImage: {
        "gradient-navbar":
          "linear-gradient(to right, #8e2f6b 0%, #7c4d9a 50%, #6f2e6f 100%)",
      },
      backgroundSize: {
        "300%": "300% 300%", // Larger size for smoother animation
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animate-gradient": {
          backgroundImage:
            "linear-gradient(to right, #8e2f6b 0%, #7c4d9a 50%, #6f2e6f 100%)",
          backgroundSize: "300% 300%", // Larger size for smoother animation
          animation: "gradientAnimation 20s ease infinite", // Adjusted for smoother effect
        },
        "@keyframes gradientAnimation": {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      });
    },
  ],
};
