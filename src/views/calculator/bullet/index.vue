<script setup lang="ts">
import SelectBullets from './components/SelectBullets.vue'
import ViewResult from './components/ViewResult.vue'
import type { Bullet } from './types'

const view = ref('result')
const app = useAppStore()
const selectedBullet = useStorage('selectedBullet', [[], [], [], [], [], []] as Bullet[][])
</script>

<template>
  <div class="relative">
    <SelectBullets
      v-show="view === 'select'"
      v-model:selectedBullet="selectedBullet"
    />
    <ViewResult v-show="view === 'result'" :selected-bullet="selectedBullet" />
    <div class="absolute bottom-1 right-1 z-50">
      <el-switch
        v-model="view"
        inline-prompt
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-text="查看素材"
        active-value="select"
        inactive-text="选择子弹"
        inactive-value="result"
        :size="app.device === 'desktop' ? 'large' : 'small'"
      />
    </div>
  </div>
</template>
