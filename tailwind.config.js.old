const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "390px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "light-bg": "#e2e8f0",
        "dark-copy": "#374151",
        "light-copy": "#d1d5db",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        noto: ["var(--font-noto)", "sans-serif"],
        bebas: ["var(--font-bebas)", "cursive"],
        bauhaus: ["var(--font-bauhaus)", "sans-serif"],
      },
      aspectRatio: {
        "member-grid": "44 / 90",
        "member-swatch": "22 / 45",
      },
    },
  },
  plugins: [],
};
