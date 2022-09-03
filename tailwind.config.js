/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pinkblood": "#FC2357"
      },
      fontFamily: {
        sans: ["Poppins"]
      }
    },
  },
  plugins: [],
};
