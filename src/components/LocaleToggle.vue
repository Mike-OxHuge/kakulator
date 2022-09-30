<template>
	<v-btn icon @click="dialog = true">
		<v-icon color="primary"> mdi-web </v-icon>
	</v-btn>
	<v-dialog v-model="dialog" fullscreen>
		<v-card>
			<v-container class="d-flex flex-column">
				<v-btn class="ml-auto" @click="dialog = false" icon flat>
					<v-icon color="primary">mdi-close</v-icon>
				</v-btn>
				<span class="mx-auto my-3 text-overline text-h5 text-primary">
					{{ t("select.language") }}
				</span>
				<v-row>
					<v-col cols="3" v-for="loc in availableLocales" :key="loc">
						<v-btn
							color="secondary"
							:variant="loc === locale ? 'elevated' : 'outlined'"
							@click="toggleLocale(loc)"
						>
							{{ loc }}
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script lang="ts" setup>
	import { useI18n } from "vue-i18n";
	import { ref, onMounted } from "vue";
	const { availableLocales, locale, t } = useI18n();
	const dialog = ref(false);
	const toggleLocale = (newLocale: string) => {
		if (newLocale === locale.value) return;
		locale.value = newLocale;
		dialog.value = false;
	};
	onMounted(() => {
		if (!window.navigator.language) return;
		availableLocales.forEach((loc) => {
			if (!window.navigator.language.includes(loc)) return;
			locale.value = loc;
		});
	});
</script>

<style></style>
