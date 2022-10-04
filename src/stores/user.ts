import { defineStore } from "pinia";

export const useUserStore = defineStore("storeUser", {
	state(): {
		choices: {
			[k: string]: boolean;
		};
		currency: String;
	} {
		return {
			choices: {
				includeTwoLayers: false,
				includeThreeLayers: false,
				includeFourLayers: false,
			},
			currency: "€",
		};
	},
	actions: {
		setChoices(key: keyof typeof this.choices, value: boolean) {
			this.choices[key] = value;
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
