const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./democrazy/templates/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": {
          "accent": "#33658A",
          DEFAULT: "#86BBD8"
        },
        "secondary": {
          DEFAULT: "#F6AE2D"
        },
        "tertiary": {
          DEFAULT: "#758E4F",
          light: "#E3E8DB"
        }
      }
    }
  },
  variants: {
    extend: {},
  },
    plugins: [],
}

// --primary: #86BBD8;
// --secondary: #F6AE2D;
// --tertiary: #758E4F;