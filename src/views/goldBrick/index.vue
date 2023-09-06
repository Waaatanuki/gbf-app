<!-- eslint-disable no-console -->
<script setup lang="ts">
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash'
import ChartDrawer from './components/Drawer.vue'
import { downloadJSON } from '~/utils/file'
import db from '~/utils/db'
import type { AppGoldBrickTableData, MonthlyTableData, Record } from '~/constants'
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

function showChart(raid: AppGoldBrickTableData) {
  if (raid.raidName === 'cb')
    return ElMessage.warning('超巴没有详细图表')
  state.drawer.visible = true
  state.drawer.title = `${raid.quest_name_jp} 详细图表`
  state.drawer.key = raid.quest_id
  state.drawer.dataSet = state.dataSet.filter((record) => {
    const raidInfo = Object.values(record)[0]
    return raid.raidName === raidInfo.raidName
  })
  state.drawer.tableData = state.baseInfo.find(item => raid.quest_id === item.quest_id)!.monthlyTableData
}

async function init() {
  state.dataSet = []
  const entries = await db.entries()
  entries.forEach((entry) => {
    state.dataSet.push({ [entry[0] as string]: entry[1] })
  })
  state.baseInfo = formatData(state.dataSet)
}

function formatData(dataSet: Record[]) {
  const baseInfo = cloneDeep(defaultAppGoldBrickTableData)

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
      if (raidInfo.blueChests === '17_20004')
        targetRaidInfo.lastBlueChestCount = 0
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

onMounted(() => {
  init()
})
</script>

<template>
  <div class="app-container">
    <el-card v-for="item in baseInfo" :key="item.quest_id" cursor-pointer mb-2 shadow="hover" @click="showChart(item)">
      <div flex gap-5>
        <div w-180px fc shrink-0>
          <img w-full :src="getImageSrc(item.quest_id, 'raid/img-quest-thumb')">
        </div>
        <div w-full fc flex-col gap-4>
          <div flex justify-evenly gap-10 flex-wrap>
            <div w-100px>
              <el-statistic :value="item.total" title="总次数" />
            </div>
            <template v-if="item.is_blue_treasure">
              <div w-120px>
                <el-statistic :value="item.blueChest" title="蓝箱" />
                <div>
                  <el-text size="small">
                    蓝箱率： {{ getRatio(item.blueChest, item.total) }}%
                  </el-text>
                </div>
              </div>
              <template v-if="item.quest_id === '301061'">
                <el-tooltip content="蓝箱金+自发金">
                  <div w-100px>
                    <el-statistic :value="item.blueChestFFJ" title="菲菲金" :suffix="`+ ${item.redChestFFJ}`" />
                    <div>
                      <el-text size="small">
                        蓝箱金率： {{ getRatio(item.blueChestFFJ, item.blueChest) }}%
                      </el-text>
                    </div>
                  </div>
                </el-tooltip>
              </template>
              <template v-else>
                <div w-100px>
                  <el-statistic :value="item.blueChestFFJ" title="菲菲金" />
                  <div>
                    <el-text size="small">
                      蓝箱金率： {{ getRatio(item.blueChestFFJ, item.blueChest) }}%
                    </el-text>
                  </div>
                </div>
              </template>
              <div w-100px>
                <el-statistic :value="item.ring3" title="红戒指" />
              </div>
              <div w-100px>
                <el-statistic :value="item.ring2" title="黑戒指" />
              </div>
              <div w-100px>
                <el-statistic :value="item.ring1" title="白戒指" />
              </div>
            </template>
            <template v-else>
              <el-tooltip content="自发金+金箱金">
                <div w-100px>
                  <el-statistic :value="item.redChestFFJ" title="菲菲金" :suffix="`+ ${item.normalChestFFJ}`" />
                  <!-- <div>
                    <el-text size="small">
                      自发金率： {{ getRatio(item.redChestFFJ, item.total) }}%
                    </el-text>
                  </div> -->
                </div>
              </el-tooltip>
            </template>
          </div>
          <template v-if="item.is_blue_treasure">
            <el-text v-if="item.blueChestFFJ === 0" type="warning">
              还未出过金
            </el-text>
            <el-text v-else type="info">
              距离上次出金已经打了{{ item.lastBlueChestCount }}个蓝箱
            </el-text>
          </template>
          <template v-else>
            <el-text v-if="item.redChestFFJ === 0" type="warning">
              还未出过金
            </el-text>
            <el-text v-else type="info">
              距离上次出金已经过去了{{ dayjs().diff(dayjs(item.lastFFJTime), 'day') }}天
            </el-text>
          </template>
        </div>
      </div>
    </el-card>
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
      <el-upload v-model:file-list="filesList" :on-change="handleUploadChange" :show-file-list="false" :limit="1" :auto-upload="false" accept=".json">
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
</template>

<style lang="scss" scoped>
.uploader {
  display: flex;
  justify-content: center;

  button {
    margin: 10px;
  }
}
</style>
