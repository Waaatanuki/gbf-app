<script setup lang="ts">
import { cloneDeep } from 'lodash'
import uncapData from '~/assets/data/uncapData.json'
import { materialList } from '~/constants/evoker'
import { downloadJSON } from '~/utils/file'

const height = document.documentElement.offsetHeight - 80

const state = reactive({
  needItemList: [] as any[],
  tableData: [] as any[],
  dialog: {
    title: '',
    visible: false,
  },
  currentCell: [] as any,
  targetRow: {} as any,
  targetProp: '',
})

const { tableData, dialog, needItemList, currentCell } = toRefs(state)

function handleCellClick(row: any, column: any) {
  dialog.value.visible = true
  state.targetRow = row
  state.targetProp = column.property
  state.currentCell = JSON.parse(row[column.property])
  state.needItemList = []
}

function handleItem(item: any) {
  if (!state.needItemList.some(value => value.id === item))
    state.needItemList.push({ id: item, count: 0 })
}

function handleSubmit() {
  const newItemList: any = {}
  state.needItemList.forEach((item: any) => {
    newItemList[item.id] = item.count
  })
  state.currentCell.push(newItemList)
  state.targetRow[state.targetProp] = JSON.stringify(state.currentCell, null, 2)
  dialog.value.visible = false
}
function handleExport() {
  const tempData: any = cloneDeep(state.tableData)

  tempData.forEach((data: any) => {
    data.tarotUncap = JSON.parse(data.tarotUncapStr)
    data.evokerUncap = JSON.parse(data.evokerUncapStr)
    data.weaponUncap = JSON.parse(data.weaponUncapStr)
    data.domainUncap = JSON.parse(data.domainUncapStr)

    delete data.tarotUncapStr
    delete data.evokerUncapStr
    delete data.weaponUncapStr
    delete data.domainUncapStr
  })

  downloadJSON(JSON.stringify(tempData, null, 2), 'uncapData')
}
onMounted(() => {
  state.tableData = uncapData
  state.tableData.forEach((data) => {
    data.tarotUncapStr = JSON.stringify(data.tarotUncap, null, 2)
    data.evokerUncapStr = JSON.stringify(data.evokerUncap, null, 2)
    data.weaponUncapStr = JSON.stringify(data.weaponUncap, null, 2)
    data.domainUncapStr = JSON.stringify(data.domainUncap, null, 2)
  })
})
</script>

<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :max-height="height"
      @cell-dblclick="handleCellClick"
    >
      <el-table-column prop="name" label="阶段" align="center" width="100" />
      <el-table-column prop="tarotUncapStr" label="塔罗牌突破" align="center">
        <template #default="{ row }">
          <el-input
            v-model="row.tarotUncapStr"
            type="textarea"
            :autosize="{ maxRows: 10 }"
          />
        </template>
      </el-table-column>
      <el-table-column prop="evokerUncapStr" label="贤者突破" align="center">
        <template #default="{ row }">
          <el-input
            v-model="row.evokerUncapStr"
            type="textarea"
            :autosize="{ maxRows: 10 }"
          />
        </template>
      </el-table-column>
      <el-table-column prop="weaponUncapStr" label="武器突破" align="center">
        <template #default="{ row }">
          <el-input
            v-model="row.weaponUncapStr"
            type="textarea"
            :autosize="{ maxRows: 10 }"
          />
        </template>
      </el-table-column>
      <el-table-column prop="domainUncapStr" label="领域突破" align="center">
        <template #default="{ row }">
          <el-input
            v-model="row.domainUncapStr"
            type="textarea"
            :autosize="{ maxRows: 10 }"
          />
        </template>
      </el-table-column>
    </el-table>

    <el-button class="export-btn" type="primary" @click="handleExport">
      导出
    </el-button>

    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="800px"
      top="5vh"
    >
      <div flex>
        <div w-300px>
          <div v-for="row, y in materialList" :key="y" flex>
            <div v-for="item, x in row" :key="x" class="item">
              <img
                :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item}.jpg`"
                @click="handleItem(item)"
              >
            </div>
          </div>
        </div>
        <div>
          <div v-for="cell, y in currentCell" :key="y" flex>
            <div v-for="id, x in Object.keys(cell)" :key="x" class="item">
              <img
                :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${id}.jpg`"
                @click="handleItem(id)"
              >
              <input v-model.number="cell[id]" w-40px>
            </div>
          </div>
          <div flex>
            <div v-for="(item, index) in needItemList" :key="index">
              <div class="item">
                <img
                  :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item.id}.jpg`"
                  @click="needItemList.splice(index, 1)"
                >
                <input v-model.number="item.count" w-40px>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button type="primary" @click="handleSubmit">
          确认
        </el-button>
        <el-button @click="dialog.visible = false">
          取消
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-right: 5px;
  padding-bottom: 5px;
  width: 50px;
}
.export-btn {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>
