/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-orchid': 'hsl(263, 55%, 52%)',
        dusk: 'hsl(217, 19%, 35%)',
        dark: 'hsl(219, 29%, 14%)',
        'dark-gray': 'hsl(217, 19%, 35%)',
        'light-gray': 'hsl(210, 46%, 95%)',
        'medium-gray': 'hsl(0, 0%, 81%)',
      },
    },
  },
  plugins: [],
};
