<script setup lang="ts">
import Breadcrumb from '~/components/Breadcrumb/index.vue'
import Hamburger from '~/components/Hamburger/index.vue'

const app = useAppStore()
const sidebar = computed(() => app.sidebar)

function toggleSideBar() {
  app.toggleSidebar()
}
</script>

<template>
  <div class="navbar">
    <Hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggle-click="toggleSideBar"
    />

    <Breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <button absolute right-20px top-0 bottom-0 icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
}
</style>
