import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { createI18n } from "vue-i18n";
import { loadFonts } from "./plugins/webfontloader";
import * as messages from "./locales";
import "./registerServiceWorker";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBq297XCSKEJwFMG79bSNypV-ETcz5svks",
	authDomain: "kakulator.firebaseapp.com",
	projectId: "kakulator",
	storageBucket: "kakulator.appspot.com",
	messagingSenderId: "164329943755",
	appId: "1:164329943755:web:13d11f2a06c0a9d2d4614e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
