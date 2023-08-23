/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4C020E",
      },
      screens: {
        phone: "400px",
      },
    },
  },
  plugins: [],
};
