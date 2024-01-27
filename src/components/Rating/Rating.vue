<script setup>
import { ref, reactive, onMounted } from 'vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  maxStars: {
    type: Number,
    default: 0
  }
})

const data = reactive({
  hoverRating: 0,
  setRating: 0
})

onMounted(() => {
  data.hoverRating = props.modelValue
})

const setRating = (rating) => {
  emits('update:modelValue', rating)
  data.setRating = rating
}

const hoverRating = (rating) => {
  data.hoverRating = rating
}

const resetHoverRating = () => {
  data.hoverRating = data.setRating
}
</script>

<template>
  <div class="rating">
    <span
      v-for="star in props.maxStars"
      :key="star"
      @click="setRating(star)"
      @mouseover="hoverRating(star)"
      @mouseleave="resetHoverRating"
    >
      <i :class="star <= data.hoverRating ? 'filled-star' : 'star'"></i>
    </span>
  </div>
</template>

<style>
.star {
  align-items: center;
  &::before {
    display: block;
    content: '';
    height: 20px;
    width: 20px;
    background-image: url('../../svg/star.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}

.filled-star {
  align-items: center;
  &::before {
    display: block;
    content: '';
    height: 20px;
    width: 20px;
    background-image: url('../../svg/filled-star.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
</style>
