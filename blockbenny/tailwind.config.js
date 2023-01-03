/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      text: {
        title: "font-size: 2.25rem; line-height: 2.5rem;",
      },
      colors: {
        bgTL: "#000000",
        bgVIA: "#6C00F4",
        bgTo: "#3C0087",
        bgBR: "#29F2FF",
        c: "#FFFFFF",
        textPink: "#FF00B8",
        cardTL: "#3D1492",
        cardBR: "#521BC3",
      },
      boxShadow: {
        "3xl":
          "15px 12px 49px -9px rgb(0 0 0 / 1.1), 0 0px 0px 0px rgb(0 0 0 / 0.1)",
        btn: "10px 9px 20px -7px rgb(0 0 0 / 1.1), 0 0 0 0 rgb(0 0 0 / 0.1)",
      },
      fontFamily: {
        play: "play",
        playB: "play-Bold",
      },
    },
  },
  plugins: [],
};
