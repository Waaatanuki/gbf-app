<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { AppMain, Navbar } from './components/index'
import Sidebar from './components/Sidebar/index.vue'

const { width } = useWindowSize()
const WIDTH = 992

const app = useAppStore()

const sidebar = computed(() => app.sidebar)
const device = computed(() => app.device)

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile',
}))

watchEffect(() => {
  if (width.value < WIDTH) {
    app.toggleDevice('mobile')
    app.closeSideBar(true)
  }
  else {
    app.toggleDevice('desktop')
  }
})

function handleClickOutside() {
  app.closeSideBar(false)
}
</script>

<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <Sidebar class="sidebar-container bg-white dark:bg-#1d1e1f" />

    <div class="main-container">
      <div>
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/mixin.scss';
@import '~/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
