/** @type {import('tailwindcss').Config} */
export default {
  content: ['node_modules/preline/dist/*.js'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin'), require('@tailwindcss/forms')],
};
