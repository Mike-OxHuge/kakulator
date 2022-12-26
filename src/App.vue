<template>
  <v-app>
    <NavBar />
    <v-main>
      <Tutorial v-if="isTutorial" />
      <MainView v-else />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import MainView from "./blocks/MainView.vue";
import Tutorial from "./blocks/Tutorial.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from "./stores";
import { useTheme } from "vuetify";

const userSettings = useUserStore();
const { locale } = useI18n();
const theme = useTheme();

const isTutorial = ref(true);
// TODO: set theme and locale on mounted (take them from vuex storage)
onMounted(() => {
  if (userSettings.language) locale.value = userSettings.language;
  if (userSettings.theme) theme.global.name.value = userSettings.theme;
});
</script>
