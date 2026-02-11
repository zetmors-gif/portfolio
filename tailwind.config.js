/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5px 5px 10px 2px rgba(69,69,69,0.2)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      colors: {
        'gn': '#8cee1d',
      },
      fontFamily: {
        'bowler' : ['BOWLER', 'Helvetica', 'Arial', 'sans-serif'],
        'bahn': ['Bahnschrift', 'sans-serif'],
      }
    },
  },
  plugins: [],
}