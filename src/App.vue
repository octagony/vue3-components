<script setup lang="ts">
import { ref } from 'vue'
import Rating from './components/Rating/Rating.vue'

const rating = ref(8)
</script>

<template>
  <div class="container">
    <Rating v-model="rating" :maxStars="10" />
    {{ rating }}
  </div>
</template>

<style>
.container {
  display: grid;
  place-items: center;
  height: 50vh;
}
</style>
