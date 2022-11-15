import { createApp } from "vue";
import App from "./App.vue";

import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages,
});

app.use(i18n);
app.mount("#app");
