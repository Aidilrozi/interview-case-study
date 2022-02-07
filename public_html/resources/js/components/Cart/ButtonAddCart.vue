<template>

  <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0">
  <div class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-purple-800 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:bg-purple-600 rounded-xl">
   <button   @click="addToCart"> Add to Cart</button>
   <!-- <button class="button button-danger" @click="removeFromCart(product.id)"><i class="fa fa-trash"></i> Remove from Cart</button> -->
   </div>
    <!-- <a class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-purple-800 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:bg-purple-600 rounded-xl" href="#">Add to bag</a> -->
  </div>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'
export default {
    name:"button-add-cart",
    props: ['product'],
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      // verifica se o produto atual esta no carrinho
      isAdding () {
        return this.cart.indexOf(this.product) < 0
      }
    },
    // aqui usamos as mutations
    methods: {
      addToCart () {
          console.log('clicked')
        this.$store.commit(ADD_TO_CART, this.product)
      },
      removeFromCart (id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      }
    },
    updated(){
        console.log('Updated hook has been called');
    },
}
</script>

<style>

</style>