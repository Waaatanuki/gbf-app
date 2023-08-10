<!-- eslint-disable no-console -->
<script setup lang="ts">
import dayjs from 'dayjs'
import ChartDrawer from './components/Drawer.vue'
import { downloadJSON } from '~/utils/file'
import db from '~/utils/db'
import GoldBrickQuest from '~/assets/data/GoldBrickQuest.json'

const state = reactive({
  dataSet: [] as any[],
  filesList: [],
  uploadBtnLoading: false,
  baseInfo: [] as any[],
  cbInfo: {} as any,
  drawer: {
    title: '',
    visible: false,
    key: '',
    dataSet: [] as any[],
    rawTableData: {} as any,
  },
})

const { filesList, baseInfo, cbInfo, uploadBtnLoading, drawer } = toRefs(state)

function showChart(raid: any) {
  if (raid.key === 'cb')
    return ElMessage.warning('超巴没有详细图表')
  state.drawer.visible = true
  state.drawer.title = `${raid.alias}详细图表`
  state.drawer.key = raid.key
  state.drawer.dataSet = state.dataSet.filter((record: any) => {
    const raidId = Object.keys(record)[0]
    const raidInfo = record[raidId]
    return raid.key === raidInfo.raidName
  })
  state.drawer.rawTableData = state.baseInfo.find((item: any) => raid.key === item.key)
}

async function init() {
  state.dataSet = []
  const entries = await db.entries()
  entries.forEach((entry) => {
    state.dataSet.push({ [entry[0] as string]: entry[1] })
  })
  state.baseInfo = formatData(state.dataSet)
}

function formatData(dataSet: any) {
  const baseInfo: any[] = []
  cbInfo.value = {
    count: 0,
    redChestFFJ: 0,
    normalChestFFJ: 0,
    lastFFJTime: null,
  }

  GoldBrickQuest.forEach((quest) => {
    baseInfo.push({
      key: quest.key,
      alias: quest.alias,
      questId: quest.questId,
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
      rawDetailData: {},
    })
  })

  dataSet.forEach((record: any) => {
    try {
      const raidId = Object.keys(record)[0]
      const raidInfo = record[raidId]
      const targetQuestInfo = baseInfo.find(quest => quest.key === raidInfo.raidName)

      if (raidInfo.raidName === 'cb') {
        cbInfo.value.count++
        raidInfo.goldBrick === '4' && cbInfo.value.redChestFFJ++
        raidInfo.goldBrick === '3' && cbInfo.value.normalChestFFJ++
        cbInfo.value.lastFFJTime = raidInfo.goldBrick ? raidInfo.timestamp : cbInfo.value.lastFFJTime ?? raidInfo.timestamp
      }

      if (!targetQuestInfo)
        return
      counter(targetQuestInfo, raidInfo)

      const yearMonth = dayjs(raidInfo.timestamp).format('YYYY-MM')

      if (targetQuestInfo.rawDetailData[yearMonth])
        targetQuestInfo.rawDetailData[yearMonth].push(raidInfo)
      else targetQuestInfo.rawDetailData[yearMonth] = [raidInfo]
    }
    catch (error) {
      console.log('数据异常')
    }
  })

  return baseInfo
}

function counter(targetQuestInfo: any, raidInfo: any) {
  targetQuestInfo.count++

  raidInfo.blueChests && targetQuestInfo.blueChestCount++
  raidInfo.goldBrick === '4' && targetQuestInfo.redChestFFJ++
  raidInfo.goldBrick === '11' && targetQuestInfo.blueChestFFJ++
  raidInfo.goldBrick === '3' && targetQuestInfo.normalChestFFJ++

  targetQuestInfo.totalFFJ = targetQuestInfo.redChestFFJ + targetQuestInfo.blueChestFFJ + targetQuestInfo.normalChestFFJ
  raidInfo.blueChests === '73_1' && targetQuestInfo.whiteRing++
  raidInfo.blueChests === '73_2' && targetQuestInfo.blackRing++
  raidInfo.blueChests === '73_3' && targetQuestInfo.redRing++
  targetQuestInfo.lastCount = raidInfo.goldBrick ? 0 : targetQuestInfo.lastCount + 1
  targetQuestInfo.lastBlueChestCount = raidInfo.blueChests === '17_20004' ? 0 : raidInfo.blueChests ? targetQuestInfo.lastBlueChestCount + 1 : targetQuestInfo.lastBlueChestCount
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
          <img w-full :src="getImageSrc(item.questId, 'raid/img-quest-thumb')">
        </div>
        <div w-full fc flex-col gap-4>
          <div flex justify-between gap-10 flex-wrap>
            <div w-100px>
              <el-statistic :value="item.count" title="总次数" />
            </div>
            <div w-120px>
              <el-statistic :value="item.blueChestCount" title="蓝箱" />
              <div>
                <el-text size="small">
                  蓝箱率： {{ getRatio(item.blueChestCount, item.count) }}%
                </el-text>
              </div>
            </div>
            <div w-100px>
              <el-statistic :value="item.blueChestFFJ" title="菲菲金" />
              <div>
                <el-text size="small">
                  蓝箱金率： {{ getRatio(item.blueChestFFJ, item.blueChestCount) }}%
                </el-text>
              </div>
            </div>
            <div w-100px>
              <el-statistic :value="item.redRing" title="红戒指" />
            </div>
            <div w-100px>
              <el-statistic :value="item.blackRing" title="黑戒指" />
            </div>
            <div w-100px>
              <el-statistic :value="item.whiteRing" title="白戒指" />
            </div>
          </div>
          <el-text v-if="item.blueChestFFJ === 0" type="warning">
            还未出过金
          </el-text>
          <el-text v-else type="info">
            距离上次出金已经打了{{ item.lastBlueChestCount }}个蓝箱
          </el-text>
        </div>
      </div>
    </el-card>
    <el-card shadow="hover">
      <div flex gap-5>
        <div w-180px fc shrink-0>
          <img w-full :src="getImageSrc('303141', 'raid/img-quest-thumb')">
        </div>
        <div w-full fc flex-col gap-4>
          <div flex justify-between gap-10 flex-wrap>
            <div w-100px>
              <el-statistic :value="cbInfo.count" title="总次数" />
            </div>
            <div w-120px>
              <el-statistic :value="cbInfo.redChestFFJ" title="菲菲金" />
              <el-text size="small">
                自发金率： {{ getRatio(cbInfo.redChestFFJ, cbInfo.count) }}%
              </el-text>
            </div>
          </div>
          <el-text v-if="cbInfo.redChestFFJ === 0" type="warning">
            还未出过金
          </el-text>
          <el-text v-else type="info">
            距离上次出金已经过去了{{ dayjs().diff(dayjs(cbInfo.lastFFJTime), 'day') }}天
          </el-text>
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
    <el-drawer v-model="drawer.visible" :title="drawer.title" :size="600">
      <ChartDrawer :id="drawer.key" :data="drawer.dataSet" :raw-table-data="drawer.rawTableData" />
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
