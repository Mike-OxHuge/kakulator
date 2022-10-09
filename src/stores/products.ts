import { defineStore } from "pinia";
export interface ProductType {
	id?: String;
	isFavorite?: Boolean;
	name: String;
	price: Number;
	rolls: Number;
	sheets: Number;
	layers: Number;
}

interface StateType {
	products: ProductType[];
}

export const useProductStore = defineStore("storeProduct", {
	state(): StateType {
		return {
			products: [],
		};
	},
	actions: {
		addProduct(product: ProductType) {
			const id = new Date().toString();
			return this.products.push({ ...product, id });
		},

		deleteProduct(product: ProductType) {
			this.products = this.products.filter((p) => p.id !== product.id);
		},

		setFavorite(product: ProductType, isFavorite: boolean) {
			const { id } = product;
			for (let i = 0; i < this.products.length; i++) {
				if (this.products[i].id === id)
					this.products[i] = { ...product, isFavorite };
			}
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
