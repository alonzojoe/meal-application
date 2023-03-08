/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        darkColor: '#13141F',
        darkColorv2: '#1B1C2C',
        textGray: '#b3b3b7',
        textPurple: '##8e57e8',
        cardColor: '#1C1D28'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
