<template>
  <div class="playground">
    <AudioVisualizers />
  </div>
</template>

<script setup lang="ts">
import AudioVisualizers from './components/AudioVisualizers.vue'
</script>

<style lang="scss" scoped>
.playground {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
