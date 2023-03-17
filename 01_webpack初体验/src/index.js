import "./css/index.css";
const createDiv = () => {
  const div = document.createElement("div");
  div.innerHTML = ["hello", "webpack"].join(" ");
  div.className = "myClass";
  return div;
};

document.body.appendChild(createDiv());
