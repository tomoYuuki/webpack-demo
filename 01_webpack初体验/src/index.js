import "./css/index.css";
import "./css/base.less";

const createDiv = () => {
  const div = document.createElement("div");
  div.innerHTML = ["hello", "webpack"].join(" ");
  div.className = "myClass";
  div.className = "content";
  return div;
};

document.body.appendChild(createDiv());
