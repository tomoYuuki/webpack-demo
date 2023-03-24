console.log(process.env.NODE_ENV);
// 抽离
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "42",
        safari: "11.1",
      },
      useBuiltIns: "usage", // 如果编写第三方库的话就不用这个，使用@babel/plugin-transform-runtime,就不会污染使用者的环境了
      corejs: 3,
    },
  ],
];

module.exports = {presets};
