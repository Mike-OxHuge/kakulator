<template>
  <v-container fluid class="d-flex pa-0 align-center h-100">
    <LangAndTheme v-if="step === 'lang-and-theme'" @next="step = 'choose-layers'" />
    <LayersPicker v-if="step === 'choose-layers'" />
  </v-container>
</template>

<script lang="ts" setup>
import LangAndTheme from "../components/Tutorial/LangAndTheme.vue";
import LayersPicker from "../components/Tutorial/LayersPicker.vue";
import { ref, computed } from "vue";

// TODO: delegate logic to vuex storage (so progress can be saved)
const steps = ["lang-and-theme", "choose-layers"];
const step = ref(steps[1]);
</script>
