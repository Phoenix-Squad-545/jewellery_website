/** @type {import('tailwindcss').Config} */

import { defineConfig } from "tailwindcss";

export default defineConfig({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        gold: "#b8975a",
        "gold-light": "#d4b47a",
        charcoal: "#2c2c2c",
        offwhite: "#f8f6f2",
        warmgrey: "#e8e4de",
      },

      keyframes: {

        load: {
          "0%": { width: "0%", opacity: "1" },
          "80%": { width: "100%", opacity: "1" },
          "100%": { width: "100%", opacity: "0" },
        },

        dotPop: {
          "0%,100%": {
            opacity: "0.25",
            transform: "scale(1)"
          },

          "50%": {
            opacity: "1",
            transform: "scale(1.6)"
          },
        },

      },

      animation: {
        load: "load 3s ease-in-out infinite",
        dotPop: "dotPop 1.5s ease-in-out infinite",
      },

    },
  },

  plugins: [],

});