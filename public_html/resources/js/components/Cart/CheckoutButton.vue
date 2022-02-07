<template>
<router-link to="app/checkout">
    <a
    
      aria-label="checkout-products"
      class="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
   justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
    >
    Check Out
     <font-awesome-icon :icon="faArrowRight" class="w-4 ml-2 inline-flex" />
      
      
    </a>
</router-link>
</template>

<script>
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    names:"checkout-btn",
    components:{FontAwesomeIcon},
    computed: {
        faArrowRight () {
        return faArrowRight
        },
    }
}
</script>

<style>

</style>