import { defineStore } from "pinia";

interface userType {
    // [k: string]: string | boolean;
    choices: {
        [k: string]: boolean;
    };
    currency: undefined | string;
    language?: string;
    theme: undefined | string;
}

export const useUserStore = defineStore("storeUser", {
    state(): userType {
        return {
            choices: {
                includeTwoLayers: false,
                includeThreeLayers: false,
                includeFourLayers: false,
            },
            //
            currency: undefined,
            language: undefined,
            theme: undefined,
        };
    },
    actions: {
        setChoices(key: keyof typeof this.choices, value: boolean) {
            this.choices[key] = value;
        },
        setCurrency(currency: string) {
            this.currency = currency;
        },
        //
        setLanguage(lang: userType["language"]) {
            this.language = lang;
        },
        setTheme(theme: userType["theme"]) {
            this.theme = theme;
        },
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: "user",
                storage: localStorage,
            },
        ],
    },
});
