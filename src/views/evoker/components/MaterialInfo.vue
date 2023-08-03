<script setup lang="ts">
import { materialList } from '~/constants/evoker'

const evoker = useEvokerStore()
</script>

<template>
  <div>
    <div v-for="row, y in materialList" :key="y" w-250px flex justify-start>
      <div v-for="item, x in row" :key="x" w-50px fc flex-col p-5px>
        <img :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item}.jpg`">
        <input
          v-model.number="evoker.materialInfo[item]"
          w-40px text-12px text-right pr-2px
        >
      </div>
    </div>
  </div>
</template>
