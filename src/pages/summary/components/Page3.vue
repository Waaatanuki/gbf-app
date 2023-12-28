<script setup lang="ts">
import * as echarts from 'echarts'
import type { AppGoldBrickTableData } from 'goldBrick'
import type { SummaryData } from './types'

const props = defineProps<{ summaryData: SummaryData, baseInfo: AppGoldBrickTableData[] }>()

type EChartsOption = echarts.EChartsOption

const option = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    left: 'center',
    textStyle: {
      color: '#E5EAF3',
    },
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: props.baseInfo.map(raid => ({
        value: raid.total,
        name: raid.quest_name_cn,
      })),
    },
  ],
}))

const elTitle = ref<HTMLDivElement>()
const chartDom = ref<HTMLDivElement>()
onMounted(() => {
  elTitle.value?.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower')
  const myChart = echarts.init(chartDom.value)
  option.value && myChart.setOption(option.value)
})
</script>

<template>
  <div class="summary-template-wrapper">
    <div ref="chartDom" h-400px w-360px />
    <div ref="elTitle" w-full fc flex-col gap-30px text-2xl font-black>
      <div>
        这一年，你的猎金副本多样
      </div>
    </div>
  </div>
</template>
