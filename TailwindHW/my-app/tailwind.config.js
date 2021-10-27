module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ... theme('colors'),
        'orange': '#fe8400'
      }),
      width: {
        '14%': '14.28%',
        '37.5': '37.5rem'
      }, 
      borderWidth: {
        DEFAULT: '1px',
        '0': '7px 7px 7px 0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
