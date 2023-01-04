<template>
  <div class="plan">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span
            >古战场规划
            <el-tag effect="plain" type="success"> 已更新200HL数据 </el-tag>
          </span>
          <el-button class="button" @click="changeMeat">修改打牛效率</el-button>
        </div>
      </template>
      <div>
        <div class="slider-block" v-for="(opt, index) in setOptions" :key="index">
          <span class="demonstration">{{ opt.title }}</span>
          <el-select v-model="hellPlan[index]" class="select" size="small">
            <el-option v-for="item in opt.selectOptions" :value="item" />
          </el-select>
          <el-slider v-model="honorPlan[index]" :max="opt.max" :format-tooltip="formatTooltip" />
        </div>
      </div>
      <div>
        <el-collapse>
          <el-collapse-item title="基础信息">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="type" label="难易度" min-width="25" />
              <el-table-column prop="honor" label="贡献度" min-width="25" />
              <el-table-column prop="meat" label="获取/消耗肉量" min-width="25" />
              <el-table-column prop="token" label="战货" min-width="25" />
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="result" style="margin-top: 10px">
        <el-descriptions title="结果" border :column="2">
          <el-descriptions-item label="总贡献" align="center">{{
            totalHonor + ' 亿'
          }}</el-descriptions-item>
          <el-descriptions-item label="所需肉量" align="center">
            {{ totalMeat }}
          </el-descriptions-item>
          <el-descriptions-item
            :label="opt.title"
            :span="2"
            align="center"
            v-for="(opt, index) in setOptions"
          >
            {{ `需要打${result[index][0]}只 ${hellPlan[index]} 消耗 ${result[index][1]} 肉` }}
          </el-descriptions-item>
          <el-descriptions-item label="总战货" align="center">
            <el-tooltip effect="dark" content="只计算了副本战货以及个排奖励战货" placement="top">
              {{ totalToken }}
            </el-tooltip>
          </el-descriptions-item>
          <el-descriptions-item label="箱数" align="center"> {{ totalBox }} </el-descriptions-item>
          <el-descriptions-item label="消耗半红" :span="2" align="center">
            {{ totalHalfElixir }}
          </el-descriptions-item>
        </el-descriptions>
        <span class="tip">*数据会有一定的偏差,请以实际为准</span>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { tokenData, tableData, setOptions, apPerHalfElixir } from '@/settings/guildWars.setting'

const honorPlan = ref([0, 10, 30, 50, 50])
const hellPlan = ref(['HELL Lv90', 'HELL Lv95', 'HELL Lv150', 'HELL Lv200', 'HELL Lv200'])

const totalMeat = computed(() => {
  let res = 0
  for (let i = 0; i < honorPlan.value.length; i++) {
    const honor = honorPlan.value[i]
    const hell = hellPlan.value[i]
    const hellInfo = tableData.find(data => data.type === hell)
    res += ((honor * 10000000) / hellInfo!.honorNumber) * hellInfo!.meat
  }
  return Math.ceil(res)
})

const totalHonor = computed(() => {
  const hellHonor = honorPlan.value.reduce((pre, cur) => pre + cur, 0) / 10
  const meatHonor = ((totalMeat.value / tableData[0].meat) * tableData[0].honorNumber) / 100000000
  return (hellHonor + meatHonor).toFixed(2)
})

const result = computed(() => {
  const res = []
  for (let i = 0; i < honorPlan.value.length; i++) {
    const honor = honorPlan.value[i]
    const hell = hellPlan.value[i]
    const hellInfo = tableData.find(data => data.type === hell)
    const count = Math.ceil((honor * 10000000) / hellInfo!.honorNumber)
    const meat = count * hellInfo!.meat
    res.push([count, meat])
  }
  return res
})

const totalToken = computed(() => {
  let res = 0
  const meatToken = (totalMeat.value / tableData[0].meat) * tableData[0].token
  const bonusToken = parseFloat(totalHonor.value) * 6000
  for (let i = 0; i < hellPlan.value.length; i++) {
    const hell = hellPlan.value[i]
    const hellInfo = tableData.find(data => data.type === hell)
    res += hellInfo!.token * result.value[i][0]
  }
  res += meatToken + bonusToken
  return Math.ceil(res)
})

const totalBox = computed(() => {
  for (const item of tokenData) {
    if (totalToken.value >= item.line) {
      return item.drawnBox + Math.floor((totalToken.value - item.line) / item.perToken)
    }
  }
})
const totalHalfElixir = computed(() => {
  let resAp = 0
  const meatAp = (totalMeat.value / tableData[0].meat) * tableData[0].ap

  for (let i = 0; i < hellPlan.value.length; i++) {
    const hell = hellPlan.value[i]
    const hellInfo = tableData.find(data => data.type === hell)
    resAp += hellInfo!.ap * result.value[i][0]
  }
  resAp += meatAp
  return Math.ceil(resAp / apPerHalfElixir)
})

const formatTooltip = (value: any) => value / 10 + '亿贡献'

const changeMeat = () => {
  ElMessageBox.prompt(`修改每只牛的平均掉肉量(默认6.4) :`, '', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern: /^[0-9]+([.]{1}[0-9]+){0,1}$/,
    inputErrorMessage: '只能输入数字',
    inputPlaceholder: `当前：${tableData[0].meat}`,
  })
    .then(({ value }) => {
      localStorage.setItem('meatPerCow', value)
      location.reload()
    })
    .catch(error => {})
}
</script>

<style lang="scss" scoped>
.plan {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-card {
    margin: auto;
    max-width: 700px;
    position: relative;

    .slider-block {
      display: flex;
      align-items: center;

      .select {
        margin-right: 20px;
      }

      .demonstration {
        font-size: 14px;
        color: var(--el-text-color-secondary);
        width: 120px;
        text-align: center;
      }
    }
  }

  .result {
    margin-bottom: 10px;

    .tip {
      position: absolute;
      bottom: 2px;
      right: 2px;
      font-size: 13px;
    }
  }
}
</style>
