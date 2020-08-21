const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')
const patterns = [
  path.join(__dirname, 'node_modules/vuetify/dist/vuetify.css'),
  // path.join(__dirname, 'node_modules/@mdi/font/css/materialdesignicons.css'),
]
module.exports = {
  publicPath: isProduction ? './' : '/',
  configureWebpack: config => {
    if (isProduction) {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
        'vuetify': 'Vuetify'
      }
    }
  },

  devServer: {
    // proxy: 'http://192.168.3.93',
    // proxy: 'http://192.168.1.24:8080',
    // proxy: 'http://192.168.3.253:8080',
    // proxy: 'http://192.168.3.233:8080',
    // https: true,
    disableHostCheck: true,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'css',
      patterns: isProduction ? [] : patterns
    }
  }
}
