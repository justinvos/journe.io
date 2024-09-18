/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["serif"],
    },
    extend: {
      colors: {
        primary: "#112C45",
        "primary-dark": "#0F263C",
      },
    },
  },
  plugins: [],
};
