/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lavender': '#CCF',
        'light-gray': '#CCC',
        'ghost-white': '#F8F8FF',
        'lavender-web': '#EFEFFF',
        'blue-violet-crayola': '#6666CC',
        'maximum-blue-purple': '#AAAADD',
      },
    },
  },
  plugins: [],
};
