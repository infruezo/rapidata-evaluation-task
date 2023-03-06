/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#FCFDFF",
          lightGreen: "#30C8C3",
          blue: "#2492E7",
          gray: "#D2E4EC",
          brown: "#8C6778",
          green: "#5FE1A0",
          blueGray: "#A3DFE2",
          mainBlue: "#006FFD",
          mainGreen: "#1CDAAC",
        },
      },
    },
  },
  plugins: [],
};
