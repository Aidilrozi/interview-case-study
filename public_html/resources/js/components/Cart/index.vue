<template>
   <div class="container mx-auto mb-20 min-h-screen">
       <!-- page title -->
       <!-- cart table -->
       <page-title/>
       <cart-table/>
         <div class="max-w-sm mx-auto space-y-4 px-2">
             <!-- checkout button -->
             <checkout-btn></checkout-btn>
             <!-- back to product list -->
             <back-to-product></back-to-product>
         </div>
   </div>
</template>

<script>
import PageTitle from '../../PageTitle.vue'
import BackToProduct from './BackToProduct.vue'
import CartTable from './CartTable.vue'
import CheckoutButton from './CheckoutButton.vue'

export default {
    name:"cart",
    components :{CartTable, PageTitle,"checkout-btn":CheckoutButton, BackToProduct}
}
</script>


        CartTable<style>

</style>