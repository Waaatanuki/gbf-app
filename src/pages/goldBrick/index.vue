<script setup lang="ts">
import dayjs from 'dayjs'
import type { AppGoldBrickTableData, MonthlyTableData, Record } from 'goldBrick'
import ChartDrawer from './components/Drawer.vue'
import { downloadJSON } from '~/utils/file'
import db from '~/utils/db'
import { defaultAppGoldBrickTableData } from '~/constants'

const state = reactive({
  dataSet: [] as Record[],
  filesList: [],
  uploadBtnLoading: false,
  baseInfo: [] as AppGoldBrickTableData[],
  drawer: {
    title: '',
    visible: false,
    key: '',
    dataSet: [] as Record[],
    tableData: [] as MonthlyTableData[],
  },
})

const { filesList, baseInfo, uploadBtnLoading, drawer } = toRefs(state)

const mask = ref(false)
provide('mask', mask)

function showChart(raid: AppGoldBrickTableData) {
  if (raid.raidName === 'cb')
    return ElMessage.warning('超巴没有详细图表')
  mask.value = true
  setTimeout(() => {
    state.drawer.visible = true
    state.drawer.title = `${raid.quest_name_jp} 详细图表`
    state.drawer.key = raid.quest_id
    state.drawer.dataSet = state.dataSet.filter((record) => {
      const raidInfo = Object.values(record)[0]
      return raid.raidName === raidInfo.raidName
    })
    state.drawer.tableData = state.baseInfo.find(item => raid.quest_id === item.quest_id)!.monthlyTableData
  }, 50)
}

async function init() {
  state.dataSet = []
  const entries = await db.entries()
  entries.forEach((entry: any) => {
    state.dataSet.push({ [entry[0] as string]: entry[1] })
  })
  state.baseInfo = formatData(state.dataSet)
}

function formatData(dataSet: Record[]) {
  const baseInfo: AppGoldBrickTableData[] = JSON.parse(JSON.stringify(defaultAppGoldBrickTableData))

  dataSet.forEach((record) => {
    const raidInfo = Object.values(record)[0]
    const targetRaidInfo = baseInfo.find(quest => quest.raidName === raidInfo.raidName)

    if (!targetRaidInfo)
      return

    const yearMonth = dayjs(raidInfo.timestamp).format('YYYY-MM')
    let hitRow = targetRaidInfo.monthlyTableData.find(row => row.date === yearMonth)
    if (!hitRow) {
      hitRow = {
        date: yearMonth,
        total: 0,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      }
      targetRaidInfo.monthlyTableData.unshift(hitRow)
    }
    targetRaidInfo.total++
    hitRow.total++

    if (raidInfo.goldBrick) {
      raidInfo.goldBrick === '3' && targetRaidInfo.normalChestFFJ++
      raidInfo.goldBrick === '4' && targetRaidInfo.redChestFFJ++
      raidInfo.goldBrick === '11' && targetRaidInfo.blueChestFFJ++
      raidInfo.goldBrick === '11' && hitRow.blueChestFFJ++
      if (targetRaidInfo.lastFFJTime)
        targetRaidInfo.lastFFJTakeDay = dayjs().diff(dayjs(targetRaidInfo.lastFFJTime), 'day')

      targetRaidInfo.lastFFJTime = raidInfo.timestamp
    }

    if (raidInfo.blueChests) {
      targetRaidInfo.blueChest++
      targetRaidInfo.lastBlueChestCount++
      hitRow.blueChest++
      raidInfo.blueChests === '73_1' && targetRaidInfo.ring1++
      raidInfo.blueChests === '73_2' && targetRaidInfo.ring2++
      raidInfo.blueChests === '73_3' && targetRaidInfo.ring3++
      raidInfo.blueChests === '73_3' && hitRow.ring3++
      if (raidInfo.blueChests === '17_20004') {
        targetRaidInfo.lastBlueChestTake = targetRaidInfo.lastBlueChestCount
        targetRaidInfo.lastBlueChestCount = 0
      }
    }
  })

  return baseInfo
}

function handleUploadChange(uploadFile: any) {
  const selectedFile = uploadFile.raw

  if (selectedFile.type !== 'application/json')
    return ElMessage.error('文件格式不对')

  const reader = new FileReader()
  reader.readAsText(selectedFile)
  reader.onload = function () {
    state.uploadBtnLoading = true
    state.dataSet = JSON.parse(reader.result as string)
    const entries: [IDBValidKey, any][] = []
    state.dataSet.forEach((item: any) => {
      const id = Object.keys(item)[0]
      entries.push([id, toRaw(item[id])])
    })
    db.setMany(entries)
      .then(() => {
        ElMessage.success('上传成功')
        init()
      })
      .finally(() => {
        state.uploadBtnLoading = false
      })
  }
}

function handleExport() {
  if (state.dataSet.length === 0)
    return ElMessage.info('没有数据可以导出')
  const event = new Date()
  const filename = `金本数据 ${event.toLocaleDateString()}`
  downloadJSON(JSON.stringify(state.dataSet), filename)
}

