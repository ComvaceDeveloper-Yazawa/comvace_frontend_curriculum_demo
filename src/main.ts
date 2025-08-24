import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import("disable-devtool").then(({ default: DisableDevTool }) => {
  DisableDevTool({
    // options
    disableMenu: true,
    clearIntervalWhenDevOpenTrigger: false,
    ondevtoolopen: () => {
      document.documentElement.style.display = "none";
      document.body.innerHTML = "none";
      // window.location.href = document.referrer;
    },
    ondevtoolclose: () => {
      window.location.reload();
    },
  });
});

const app = createApp(App);
app.use(router).mount("#app");
