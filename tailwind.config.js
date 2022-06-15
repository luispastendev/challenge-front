const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      // openSans: ['Open\\ Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
          100: "#d9f5e6",
          200: "#b4eacd",
          300: "#8ee0b5",
          400: "#69d59c",
          500: "#43cb83", // default
          600: "#35c076",
          700: "#36a269", 
          800: "#287a4f",
          900: "#1b5134",
      },
      gray: {
        100: "#fcfcfc",
        200: "#f9f9f9",
        300: "#f5f5f5",
        400: "#f2f2f2",
        500: "#efefef",
        600: "#bfbfbf",
        700: "#8f8f8f",
        800: "#606060",
        900: "#303030"
      },
      red: {
        100: "#ffe0df",
        200: "#ffc0c0",
        300: "#fea1a0",
        400: "#fe8181",
        500: "#fe6261",
        600: "#cb4e4e",
        700: "#983b3a",
        800: "#662727",
        900: "#331413"
      },
      black: {
        100: "#d6d6d6",
        200: "#adadad",
        300: "#858585",
        400: "#5c5c5c",
        500: "#333333",
        600: "#292929",
        700: "#1f1f1f",
        800: "#141414",
        900: "#0a0a0a"
      },
      white: colors.white,
      // gray: colors.gray,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      cyan: colors.cyan,
      pink: colors.pink
    },
    screens: {
      'sm'  : '640px',
      'md'  : '768px',
      'lg'  : '1024px',
      'xl'  : '1280px',
      '2xl' : '1536px',
      '3xl' : '1920px'
    },
    opacity: {
      0:  '0',
      5:  '.05',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      100: '1',
    },
    extend: {
      // transitionProperty: {
      //   'left': 'left',
      // },
      backgroundImage: {
        'cover':  "url('/public/unplash.jpg')",
        'cover2': "url('/public/unplash2.jpg')",
        'cover3': "url('/public/unplash3.jpg')"
      }
      // backgroundImage: theme => ({
      //   'login-pattern-form': "url('/imgs/bg-login-left.svg')",
      //   'mobile-pattern': "url('/imgs/mobile-pattern.svg')",
      //   'recovery-pass' : "url('/imgs/bg-recoveryPass.svg')",
      //   'wave-top' : "url('/imgs/bg-wave-primary.svg')",
      //   'wave-top-danger' : "url('/imgs/bg-wave-danger.svg')",
      //   'top-left-primary' : "url('/imgs/bg-top-left.svg')",
      //   'empty-data' : "url('/imgs/empty_data_table.svg')",
      // })
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp')
  ],
}
