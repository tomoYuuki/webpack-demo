const path = require("path");

// const {CleanWebPackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");

module.exports = {
  entry: "./src/common_index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
    clean: true,
    // assetModuleFilename: "[name].[hash:6][ext]",// 全局，所有的资源模块文件统一修改
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
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024, // 200kb 取代了file-loader的limit
          },
        },
        generator: {
          filename: "img/[name].[hash:6][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "yk demo",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
  ],
};
