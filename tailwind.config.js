module.exports = {
  mode: 'jit',
  purge: {
    content: ['./democrazy/templates/**/*.html', './democrazy/static/src/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          'accent': '#33658A',
          DEFAULT: '#86BBD8'
        },
        'secondary': {
          DEFAULT: '#F6AE2D'
        },
        'tertiary': {
          DEFAULT: '#758E4F',
          light: '#E3E8DB'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
    plugins: [],
}