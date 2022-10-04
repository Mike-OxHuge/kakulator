import { defineStore } from "pinia";

export const useUserStore = defineStore("storeUser", {
	state() {
		return {
			choices: {
				includeTwoLayers: false,
				includeThreeLayers: true,
				includeFourLayers: false,
			},
			activities: [
				{
					name: "pee",
					amounts: {
						twoLayers: 4,
						threeLayers: 3,
						fourLayers: 2,
					},
				},
			],
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
