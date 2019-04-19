const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProduction ? './' : '/',
  configureWebpack: config => {
    if (isProduction) {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
        'vuetify': 'vuetify'
      }
    }
  }
}