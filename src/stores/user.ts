import { defineStore } from "pinia";

export const useUserStore = defineStore("storeUser", {
	state() {
		return {
			firstName: "Samuel",
			midName: "L",
			lastName: "Jackson",
			accessToken: "xxxxxxxxxxxxx",
			counter: 69,
		};
	},
	actions: {
		randomizeCounter() {
			this.counter = Math.random();
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
