<!-- <script setup lang="ts">
import { computed, reactive } from 'vue'
import { critData } from '~/constants/calculator'

const form = reactive({ main: 300, sub: 40 })
const boostType = {
  300: [300, 0],
  150: [150, 0],
  280: [0, 280],
  140: [0, 140],
  0: [0, 0],
}

function btnClass(item: any) {
  return item.rate < 5
    ? 'sRate'
    : item.rate < 8
      ? 'mRate'
      : item.rate <= 11
        ? 'lRate'
        : 'xlRate'
}

const calcItems: any = reactive([])
const itemsList = { ...critData }

const res = computed(() => {
  let sum = 0
  const boostLevel: any = [boostType[form.main][0] + form.sub, boostType[form.main][1]]

  for (let i = 0; i < calcItems.length; i++) {
    calcItems[i].boostRate
      = calcItems[i].type == 2
        ? calcItems[i].rate
        : Number((((boostLevel[calcItems[i].type] + 100) / 100) * calcItems[i].rate).toFixed(2))
    sum += calcItems[i].boostRate
  }
  return sum.toFixed(1)
})

function setCalc(item: any, type: any) {
  item.type = type
  calcItems.push({ ...item })
}

const clearCalc = function () {
  calcItems.length = 0
}
</script>

<template>
  <div class="app-container">
    <el-card class="crit-calc-card">
      <template #header>
        <div class="card-header">
          <span>暴击计算器</span>
          <label :class="{ goal: Number(res) >= 100 ? true : false }">暴击率 : {{ res }}%</label>
          <el-button type="primary" @click="clearCalc">
            清空
          </el-button>
        </div>
      </template>
      <div class="input-form">
        <el-form :model="form" label-width="80px">
          <el-form-item label="加护: ">
            <el-radio-group v-model="form.main">
              <el-radio :label="300">
                双面神石
              </el-radio>
              <el-radio :label="150">
                单面神石
              </el-radio>
              <el-radio :label="280">
                双面方阵
              </el-radio>
              <el-radio :label="140">
                单面方阵
              </el-radio>
              <el-radio :label="0">
                无加护
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="六龙SUB: ">
            <el-radio-group v-model="form.sub">
              <el-radio :label="40">
                40
              </el-radio>
              <el-radio :label="20">
                20
              </el-radio>
              <el-radio :label="10">
                10
              </el-radio>
              <el-radio :label="0">
                无
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <div class="select-area">
        <div class="show-area">
          <div class="show-type">
            <div>神石</div>
            <el-button
              v-for="item in itemsList"
              v-show="item.magunaOnly != true && item.boosted != false"
              class="btn-item"
              :class="btnClass(item)"
              @click="setCalc(item, 0)"
            >
              {{ `${item.skillName} Lv${item.level}` }}
            </el-button>
          </div>
          <div class="show-type">
            <div>方阵</div>
            <el-button
              v-for="item in itemsList"
              v-show="item.kamiOnly != true && item.boosted != false"
              class="btn-item"
              :class="btnClass(item)"
              @click="setCalc(item, 1)"
            >
              {{ `${item.skillName} Lv${item.level}` }}
            </el-button>
          </div>
          <div class="show-type">
            <div>特殊</div>
            <el-button
              v-for="item in itemsList"
              v-show="item.boosted == false"
              class="btn-item"
              :class="btnClass(item)"
              @click="setCalc(item, 2)"
            >
              {{ `${item.skillName} Lv${item.level}` }}
            </el-button>
          </div>
        </div>
        <div class="show-area">
          <div
            v-for="(el, typeI) in ['神石', '方阵', '特殊']"
            class="show-type"
          >
            <div>{{ el }}</div>
            <el-button
              v-for="(item, index) in calcItems"
              v-show="item.type == typeI"
              :key="index"
              class="btn-item"
              :class="btnClass(item)"
              @click="calcItems.splice(index, 1)"
            >
              {{ `${item.skillName} Lv${item.level}` }}
            </el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.crit-calc-card {
  width: 800px;
  margin: auto;

  .input-form {
    display: flex;
    justify-content: center;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .select-area {
    display: flex;
    justify-content: center;

    .show-area {
      display: flex;
      align-items: flex-start;
      width: 50%;
      border: 1px solid;
      margin-left: -1px;
      padding: 5px;

      .show-type {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .el-button {
          margin: 0px;
          color: white;

          :hover {
            color: black;
          }
        }
      }
    }
  }
}

.sRate {
  background-color: rgb(100, 100, 200);
}

.mRate {
  background-color: rgb(123, 146, 200);
}

.lRate {
  background-color: rgb(60, 160, 200);
}

.xlRate {
  background-color: rgb(30, 190, 200);
}

.goal {
  font-weight: bold;
  color: red;
}

.btn-item {
  width: 100px;
}
</style> -->
