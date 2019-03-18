module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'https://at.tuandai.com/',
        changeOrigin: true,
        ws: true
      }
    }
  }
}
