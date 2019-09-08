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
      'sm': '440px',
      'md': '821px',
      'lg': '1640px',
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
      '36': '36px',
      '28': '28px',
      '20': '20px',
      '16': '16px',
      '12': '12px',
    },
  },
  variants: {},
  plugins: [],
}