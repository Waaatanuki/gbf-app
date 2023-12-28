<script setup lang="ts">
import type { SummaryData } from './types'

defineProps<{ summaryData: SummaryData }>()
const elTitle = ref<HTMLDivElement>()
const elComment = ref<HTMLDivElement>()
onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower')
  elComment.value?.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower', 'animate__delay-1s')
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="elTitle" flex flex-col items-start justify-center gap-30px text-3xl font-black>
      <div text-amber>
        {{ summaryData.lastestData.lastestDate }}
      </div>
      <div>
        这天你睡得很晚
      </div>
      <div fc text-2xl>
        <div text-amber>
          {{ summaryData.lastestData.lastestTime }}
        </div>
        了
      </div>
      <div text-2xl>
        你还在{{ summaryData.lastestData.raidName }}猎金
      </div>
    </div>
    <div ref="elComment" text-start text-xl text-violet>
      <div>
        白天属于别人
      </div>
      <div>
        夜晚属于猎金和自己
      </div>
    </div>
  </div>
</template>
