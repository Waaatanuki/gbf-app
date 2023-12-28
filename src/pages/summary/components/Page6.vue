<script setup lang="ts">
import type { SummaryData } from './types'

defineProps<{ summaryData: SummaryData }>()
const elTitle = ref<HTMLDivElement>()
const elComment = ref<HTMLDivElement>()
onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__fadeInTopRight', 'animate__slower')
  elComment.value?.classList.add('animate__animated', 'animate__fadeInBottomLeft', 'animate__slower', 'animate__delay-1s')
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="elTitle" flex flex-col items-end justify-center gap-30px text-3xl font-black>
      <div text-amber>
        {{ summaryData.mostData.total }}次
      </div>
      <div mb-50px>
        猎金循环
      </div>
      <div text-amber>
        {{ summaryData.mostData.date }}
      </div>
      <div>
        你打了{{ summaryData.mostData.total }}次金本
      </div>
      <div fc>
        一共出了
        <div text-amber>
          {{ summaryData.mostData.goldBrick }}
        </div>
        块金
      </div>
    </div>
    <div ref="elComment" text-start text-xl text-violet>
      <div>
        那天的情绪
      </div>
      <div>
        是否已刻入记忆
      </div>
    </div>
  </div>
</template>
