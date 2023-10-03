<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div flex items-start justify-center gap-100px>
    <Schedule />
    <Menu />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
