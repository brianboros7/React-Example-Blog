const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");



module.exports = {
  plugins: [
    tailwindcss('tailwind.config.js'),
    require('autoprefixer')
  ]
}

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ]
}