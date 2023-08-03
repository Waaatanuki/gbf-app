<script setup lang="ts">
import EvokerCard from './EvokerCard.vue'

const evoker = useEvokerStore()
</script>

<template>
  <div flex flex-col text-sm>
    <div flex justify-around items-center my-2 gap-2>
      <div v-for=" idx in 5" :key="idx">
        <EvokerCard v-model="evoker.evokerInfo[idx - 1]" />
      </div>
    </div>
    <div flex justify-around items-center my-2 gap-2>
      <div v-for=" idx in 5" :key="idx">
        <EvokerCard v-model="evoker.evokerInfo[idx + 4]" />
      </div>
    </div>
  </div>
  <div v-if="evoker.result.length === 0">
    <h1 style="text-align: center">
      请先去游戏的素材界面读取素材信息
    </h1>
  </div>
  <div v-else>
    <el-scrollbar max-height="210">
      <div class="showBox">
        <div
          v-for="item in evoker.result.filter(item => item.need > 0)"
          :key="item.id"
          class="item"
        >
          <el-tooltip :content="`总需${item.total}`" placement="top">
            <img w-full :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item.id}.jpg`">
          </el-tooltip>
          <label>{{ item.need }}</label>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.showBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin: 5px;
  }
}
</style>
