/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf4ec',
          100: '#f2e6cf',
          200: '#e7cca1',
          300: '#d9a96b',
          400: '#cd8c42',
          500: '#b37132',
          600: '#a35c2b',
          700: '#824326',
          800: '#6d3926',
          900: '#5e3125',
        },
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
