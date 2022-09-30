import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { createI18n } from "vue-i18n";
import { loadFonts } from "./plugins/webfontloader";
import * as messages from "./locales";
import "./registerServiceWorker";

const pinia = createPinia();
pinia.use(piniaPersist);
const i18n = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: { ...messages },
});
loadFonts();
const app = createApp(App);
app.use(vuetify).use(pinia).use(i18n).mount("#app");
