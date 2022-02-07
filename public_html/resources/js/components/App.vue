
<template>
 <div class="flex flex-col justify-between min-h-screen">
    
              <header class="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div class="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
          <router-link to="/app/home"><i class="fa fa-home"></i>    <a class=" cursor-pointer">
            <h1 class="flex no-underline">
              <img height="32" width="32" alt="logo" class="h-8 w-8 mr-1 object-contain" src="/images/icon.svg" />
              <span class="text-xl font-primary font-bold tracking-tight pt-1">
               Doggy Stickers
              </span>
            </h1>
          </a></router-link>

        <div>

            <a class=" relative" aria-label="cart">
                    <div>
                        <font-awesome-icon :icon="cart" class="text-palette-primary w-6 m-auto" fixed-width size="lg" />
                    </div>
            
                  <div
                    class="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                  >
                  3
                  </div>
              
            </a>
        
        </div>
      </div>
    </header>
  
<router-view></router-view>
        <!-- <Footer /> -->
</div>
  
    
</template>

<script>
// import Nav from './Nav'
import ProductCard from './ProductCard.vue'
import ProductListing from './ProductListing'
import { faAddressCard,faShoppingBag,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { doggyIcon} from '../../assets/icon.svg'
export default {
    components:{
        'product-listing':ProductListing,
        'product-card':ProductCard,
        FontAwesomeIcon
        
          
    },
    name: 'App',
    created() {
      console.log(this.$router.currentRoute.path); // path is /post
    },
     computed: {
    cart () {
      return faShoppingCart
    },
    data () {
    return {
      myIcon: faSpinner,

    }
  },
  }

}
</script>

<style>

</style>
