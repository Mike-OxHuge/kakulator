<template>
    <v-row class="justify-center">
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
</template>

<script lang="ts" setup>
    import { useI18n } from "vue-i18n";
    import { onMounted, onUnmounted } from "vue";
    import { useUserStore } from "../stores";

    const { availableLocales, locale } = useI18n();
    const userSettings = useUserStore();

    const toggleLocale = (newLocale: string) => {
        if (newLocale === locale.value) return;
        locale.value = newLocale;
        userSettings.setLanguage(locale.value.toString());
    };
    onMounted(() => {
        if (!window.navigator.language) return;
        availableLocales.forEach((loc) => {
            if (!window.navigator.language.includes(loc)) return;
            if (userSettings.language) locale.value = userSettings.language;
            else locale.value = loc;
        });
    });
</script>

<style></style>
