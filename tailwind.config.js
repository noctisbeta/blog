/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'myblue1': '#E1E6FA',
        'myblue2': '#C4D7ED',
        'myblue3': '#ABC8E2',
        'myblue4': '#375D81',
        'myblue5': '#183152',
        'myblue6': '#0E1A2B',
      },
    },
  },
  plugins: [],
}
