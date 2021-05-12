// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import \'~@/styles/variables.scss\';'
      }
    }
  },
  devServer: {
    proxy: {
      '/boss': {
        target: 'http://eduboss.lagou.com',
        // 把请求头中的host配置为target，
        changeOrigin: true
      },
      '/front': {
        target: 'http://edufront.lagou.com',
        // 把请求头中的host配置为target，
        changeOrigin: true
      }
    }
  }
}
