/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: "#100F0F",
          secondary: "#282A3A",
          accent: "#C69749",
          info: '#285430',
          error: '#CF0A0A'
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}