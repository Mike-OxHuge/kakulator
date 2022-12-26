<template>
  <v-row>
    <v-col v-for="th in ['light', 'dark']">
      <v-btn
        color="secondary"
        @click="setTheme(th)"
        :variant="th === theme.global.name.value ? 'elevated' : 'outlined'"
      >
        <v-icon>
          {{ th === "light" ? "mdi-white-balance-sunny" : "mdi-weather-night" }}
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import { onMounted } from "vue";
import { useUserStore } from "../stores";
const userSettings = useUserStore();

const theme = useTheme();
onMounted(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme.global.name.value = "dark";
  } else {
  }
});

const setTheme = (newTheme: string) => {
  userSettings.setTheme(newTheme);
  return (theme.global.name.value = newTheme);
};
</script>

<style></style>
