import "./math.js";
console.log("hello abc1234");
console.log("321");

// 这种热模块更新需要在代码里写明哪些模块需要热更新
if (module.hot) {
  module.hot.accept("./math.js", () => {
    console.log("发生了改变");
  });
}
