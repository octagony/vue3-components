<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from './components/Checkbox/Checkbox.vue'

const check = ref(true);
</script>

<template>
  <div class="container">
    <Checkbox v-model="check" />
          {{check}}
  </div>
</template>

<style>
.container {
  display: grid;
  place-items: center;
  height: 50vh;
}
</style>
