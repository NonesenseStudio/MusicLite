import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./samples/node-api";
import router from "./router/index";
import 'element-plus/theme-chalk/dark/css-vars.css'
createApp(App)
  .use(router)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
