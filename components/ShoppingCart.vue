<template>
	<div class="cart">
		<h2>Your Cart</h2>
		<p v-show="!products.length">
			<i>Please add some products to cart.</i>
		</p>
		<ul>
			<li v-for="product in products" :key="product.id">
				{{ product.title }} - {{ currency(product.price) }} x {{ product.quantity }}
			</li>
		</ul>
		<p>Total: {{ currency(total) }}</p>
		<p>
			<button :disabled="!products.length" @click="checkout(products)">Checkout</button>
		</p>
		<p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { currency } from '../currency'
import { useCartStore } from './compositions/cart';
import { toRefs } from 'vue';

export default {
	setup() {
		const store = useStore()

		const { checkoutStatus, cartProducts, cartTotalPrice } = toRefs(useCartStore())

		const checkout = (products) => store.dispatch('cart/checkout', products)

		return {
			currency,
			checkoutStatus,
			products: cartProducts,
			total: cartTotalPrice,
			checkout
		}
	}
}
</script>
