// tailwind.config.js
module.exports = {
  presets: [
    require('../tailwind-preset/tailwind.config.js')
  ],
  purge: ['./projects/**/*.{html,ts,css,scss}'],
  prefix: '',
  important: ':root',
  separator: ':',
  // ...
}