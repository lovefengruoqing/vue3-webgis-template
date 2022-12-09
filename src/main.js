import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// 手动引入全局组件的样式
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
