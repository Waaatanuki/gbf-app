<script setup lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { defaultTodoList } from '~/constants'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Shanghai')

const inputRef = ref()
const state = reactive({
  taskList: useStorage('todoList', defaultTodoList),
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
  },
)

function addTask() {
  inputVisible.value = true
  nextTick(() => {
    inputRef.value!.input!.focus()
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
  if (dayjs().tz().isAfter(dayjs().tz().hour(4).minute(0).second(0)) && dayjs.unix(state.lastUpdateTodo).tz().isBefore(dayjs().tz().hour(4).minute(0).second(0))) {
    state.lastUpdateTodo = dayjs().tz().unix()
    state.taskList.forEach(task => (task.done = false))
  }
})
</script>

<template>
  <el-card h-full min-w-300px>
    <template #header>
      <div flex items-center justify-between>
        <span>ToDoList</span>
        <div fc gap-2>
          <div icon-btn i-carbon:document-add @click="addTask" />
          <div v-if="delBtnVisible" icon-btn i-carbon:settings-check @click="delBtnVisible = !delBtnVisible" />
          <div v-else icon-btn i-carbon:settings @click="delBtnVisible = !delBtnVisible" />
        </div>
      </div>
    </template>
    <div flex flex-col>
      <el-checkbox
        v-for="(task, index) in taskList" :key="index"
        v-model="task.done" :label="task.content"
      >
        <div v-if="delBtnVisible" fc>
          <el-input v-model="task.content" size="small" />
          <div ml-2 icon-btn i-carbon:trash-can @click="delTask(index)" />
        </div>
        <div v-else>
          {{ task.content }}
        </div>
      </el-checkbox>
      <el-input
        v-if="inputVisible"
        ref="inputRef"
        v-model="inputValue"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      />
    </div>
  </el-card>
</template>
