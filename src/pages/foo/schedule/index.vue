<script setup lang="ts">
import { Minus, Plus } from '@element-plus/icons-vue'
import dayjs from 'dayjs'

const formEl = ref()

const state = reactive({
  formData: [
    {
      title: '',
      comment: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    },
  ],
  eventList: [
    '月末战货',
    '古战场',
    '公会战',
    '剧情复刻',
    '神灭战',
    '四象降临',
    '勇气之地',
    '巴布塔',
    '转世外传',
  ],
})

const { formData, eventList } = toRefs(state)

const { copy } = useClipboard()

async function copyForm() {
  const data = JSON.parse(JSON.stringify(formData.value))

  data.forEach((item: any) => {
    item.start
      = `${dayjs(item.startDate).format('YYYY-MM-DD')} ${item.startTime}`
    item.end = `${dayjs(item.endDate).format('YYYY-MM-DD')} ${item.endTime}`
    delete item.startDate
    delete item.startTime
    delete item.endDate
    delete item.endTime
  })

  await copy(JSON.stringify(data, null, 2))
  ElMessage.success('已复制到剪贴板')
}

// 增加活动
function handlePlus(index: any) {
  formData.value.splice(index + 1, 0, {
    title: '',
    comment: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  })
}

// 删除活动
function handleRemove(index: any) {
  formData.value.splice(index, 1)
  if (formData.value.length === 0) {
    formData.value = [
      {
        title: '',
        comment: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
      },
    ]
  }
}

function reset() {
  formEl.value.resetFields()
  formData.value = [
    {
      title: '',
      comment: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    },
  ]
}
</script>

<template>
  <div class="app-container">
    <el-card class="box-card" header="日程生成">
      <el-form ref="formEl" :model="formData" label-width="80px">
        <el-row v-for="(item, index) in formData" :key="index">
          <el-col :span="8">
            <el-form-item :label="`活动${index + 1}`">
              <el-select v-model="item.title" filterable allow-create>
                <el-option v-for="event in eventList" :key="event" :value="event" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="备注">
              <el-input v-model="item.comment" />
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <div class="operation-button">
              <el-button
                type="success"
                :icon="Plus"
                circle
                @click="handlePlus(index)"
              />
              <el-button
                type="danger"
                :icon="Minus"
                circle
                @click="handleRemove(index)"
              />
            </div>
          </el-col>

          <el-col :span="12">
            <el-form-item label="开始时间">
              <el-date-picker
                v-model="item.startDate"
                type="date"
                style="width: 150px"
              />
              <el-time-select
                v-model="item.startTime"
                start="00:00"
                step="01:00"
                end="23:00"
                style="width: 110px; margin-left: 10px"
                placeholder=" "
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="结束时间">
              <el-date-picker
                v-model="item.endDate"
                type="date"
                style="width: 150px"
              />
              <el-time-select
                v-model="item.endTime"
                start="04:59"
                step="01:00"
                end="23:59"
                style="width: 110px; margin-left: 10px"
                placeholder=" "
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="footer">
        <el-button type="primary" @click="copyForm">
          生成
        </el-button>
        <el-button type="warning" @click="reset">
          重置
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.box-card {
  width: 800px;
  margin: auto;
}
.operation-button {
  display: flex;
  justify-content: right;
  //   margin-top: 30px;
}
.footer {
  display: flex;
  justify-content: center;
}
</style>
