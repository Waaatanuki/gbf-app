<template>
  <div class="flex flex-col text-sm">
    <div class="flex justify-around items-center my-2">
      <template v-for="npc in evokerInfo.slice(0, 5)">
        <EvokerCard :evokerInfo="npc" />
      </template>
    </div>
    <div class="flex justify-around items-center my-2">
      <template v-for="npc in evokerInfo.slice(5, 10)">
        <EvokerCard :evokerInfo="npc" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import EvokerCard from './EvokerCard.vue'
defineProps(['evokerInfo'])
</script>

<style lang="scss" scoped></style>
