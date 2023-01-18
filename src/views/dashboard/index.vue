<template>
  <div style="display: flex; flex-wrap: wrap">
    <Schedule />
    <ToDoList />
    <img class="ffj-img" src="/images/bg/ffj.jpeg" />
  </div>
</template>

<script lang="ts">
export default { name: 'Dashboard' }
</script>

<script setup lang="ts">
import Schedule from './components/Schedule.vue'
import ToDoList from './components/ToDoList.vue'
</script>

<style lang="scss" scoped>
.ffj-img {
  height: 350px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 2;
}
</style>
