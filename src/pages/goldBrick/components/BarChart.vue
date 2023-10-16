<script setup lang="ts">
import * as echarts from 'echarts'

const props = defineProps(['id', 'title', 'labels', 'data'])
const mask = inject<globalThis.Ref<boolean>>('mask')
const chartRef = ref<HTMLDivElement>()
let chart: echarts.ECharts

const option = computed(() => ({
  title: { text: props.title },
  textStyle: {
    fontFamily: 'LXGW WenKai Screen',
  },
  tooltip: { trigger: 'axis' },
  darkMode: isDark.value,
  xAxis: {
    type: 'category',
    data: props.labels,
  },
  yAxis: {
    type: 'value',
    axisLine: { show: true },
    axisTick: { show: true },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      data: props.data,
      type: 'bar',
      barWidth: '10',
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
  dataZoom: [
    {
      type: 'inside',
      zoomOnMouseWheel: 'ctrl',
      moveOnMouseWheel: true,
      maxValueSpan: 29,
    },
  ],
}))

onMounted(() => {
  nextTick(() => {
    chart = echarts.init(chartRef.value!, 'chalk')
    chart.setOption(option.value)
    mask!.value = false
  })
})

onUpdated(() => {
  chart.setOption(option.value)
})
</script>

<template>
  <div :id="id" ref="chartRef" h-300px w-550px />
</template>
