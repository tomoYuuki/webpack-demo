import add from "./index.js";
import fill from "lodash/fill";
console.log(add());

console.log(fill([1, 2, 3, "a"]));
console.log("main");

import("lodash/fill").then((res) => {
  console.log("heihei");
});
