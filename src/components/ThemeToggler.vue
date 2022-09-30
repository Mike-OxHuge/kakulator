<template>
  <v-btn icon color="primary" @click="toggleTheme">
    <v-icon color="primary">mdi-theme-light-dark</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import { onMounted } from "vue";
const theme = useTheme();
onMounted(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme.global.name.value = "dark";
  }
});
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "dark");
</script>

<style></style>
