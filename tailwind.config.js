/** @type {import('tailwindcss').Config} */

export default {
  content: [
    ".src/**/*.{html,js,jsx,tsx,css,scss}",
    "./scss/index.scss",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      fontWeight: {
        medium: "500",
        bold: "700",
      },
      colors: {
        DarkBlue: "#290f57a8",
        BlueWhite: "#e9e9fb",
        WhiteGray: "#d6dbe6f5",
        Gray: "#9eafc2",
        LightGray: "#6d7f97",
        DarkGray: "#48556a",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
    },
  },

  plugins: [],
};
