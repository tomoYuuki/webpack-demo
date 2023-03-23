import axios from "axios";
import Vue from "vue";
import App from "./App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

axios.get("/api/login").then((res) => {
  console.log("嘿嘿");
});
