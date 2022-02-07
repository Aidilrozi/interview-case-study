<template>
<section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full px-4">
        <ul class="flex flex-wrap items-center mb-16">
          <li class="mr-6">
            <a class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
              <span>Home</span>
              <svg class="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li class="mr-6">
            <a class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
              <span>Store</span>
              <svg class="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li><a class="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#">{{product.productName}}</a></li>
        </ul>
      </div>
        <product-image :product="product"></product-image>
        <product-info :product="product"></product-info>
    </div>
  </div>
</section>
</template>

<script>
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

export default {
  components: { "product-info":ProductInfo,"product-image" :ProductImage },
    name:"Details",
    created () {
      console.log(this.$route.params['id'])
    
      if (!this.product.productName) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    // data() {
    //     return  {
    //       product:{
    //                 id: 1,
    //                 productName:"Doggy",
    //                 productPrice: "50",
    //                 productDescription:"Hello doggy",
    //                 productImage:"https://www.doggystickers.xyz/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-6aeffeca.jpg%3Fv%3D1617396810&w=1920&q=75"
                
    //             }
    //     }
    // }
}
</script>

<style>

</style>