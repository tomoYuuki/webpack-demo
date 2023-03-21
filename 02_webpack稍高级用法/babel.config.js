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
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
];

module.exports = {presets};
