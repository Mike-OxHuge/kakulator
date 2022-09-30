<template>
  <v-main></v-main>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
const { availableLocales, locale } = useI18n();
onMounted(() => {
  availableLocales.forEach((loc) => console.log("available locale: ", loc));
  console.log("current locale: ", locale.value);
  locale.value = "it";
  console.log("current locale: ", locale.value);
});
</script>

<style></style>
