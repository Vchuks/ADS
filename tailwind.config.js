/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'quicksand': ['Quicksand', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'bcolor': '#0055FD',
        'tcolor': '#4D5657'
      }
    },
  },
  plugins: [],
}