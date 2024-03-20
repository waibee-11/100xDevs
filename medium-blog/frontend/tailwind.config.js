/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        meds: ["Noto Serif Display", "serif"],
        lora: ["Lora", "serif"],
        inter: ["Inter Tight", "sans-serif"],
      }
    },
  },
  plugins: [],
}