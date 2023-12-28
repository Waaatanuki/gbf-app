<script setup lang="ts">
import type { AppGoldBrickTableData } from 'goldBrick'

const props = defineProps<{ baseInfo: AppGoldBrickTableData[] }>()
const elTitle = ref<HTMLDivElement>()
const elComment = ref<HTMLDivElement>()

const showData = computed(() => {
  let max = 0
  let resultRaid = {} as AppGoldBrickTableData

  for (let index = 0; index < props.baseInfo.length; index++) {
    const raid = props.baseInfo[index]
    if (max < (raid.blueChestFFJ + raid.redChestFFJ + raid.normalChestFFJ)) {
      max = raid.blueChestFFJ + raid.redChestFFJ + raid.normalChestFFJ
      resultRaid = { ...raid }
    }
  }

  return resultRaid
})

onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__backInDown', 'animate__slower')
  elComment.value?.classList.add('animate__animated', 'animate__backInUp', 'animate__slower', 'animate__delay-1s')
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="elTitle" fc flex-col gap-30px text-2xl font-black>
      <div text-3xl>
        你的年度猎金本
      </div>
      <div v-if="showData.quest_id">
        <img w-150px :src="getQuestImg(showData.quest_id)">
      </div>
      <div>
        是他陪你度过了2023
      </div>
      <div fc>
        累计狩猎
        <div text-amber>
          {{ showData.total }}
        </div>
        只
      </div>
      <div fc>
        累计出金
        <div text-amber>
          {{ showData.blueChestFFJ + showData.redChestFFJ + showData.normalChestFFJ }}
        </div>
        块
      </div>
    </div>
    <div v-if="showData.total > 1000" ref="elComment" text-end text-xl text-violet>
      <div>
        我为上心骑空士代言
      </div>
    </div>
  </div>
</template>
