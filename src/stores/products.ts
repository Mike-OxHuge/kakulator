import { defineStore } from "pinia";
export interface ProductType {
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
	price: Number;
}

const resultSchema: ResultType = {
	id: "",
	name: "",
	price: 0,
};

interface StateType {
	products: ProductType[];
	results: ResultType[];
}

export const useProductStore = defineStore("storeProduct", {
	state(): StateType {
		return {
			products: [],
			results: [],
		};
	},
	actions: {
		addProduct(product: ProductType) {
			const id = new Date().toString();
			return this.products.push({ ...product, id });
		},
		deleteProduct(product: ProductType) {
			return this.products.filter((prod) => prod.id !== product.id);
		},
		addResult(result: ResultType) {
			const id = new Date().toString();
			return this.results.push({ ...result, id });
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
