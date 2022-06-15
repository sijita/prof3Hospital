/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#4ADE80",
          "primary-focus": "#3ED074",
          secondary: "#86EFAC",
          "secondary-hover": "#97FEBC",
        },
      },
    ],
  },
};
