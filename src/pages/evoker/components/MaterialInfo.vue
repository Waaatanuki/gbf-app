<script setup lang="ts">
import { materialList } from '~/constants/evoker'

const evoker = useEvokerStore()
</script>

<template>
  <el-card :body-style="{ padding: '10px' }">
    <div v-for="row, y in materialList" :key="y" w-250px flex justify-start>
      <div v-for="item, x in row" :key="x" w-50px fc flex-col p-5px>
        <img :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item}.jpg`">
        <input
          v-model.number="evoker.materialInfo[item]"
          w-40px border-1 border-slate-600 rounded bg-inherit pr-2px text-right text-12px
        >
      </div>
    </div>
  </el-card>
</template>
