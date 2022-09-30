<template>
	<v-container>
		<p>{{ store.name }} ate {{ store.count }} apples</p>
		<v-btn color="warning" @click="store.increment()">feed</v-btn>
		<p>{{ userStore.firstName }} ate {{ userStore.counter }} potatoes</p>
		<v-btn color="primary" @click="userStore.randomizeCounter()">
			randomize
		</v-btn>
		<p>
			{{ t("message") }}
		</p>
	</v-container>
</template>

<script lang="ts" setup="{ $vuetify }">
	import { useCounterStore, useUserStore } from "../stores";
	import { onMounted, ref, defineProps } from "vue";

	import { useI18n } from "vue-i18n";
	const store = useCounterStore();
	const userStore = useUserStore();
	const { t } = useI18n();
	const props = defineProps(["foo"]);

	onMounted(() => {
		try {
			console.log("mounted!");
			store.increment();
			console.log(store.count);
			console.log(props.foo);
		} catch (error) {
			console.log(error);
		}
	});
</script>
