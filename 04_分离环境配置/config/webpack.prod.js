const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

// utils
const {resolveApp} = require("../utils/paths.js");

module.exports = {
  mode: "production",
  output: {
    path: resolveApp("./build"),
    filename: "bundle.js",
    publicPath: "/yk-path", // html中 js/bundle.js  => ./js/bundle.js ,script引入打包后的包前面会加的路径，最好和devServer的一样
  },
  plugins: [
    new CleanWebpackPlugin(), // 生产用
  ],
};
