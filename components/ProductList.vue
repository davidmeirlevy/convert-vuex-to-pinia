<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ currency(product.price) }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { currency } from '../currency'
import { useProducts } from './compositions/products';
import { useCart } from './compositions/cart';

export default {
  setup () {
    const { products } = useProducts();

    const { addProductToCart } = useCart()

    return {
      products,
      addProductToCart,
      currency
    }
  }
  // computed: mapState({
  //   products: state => state.products.all
  // }),
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  // created () {
  //   this.$store.dispatch('products/getAllProducts')
  // }
}
</script>
