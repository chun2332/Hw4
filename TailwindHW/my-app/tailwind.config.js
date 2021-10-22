module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        gray: '1px solid #ccc'
      },
      backgroundColor: theme => ({
        ... theme('colors'),
        'orange': '#fe8400'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
