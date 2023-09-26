<script setup lang="ts">
import EvokerCard from './EvokerCard.vue'

const evoker = useEvokerStore()
</script>

<template>
  <el-card :body-style="{ padding: '10px' }" max-w-720px>
    <div fc flex-col gap-10px>
      <div fc flex-wrap gap-10px>
        <div v-for=" npc, idx in evoker.evokerInfo" :key="npc.npcId">
          <EvokerCard v-model="evoker.evokerInfo[idx]" />
        </div>
      </div>
      <div>
        <el-scrollbar height="190">
          <div fc flex-wrap gap-5px>
            <div
              v-for="item in evoker.result.filter(item => item.need > 0)" :key="item.id"
              w-50px fc flex-col
            >
              <el-tooltip :content="`总需${item.total}`" placement="top">
                <img w-full :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item.id}.jpg`">
              </el-tooltip>
              <label>{{ item.need }}</label>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </el-card>
</template>
