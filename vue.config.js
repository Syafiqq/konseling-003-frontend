// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/resources/scss/app.scss";`,
        minimize: { discardComments: { removeAll: true } }
      },
      css: {
        minimize: { discardComments: { removeAll: true } }
      }
    }
  }
}
