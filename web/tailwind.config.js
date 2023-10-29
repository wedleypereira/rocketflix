/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        'cor-textos': '#fffcf9',
        'cor-subtitulos': '#b3b3b3',
        'cor-btn': '#e9e6e3',
      }
    },
  },
  plugins: [],
}

