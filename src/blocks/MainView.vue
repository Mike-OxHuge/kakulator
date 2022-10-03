<template>
	<v-container> </v-container>
</template>

<script lang="ts" setup="{ $vuetify }">
	import { useUserStore } from "../stores";
	import { onMounted, ref, defineProps } from "vue";

	import { useI18n } from "vue-i18n";
	const { t } = useI18n();
</script>
