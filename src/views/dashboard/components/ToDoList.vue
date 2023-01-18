<template>
  <el-card class="list-card">
    <template #header>
      <div class="header">
        <span>ToDoList</span>
        <div>
          <el-button type="primary" link @click="addTask">增加</el-button>
          <el-button
            type="primary"
            link
            @click="delBtnVisible = !delBtnVisible"
            >{{ delBtnVisible ? '确认' : '编辑' }}</el-button
          >
        </div>
      </div>
    </template>
    <div class="body">
      <el-checkbox
        v-for="(task, index) in taskList"
        v-model="task.done"
        :label="task.content"
      >
        <template #default>
          <div class="cell">
            <div v-if="delBtnVisible">
              <el-input
                v-model="task.content"
                size="small"
                style="width: 120px; margin-right: 10px"
              />
              <el-button type="danger" link @click="delTask(index)"
                >删除</el-button
              >
            </div>
            <div v-else>{{ task.content }}</div>
          </div>
        </template>
      </el-checkbox>
      <el-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Shanghai')

const InputRef = ref()
const state = reactive({
  taskList: useStorage('todoList', [
    { done: false, content: '巡岛' },
    { done: false, content: '大巴' },
    { done: false, content: '超巴' },
    { done: false, content: '活动日常' },
    { done: false, content: '沙盒' },
    { done: false, content: '抽卢比' },
  ]),
  lastUpdateTodo: useStorage('lastUpdateTodo', dayjs().tz().unix()),
  inputValue: '',
  inputVisible: false,
  delBtnVisible: false,
})

const { taskList, inputValue, inputVisible, delBtnVisible } = toRefs(state)

watch(
  () => state.taskList,
  () => {
    state.lastUpdateTodo = dayjs().tz().unix()
  }
)

function addTask() {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}
function delTask(index: number) {
  taskList.value.splice(index, 1)
}

function handleInputConfirm() {
  if (inputValue.value) {
    taskList.value.push({
      done: false,
      content: inputValue.value,
    })
  }
  inputVisible.value = false
  inputValue.value = ''
}

onMounted(() => {
  if (
    dayjs().tz().isAfter(dayjs().tz().hour(4).minute(0).second(0)) &&
    dayjs
      .unix(state.lastUpdateTodo)
      .tz()
      .isBefore(dayjs().tz().hour(4).minute(0).second(0))
  ) {
    state.lastUpdateTodo = dayjs().tz().unix()
    state.taskList.forEach((task) => (task.done = false))
  }
})
</script>

<style lang="scss" scoped>
.list-card {
  height: 100%;
  min-width: 300px;
  margin: 15px;
  z-index: 10;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    .cell {
      min-width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
