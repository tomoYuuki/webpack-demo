import "./css/index.css";
import "./css/base.less";

import pic2 from "./img/1.png";
const createDiv = () => {
  const div = document.createElement("div");
  div.innerHTML = ["hello", "webpack"].join(" ");
  div.className = "myClass";
  div.className = "content";

  return div;
};

document.body.appendChild(createDiv());

// 图片资源
const createImage = () => {
  const img = new Image();
  // 使用type:asset后 就不需要default了
  img.src = require("../src/img/2.png");
  return img;
};
document.body.appendChild(createImage());

// 背景图
const createBackground = () => {
  const background = document.createElement("div");
  background.className = "backPic";
  // background.style.background = `url(${require("./img/2.png").default})`;
  background.style.background = `url(${pic2})`;
  background.style.width = "200px";
  background.style.height = "200px";

  return background;
};

document.body.appendChild(createBackground());

// iconfont
const createIcon = () => {
  const icon = document.createElement("i");
  icon.className = "iconfont icon-home-filling myFont";
  return icon;
};

document.body.appendChild(createIcon());
