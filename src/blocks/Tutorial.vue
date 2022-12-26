<template>
  <v-container fluid class="d-flex pa-0 align-center h-100">
    <LangAndTheme v-if="step === 'lang-and-theme'" @next="step = 'foo'" />
  </v-container>
</template>

<script lang="ts" setup>
import LangAndTheme from "../components/Tutorial/LangAndTheme.vue";
import { ref, computed } from "vue";

const steps = ["lang-and-theme"];
const step = ref(steps[0]);
</script>
