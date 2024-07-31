/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",

  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#101010",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
        '0 35px 35px rgba(0, 0, 0, 0.25)',
        '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },
  },
  plugins: [],
};