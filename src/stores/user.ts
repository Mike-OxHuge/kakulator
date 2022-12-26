import { defineStore } from "pinia";

interface userType {
    // [k: string]: string | boolean;
    choices: {
        [k: string]: boolean;
    };
    currency?: string;
    language?: string;
    theme?: string;
    layers: {
        [k: string]: boolean;
    };
}

export const useUserStore = defineStore("storeUser", {
    state(): userType {
        return {
            // undefiend values as a default (for reset)
            choices: {
                includeTwoLayers: false,
                includeThreeLayers: false,
                includeFourLayers: false,
            },
            //
            currency: undefined,
            language: undefined,
            theme: undefined,
            layers: {
                "1": false,
                "2": false,
                "3": false,
                "4": false,
            },
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
        setLayers(key: keyof typeof this.layers, value: boolean) {
            this.layers[key] = value;
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
