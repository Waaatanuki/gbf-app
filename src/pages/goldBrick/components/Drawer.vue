<script setup lang="ts">
import dayjs from 'dayjs'
import type { ChartData, MonthlyTableData, Record } from 'goldBrick'
import BarChart from './BarChart.vue'
import DetailTable from './DetailTable.vue'

const props = defineProps<{
  id: string
  data: Record[]
  tableData: MonthlyTableData[]
}>()

const range = ref('month')

const rangeOptions = [
  { label: '最近30天', value: 'month' },
  { label: '最近半年', value: 'halfYear' },
  { label: '最近一年', value: 'year' },
  { label: '总体', value: 'total' },
]

function getCount(dataSet: Record[], date: dayjs.Dayjs, range: dayjs.OpUnitType) {
  return dataSet.filter((record) => {
    const raidInfo = Object.values(record)[0]
    return date.isSame(dayjs(raidInfo.timestamp), range)
  }).length
}

const countData = computed<ChartData>(() => {
  const dataSet = props.data
  const chartData: ChartData = {
    labels: [],
    count: [],
  }
  let date: dayjs.Dayjs
  const firstYear = 2022
  const currentYear = dayjs().year()

  switch (range.value) {
    case 'month':
      date = dayjs().subtract(29, 'day')
      for (let j = 0; j < 30; j++) {
        const count = getCount(dataSet, date, 'day')
        chartData.labels.push(date.format('M-D'))
        chartData.count.push(count)
        date = dayjs(date).add(1, 'day')
      }
      break
    case 'halfYear':
      date = dayjs().subtract(5, 'month')
      for (let j = 0; j < 6; j++) {
        const count = getCount(dataSet, date, 'month')
        chartData.labels.push(date.format('M'))
        chartData.count.push(count)
        date = dayjs(date).add(1, 'month')
      }
      break
    case 'year':
      date = dayjs().subtract(11, 'month')
      for (let j = 0; j < 12; j++) {
        const count = getCount(dataSet, date, 'month')
        chartData.labels.push(date.format('M'))
        chartData.count.push(count)
        date = dayjs(date).add(1, 'month')
      }
      break
    case 'total':
      date = dayjs().year(2022)
      for (let j = 0; j < currentYear - firstYear + 1; j++) {
        const count = getCount(dataSet, date, 'year')
        chartData.labels.push(date.format('YYYY'))
        chartData.count.push(count)
        date = dayjs(date).add(1, 'year')
      }
      break
  }
  return chartData
})

const blueChestData = computed<ChartData>(() => {
  const chartData: ChartData = {
    labels: ['1'],
    count: [0],
  }
  // 导入db时会自动降序排列
  // dataSet.sort((a: any, b: any) => Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]))

  props.data.forEach((record) => {
    const raidInfo = Object.values(record)[0]

    if (raidInfo.goldBrick === '11') {
      chartData.count[chartData.count.length - 1]++
      chartData.labels.push(String(chartData.labels.length + 1))
      chartData.count.push(0)
    }
    else {
      raidInfo.blueChests && chartData.count[chartData.count.length - 1]++
    }
  })

  return chartData
})
</script>

<template>
  <div fc flex-col>
    <div>
      <el-select v-model="range" size="small">
        <el-option
          v-for="item, idx in rangeOptions" :key="idx"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div w-500px fc flex-col>
      <BarChart
        :id="`${id}count`"
        title="次数统计"
        :labels="countData.labels"
        :data="countData.count"
      />
      <BarChart
        :id="`${id}blueChest`"
        title="出金蓝箱次数统计"
        :labels="blueChestData.labels"
        :data="blueChestData.count"
      />
      <DetailTable mt-10 :data="tableData" />
    </div>
  </div>
</template>
