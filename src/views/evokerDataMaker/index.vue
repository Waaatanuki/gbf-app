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

    <el-button class="export-btn" type="primary" @click="handleExport"
      >导出</el-button
    >

    <el-dialog
      :title="dialog.title"
      v-model="dialog.visible"
      width="800px"
      top="5vh"
    >
      <div flex>
        <div w-300px>
          <div flex v-for="row in itemList">
            <div flex v-for="item in row" v-show="item">
              <div class="item">
                <img
                  style="height: 100%; width: 100%"
                  :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item}.jpg`"
                  @click="handleItem(item)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="resultBox">
          <div class="item-row" v-for="cell in currentCell">
            <div class="item-col" v-for="id in Object.keys(cell)">
              <div class="item">
                <img
                  style="height: 100%; width: 100%"
                  :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${id}.jpg`"
                  @click="handleItem(id)"
                />
                <input
                  class="itemNum"
                  v-model.number="cell[id]"
                  style="width: 40px"
                />
              </div>
            </div>
          </div>
          <div style="display: flex; flex-direction: row">
            <div v-for="(item, index) in needItemList">
              <div class="item">
                <img
                  style="width: 50px"
                  :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item.id}.jpg`"
                  @click="needItemList.splice(index, 1)"
                />
                <input
                  class="itemNum"
                  v-model.number="item.count"
                  style="width: 40px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button type="primary" @click="handleSubmit">确认</el-button>
        <el-button @click="dialog.visible = false">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import uncapData from '@/assets/data/uncapData.json'
import { downloadJSON } from '@/utils/file'
import { cloneDeep } from 'lodash'

const height = document.documentElement.offsetHeight - 80

const itemList = [
  ['25000', '25001', '25002', '25003', '25004'],
  ['25005', '25006', '25007', '25008', '25009'],
  ['25010', '25011', '25012', '25013', '25014'],
  ['25015', '25016', '25017', '25020', '25021'],
  ['25033', '25034', '25035', '25036', '25023'],
  ['25024', '25025', '25026', '25047', '25048'],
  ['25049', '25050', '25051', '25052', '25053'],
  ['25054', '25055', '25056', '25070', '25071'],
  ['25072', '25073', '25074', '25085', '25086'],
  ['25087', '25088'],
]

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
  if (!state.needItemList.some((value) => value.id == item))
    state.needItemList.push({ id: item, count: 0 })
}

function handleSubmit() {
  const newItemList = {}
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

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-right: 5px;
  padding-bottom: 5px;
  width: 50px;
}
.resultBox {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  .item-row {
    display: flex;
    justify-content: flex-start;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding-right: 5px;
      padding-bottom: 5px;
      width: 50px;
    }
  }
}
.export-btn {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>
