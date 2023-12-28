<script setup lang="ts">
import dayjs from 'dayjs'
import type { SummaryData } from './types'
import TarouIcon from '~/assets/image/common/icon-128.png'

const props = defineProps<{ summaryData: SummaryData }>()

const elTitle = ref<HTMLDivElement>()

const showData = computed(() => {
  const firstDate = dayjs(props.summaryData.firstTimestamp)

  return {
    year: firstDate.year(),
    month: firstDate.month() + 1,
    day: firstDate.date(),
    dayDiff: dayjs().diff(firstDate, 'day'),
    monthDiff: dayjs().diff(firstDate, 'months'),
  }
})

onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__fadeIn', 'animate__slower', 'animate-delay-1s')
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="elTitle" fc flex-col gap-30px text-3xl font-black>
      <div>
        第一次相遇很美
      </div>
      <div fc>
        <div text-amber>
          {{ showData.year }}
        </div> 年
        <div text-amber>
          {{ showData.month }}
        </div> 月
        <div text-amber>
          {{ showData.day }}
        </div> 日
      </div>
      <div fc>
        一转眼
        <div text-amber>
          {{ showData.dayDiff }}
        </div>天
      </div>
      <div fc>
        已经
        <div text-amber>
          {{ showData.monthDiff }}
        </div>
        个月了
      </div>
      <div mt-20px>
        <img :src="TarouIcon">
      </div>
    </div>
  </div>
</template>
