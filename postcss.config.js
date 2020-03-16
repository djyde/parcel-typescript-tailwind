const mdColors = require('@egoist/md-colors')

module.exports = {
  plugins: [
    require('tailwindcss')({
      theme: {
        transparent: 'transparent',
        ...mdColors
      }
    }),
    require('autoprefixer')
  ]
}