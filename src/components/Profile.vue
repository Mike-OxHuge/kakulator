<template>
  <v-btn icon @click="dialog = true">
    <v-icon color="primary"> mdi-account </v-icon>
  </v-btn>
  <v-dialog v-model="dialog" fullscreen>
    <v-card>
      <v-container class="d-flex flex-column">
        <v-btn class="ml-auto" @click="dialog = false" icon flat>
          <v-icon color="primary">mdi-close</v-icon>
        </v-btn>
        profile
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const dialog = ref(false);
</script>

<style></style>
