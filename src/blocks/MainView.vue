<template>
  <v-container>
    <v-dialog
      v-model="addNewDialog"
      scrollable
      fullscreen
      persistent
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-btn class="ml-auto" @click="addNewDialog = false" icon flat>
          <v-icon color="primary">mdi-close</v-icon>
        </v-btn>
        <v-form class="my-auto" v-model="valid" lazy-validation>
          <v-text-field
            v-model="newProduct.name"
            :counter="10"
            :rules="rules.name"
            label="Name"
            required
          />
          <v-text-field
            v-model="newProduct.price"
            :rules="rules.price"
            type="number"
            label="price per pack"
            required
          />
          <v-text-field
            v-model="newProduct.rolls"
            :rules="rules.price"
            type="number"
            label="amount of rolls in one pack "
            required
          />
          <v-text-field
            v-model="newProduct.sheets"
            :rules="rules.price"
            type="number"
            label="number of sheets per roll"
            required
          />
          <v-text-field
            v-model="newProduct.layers"
            :rules="rules.price"
            type="number"
            label="number of layers"
            required
          />
          <v-btn block color="primary" :disabled="!valid" @click="handleSubmit">
            save
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
    <p class="text-secondary text-overline text-center" v-if="!isReady">
      {{ t("main.missing.settings") }}
      <Profile />
    </p>
    <v-btn
      v-else
      @click="addNewDialog = true"
      block
      color="primary"
      append-icon="mdi-plus"
    >
      {{ t("main.compare.more") }}
    </v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import Profile from "../components/Profile.vue";
import { useUserStore, useActivityStore, useProductStore } from "../stores";
import { onMounted, ref, computed } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const userSettings = useUserStore();
const useActivity = useActivityStore();
const useProduct = useProductStore();
const addNewDialog = ref(false);
const valid = ref(false);
const rules = {
  name: [
    (v: string) => !!v || "Name is required",
    (v: string) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ],
  price: [
    (v: number) => !!v || "Price is required",
    (v: number) => v > 0 || "Cannot be negative",
  ],
};
const newProduct = ref({
  name: "",
  price: 0,
  rolls: 0,
  sheets: 0,
  layers: 0,
});

const handleSubmit = () => {
  useProduct.addProduct(newProduct.value);
  addNewDialog.value = false;
  newProduct.value = {
    name: "",
    price: 0,
    rolls: 0,
    sheets: 0,
    layers: 0,
  };
};

const isReady = computed(() => {
  let isLayersSelected = false;
  let isActivities = false;
  Object.keys(userSettings.choices).forEach((e: string) => {
    if (userSettings.choices[e]) isLayersSelected = true;
    else return;
  });
  if (useActivity.activities.length > 0) isActivities = true;
  return isLayersSelected && isActivities;
});
</script>
