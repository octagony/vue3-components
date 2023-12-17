<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import Tabs from './components/Tabs.vue'

const data = reactive({
  skills: {
    name: 'skills',
    data: {
      hardSkills: [
        {
          title: 'Learning Hard',
          rating: 30
        },
        {
          title: 'Person Hard',
          rating: 20
        }
      ],
      softSkills: [
        {
          title: 'Learning Soft',
          rating: 50
        },
        {
          title: 'Person Soft',
          rating: 10
        }
      ]
    }
  },
  learning: {
    name: 'learning',
    data: {
      learning1: [
        {
          title: 'Learning Hard',
          rating: 30
        },
        {
          title: 'Person Hard',
          rating: 20
        }
      ],
      learning2: [
        {
          title: 'Learning Soft',
          rating: 50
        },
        {
          title: 'Person Soft',
          rating: 10
        }
      ]
    }
  }
})

const initialTab = ref(data.skills.name)

const computedTabs = computed(() => {
  return [data.skills.name, data.learning.name]
})

const asyncHandler = (tabName: string) => tabName

const triggerEmit = (tabName: string) => {
  const handler = asyncHandler(tabName)
  console.log(data[handler].data)
}

const triggerEdit = () => {
  isEditMode.value = !isEditMode.value
}

const isEditMode = ref(false)
</script>

<template>
  <div>
    <Tabs
      :tabs="computedTabs"
      :initialTab="initialTab"
      :isEditMode="isEditMode"
      @trigger="triggerEmit"
      @triggerEdit="triggerEdit"
    >
      <template v-slot:tab-head-skills> Skills </template>
      <template v-slot:tab-panel-skills>
        <li v-for="item in data.skills.data.hardSkills" :key="item.title">
          <p>{{ item.title }}</p>
          <p v-if="!isEditMode">{{ item.rating }}</p>
          <span v-if="!isEditMode"></span>
          <input v-else type="text" v-model="item.rating" />
        </li>
        <li v-for="item in data.skills.data.softSkills" :key="item.title">
          <p>{{ item.title }}</p>
          <p v-if="!isEditMode">{{ item.rating }}</p>
          <span v-if="!isEditMode"></span>
          <input v-else type="text" v-model="item.rating" />
        </li>
      </template>

      <template v-slot:tab-head-learning>Learning</template>
      <template v-slot:tab-panel-learning>
        <li v-for="item in data.learning.data.learning1" :key="item.title">
          <p>{{ item.title }}</p>
          <p v-if="!isEditMode">{{ item.rating }}</p>
          <span v-if="!isEditMode"></span>
          <input v-else type="text" v-model="item.rating" />
        </li>
        <li v-for="item in data.learning.data.learning2" :key="item.title">
          <p>{{ item.title }}</p>
          <p v-if="!isEditMode">{{ item.rating }}</p>
          <span v-if="!isEditMode"></span>
          <input v-else type="text" v-model="item.rating" />
        </li>
      </template>
    </Tabs>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

body {
  margin: 0;
  padding: 0;
  background-color: #eee;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

.image {
  height: 160px;
  width: auto;
}
</style>
