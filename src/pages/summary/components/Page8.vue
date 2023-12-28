<script setup lang="ts">
import type { AppGoldBrickTableData } from 'goldBrick'

defineProps<{ userName: string, baseInfo: AppGoldBrickTableData[] }>()
defineEmits(['setName'])

const elTitle = ref<HTMLDivElement>()

onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__rotateIn', 'animate__slower')
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="elTitle">
      <div cursor-pointer text-end text-base @click="$emit('setName')">
        {{ `@${userName}` }}
      </div>
      <div mb-10px text-end text-xl>
        2023猎金成就
      </div>
      <div v-for="item in baseInfo" :key="item.quest_id">
        <RaidCard :raid-info="item" />
      </div>
    </div>
  </div>
</template>
