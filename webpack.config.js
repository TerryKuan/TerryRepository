const path = require('path')
const webpackHtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new webpackHtmlPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})
console.log('路径', __dirname, __filename)
// 向外暴露一个配置对象
module.exports = {
  mode: 'development',
  plugins: [htmlPlugin],
  module: {
    // 所有第三方模块的匹配规则
    rules: [
      // 第三方规则,必须要加排除项
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node-modules/ }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
