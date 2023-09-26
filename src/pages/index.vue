<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div fc gap-100px>
    <Schedule />
    <Menu self-start />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
