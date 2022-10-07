/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "myrp-dark": "#09263B",
        "myrp-light": "#3D596B",
        "myrp-button": "#00BCE4",
        "myrp-secondary": "#48BCD4",
        "myrp-tertiary": "#224257",
      },
    },
  },
  plugins: [],
};
