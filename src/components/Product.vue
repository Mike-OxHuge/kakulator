<template>
	<v-expansion-panel-title disable-icon-rotate>
		{{ product.name }}
		<template v-slot:actions>
			<v-row class="align-center">
				<v-col
					cols="6"
					class="d-flex justify-space-around align-center"
				>
					<v-icon>mdi-cash-multiple</v-icon>
					{{ userSettings.currency }}{{ product.price }}
				</v-col>
				<v-col
					cols="6"
					class="d-flex justify-space-around align-center"
				>
					<v-icon>mdi-paper-roll-outline</v-icon>{{ product.rolls }}
				</v-col>
				<v-col
					cols="6"
					class="d-flex justify-space-around align-center"
				>
					<v-icon>mdi-note-outline</v-icon>{{ product.sheets }}
				</v-col>
				<v-col
					cols="6"
					class="d-flex justify-space-around align-center"
				>
					<v-icon>mdi-layers-outline</v-icon>{{ product.layers }}
				</v-col>
			</v-row>
		</template>
	</v-expansion-panel-title>
	<v-expansion-panel-text>
		<v-container> results </v-container>
	</v-expansion-panel-text>
</template>

<script lang="ts" setup>
	import { defineProps } from "vue";
	import { useUserStore, useProductStore } from "../stores";
	import type { ProductType } from "../stores/products";
	const userSettings = useUserStore();
	const useProduct = useProductStore();
	defineProps<{
		product: ProductType;
	}>();
</script>
