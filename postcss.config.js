const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");



module.exports = {
    plugins: [
      require('tailwind.config.js'),
      require('autoprefixer')
    ]
  }