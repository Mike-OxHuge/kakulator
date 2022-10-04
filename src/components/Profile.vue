<template>
  <v-btn icon @click="dialog = true">
    <v-icon color="primary"> mdi-account </v-icon>
  </v-btn>
  <v-dialog v-model="dialog" fullscreen>
    <v-card>
      <v-container class="d-flex flex-column justify-space-between">
        <div class="d-flex justify-space-between">
          <v-btn @click="dialog = false" icon flat>
            <v-icon color="primary">mdi-close</v-icon>
          </v-btn>
          <v-text-field
            v-model="currency"
            :label="t('profile.set.currency')"
            :placeholder="userSettings.currency.toString()"
          />
        </div>
        <v-row dense>
          <v-col cols="12">
            <p class="text-caption text-center text-secondary">
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
        <v-container fluid v-if="isSelected">
          <p class="text-caption text-center text-secondary">
            {{ t("profile.activities") }}
          </p>
          <ActivityControl />
        </v-container>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from "../stores";
import ActivityControl from "./ActivityControl.vue";
const userSettings = useUserStore();
const { t } = useI18n();
const dialog = ref(false);
const currency = ref("");

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
watchEffect(() => {
  if (currency.value) userSettings.setCurrency(currency.value);
  if (currency.value == "") userSettings.setCurrency("€");
});
</script>

<style></style>
