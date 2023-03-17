const path = require("path");
module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只是解析.css文件，但是还需要style-loader帮你在元素中插入样式
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
