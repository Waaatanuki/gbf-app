<template>
  <el-scrollbar max-height="148">
    <div flex flex-wrap justify-center>
      <div w-50px p-2px fc flex-col v-for="item in result" :key="item.id">
        <el-tooltip :content="`总需${item.total}`" placement="top">
          <img
            :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item.id}.jpg`"
          />
        </el-tooltip>
        <label>{{ item.need }}</label>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
defineProps(['result'])
</script>
