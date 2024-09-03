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
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
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
