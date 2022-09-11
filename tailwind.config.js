/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pinkblood": "#FC2357",
        "londonstreet": "#1E1D32"
      },
      fontFamily: {
        sans: ["Poppins"]
      },
      fontSize: {
        "extra": "10em"
      }
    },
  },
  plugins: [],
};
