<template>
	<div id="app">
		<h1>Shopping Cart Example</h1>
		<hr>
		<main>
			<section>
				<h2>Products</h2>
				<ProductList/>
			</section>
			<section>
				<ShoppingCart/>
			</section>
		</main>
	</div>
</template>

<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
	components: { ProductList, ShoppingCart }
}
</script>
<style>
body {
	background-color: black;
	color: #fff;
	font-size: 1.5em;
}

button {
	font-size: 1.5em;
	padding: 0.5em;
	border-radius: 10px;
}
</style>
<style scoped>
main {
	display: flex;
	justify-content: space-evenly;
}
</style>
