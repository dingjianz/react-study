const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成 index.html 页面的插件
// 创建一个html-webpack-plugin 插件的实例对象
const htmlplugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 在内存中生成的文件名
})


// 向外暴露一个打包的配置对象 因为webpack是基于node创建的，所以webpack支持所有的Node API 和 语法
// webpack 默认只能打包处理 .js后缀名类型的文件，像.png,.vue无法处理，所以要配置第三方的 loader；
module.exports = {
  mode:'development', // production development
  // 在 webpack 4.x中，有一个很大的特性，就是 约定大于配置，约定默认的打包入口路径是 src -> index.js
  plugins: [
    htmlplugin
  ],
  module: { // 所有第三方模块的匹配规则
    rules: [ // 第三方匹配规则
      { test: /\.js|jsx$/,use:'babel-loader', exclude:/node_modules/ }, // 千万不要忘记添加 exclude排除项

      // css-loader之后添加 参数，modules表示为普通的css样式表，启动模块化 https://www.webpackjs.com/loaders/css-loader/
      {  // 打包处理css样式表的第三方loader
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      { test:/\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }, // 打包处理字体文件的loader
      { test: /\.scss$/, use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        }
      }, 'sass-loader']}
    ]
  },
  resolve:{
    extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
    alias: {
      '@': path.join(__dirname, './src') // 这样@待变项目根目录中src这层路径
    }
  }
}