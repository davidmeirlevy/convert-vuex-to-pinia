import { computed, ref, toRefs } from 'vue';
import { useProductsStore } from './products';

export function useCart() {
	const checkoutStatus = ref(null);
	const items = ref([]);

	// TODO: products is just a composition!
	const { products, decrementProductInventory } = toRefs(useProductsStore())

	const cartProducts = computed(() => {
		return items.value.map(({ id, quantity }) => {
			const product = products.value.find(product => product.id === id)
			return {
				id: product.id,
				title: product.title,
				price: product.price,
				quantity
			}
		})
	});

	const cartTotalPrice = computed(() => {
		return cartProducts.value.reduce((total, product) => {
			return total + product.price * product.quantity
		}, 0)
	})

	function addProductToCart(product) {
		checkoutStatus.value = null;
		if (product.inventory > 0) {
			const cartItem = items.value.find(item => item.id === product.id);
			if (!cartItem) {
				items.value.push({
					id: product.id,
					quantity: 1
				});
			} else {
				cartItem.quantity++;
			}
		}
		decrementProductInventory.value(product);
	}

	return { addProductToCart, checkoutStatus, cartProducts, cartTotalPrice }
}
