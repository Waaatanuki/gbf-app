<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus'
import type { CritData } from '~/constants/critData'
import { boostList, critData } from '~/constants/critData'

interface SpanMethodProps {
  row: Res
  column: TableColumnCtx<Res>
  rowIndex: number
  columnIndex: number
}

interface Res {
  cat: string
  boost: number
  total: number
}

const form = reactive({
  weapon: 0,
})
const checkList = ref<CritData[]>([])

const totalNumber = computed(() =>
  checkList.value.reduce((pre, cur) => {
    if (cur.noEffect)
      pre.noEffect += cur.rate
    else
      pre.effect += cur.rate
    return pre
  }, { effect: 0, noEffect: 0 }))

const tableData = computed(() => {
  const res: Res[] = []
  boostList.forEach((cat) => {
    cat.list.forEach((item) => {
      res.push({
        cat: cat.label,
        boost: item.value + form.weapon,
        total: (totalNumber.value.effect * (item.value + form.weapon + 100)) / 100 + totalNumber.value.noEffect,
      })
    })
  })
  return res
})

const type1Num = boostList.find(cat => cat.label === '零面')!.list.length
const type2Num = boostList.find(cat => cat.label === '单面')!.list.length
const type3Num = boostList.find(cat => cat.label === '双面')!.list.length
const type1Index = 0
const type2Index = type1Index + type1Num
const type3Index = type2Index + type2Num

function objectSpanMethod({ rowIndex, columnIndex }: SpanMethodProps) {
  if (columnIndex === 0) {
    if (rowIndex === type1Index) {
      return {
        rowspan: type1Num,
        colspan: 1,
      }
    }
    if (rowIndex === type2Index) {
      return {
        rowspan: type2Num,
        colspan: 1,
      }
    }
    if (rowIndex === type3Index) {
      return {
        rowspan: type3Num,
        colspan: 1,
      }
    }
    return {
      rowspan: 0,
      colspan: 0,
    }
  }
}

function handleClick(data: CritData) {
  if (checkList.value.length >= 21)
    ElMessage.info('哥们你玩的几几年的gbf，能放这么多武器')
  else
    checkList.value.push(data)
}
</script>

<template>
  <div flex flex-wrap items-start justify-center gap-5>
    <el-card h-140 w-40>
      <div fc flex-wrap gap-2>
        <div v-for="data, idx in critData" :key="idx">
          <el-link select-none @click="handleClick(data)">
            {{ `${data.skillName} Lv${data.level}` }}
          </el-link>
        </div>
      </div>
    </el-card>

    <div>
      <el-form :model="form" label-width="90">
        <div fc>
          <el-form-item label="武器加护区">
            <el-radio-group v-model="form.weapon">
              <el-radio-button :label="0">
                0把
              </el-radio-button>
              <el-radio-button :label="30">
                1把
              </el-radio-button>
              <el-radio-button :label="60">
                2把
              </el-radio-button>
              <el-radio-button :label="90">
                3把
              </el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <div btn @click="checkList = []">
              清空
            </div>
          </el-form-item>
        </div>
      </el-form>
      <el-card w-115 :body-style="{ padding: '5px' }">
        <div fc flex-wrap gap-2>
          <div v-if="checkList.length === 0" h-20 fc>
            点击左侧选择武器技能
          </div>
          <div v-for="data, idx in checkList" :key="idx" @click="checkList.splice(idx, 1)">
            <el-card :body-style="{ padding: '2px' }" w-35 shadow="hover">
              <div fc flex-col cursor-pointer select-none gap-2 text-base>
                <div>{{ `${data.skillName} Lv${data.level}` }}</div>
                <div>{{ data.rate }}</div>
              </div>
            </el-card>
          </div>
        </div>
      </el-card>
    </div>
    <el-card>
      <el-table :data="tableData" :span-method="objectSpanMethod" height="517" border>
        <el-table-column prop="cat" label="类型" align="center" width="60" />
        <el-table-column prop="boost" label="加护" align="center" />
        <el-table-column prop="total" label="总计" align="center">
          <template #default="{ row }">
            <div v-if="row.total >= 100">
              <el-tag type="danger">
                {{ row.total }}
              </el-tag>
            </div>
            <div v-else>
              {{ row.total }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
