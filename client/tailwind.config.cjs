/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/components**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-black',
    'min-h-screen',
    'w-screen',
    {
      pattern: /^columns/
    }
  ],
  theme: {
    container: {
      center: true
    },
    scale: {
      flip: '-1',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
