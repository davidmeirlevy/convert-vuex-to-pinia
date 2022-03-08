import { ref } from 'vue';
import shop from '../../api/shop';
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', function useProducts() {
	const products = ref([]);

	shop.getProducts(list => {
		products.value = list;
	});

	function decrementProductInventory ({ id }) {
		const product = products.value.find(product => product.id === id)
		product.inventory--
	}

	return { products, decrementProductInventory }
})
