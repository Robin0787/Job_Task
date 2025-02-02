/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#441355",
        secondary: "#4A4A4B",
      },
    },
  },
  plugins: [daisyui],
};
