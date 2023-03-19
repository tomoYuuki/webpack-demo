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
        // 注意：这里其实是有顺序的，都是从右往左，或者从下往上的，你得先解析了css，再去插入style
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },

          "less-loader",
          "postcss-loader",
        ],
      },

      {
        test: /\.(jp?g|svg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:6].[ext]",
              outputPath: "img",
            },
          },
        ],
      },
    ],
  },
};
