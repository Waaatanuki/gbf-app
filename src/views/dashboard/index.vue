<script setup lang="ts">
import Schedule from './components/Schedule.vue'
import ToDoList from './components/ToDoList.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="flex flex-wrap relative">
    <Schedule />
    <ToDoList />
    <Contact class="absolute right-15px top-15px" />
    <img
      h-350px
      class="absolute right-15px bottom-15px"
      src="/images/bg/ffj.jpeg"
    >
  </div>
</template>
