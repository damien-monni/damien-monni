const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-text': '#262626',
        primary: {
          main: '#2871FF',
          light: '#DBE7FF',
          dark: '#052B74',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#FF3D00',
          light: '#FFE8E0',
          dark: '#9F2600',
          contrastText: '#FFFFFF',
        },
        tertiary: {
          main: '#FFF1DD',
          light: '#FFFCF7',
          dark: '#FFC776',
          contrastText: '#262626',
        },
      },
    },
  },
  plugins: [],
};
