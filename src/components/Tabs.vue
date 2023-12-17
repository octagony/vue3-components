<script setup lang="ts">
import { computed, ref } from 'vue'

interface ITabs {
  initialTab: string
  tabs: string[]
  isEditMode: boolean
}

const props = defineProps<ITabs>()

const emit = defineEmits(['trigger', 'triggerEdit'])

const activeTab = ref(props.initialTab)

const tabPanelSlotName = computed(() => {
  return `tab-panel-${activeTab.value}`
})

const tabHeadSlotName = (tabName: string) => {
  return `tab-head-${tabName}`
}

const switchTab = (tabName: string) => {
  activeTab.value = tabName
  emit('trigger', tabName)
  props.isEditMode && emit('triggerEdit')
}

const setEditMode = () => {
  emit('triggerEdit')
}
</script>

<template>
  <div class="card">
    <menu class="card-header">
      <ul class="tab-heads">
        <li
          class="tab-head"
          v-for="tab in tabs"
          :key="tab"
          :class="{
            'tab-head--active': activeTab === tab
          }"
          v-on:click="switchTab(tab)"
        >
          <slot :name="tabHeadSlotName(tab)">
            {{ tab }}
          </slot>
        </li>
        <button class="edit" @click="setEditMode">Edit</button>
      </ul>
    </menu>
    <div class="tab-panel">
      <slot :name="tabPanelSlotName" />
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 6px;
  width: 500px;
  height: 300px;
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.14);
}

.card-header {
  background-color: #263538;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  padding: 15px 8px 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.tab-heads {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}

.tab-head {
  padding: 5px 18px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  cursor: pointer;
}

.tab-head--active {
  background-color: #fff;
  color: #333;
  transition: 0.4s;
}

.card-body {
  padding: 20px 16px;
}

.edit {
  margin-left: auto;
}
</style>
