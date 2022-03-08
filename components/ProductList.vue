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
import { useStore } from 'vuex'
import { currency } from '../currency'
import { useProducts } from './compositions/products';

export default {
  setup () {
    const store = useStore()

    const { products } = useProducts();

    const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)


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
