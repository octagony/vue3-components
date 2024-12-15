<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'
import { ITooltip } from './ITooltip.interface'

const props = defineProps<ITooltip>()

const data = reactive({
  isShow: false
})

const toggleVisibility = () => {
  data.isShow = !data.isShow
}

const startVisibilityTimeout = () => {
  toggleVisibility()
  setTimeout(() => (data.isShow = false), props.timer)
}

const clickOutsideHandler = (event: Event) => {
  if (data.isShow && !(event?.target as HTMLDivElement).closest('.tooltip')) {
    toggleVisibility()
  }
}

onMounted(() => {
  window.addEventListener('click', clickOutsideHandler)
  window.addEventListener('touchstart', clickOutsideHandler)
})

onUnmounted(() => {
  window.removeEventListener('click', clickOutsideHandler)
  window.addEventListener('touchstart', clickOutsideHandler)
})
</script>

<template>
  <div class="btn btn-primary tooltip" @click="startVisibilityTimeout">
    <slot name="tooltip-inner"></slot>
    <Transition>
      <div v-if="data.isShow" class="tooltip-wrapper" :class="props.position">
        <slot name="tooltip-header"></slot>
        <div>
          <slot name="tooltip-content"></slot>
        </div>
        <i></i>
      </div>
    </Transition>
  </div>
</template>

<style>
.tooltip {
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.tooltip-wrapper {
  width: max-content;
  padding: 10px;
  color: #2b2d42;
  background-color: #fff;
  font-weight: normal;
  font-size: 13px;
  border-radius: 8px;
  position: absolute;
  z-index: 20;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

.tooltip .top {
  top: -20px;
  left: 50%;
  transform: translate(-50%, -100%);
}

.tooltip .bottom {
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
}

.tooltip .right {
  top: 50%;
  left: 100%;
  margin-left: 20px;
  transform: translate(0, -50%);
}

.tooltip .left {
  top: 50%;
  right: 100%;
  margin-right: 20px;
  transform: translate(0, -50%);
}

.tooltip i {
  position: absolute;
  overflow: hidden;
  z-index: 15;
}

.tooltip .top i {
  top: 100%;
  left: 50%;
  margin-left: -12px;
  width: 24px;
  height: 12px;
}

.tooltip .bottom i {
  bottom: 100%;
  left: 50%;
  margin-left: -12px;
  width: 24px;
  height: 12px;
}

.tooltip .right i {
  top: 50%;
  right: 100%;
  margin-top: -12px;
  width: 12px;
  height: 24px;
}

.tooltip .left i {
  top: 50%;
  left: 100%;
  width: 12px;
  height: 24px;
  margin-top: -12px;
}

.tooltip i::after {
  content: '';
  background-color: #fff;
  width: 12px;
  height: 12px;
  position: absolute;
  overflow: hidden;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

.tooltip .top i::after {
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.tooltip .bottom i::after {
  left: 50%;
  transform: translate(-50%, 50%) rotate(45deg);
}

.tooltip .right i::after {
  left: 0;
  top: 50%;
  transform: translate(50%, -50%) rotate(-45deg);
}

.tooltip .left i::after {
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
