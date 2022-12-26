<template>
    <v-container class="d-flex flex-column my-auto text-center">
        <p class="text-h4">{{ t("greeting") }}</p>
        <v-divider class="my-4" />

        <p class="text-overline">
            {{
                t("greeting.language", {
                    lang: detectedLanguage,
                })
            }}
        </p>
        <v-container class="mx-auto">
            <LocaleToggle />
        </v-container>
        <v-divider class="my-4" />

        <p class="text-overline">
            {{
                t("greeting.theme", {
                    theme: detectedTheme,
                })
            }}
        </p>
        <ThemeToggler />
        <v-divider class="my-4" />

        <div class="d-flex">
            <v-btn
                class="ml-auto my-auto"
                color="primary"
                appendIcon="mdi-arrow-right"
                @click="$emit('next')"
            >
                Next
            </v-btn>
        </div>
        <v-divider class="my-4" />

        <p class="text-caption text-t">
            {{ t("greeting.change") }}
        </p>
    </v-container>
</template>

<script lang="ts" setup>
    import { ref, onMounted, computed } from "vue";
    import { useI18n } from "vue-i18n";
    import LocaleToggle from "../LocaleToggle.vue";
    import ThemeToggler from "../ThemeToggler.vue";

    const { t } = useI18n();
    const detectedLanguage = computed(() => {
        if (window.navigator.language) return window.navigator.language;
        return "unsupported";
    });

    const detectedTheme = computed(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
            return "dark";
        if (window.matchMedia("(prefers-color-scheme: light)").matches)
            return "light";
        return "unsupported";
    });
</script>
