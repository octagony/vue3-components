<script setup lang="ts">
import { computed } from 'vue'
import { IButton } from './IButton.interface.ts'

const props = defineProps<IButton>()

const computedSize = computed(() => ({
  btn__sm: props.size === 'sm',
  btn__md: props.size === 'md',
  btn__lg: props.size === 'lg'
}))

const computedVariant = computed(() => ({
  btn__secondary: props.type === 'secondary',
  btn__success: props.type === 'success',
  btn__info: props.type === 'info',
  btn__warning: props.type === 'warning',
  btn__help: props.type === 'help',
  btn__danger: props.type === 'danger'
}))
</script>

<template>
  <button class="btn" :class="[computedVariant, props.raised && 'btn__raised']">
    <span class="btn__label" :class="computedSize">{{ props.label }}</span>
  </button>
</template>

<style scoped>
.btn {
  background: #10b981;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.btn:hover {
  opacity: 0.8;
}

.btn__label {
  color: white;
}

.btn__sm {
  font-size: 14px;
}

.btn__sm {
  font-size: 14px;
}

.btn__md {
  font-size: 16px;
}

.btn__lg {
  font-size: 18px;
}

.btn__secondary {
  background-color: #64748b;
}

.btn__success {
  background-color: #22c55e;
}

.btn__info {
  background-color: #0ea5e9;
}

.btn__warning {
  background-color: #f97316;
}

.btn__help {
  background-color: #a855f7;
}

.btn__danger {
  background-color: #ef4444;
}

.btn__raised {
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>
