module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
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
        '1': '#FAFAFA',
        '2': '#FDF3E6',
        '3': '#FBE8D0',
      },
      'backdrop': {
        '1': '#EDEDED7F',
        '2': '#2828287F',
      },
      'border' : {
        '1': '#1A1A1A',
      },
      'typo': {
        '1': '#1A1A1A',
        '2': '#313131',
        '3': '#595959',
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
        'header': '1fr auto 1fr'
      },
      boxShadow: {
        'sm': '2px 2px',
        'md': '4px 4px',
      },
      translate: {
        'button-sm': '2px',
        'button-md': '4px',
      }
    },
  },
  plugins: [
  ]
}
