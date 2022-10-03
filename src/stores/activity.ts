import { defineStore } from "pinia";

const activitySchema: ActivityType = {
	id: "",
	name: "",
	per2: 0,
	per3: 0,
	per4: 0,
};
export interface ActivityType {
	[k: string]: string | number;
}

interface StateType {
	activities: ActivityType[];
	activitySchema: ActivityType;
}
export const useActivityStore = defineStore("storeActivity", {
	state(): StateType {
		return {
			activities: [],
			activitySchema,
		};
	},
	actions: {
		addActivity(value: ActivityType) {
			const id = new Date().toString();
			return this.activities.push({ ...value, id });
		},
		removeActivity(value: ActivityType) {
			return (this.activities = this.activities.filter(
				(e) => e.id !== value.id
			));
		},
	},
	persist: {
		enabled: true,
		strategies: [
			{
				key: "activity",
				storage: localStorage,
			},
		],
	},
});
