<template>
  <div>
    <div w-250px flex justify-start v-for="row in materialList">
      <div w-50px fc flex-col p-5px v-for="item in row">
        <img
          :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item}.jpg`"
        />
        <input
          w-40px
          text-12px
          text-right
          pr-2px
          v-model.number="materialInfo[item]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { materialList } from '@/settings/evoker.setting'
defineProps(['materialInfo'])
</script>
