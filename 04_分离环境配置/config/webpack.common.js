const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const {merge} = require("webpack-merge");

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

let commonConfig = {
  context: path.resolve(__dirname, "../"), // 确定哪个目录是相对的目录，这里值的就是当前目录的上一层
  entry: "./src/main.js", // 这里为什么是./src/main.js，因为context配置默认是在整个项目的根目录
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "a_yuuki_modules"), "node_modules"],
    extensions: [".js", ".json", ".wasm", ".css"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      css: path.resolve(__dirname, "../src/css"),
      // "@css": path.resolve(__dirname, "./src/css"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    // 都要
    new HtmlWebpackPlugin({
      title: "yk demo",
      template: "./index.html",
    }),
    new VueLoaderPlugin(), // 都要
  ],
};
module.exports = function (env) {
  // 通过package --env 后跟的值来判断是开发还是产品
  process.env.NODE_ENV = env.production ? "production" : "development";
  console.log("------", process.env.NODE_ENV);
  let mergeConfig = {};
  if (process.env.NODE_ENV === "production") {
    // 通过merge工具 将真正的配置合体
    mergeConfig = merge(commonConfig, prodConfig);
  } else {
    mergeConfig = merge(commonConfig, devConfig);
  }

  return mergeConfig;
};
