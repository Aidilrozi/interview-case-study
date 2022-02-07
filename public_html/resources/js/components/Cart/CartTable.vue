<template>
      <div class="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
      <table class="mx-auto">
        <thead>
          <tr class="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th class="font-primary font-normal px-6 py-4">Product</th>
            <th class="font-primary font-normal px-6 py-4">Quantity</th>
            <th class="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
            <th class="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-palette-lighter">
                   <tr key={item.variantId} class="text-sm sm:text-base text-gray-600 text-center">
              <td class="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <!-- <img
                  src={item.productImage.originalSrc}
                  alt={item.productImage.altText}
                  height={64}
                  width={64}
                  class={`hidden sm:inline-flex`}
                /> -->
                <!-- <router-link href="#">
                  <a class="pt-1 hover:text-palette-dark">
                    
                  </a>
                </router-link> -->
              </td>
              <td class="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item.variantQuantity}
                  
                  class="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td class="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
              RM<span class="text-lg">50</span>
              </td>
              <td class="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  class=""
                  
                >
                  <font-awesome-icon :icon="fatimes" class="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter" size="lg" />
                </button>
              </td>
            </tr>
       
              <tr class="text-center">
                <td></td>
                <td class="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
                <td class="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                 RM<span class="text-xl">50</span>
                </td>
                <td></td>
              </tr>
          
        </tbody>
      </table>
    </div>
</template>

<script>
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    names:"cart-table",
    components:{FontAwesomeIcon},
    computed: {
        fatimes () {
        return faTimes
        },
    }
}
</script>

<style>

</style>