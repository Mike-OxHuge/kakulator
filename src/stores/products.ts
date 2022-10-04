import { defineStore } from "pinia";
interface ProductType {
	id?: String;
	name: String;
	price: Number;
	rolls: Number;
	sheets: Number;
	layers: Number;
}
const productSchema: ProductType = {
	id: "",
	name: "",
	price: 0,
	rolls: 0,
	sheets: 0,
	layers: 0,
};

interface ResultType {
	id: String;
	name: String;
	prices: { activity: String; price: Number }[];
}

const resultSchema: ResultType = {
	id: "",
	name: "",
	prices: [
		{
			activity: "",
			price: 0,
		},
	],
};

interface StateType {
	// product: ProductType;
	products: ProductType[];
	// result: ResultType;
	results: ResultType[];
}

export const useProductStore = defineStore("storeProduct", {
	state(): StateType {
		return {
			// product: {
			// 	id: "",
			// 	name: "",
			// 	price: 0,
			// 	rolls: 0,
			// 	sheets: 0,
			// 	layers: 0,
			// },
			products: [],
			// result: {
			// 	id: "",
			// 	name: "",
			// 	prices: [{ activity: "", price: 0 }],
			// },
			results: [],
		};
	},
	actions: {
		addProduct(product: ProductType) {
			const id = new Date().toString();
			return this.products.push({ ...product, id });
		},
	},

	persist: {
		enabled: true,
		strategies: [
			{
				key: "product",
				storage: localStorage,
			},
		],
	},
});
