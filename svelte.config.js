const { preprocess } = require("@pyoner/svelte-ts-preprocess")
const { scss, postcss } = require('svelte-preprocess')
const autoprefixer = require('autoprefixer')

module.exports = {
  preprocess: [
    scss(),
    postcss({
      plugins: [
        autoprefixer({
          overrideBrowserslist: 'cover 99.5%'
        })
      ]
    }),
    preprocess()
  ]
}