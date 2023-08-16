<script setup lang="ts">
import Schedule from './components/Schedule.vue'
import ToDoList from './components/ToDoList.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="app-container" relative>
    <div flex flex-wrap gap-4>
      <Schedule z-10 />
      <ToDoList z-10 />
    </div>
    <Contact absolute right-4 top-4 />
    <img
      h-300px absolute right-4 bottom-4
      src="/images/bg/ffj.jpeg"
    >
  </div>
</template>
