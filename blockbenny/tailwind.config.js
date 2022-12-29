/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      bgTL: '#000000',
      bgVIA: '#6C00F4',
      bgBR: '#29F2FF',
      bgWH: '#FFFFFF',
      textPink: '#FF00B8'
    },
    extend: {
      fontFamily: {
        play: "play",
        playB: 'play-Bold',
      }
    },
  },
  plugins: [],
}
