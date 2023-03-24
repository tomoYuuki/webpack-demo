const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

// utils
// const {resolveApp} = require("../utils/paths.js");

module.exports = {
  mode: "production",

  plugins: [
    new CleanWebpackPlugin(), // 生产用
  ],
};
