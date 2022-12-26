<template>
  <v-container class="d-flex flex-column my-auto text-center">
    <p>how many layers do you prefer?</p>
    // TODO: make it reusable to use in settings after tutorial is done
    <v-row class="py-5">
      <v-col cols="6" v-for="item in Object.keys(userSettings.layers)">
        <v-btn
          block
          color="secondary"
          :variant="userSettings.layers[item] ? 'elevated' : 'outlined'"
          @click="userSettings.setLayers(item, !userSettings.layers[item])"
        >
          {{ item }} layers
        </v-btn>
      </v-col>
    </v-row>
    <div>
      <v-btn>Back</v-btn>
      <v-btn>Next</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { useUserStore } from "../../stores";
const userSettings = useUserStore();
</script>
