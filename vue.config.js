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
  },
  devServer: {
    // proxy: 'https://mb.anjia365.com',
    // proxy: 'http://192.168.3.93',
    // proxy: 'http://192.168.1.24:8080',
    // proxy: 'http://192.168.3.253:8080',
    // proxy: 'http://192.168.3.233:8080',
    // https: true,
    disableHostCheck: true,
  },
}