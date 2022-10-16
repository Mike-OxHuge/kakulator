<template>
	<v-card class="pa-2">
		<p class="text-primary">{{ activity.name }} 1x {{ product.name }}:</p>
		<p v-if="result > 0" class="text-secondary text-right">
			{{ userSettings.currency }}{{ result }}
		</p>
		<p v-else class="text-error text-right">
			{{
				t("error.no.result", {
					action: activity.name,
					layers: product.layers,
				})
			}}
		</p>
	</v-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useUserStore } from "../stores";
import { useI18n } from "vue-i18n";

const props = defineProps(["activity", "product"]);
const userSettings = useUserStore();
const { t } = useI18n();

const result = computed(() => {
	const { price, rolls, sheets, layers } = props.product;
	if (!props.activity[`per${layers}`]) return 0;
	const amountOfSheets = sheets * rolls;
	const pricePerSheet = price / amountOfSheets;
	const multiplyer = props.activity[`per${layers}`];
	const result = pricePerSheet * multiplyer;
	return Math.round((result + Number.EPSILON) * 1000) / 1000;
});
</script>

<style></style>
