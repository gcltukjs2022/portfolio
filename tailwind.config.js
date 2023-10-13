/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        grey: "#252934",
      },
      keyframes: {
        slide: {
          "0%": { top: "20%", opacity: 1 },
          "50%": { top: "50%", opacity: 1 },
          "100%": { top: "70%", opacity: 0 },
        },
      },
      animation: {
        "slide-down": "slide 1s linear infinite",
      },
      backgroundImage: {
        hero: "url('./assets/heroBg.png')",
      },
    },
  },
  plugins: [],
};
