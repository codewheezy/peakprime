const { blob } = require('node:stream/consumers')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
