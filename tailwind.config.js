/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbf8f1',
          100: '#f5eddf',
          200: '#ead9be',
          300: '#dcbe95',
          400: '#d3a97c',
          500: '#c2854d',
          600: '#b47142',
          700: '#965938',
          800: '#794933',
          900: '#623e2c',
        },
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
