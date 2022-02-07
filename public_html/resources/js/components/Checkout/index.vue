<template>

      <!-- <div>
      <p class="counter">{{counter}}</p>
      <div class="actions">
        <div class="actions-inner">
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </div>
      </div>
    </div> -->
    <div class="container mx-auto bg-orange-300">
       <p class="counter">{{counter}}</p>
      <div class="actions">
        <div class="actions-inner">
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"checkout",
      computed: {
    counter: function() {
      return this.$store.getters.counter
    }
  },
  methods: {
    increment: function () {
      this.$store.commit('increment')
    },
    decrement: function () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>


</style>