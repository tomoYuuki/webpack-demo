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
    compress: true, // 可以打个包，变成gzip，体积小了
    devMiddleware: {
      publicPath: "/yk-path", // 配置本地服务的基础路径 localhost:8080 ${publicPath} ...
    },
    proxy: {
      "/api": {
        // 在调用axios.get("/api/login")的时候，首先第一步是读取/api，代理到localhost:3000,即 http://localhost:3000/api/login
        target: "http://localhost:3000",

        //但是这里并不是接口真正的路径，还需要重写 api 变成 空 那么就变成了 localhost:3000/login，就访问到了真正的接口
        pathRewrite: {
          "/api": "", // 补充一下 "^/api" 就是以/开头 ，后续是api
        },
        secure: false, // 不验证https
        changeOrigin: true, // 服务器因为可能会防止人通过代理去爬服务器信息，看看来源是否是 服务器指定的来源，加上这个后就会修改这个源，就不会被拦
      },
    },
    historyApiFallback: true, //在开发时， 直接访问localhost:8080/about的时候其实是拿不到页面的，配置了他就会给你去拿
  },
  resolve: {
    modules: [path.resolve(__dirname, "a_yuuki_modules"), "node_modules"],
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
