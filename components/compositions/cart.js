import { ref } from 'vue';

export function useCart() {
	const checkoutStatus = ref(null);
	const items = ref([]);

	function addProductToCart(product) {
		checkoutStatus.value = null;
		if (product.inventory > 0) {
			const cartItem = items.value.find(item => item.id === product.id);
			if (!cartItem) {
				items.value.push({
					id,
					quantity: 1
				});
			} else {
				cartItem.quantity++;
			}
		}
		// TODO: call decrementProductInventory
	}

	return { addProductToCart }
}
