import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@babel/polyfill";
import "./assets/css/common.css";
import "./assets/fonts/iconfont.css";
// import "./plugins/element.js";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
