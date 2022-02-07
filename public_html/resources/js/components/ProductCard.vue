<template>
<router-link :to="'/app/details/'+product.id">
 <div class="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      <!-- {
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      } -->
      <a class="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div class="h-72 border-b-2 border-palette-lighter relative">
           <img :src=product.productImage alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
          <!-- <Image
            src={imageNode.originalSrc}
            alt={imageNode.altText}
            layout="fill"
            class="transform duration-500 ease-in-out hover:scale-110"
          /> -->
        </div>
        <div class="h-48 relative">
          <div class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
              {{product.productName}}
          </div>
          <div class="text-lg text-gray-600 p-4 font-primary font-light">
           {{product.productDescription}}
          </div>
          <div
            class="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
          RM<span class="text-lg">{{product.productPrice}}</span>
            <!-- <Price
              currency="$"
              num={price}
              numSize="text-lg"
            /> -->
          </div>
        </div>
      </a>
    </div>
</router-link>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],
}
</script>

<style>
    
</style>