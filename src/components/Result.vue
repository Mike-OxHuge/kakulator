<template>
  <v-card class="pa-2">
    <p class="text-primary">{{ activity.name }} 1x {{ product.name }}:</p>
    <p class="text-secondary text-right">{{ userSettings.currency }}{{ result }}</p>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { useUserStore, useProductStore, useActivityStore } from "../stores";

const props = defineProps(["activity", "product"]);
const userSettings = useUserStore();
const useProduct = useProductStore();
const useActivity = useActivityStore();

const result = computed(() => {
  const { price, rolls, sheets, layers } = props.product;
  const amountOfSheets = sheets * rolls;
  const pricePerSheet = price / amountOfSheets;
  const multiplyer = props.activity[`per${layers}`];
  const result = pricePerSheet * multiplyer;
  return Math.round((result + Number.EPSILON) * 1000) / 1000;
});
</script>

<style></style>
