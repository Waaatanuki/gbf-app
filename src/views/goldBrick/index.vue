<template>
  <el-table :data="baseInfo" @row-click="showChart">
    <el-table-column width="150">
      <template #default="{ row }">
        <img :src="row.img" style="width: 100%" />
      </template>
    </el-table-column>
    <el-table-column align="center" prop="whiteRing" label="白戒指" />
    <el-table-column align="center" prop="blackRing" label="黑戒指" />
    <el-table-column align="center" prop="redRing" label="红戒指" />
    <el-table-column align="center" prop="blueChestFFJ" label="蓝箱金" />
    <el-table-column align="center" prop="blueChestCount" label="蓝箱次数" />
    <el-table-column align="center" prop="count" label="总次数" />
    <el-table-column align="center" prop="blueChestCount" label="蓝箱率">
      <template #default="{ row }">
        {{ ((row.blueChestCount / row.count || 0) * 100).toFixed(2) }}%
      </template>
    </el-table-column>
    <el-table-column align="center" prop="blueChestCount" label="蓝箱金率">
      <template #default="{ row }">
        {{ ((row.blueChestFFJ / row.blueChestCount || 0) * 100).toFixed(2) }}%
      </template>
    </el-table-column>
  </el-table>
  <div class="result">蓝箱FFJ总计：{{ totalBlueChestFFJ }}</div>
  <div class="uploader">
    <el-popconfirm title="清空操作无法恢复，确认清空吗?" :onConfirm="clearData">
      <template #reference>
        <el-button type="danger">清空数据</el-button>
      </template>
    </el-popconfirm>
    <el-button type="info" @click="handleExport">导出</el-button>
    <el-upload
      :on-change="handleUploadChange"
      v-model:file-list="filesList"
      :show-file-list="false"
      :limit="1"
      :auto-upload="false"
      accept=".json"
    >
      <template #trigger>
        <el-button type="primary" @click="filesList = []" :loading="uploadBtnLoading"
          >上传</el-button
        >
      </template>
    </el-upload>
  </div>
  <el-drawer v-model="drawer.visible" :title="drawer.title" :size="600">
    <ChartDrawer :id="drawer.key" :data="drawer.dataSet" />
  </el-drawer>
</template>

<script setup lang="ts">
import ChartDrawer from './components/Drawer.vue'
import { downloadJSON } from '@/utils/file'
import db from '@/utils/db'
import GoldBrickQuest from '@/assets/data/GoldBrickQuest.json'

const state = reactive({
  dataSet: [] as any[],
  filesList: [],
  uploadBtnLoading: false,
  baseInfo: [] as any[],
  totalBlueChestFFJ: 0,
  drawer: { title: '', visible: false, key: '', dataSet: [] as any[] },
  tableData: [],
})

const { totalBlueChestFFJ, filesList, baseInfo, uploadBtnLoading, drawer, tableData } =
  toRefs(state)

function showChart(raid: any) {
  if (raid.key == 'cb') return ElMessage.warning('超巴没有详细图表')
  state.drawer.visible = true
  state.drawer.title = raid.alias + '详细图表'
  state.drawer.key = raid.key
  state.drawer.dataSet = state.dataSet.filter((record: any) => {
    const raidId = Object.keys(record)[0]
    const raidInfo = record[raidId]
    return raid.key == raidInfo.raidName
  })
}

async function init() {
  state.dataSet = []
  const entries = await db.entries()
  entries.forEach(entry => {
    state.dataSet.push({
      [entry[0] as string]: entry[1],
    })
  })
  state.baseInfo = formatData(state.dataSet)
  state.totalBlueChestFFJ = state.baseInfo.reduce((total, kv) => total + kv.blueChestFFJ, 0)
}

function formatData(dataSet: any) {
  const baseInfo: any[] = []

  GoldBrickQuest.forEach(quest => {
    baseInfo.push({
      key: quest.key,
      alias: quest.alias,
      questId: quest.questId,
      img: new URL(`/src/assets/images/raid/img-quest-thumb/${quest.questId}.png`, import.meta.url)
        .href,
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
    })
  })

  dataSet.forEach((record: any) => {
    try {
      const raidId = Object.keys(record)[0]
      const raidInfo = record[raidId]
      const targetQuestInfo = baseInfo.find(quest => quest.key == raidInfo.raidName)
      if (!targetQuestInfo) return
      targetQuestInfo.count++

      raidInfo.blueChests && targetQuestInfo.blueChestCount++
      raidInfo.goldBrick == '4' && targetQuestInfo.redChestFFJ++
      raidInfo.goldBrick == '11' && targetQuestInfo.blueChestFFJ++
      raidInfo.goldBrick == '3' && targetQuestInfo.normalChestFFJ++

      targetQuestInfo.totalFFJ =
        targetQuestInfo.redChestFFJ + targetQuestInfo.blueChestFFJ + targetQuestInfo.normalChestFFJ
      raidInfo.blueChests == '73_1' && targetQuestInfo.whiteRing++
      raidInfo.blueChests == '73_2' && targetQuestInfo.blackRing++
      raidInfo.blueChests == '73_3' && targetQuestInfo.redRing++
      targetQuestInfo.lastCount = raidInfo.goldBrick ? 0 : targetQuestInfo.lastCount + 1
      targetQuestInfo.lastBlueChestCount =
        raidInfo.blueChests == '17_20004'
          ? 0
          : raidInfo.blueChests
          ? targetQuestInfo.lastBlueChestCount + 1
          : targetQuestInfo.lastBlueChestCount
    } catch (error) {
      console.log('数据异常')
    }
  })
  return baseInfo
}

function handleUploadChange(uploadFile: any) {
  const selectedFile = uploadFile.raw

  if (selectedFile.type !== 'application/json') {
    return ElMessage.error('文件格式不对')
  }
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
  if (state.dataSet.length === 0) return ElMessage.info('没有数据可以导出')
  const event = new Date()
  const filename = '金本数据 ' + event.toLocaleDateString()
  downloadJSON(JSON.stringify(state.dataSet), filename)
}

async function clearData() {
  await db.clear()
  init()
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
.box-card {
  min-height: 340px;
  // min-width: 440px;
  margin-bottom: 20px;
  font-size: 14px;

  .image {
    width: 100%;
    display: block;
  }

  .card-table {
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 124px;

    .card-row {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;

      .item {
        margin-right: 20px;
      }
    }
  }
}

.result {
  width: 300px;
  height: 50px;
  margin: 10px auto;
  border: 1px solid;
  background-color: rgb(255, 217, 0);
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}

.uploader {
  display: flex;
  justify-content: center;

  button {
    margin: 10px;
  }
}

.box-card:hover {
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transform: translateY(-10px);
  -webkit-box-shadow: 0 0 6px #999;
  box-shadow: 0 0 6px #999;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
</style>
