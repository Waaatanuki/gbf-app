<script setup lang="ts">
import { computed } from 'vue'

import SidebarItem from './SidebarItem.vue'
import Logo from './Logo.vue'
import { constantRoutes } from '~/router'

const app = useAppStore()

const route = useRoute()
const routes = computed(() => constantRoutes)
const isCollapse = computed(() => !app.sidebar.opened)

const activeMenu = computed(() => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu)
    return meta.activeMenu as string

  return path
})
</script>

<template>
  <div class="has-logo">
    <Logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="r in routes"
          :key="r.path"
          :item="r"
          :base-path="r.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
