<script setup lang="ts">
import type { Bullet } from 'bullet'
import SelectBullets from './components/SelectBullets.vue'
import ViewResult from './components/ViewResult.vue'

const view = ref('result')
const selectedBullet = useStorage<Bullet[][]>('selectedBullet', [[], [], [], [], [], []])
</script>

<template>
  <div relative>
    <SelectBullets v-show="view === 'select'" v-model="selectedBullet" />
    <ViewResult v-show="view === 'result'" v-model="selectedBullet" />
    <div class="absolute bottom-1 right-2 z-50">
      <el-switch
        v-model="view"
        inline-prompt
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-text="查看素材" active-value="select"
        inactive-text="选择子弹" inactive-value="result"
      />
    </div>
  </div>
</template>
