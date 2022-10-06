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
      <div class="d-flex justify-space-around">
        <v-icon color="error" @click="useProduct.deleteProduct(product)">
          mdi-delete
        </v-icon>
        <v-icon
          :color="!!product.isFavorite ? 'warning' : 'primary'"
          @click="useProduct.setFavorite(product, !!!product.isFavorite)"
        >
          mdi-{{ !!product.isFavorite ? "star" : "star-outline" }}
        </v-icon>
      </div>

      <v-container
        v-for="activity in useActivity.activities"
        :key="activity.id"
        class="pa-1"
      >
        <Result :activity="activity" :product="product" />
      </v-container>
    </v-container>
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
import Result from "./Result.vue";
import { useUserStore, useProductStore, useActivityStore } from "../stores";
import type { ProductType } from "../stores/products";

defineProps<{
  product: ProductType;
}>();

const userSettings = useUserStore();
const useProduct = useProductStore();
const useActivity = useActivityStore();
</script>
