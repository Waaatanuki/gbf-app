<script setup lang="ts">
const form: any = reactive({
  type: 0,
  currentToken: '',
  drawnBox: '',
  targetBox: '',
})
const data = [
  [
    { 440800: { perToken: 15000, drawnBox: 80 } },
    { 90800: { perToken: 10000, drawnBox: 45 } },
    { 8800: { perToken: 2000, drawnBox: 4 } },
    { 1600: { perToken: 2400, drawnBox: 1 } },
    { 0: { perToken: 1600, drawnBox: 0 } },
  ],
  [
    { 40704: { perToken: 2104, drawnBox: 20 } },
    { 4800: { perToken: 2112, drawnBox: 3 } },
    { 2800: { perToken: 2000, drawnBox: 2 } },
    { 1200: { perToken: 1600, drawnBox: 1 } },
    { 0: { perToken: 1200, drawnBox: 0 } },
  ],
  [
    { 240800: { perToken: 15000, drawnBox: 40 } },
    { 40800: { perToken: 10000, drawnBox: 20 } },
    { 8800: { perToken: 2000, drawnBox: 4 } },
    { 1600: { perToken: 2400, drawnBox: 1 } },
    { 0: { perToken: 1600, drawnBox: 0 } },
  ],
]
form.totalToken = computed(() => {
  let total = 0
  for (let i = 0; i < data[form.type].length; i++) {
    const key = Object.keys(data[form.type][i])[0]
    const value = data[form.type][i][key]
    if (form.drawnBox >= value.drawnBox) {
      total = Number.parseInt(key) + (form.drawnBox - value.drawnBox) * value.perToken
      break
    }
  }
  return Number.parseInt(total + form.currentToken)
})
form.totalBox = computed(() => {
  let total = 0
  for (let i = 0; i < data[form.type].length; i++) {
    const key = Object.keys(data[form.type][i])[0]
    const value = data[form.type][i][key]
    if (form.totalToken >= key) {
      total
        = value.drawnBox
        + Math.floor((form.totalToken - Number.parseInt(key)) / value.perToken)
      break
    }
  }
  return total
})
form.needToken = computed(() => {
  let total = 0
  for (let i = 0; i < data[form.type].length; i++) {
    const key = Object.keys(data[form.type][i])[0]
    const value = data[form.type][i][key]
    if (form.targetBox >= value.drawnBox) {
      total = Number.parseInt(key) + (form.targetBox - value.drawnBox) * value.perToken
      break
    }
  }
  return total - form.totalToken
})
</script>

<template>
  <div class="app-container">
    <el-card class="box-card" header="战货计算">
      <el-form :model="form" label-width="120px">
        <el-form-item label="类型">
          <el-radio-group v-model="form.type">
            <el-radio :label="0">
              古战场
            </el-radio>
            <el-radio :label="1">
              月末剧情
            </el-radio>
            <el-radio :label="2">
              工会战
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="当前战货数量">
          <el-input v-model.number="form.currentToken" />
        </el-form-item>
        <el-form-item label="已抽箱数">
          <el-input v-model.number="form.drawnBox" />
        </el-form-item>
        <el-form-item label="目标箱数">
          <el-input v-model.number="form.targetBox" />
        </el-form-item>
      </el-form>

      <div class="result">
        <h3 v-show="form.targetBox - form.totalBox <= 0">
          目前一共【{{ form.totalBox }}】箱,目标已达成！
        </h3>
        <h3 v-show="form.targetBox - form.totalBox > 0">
          目前一共【{{ form.totalBox }}】箱,距离目标还差【{{
            form.needToken
          }}】战货
        </h3>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.box-card {
  margin: auto;
  max-width: 500px;
  position: relative;
}

.result {
  h3 {
    text-align: center;
  }
}
</style>
