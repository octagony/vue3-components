<script setup lang="ts">
import Tooltip from './components/Tooltip/Tooltip.vue'
</script>

<template>
  <div class="container">
    <Tooltip position="top" :timer="2000">
      <template #tooltip-inner>Click me</template>
      <template #tooltip-content>Успешно скопировано!</template>
    </Tooltip>
  </div>
</template>

<style>
.container {
  display: grid;
  place-items: center;
  height: 50vh;
}
</style>
