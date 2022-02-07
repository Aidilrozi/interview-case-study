<template>
      <div class="">
      <page-title :text="text"></page-title>
      <p class="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
        Times are tough. Liven up your home with some cute Doggy Stickers. 🐶    
      </p>
    </div>
</template>

<script>
import PageTitle from '../PageTitle.vue'

export default {
    name:"store-heading",
    
  components: { "page-title":PageTitle },

}
</script>

<style>

</style>e