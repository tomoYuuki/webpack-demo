// import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import {say} from "test"; // 由于配置了a_yuuki_modules 会优先去该目录找文件
import "./css/base"; // 由于resolve配置了后缀名可省略，就不需要.css了
import "./css";
say();
new Vue({
  render: (h) => h(App),
}).$mount("#app");

// axios.get("/api/login").then((res) => {
//   console.log("嘿嘿");
// });
