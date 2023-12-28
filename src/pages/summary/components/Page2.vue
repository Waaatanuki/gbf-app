<script setup lang="ts">
import type { SummaryData } from './types'

defineProps<{ summaryData: SummaryData }>()
const elTitle = ref<HTMLDivElement>()
const elComment = ref<HTMLDivElement>()

onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slower')
  elComment.value?.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slower', 'animate__delay-1s')
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="elTitle" flex flex-col items-start justify-center gap-30px text-3xl font-black>
      <div>
        今年一共产生了
      </div>
      <div fc>
        <div text-amber>
          {{ summaryData.total }}
        </div> 条金本记录
      </div>
      <div fc>
        猎金陪伴了你
      </div>
      <div fc>
        <div text-amber>
          {{ summaryData.totalDayCount }}
        </div> 天
      </div>
    </div>
    <div ref="elComment" text-end text-xl text-violet>
      <div>
        陪伴是最长情的告白
      </div>
    </div>
  </div>
</template>
