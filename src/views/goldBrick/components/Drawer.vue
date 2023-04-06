<template>
  <div class="detailPage">
    <div>
      <el-select v-model="range" placeholder="Select" size="small">
        <el-option
          v-for="item in rangeOptions"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="chart-list">
      <BarChart
        :id="id + 'count'"
        title="次数统计"
        :labels="countData.labels"
        :data="countData.count"
      />
      <BarChart
        :id="id + 'blueChest'"
        title="出金蓝箱次数统计"
        :labels="blueChestData.labels"
        :data="blueChestData.count"
      />
      <DetailTable mt-10 :data="rawTableData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BarChart from './BarChart.vue'
import DetailTable from './DetailTable.vue'
import dayjs from 'dayjs'

const props = defineProps(['id', 'data', 'rawTableData'])

const state = reactive({
  countData: {
    labels: [],
    count: [],
  },
  blueChestData: {
    labels: [],
    count: [],
  },
  range: 'month',
})

const { countData, blueChestData, range } = toRefs(state)

const rangeOptions = [
  { label: '最近30天', value: 'month' },
  { label: '最近半年', value: 'halfYear' },
  { label: '最近一年', value: 'year' },
  { label: '总体', value: 'total' },
]

watchEffect(() => {
  state.countData = getCountData()
  state.blueChestData = getBlueChestData()
})

function getCountData() {
  const dataSet = props.data
  const chartData: any = {
    labels: [],
    count: [],
  }
  let date: dayjs.Dayjs

  switch (state.range) {
    case 'month':
      date = dayjs().subtract(29, 'day')
      for (let j = 0; j < 30; j++) {
        const count = dataSet.filter((record: any) => {
          const raidId = Object.keys(record)[0]
          const raidInfo = record[raidId]
          return date.isSame(dayjs(raidInfo.timestamp), 'day')
        }).length

        chartData.labels.push(`${date.month() + 1}-${date.date()}`)
        chartData.count.push(count)
        date = dayjs(date).add(1, 'day')
      }
      break
    case 'halfYear':
      date = dayjs().subtract(5, 'month')
      for (let j = 0; j < 6; j++) {
        const count = dataSet.filter((record: any) => {
          const raidId = Object.keys(record)[0]
          const raidInfo = record[raidId]
          return date.isSame(dayjs(raidInfo.timestamp), 'month')
        }).length

        chartData.labels.push(`${date.month() + 1}`)
        chartData.count.push(count)
        date = dayjs(date).add(1, 'month')
      }
      break
    case 'year':
      date = dayjs().subtract(11, 'month')
      for (let j = 0; j < 12; j++) {
        const count = dataSet.filter((record: any) => {
          const raidId = Object.keys(record)[0]
          const raidInfo = record[raidId]
          return date.isSame(dayjs(raidInfo.timestamp), 'month')
        }).length

        chartData.labels.push(`${date.month() + 1}`)
        chartData.count.push(count)
        date = dayjs(date).add(1, 'month')
      }
      break
    case 'total':
      const firstYear = 2022
      const currentYear = dayjs().year()
      date = dayjs().year(2022)
      for (let j = 0; j < currentYear - firstYear + 1; j++) {
        const count = dataSet.filter((record: any) => {
          const raidId = Object.keys(record)[0]
          const raidInfo = record[raidId]
          return date.isSame(dayjs(raidInfo.timestamp), 'year')
        }).length

        chartData.labels.push(`${date.year()}`)
        chartData.count.push(count)
        date = dayjs(date).add(1, 'year')
      }
      break
  }
  return chartData
}

function getBlueChestData() {
  const dataSet = props.data
  const chartData: any = {
    labels: [1],
    count: [0],
  }
  // 导入db时会自动降序排列
  // dataSet.sort((a: any, b: any) => Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]))

  dataSet.forEach((record: any) => {
    const raidId = Object.keys(record)[0]
    const raidInfo = record[raidId]

    if (raidInfo.goldBrick == 11) {
      chartData.count[chartData.count.length - 1]++
      chartData.labels.push(chartData.labels.length + 1)
      chartData.count.push(0)
    } else {
      raidInfo.blueChests && chartData.count[chartData.count.length - 1]++
    }
  })

  return chartData
}
</script>

<style scoped>
.detailPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chart-list {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
