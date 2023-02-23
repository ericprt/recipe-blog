/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        playfairDisplay: "'Playfair Display', serif",
      },
    },
  },
  plugins: [],
};
