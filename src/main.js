import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

const app = createApp(App);
app.config.globalProperties.$mybus = new mitt();
app.mount("#app");
