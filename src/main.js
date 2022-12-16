import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./index.css";

const pinia = createPinia()
  .use(piniaPersist)
  .use(({ store }) => {
    store.$router = markRaw(router);
  });
createApp(App).use(pinia).use(router).mount("#app");