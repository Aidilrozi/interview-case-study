<template>
   <router-link to="app/product">
      <a
        aria-label="back-to-products"
        class="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
      >
      <font-awesome-icon :icon="faArrowLeft" class="w-4 ml-2 inline-flex" />
       
        Back To All Products
      </a>
    </router-link>
</template>

<script>
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name:"back-to-product",
    components:{
        FontAwesomeIcon
    },
    computed: {
        faArrowLeft () {
        return faArrowLeft
        },
    }
}
</script>

<style>

</style>