/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#005c99",
          dark: "#094064",
          light: "#e1edff",
          teal: "#259ba3",
          green: "#266b4e",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
