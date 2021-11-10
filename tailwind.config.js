module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './democrazy/templates/**/*.html',
      './democrazy/static/src/**/*.js'
    ]
  },
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.25s ease-in 1',
        'float-in-right': 'float-in-right 0.25s ease-in-out 1',
      },
      colors: {
        'primary': {
          dark: '#33658A',
          DEFAULT: '#86BBD8',
          light: '#DDFFF7'
        },
        'secondary': {
          dark: '#B07712',
          DEFAULT: '#F6AE2D',
          light: '#FFD68C'
        },
        'tertiary': {
          DEFAULT: '#758E4F',
          light: '#E3E8DB',
          translucent: '#758E4F32'
        },
        'card': {
          dark: '#000000',
          DEFAULT: '#DDFFF7'
        },
        'link': {
          DEFAULT: '#33658A',
          light: '#8194b5'
        }
      },
      gridTemplateColumns: {
        'explore': '8rem auto'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'float-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-1rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}