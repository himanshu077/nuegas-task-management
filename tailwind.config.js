/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xxs: "320px", // => @media (min-width: 375px) { ... }
      xs: "480px", // => @media (min-width: 480px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      mob: "991px",
      tab: "1024px",
      lg: "1280px",
      "4xl": "1440px",
      "5xl": "1580px",
      "6xl": "1680px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
