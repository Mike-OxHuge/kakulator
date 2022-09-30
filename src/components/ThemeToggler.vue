<template>
  <v-main> <v-btn color="primary" @click="toggleTheme">toggle theme</v-btn></v-main>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import { onMounted } from "vue";
const theme = useTheme();
onMounted(() => {
  console.log("isDark: ", theme.global.current.value.dark);
  console.log("isLight: ", theme.global.current.value);
});
const toggleTheme = () => {
  console.log("current theme: ", theme.global.name.value);
  // const { dark, light } = theme.global.name.value;
  // console.log("dark: ", dark, "\nlight: ", light);
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  // if (dark) theme.global.name.value = "light";
  // else theme.global.name.value = "dark";
  console.log("changed to: ", theme.global.name.value);
};
</script>

<style></style>
