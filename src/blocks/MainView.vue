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
            :label="t('product.name')"
            required
          />
          <v-text-field
            v-model="newProduct.price"
            :rules="rules.price"
            type="number"
            :label="t('product.price.pack')"
            required
          />
          <v-text-field
            v-model="newProduct.rolls"
            :rules="rules.price"
            type="number"
            :label="t('product.rolls')"
            required
          />
          <v-text-field
            v-model="newProduct.sheets"
            :rules="rules.price"
            type="number"
            :label="t('product.sheets')"
            required
          />
          <v-select
            v-model="newProduct.layers"
            :items="listofLayers"
            :label="t('product.layers')"
          />
          <v-btn block color="primary" :disabled="!valid" @click="handleSubmit">
            {{ t("profile.activity.save") }}
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
    <v-expansion-panels multiple>
      <v-expansion-panel
        v-for="product in useProduct.products"
        :key="product.id?.toString()"
      >
        <Product :product="product" />
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" setup>
import Profile from "../components/Profile.vue";
import Product from "../components/Product.vue";
import { useUserStore, useActivityStore, useProductStore } from "../stores";
import { ref, computed } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const userSettings = useUserStore();
const useActivity = useActivityStore();
const useProduct = useProductStore();
const addNewDialog = ref(false);
const valid = ref(false);
const listofLayers = computed(() => {
  let result = [];
  if (userSettings.choices.includeTwoLayers) result.push(2);
  if (userSettings.choices.includeThreeLayers) result.push(3);
  if (userSettings.choices.includeFourLayers) result.push(4);
  return result;
});
const rules = {
  name: [
    (v: string) => !!v || "required!",
    (v: string) => (v && v.length > 0) || "cannot be empty!",
  ],
  price: [
    (v: number) => !!v || "required!",
    (v: number) => v > 0 || "Cannot be negative",
  ],
  layers: [
    (v: number) => !!v || "required!",
    (v: number) => listofLayers.value.includes(v) || "Cannot be negative",
  ],
};
const newProduct = ref({
  name: "",
  price: 0,
  rolls: 0,
  sheets: 0,
  layers: listofLayers.value[0],
});

const handleSubmit = () => {
  useProduct.addProduct(newProduct.value);
  addNewDialog.value = false;
  newProduct.value = {
    name: "",
    price: 0,
    rolls: 0,
    sheets: 0,
    layers: listofLayers.value[0],
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
