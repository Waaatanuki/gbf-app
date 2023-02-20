<template>
  <div>
    <SelectBullets
      v-show="view == 'select'"
      @change="viewChange"
      v-model:selectedBullet="selectedBullet"
    />
    <ViewResult
      v-show="view == 'result'"
      @change="viewChange"
      :selectedBullet="selectedBullet"
    />
  </div>
</template>

<script setup lang="ts">
import DATA from '@/assets/data/bullet/data.json'
import SelectBullets from './components/SelectBullets.vue'
import ViewResult from './components/ViewResult.vue'

const view = ref('select')

const selectedBullet = useStorage('selectedBullet', [[], [], [], [], [], []])

function viewChange(viewName: string) {
  view.value = viewName
}
</script>

<style scoped></style>
