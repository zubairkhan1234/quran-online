/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        lightCream: "#f6f4f0",
        grayBlue: "#b8bdc9",
        white: "#ffffff",
        darkGray1: "#1e1e1e",
        darkGray2: "#1f1f1f",
        offWhite: "#fefefe",
        softGray: "#f1f2ed",
        green: "#659a68",
        paleGray: "#f2f3ee",
        beige: "#f7f5f1",
        darkGray3: "#1d1d1d",
        charcoal: "#202320",
      },
    },
  },
  plugins: [],
};
