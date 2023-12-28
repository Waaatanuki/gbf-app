<script setup lang="ts">
import type { AppGoldBrickTableData } from 'goldBrick'

defineProps<{ raidInfo: AppGoldBrickTableData }>()

function getRatio(a = 0, b = 0) {
  if (b === 0)
    return '0.00'

  return ((a / b) * 100).toFixed(2)
}

function getGoldBrickShowValue(raid: AppGoldBrickTableData) {
  switch (raid.quest_id) {
    case '303141':
      // 超巴
      return `${raid.redChestFFJ}+${raid.normalChestFFJ}`
    case '301061':
      // 大巴
      return `${raid.blueChestFFJ}+${raid.redChestFFJ}`
    default:
      return raid.blueChestFFJ
  }
}

function getGoldBrickTips(raid: AppGoldBrickTableData) {
  switch (raid.quest_id) {
    case '303141':
      // 超巴
      return '自发金+金箱金'
    case '301061':
      // 大巴
      return '蓝箱金+自发金'
    default:
      return '蓝箱金'
  }
}
</script>

<template>
  <ElCard :body-style="{ padding: '5px' }" class="dark">
    <div relative h-100px fc gap-10px text-sm>
      <div shrink-0>
        <img w-100px :src="getQuestImg(raidInfo.quest_id)">
        <div mt-2px fc gap-2px>
          <div i-game-icons:crossed-swords />
          <div text-orange font-black>
            {{ raidInfo.total?.toLocaleString() }}
          </div>
          <div i-game-icons:crossed-swords />
        </div>
      </div>
      <div fc flex-col>
        <div w-230px flex items-center justify-around>
          <div v-if="raidInfo.is_blue_treasure" class="desc-item">
            <el-badge :value="raidInfo.blueChest" type="danger" :max="999999">
              <img w-40px :src="getLocalImg('blueChest')">
            </el-badge>

            <div text-xs>
              {{ getRatio(raidInfo.blueChest, raidInfo.total) }}%
            </div>
          </div>

          <div v-else class="desc-item">
            <img w-40px brightness-40 :src="getLocalImg('blueChest')">
          </div>

          <div class="desc-item">
            <el-tooltip :content="getGoldBrickTips(raidInfo)">
              <el-badge :value="getGoldBrickShowValue(raidInfo)" type="danger" :max="999999">
                <img w-50px :src="getLocalImg('goldBrick', 'item')">
              </el-badge>
            </el-tooltip>

            <div v-if="raidInfo.quest_id !== '303141'" text-xs>
              {{ getRatio(raidInfo.blueChestFFJ, raidInfo.blueChest) }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </ElCard>
</template>

<style scoped>
.desc-item{
  width: 60px;
  height: 60px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
}
</style>
