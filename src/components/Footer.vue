<template>
  <v-footer app>
    <span class="text-caption font-weight-thin text-primary"> {{ version }}</span>
  </v-footer>
</template>

<script lang="ts" setup>
import { version } from "../../package.json";
</script>

<style></style>
