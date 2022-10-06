<template>
  <v-expansion-panel-title disable-icon-rotate>
    {{ product.name }}
    <template v-slot:actions>
      <v-row class="align-center">
        <v-col cols="6" class="d-flex justify-space-around align-center">
          <v-icon>mdi-cash-multiple</v-icon>
          {{ userSettings.currency }}{{ product.price }}
        </v-col>
        <v-col cols="6" class="d-flex justify-space-around align-center">
          <v-icon>mdi-paper-roll-outline</v-icon>{{ product.rolls }}
        </v-col>
        <v-col cols="6" class="d-flex justify-space-around align-center">
          <v-icon>mdi-note-outline</v-icon>{{ product.sheets }}
        </v-col>
        <v-col cols="6" class="d-flex justify-space-around align-center">
          <v-icon>mdi-layers-outline</v-icon>{{ product.layers }}
        </v-col>
      </v-row>
    </template>
  </v-expansion-panel-title>
  <v-expansion-panel-text>
    <v-container>
      <v-icon>mdi-delete</v-icon>
      <p>a price of one:</p>
      <v-icon>mdi-star-outline</v-icon>
      <v-icon>mdi-star</v-icon>
      <v-container v-for="activity in useActivity.activities" :key="activity.id">
        <Result :activity="activity" :product="product" />
      </v-container>
    </v-container>
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
import Result from "./Result.vue";
import { defineProps, onMounted } from "vue";
import { useUserStore, useProductStore, useActivityStore } from "../stores";
const props = defineProps(["product"]);
const userSettings = useUserStore();
const useProduct = useProductStore();
const useActivity = useActivityStore();
// onMounted(() => {
// 	const { price, rolls, sheets, layers } = props.product;
// 	const amountOfSheets = sheets * rolls;
// 	const pricePerSheet = price / amountOfSheets;
// 	useActivity.activities.forEach((act) => {
// 		const multiplyer = act[`per${layers}`] as number;
// 		const result = pricePerSheet * multiplyer;
// 		console.log(
// 			`a price of one ${act.name} will be ${userSettings.currency}${result}`
// 		);
// 	});
// 	console.log(pricePerSheet);
// });
</script>
