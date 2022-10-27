module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    colors: {
      'primary': {
        '1': '#5AB3FA',
        '2': '#82f3d6',
        '3': '#434ea8',
      },
      'secondary': {
        '1': '#FFF7AD',
        '2': '#FFF280',
      },
      'tertiary': {
        '1': '#A4FF8E',
      },
      'cta': {
        '1': '#FCB64F',
        '2': '#FBA11D',
      },
      'background': {
        '1': '#FDF3E6',
        '2': '#FBE8D0',
      },
      'border' : {
        '1': '#1A1A1A',
      },
      'typo': {
        '1': '#1A1A1A',
        '2': '#313131',
      },
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'md': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.75rem',
      '2xl': '2rem',
      '3xl': '3rem',
    },
    extend: {
      fontFamily: {
        sans: ['"Lexend Deca"'],
        display: ['Righteous'],
      },
      gridTemplateColumns: {
        'header': '1fr auto 1fr',
        'fiftyfifty': '50% 50%',
      },
      boxShadow: {
        'buttons': '7px 5px'
      }
    },
  },
  plugins: [
  ]
}
