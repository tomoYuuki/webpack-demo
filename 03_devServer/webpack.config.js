const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");
module.exports = {
  entry: "./src/main.js",
  mode: "development",
  // 专门为了webpack-dev-server 插件的
  devServer: {
    port: 9000, // 设置端口
    hot: true, // 热更新开启
    open: true, // 编译成功后自动打开浏览器
    // host: "0.0.0.0", // 如果你想让你的服务器可以被外部访问，像这样指定，默认就是localhost
    devMiddleware: {
      publicPath: "/yk-path", // 配置本地服务的基础路径 localhost:8080 ${publicPath} ...
    },
  },

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/yk-path", // html中 js/bundle.js  => ./js/bundle.js ,script引入打包后的包前面会加的路径，最好和devServer的一样
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "yk demo",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
