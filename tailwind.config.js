/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#8789FE",
        // primary: "#bc02f9",
        highlight: "#aa2bff",
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar'),
  ],
};
