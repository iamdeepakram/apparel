/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'circle-peach': '#E7A09E',
      },
      textColor:{
        'were': '#D2A1A2',
        'coming-soon' : '#393334',
        'lorem' : '#9A6B69'
  
      }
    },
  },
  plugins: [],
}