const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      spacing: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '64px',
        7: '68px',
        8: '72px',
        9: '76px',
        10: '80px',
      },
      borderRadius: {
        1: '4px',
        2: '8px',
        3: '12px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '56px',
        '7xl': '60px',
        '8xl': '64px',
        '9xl': '68px',
        '10xl': '72px',
      },
    },
    colors: {
      ...colors,
      black: '#111010',
      white: '#F6FBFD',
      gray: {
        DEFAULT: '#101828',
        50: '#F4F4F4',
        100: '#EAECF0',
        200: '#D0D5DD',
        300: '#98A2B3',
        400: '#657085',
        500: '#475467',
        600: '#344054',
        700: '#1D2939',
      },
      text: {
        DEFAULT: '#4C5668',
      },
      primary: {
        DEFAULT: '#444CE7',
        light: '#E0EAFF',
      },
      secondary: {
        DEFAULT: '#ffb822',
      },
      positive: '#039855',
      negative: '#D92D20',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Roboto Serif', ...defaultTheme.fontFamily.serif],
    },
  },
}
