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
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
    publicPath: "./", // html中 js/bundle.js  => ./js/bundle.js
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