async function clearData() {
  await db.clear()
  init()
}

function getRatio(a = 0, b = 0) {
  if (b === 0)
    return 0
  return ((a / b) * 100).toFixed(2)
}

function getGoldBrickShowValue(raid: AppGoldBrickTableData) {
  switch (raid.quest_id) {
    case '303141':
      // 超巴
      return `${raid.redChestFFJ}+${raid.normalChestFFJ}`
    case '301061':
      // 大巴
      return `${raid.blueChestFFJ}+${raid.redChestFFJ}`
    default:
      return raid.blueChestFFJ
  }
}

function getGoldBrickTips(raid: AppGoldBrickTableData) {
  switch (raid.quest_id) {
    case '303141':
      // 超巴
      return '自发金+金箱金'
    case '301061':
      // 大巴
      return '蓝箱金+自发金'
    default:
      return '蓝箱金'
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <el-row v-loading="mask">
    <div mx-auto>
      <ElCard v-for="item in baseInfo" :key="item.quest_id" mb-2 cursor-pointer shadow="hover" @click="showChart(item)">
        <div h-100px fc gap-10px text-sm>
          <div relative shrink-0>
            <img w-100px :src="getQuestImg(item.quest_id)">
            <div mt-2px fc gap-2px>
              <div i-game-icons:crossed-swords />
              <div text-orange font-black>
                {{ item.total?.toLocaleString() }}
              </div>
              <div i-game-icons:crossed-swords />
            </div>
          </div>
          <div fc flex-col>
            <div w-600px flex items-center justify-around>
              <div v-if="item.is_blue_treasure" class="desc-item">
                <el-badge :value="item.blueChest" type="danger" :max="999999">
                  <img w-50px :src="getLocalImg('blueChest')">
                </el-badge>

                <div text-xs>
                  {{ getRatio(item.blueChest, item.total) }}%
                </div>
              </div>

              <div class="desc-item">
                <el-tooltip :content="getGoldBrickTips(item)">
                  <el-badge :value="getGoldBrickShowValue(item)" type="danger" :max="999999">
                    <img w-50px :src="getLocalImg('goldBrick', 'item')">
                  </el-badge>
                </el-tooltip>

                <div v-if="item.quest_id !== '303141'" text-xs>
                  {{ getRatio(item.blueChestFFJ, item.blueChest) }}%
                </div>
              </div>

              <template v-if="item.quest_id !== '303141'">
                <div class="desc-item">
                  <el-badge :value="item.ring3" type="danger" :max="999999">
                    <img w-50px :src="getLocalImg('ring3', 'item')">
                  </el-badge>
                </div>
                <div class="desc-item">
                  <el-badge :value="item.ring2" type="danger" :max="999999">
                    <img w-50px :src="getLocalImg('ring2', 'item')">
                  </el-badge>
                </div>
                <div class="desc-item">
                  <el-badge :value="item.ring1" type="danger" :max="999999">
                    <img w-50px :src="getLocalImg('ring1', 'item')">
                  </el-badge>
                </div>
              </template>
            </div>
            <div mt-20px text-xs text-gray>
              <template v-if="item.is_blue_treasure">
                <el-text v-if="item.blueChestFFJ === 0" type="warning">
                  还未出过金
                </el-text>
                <el-text v-else type="info">
                  {{ `上次出金打了${item.lastBlueChestTake}个蓝箱，已经${item.lastBlueChestCount}个蓝箱没出过了` }}
                </el-text>
              </template>
              <template v-else>
                <el-text v-if="item.redChestFFJ === 0" type="warning">
                  还未出过金
                </el-text>
                <el-text v-else type="info">
                  {{ item.lastFFJTakeDay ? `上次出金经过了${item.lastFFJTakeDay}天，` : '' }}
                  已经{{ dayjs().diff(dayjs(item.lastFFJTime), 'day') }}天没出过了
                </el-text>
              </template>
            </div>
          </div>
        </div>
      </ElCard>

      <div class="uploader">
        <el-popconfirm title="清空操作无法恢复，确认清空吗?" width="300" @confirm="clearData">
          <template #reference>
            <el-button type="danger">
              清空数据
            </el-button>
          </template>
        </el-popconfirm>
        <el-button type="info" @click="handleExport">
          导出
        </el-button>
        <el-upload
          v-model:file-list="filesList" :on-change="handleUploadChange" :show-file-list="false" :limit="1"
          :auto-upload="false" accept=".json"
        >
          <template #trigger>
            <el-button type="primary" :loading="uploadBtnLoading" @click="filesList = []">
              上传
            </el-button>
          </template>
        </el-upload>
      </div>
      <el-drawer v-model="drawer.visible" :title="drawer.title" :size="600" destroy-on-close>
        <ChartDrawer :id="drawer.key" :data="drawer.dataSet" :table-data="drawer.tableData" />
      </el-drawer>
    </div>
  </el-row>
</template>

<style lang="scss" scoped>
.uploader {
  display: flex;
  justify-content: end;

  button {
    margin: 10px;
  }
}

.desc-item{
  width: 60px;
  height: 60px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
}
</style>
