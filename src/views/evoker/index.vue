<script setup lang="ts">
import MaterialInfo from './components/MaterialInfo.vue'
import EvokerInfo from './components//EvokerInfo.vue'
</script>

<template>
  <div class="app-container">
    <div class="evoker-page" rounded-5px flex flex-wrap justify-evenly items-center>
      <MaterialInfo />
      <div flex flex-col max-w-700px>
        <EvokerInfo />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.evoker-page {
  background: #3e5151;
  background: -webkit-linear-gradient(to top, #decba4, #3e5151);
  background: linear-gradient(to top, #decba4, #3e5151);
}
</style>
