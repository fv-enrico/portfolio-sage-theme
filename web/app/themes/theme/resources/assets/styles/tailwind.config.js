// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Add negative z-index classes
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50',
      },
    },
    screens: {
      'sm': '48em', // 768px
      'md': '64em', // 1024px
      'lg': '85.375em', // 1366px
      'xl': '120em', // 1920px
      'xxl': '160em', // 2560px
    },
    // Center .container by default
    container: {
      center: true,
    },
    // Add new font-family class
    fontFamily: {
      'display': ['Rockwell'],
    },
    // Add custom font-size variations
    fontSize: {
      '36': '2.25em',
      '28': '1.75em',
      '20': '1.25em',
      '16': '1em',
      '12': '0.75em',
    },
  },
  variants: {},
  plugins: [],
}