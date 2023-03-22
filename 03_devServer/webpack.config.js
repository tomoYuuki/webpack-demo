const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  mode: "development",
  // 专门为了webpack-dev-server 插件的
  devServer: {
    hot: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "yk demo",
      template: "./index.html",
    }),
  ],
};
