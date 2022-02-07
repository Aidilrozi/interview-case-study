<template>
 <div className="mx-auto max-w-6xl">
   <store-heading></store-heading>
  <div class="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
  
    <template v-for="product in products">
          <product-card :key="product.id" :product="product"></product-card>
    </template>
  </div>
</div>
</template>

<script>
import ProductCard from './ProductCard'
import StoreHeading from './StoreHeading.vue'


export default {
  components:{
        'product-card':ProductCard,
        'store-heading':StoreHeading
  
      
    },
    name: 'product-listing',
     products () {

      },
      computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },

}
</script>

<style>
    
</style>