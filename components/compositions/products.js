import { ref } from 'vue';
import shop from '../../api/shop';

export function useProducts() {
	const products = ref([]);

	shop.getProducts(list => {
		products.value = list;
	});

	return { products }
}
