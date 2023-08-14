<script setup lang="ts">
import type { AppGoldBrickTableData } from '~/constants'

interface Item {
  date: string
  total: number
  blueChest: number
  blueChestFFJ: number
  ring3: number
}

const props = defineProps<{ data: AppGoldBrickTableData }>()

const tableData = ref<Item[]>([])

function init() {
  const dataSet = props.data.rawDetailData
  tableData.value = []
  for (const [date, value] of Object.entries(dataSet)) {
    const row = {
      date,
      total: 0,
      blueChest: 0,
      blueChestFFJ: 0,
      ring3: 0,
    }

    value.forEach((raidInfo) => {
      row.total++

      if (raidInfo.goldBrick)
        raidInfo.goldBrick === '11' && row.blueChestFFJ++

      if (raidInfo.blueChests) {
        row.blueChest++
        raidInfo.blueChests === '73_3' && row.ring3++
      }
    })
    tableData.value.unshift(row)
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <el-table :data="tableData">
    <el-table-column align="center" prop="date" label="日期" />
    <el-table-column align="center" prop="total" label="总次数" />
    <el-table-column align="center" prop="blueChest" label="蓝箱次数" />
    <el-table-column align="center" prop="blueChestFFJ" label="蓝箱金" />
    <el-table-column align="center" prop="ring3" label="红戒指" />
  </el-table>
</template>
