<script setup lang="ts">
const props = defineProps(['data'])
const tableData = ref<any[]>([])

function counter(targetQuestInfo: any, raidInfo: any) {
  targetQuestInfo.count++

  raidInfo.blueChests && targetQuestInfo.blueChestCount++
  raidInfo.goldBrick === '4' && targetQuestInfo.redChestFFJ++
  raidInfo.goldBrick === '11' && targetQuestInfo.blueChestFFJ++
  raidInfo.goldBrick === '3' && targetQuestInfo.normalChestFFJ++

  targetQuestInfo.totalFFJ
    = targetQuestInfo.redChestFFJ
    + targetQuestInfo.blueChestFFJ
    + targetQuestInfo.normalChestFFJ
  raidInfo.blueChests === '73_1' && targetQuestInfo.whiteRing++
  raidInfo.blueChests === '73_2' && targetQuestInfo.blackRing++
  raidInfo.blueChests === '73_3' && targetQuestInfo.redRing++
  targetQuestInfo.lastCount = raidInfo.goldBrick
    ? 0
    : targetQuestInfo.lastCount + 1
  targetQuestInfo.lastBlueChestCount
    = raidInfo.blueChests === '17_20004'
      ? 0
      : raidInfo.blueChests
        ? targetQuestInfo.lastBlueChestCount + 1
        : targetQuestInfo.lastBlueChestCount
}

interface RawData {
  blueChests: boolean
  goldBrick: boolean
  raidName: string
  timestamp: number
}

watchEffect(() => {
  const dataSet = props.data.rawDetailData as { [key: string]: RawData[] }
  tableData.value = []
  for (const [date, value] of Object.entries(dataSet)) {
    const row = {
      date,
      count: 0,
      blueChestCount: 0,
      redChestFFJ: 0,
      blueChestFFJ: 0,
      normalChestFFJ: 0,
      totalFFJ: 0,
      whiteRing: 0,
      blackRing: 0,
      redRing: 0,
      lastCount: 0,
      lastBlueChestCount: 0,
    }

    value.forEach((raidInfo) => {
      counter(row, raidInfo)
    })
    tableData.value.unshift(row)
  }
})
</script>

<template>
  <el-table :data="tableData">
    <el-table-column align="center" prop="date" label="日期" />
    <el-table-column align="center" prop="count" label="总次数" />
    <el-table-column align="center" prop="blueChestCount" label="蓝箱次数" />
    <el-table-column align="center" prop="blueChestFFJ" label="蓝箱金" />
    <el-table-column align="center" prop="redRing" label="红戒指" />
  </el-table>
</template>
