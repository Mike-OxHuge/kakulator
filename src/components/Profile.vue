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
        <v-row dense>
          <v-col cols="12">
            <p class="text-center text-secondary">
              {{ t("select.layers") }}
            </p>
          </v-col>
          <v-col cols="4" v-for="(choice, i) in userChoices" :key="i">
            <v-btn
              block
              color="secondary"
              :variant="choice[1] ? 'elevated' : 'outlined'"
              @click="userSettings.setChoices(choice[0], !choice[1])"
            >
              {{ i + 2 }} {{ t("layers") }}
            </v-btn>
          </v-col>
        </v-row>
        <p v-if="isSelected">FOOBAR</p>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import type { ComputedRef, Ref } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from "../stores";
const userSettings = useUserStore();
const { t } = useI18n();
const dialog = ref(false);

const userChoices = computed(() => {
  return Object.entries(userSettings.choices) as [
    keyof typeof userSettings.choices,
    boolean
  ][];
});

const isSelected = computed(() => {
  let result: boolean = false;
  Object.entries(userSettings.choices).forEach((choice) => {
    if (choice[1]) {
      result = true;
      return;
    } else return;
  });
  return result;
});

onMounted(() => {
  Object.entries(userSettings.choices).forEach((choice) => {
    console.log(choice);
  });
});
</script>

<style></style>
