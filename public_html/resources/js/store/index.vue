<template>
  
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters, manufacturerGetters } from './getters'
import {cartMutations} from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    counter: 0,
    cart: [],
    showLoader: false,
    product: {},
    products:[
                {
                    id: 1,
                    productName:"Item Doggy",
                    productPrice: "29.90",
                    productDescription:"Hello doggy",
                    productImage:"https://www.doggystickers.xyz/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-6aeffeca.jpg%3Fv%3D1617396810&w=1920&q=75"
                
                },
                {
                   id: 2,
                    productName:"Doggy",
                    productPrice: "39.90",
                    productDescription:"Hello doggy",
                    productImage:"https://www.doggystickers.xyz/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=1920&q=75"
                
                },
                {
                   id: 3,
                    productName:"Doggy",
                    productPrice: "49.90",
                    productDescription:"Hello doggy",
                    productImage:"https://www.doggystickers.xyz/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-de719380.jpg%3Fv%3D1617396832&w=1920&q=75"

                
                }
              ]
  },
  getters: Object.assign({counter: state => state.counter * 2}, productGetters, manufacturerGetters),
  mutations: Object.assign({}, cartMutations),

})
</script>

<style>

</style>