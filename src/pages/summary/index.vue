<script setup lang="ts">
import type { AppGoldBrickTableData, Record } from 'goldBrick'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import type { SummaryData } from './components/types'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'
import Page5 from './components/Page5.vue'
import Page6 from './components/Page6.vue'
import Page7 from './components/Page7.vue'
import Page8 from './components/Page8.vue'
import db from '~/utils/db'
import { defaultAppGoldBrickTableData } from '~/constants'

dayjs.extend(isBetween)

const pageList = [Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8]

const pageIndex = ref(0)
const userName = ref('点击设定用户名')

function setName() {
  ElMessageBox.prompt('输入用户名')
    .then(({ value }) => {
      userName.value = value
    })
    .catch(() => {})
}

const state = reactive({
  dataSet: [] as Record[],
  baseInfo: [] as AppGoldBrickTableData[],
  summaryData: {
    amCount: 0,
    pmCount: 0,
    nightCount: 0,
    dawnCount: 0,
    lastestData: {
      diffSecond: 24 * 60 * 60,
      lastestDate: '',
      lastestTime: '',
    },
    mostData: {
      total: 0,
      goldBrick: 0,
      date: '',
    },
  } as SummaryData,
})

async function init() {
  state.dataSet = []
  const entries = await db.entries()

  state.summaryData.firstTimestamp = entries[0][1].timestamp
  let totalDayCount = 0
  let current = 0
  let currentGoldBrick = 0
  const dateList: string[] = []
  entries.forEach((entry: any, index: number) => {
    if (dayjs(entry[1].timestamp).year() === 2023) {
      state.dataSet.push({ [entry[0] as string]: entry[1] })
      current++

      if (entry[1].goldBrick)
        currentGoldBrick++

      const date = dayjs(entry[1].timestamp).format('MM-DD')

      if (!dateList.includes(date)) {
        dateList.push(date)
        totalDayCount++

        // 统计一天最多猎金次数
        if (current > state.summaryData.mostData.total) {
          state.summaryData.mostData.total = current
          state.summaryData.mostData.goldBrick = currentGoldBrick
          state.summaryData.mostData.date = dayjs(entries[index][1].timestamp).format('MM月DD日')
        }
        current = 0
        currentGoldBrick = 0
      }
    }
  })
  state.summaryData.total = state.dataSet.length
  state.summaryData.totalDayCount = totalDayCount

  state.baseInfo = formatData(state.dataSet)
}

function formatData(dataSet: Record[]) {
  const baseInfo: AppGoldBrickTableData[] = JSON.parse(JSON.stringify(defaultAppGoldBrickTableData))

  dataSet.forEach((record) => {
    const raidInfo = Object.values(record)[0]
    const targetRaidInfo = baseInfo.find(quest => quest.raidName === raidInfo.raidName)

    if (!targetRaidInfo)
      return

    // 统计猎金时间段
    const hour = dayjs(raidInfo.timestamp).hour()

    if (hour > 6 && hour < 11)
      state.summaryData.amCount++
    if (hour > 12 && hour < 17)
      state.summaryData.pmCount++
    if (hour > 18 && hour < 23)
      state.summaryData.nightCount++
    if (hour > 0 && hour < 6)
      state.summaryData.dawnCount++

    // 统计最晚猎金时间
    let diffSecond: number
    if (dayjs(raidInfo.timestamp).isAfter(dayjs(raidInfo.timestamp).hour(5).minute(0).second(0)))
      diffSecond = dayjs(raidInfo.timestamp).add(1, 'day').hour(5).minute(0).second(0).diff(dayjs(raidInfo.timestamp), 'second')
    else
      diffSecond = dayjs(raidInfo.timestamp).hour(5).minute(0).second(0).diff(dayjs(raidInfo.timestamp), 'second')

    if (diffSecond < state.summaryData.lastestData.diffSecond) {
      state.summaryData.lastestData.diffSecond = diffSecond
      state.summaryData.lastestData.lastestDate = dayjs(raidInfo.timestamp).format('MM月DD日')
      state.summaryData.lastestData.lastestTime = dayjs(raidInfo.timestamp).format('HH:mm')
      state.summaryData.lastestData.raidName = targetRaidInfo.quest_name_cn
    }

    targetRaidInfo.total++

    if (raidInfo.goldBrick) {
      raidInfo.goldBrick === '3' && targetRaidInfo.normalChestFFJ++
      raidInfo.goldBrick === '4' && targetRaidInfo.redChestFFJ++
      raidInfo.goldBrick === '11' && targetRaidInfo.blueChestFFJ++
    }

    if (raidInfo.blueChests)
      targetRaidInfo.blueChest++
  })

  return baseInfo
}

const audio = new Audio()
onMounted(() => {
  init()

  audio.src = String(new URL('/src/assets/audio/WingsOfTerror.mp3', import.meta.url))
  audio.play()
})

onUnmounted(() => {
  audio.pause()
  audio.currentTime = 0
})
</script>

<template>
  <div m-auto h-600px w-400px>
    <component :is="pageList[pageIndex]" :summary-data="state.summaryData" :base-info="state.baseInfo" :user-name="userName" @set-name="setName" />
  </div>
  <div mt-10px fc gap-30px text-3xl>
    <div w-50px>
      <div v-show="pageIndex !== 0" i-carbon:previous-outline icon-btn @click="pageIndex--" />
    </div>
    <div w-50px>
      <div v-show="pageIndex !== pageList.length - 1" i-carbon:next-outline icon-btn @click="pageIndex++" />
    </div>
  </div>
</template>
