import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@babel/polyfill";
import "./assets/css/common.css";
import "./assets/fonts/iconfont.css";
import ElementUI from './plugins/element';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementUI)
  .mount("#app");
