<script setup lang="ts">
import { menuList } from '~/constants/menu'
</script>

<template>
  <div h-400px w-620px fc flex-wrap gap-50px>
    <el-card v-for="menu, idx in menuList" :key="idx" w-250px shadow="hover">
      <div fc cursor-pointer select-none gap-10px text-3xl @click="$router.push(menu.url)">
        <component :is="menu.icon" />
        {{ menu.label }}
      </div>
    </el-card>
  </div>
</template>

<style scoped>

</style>
