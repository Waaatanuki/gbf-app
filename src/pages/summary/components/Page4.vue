<script setup lang="ts">
import type { SummaryData } from './types'

const props = defineProps<{ summaryData: SummaryData }>()
const elTitle = ref<HTMLDivElement>()
const elComment = ref<HTMLDivElement>()

const showData = computed(() => {
  const max = Math.max(props.summaryData.amCount, props.summaryData.pmCount, props.summaryData.nightCount, props.summaryData.dawnCount)
  const total = props.summaryData.amCount + props.summaryData.pmCount + props.summaryData.nightCount + props.summaryData.dawnCount
  if (props.summaryData.amCount === max)
    return { str: '上午', range: '上午07:00-11:00', max, total }
  if (props.summaryData.pmCount === max)
    return { str: '下午', range: '下午13:00-17:00', max, total }
  if (props.summaryData.nightCount === max)
    return { str: '晚上', range: '晚上19:00-23:00', max, total }
  if (props.summaryData.dawnCount === max)
    return { str: '午夜', range: '午夜01:00-05:00', max, total }
})

onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slower')
  elComment.value?.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slower', 'animate__delay-1s')
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="elTitle" flex flex-col items-start justify-center gap-30px text-3xl font-black>
      <div fc>
        你最爱
        <div text-amber>
          {{ showData?.str }}
        </div>
        猎金
      </div>
      <div>
        {{ showData?.range }}
      </div>
      <div>
        是你全年最活跃的时段
      </div>
      <div w-300px flex flex-col gap-5px>
        <div fc gap-10px>
          <div w-40px text-base>
            上午
          </div>
          <div w-full>
            <el-progress :text-inside="true" :stroke-width="10" :percentage="summaryData.amCount / showData!.total * 100" />
          </div>
        </div>
        <div fc gap-10px>
          <div w-40px text-base>
            下午
          </div>
          <div w-full>
            <el-progress status="success" :text-inside="true" :stroke-width="10" :percentage="summaryData.pmCount / showData!.total * 100" />
          </div>
        </div>
        <div fc gap-10px>
          <div w-40px text-base>
            晚上
          </div>
          <div w-full>
            <el-progress status="warning" :text-inside="true" :stroke-width="10" :percentage="summaryData.nightCount / showData!.total * 100" />
          </div>
        </div>
        <div fc gap-10px>
          <div w-40px text-base>
            午夜
          </div>
          <div w-full>
            <el-progress status="exception" :text-inside="true" :stroke-width="10" :percentage="summaryData.dawnCount / showData!.total * 100" />
          </div>
        </div>
      </div>
    </div>
    <div ref="elComment" text-end text-xl text-violet>
      <div>
        当疲惫光顾所有人
      </div>
      <div>
        只有你，奋战金本，孜孜不倦
      </div>
    </div>
  </div>
</template>
