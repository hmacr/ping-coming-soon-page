const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      blue: 'hsl(223, 87%, 63%)',
      'pale-blue': 'hsl(223, 100%, 88%)',
      'light-red': 'hsl(354, 100%, 66%)',
      gray: 'hsl(0, 0%, 59%)',
      'dark-blue': 'hsl(209, 33%, 12%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'libre-franklin': ['Libre Franklin', ...defaultTheme.fontFamily.serif],
    },
  },
};
