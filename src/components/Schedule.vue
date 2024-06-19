<script setup lang="ts">
import dayjs from 'dayjs'

const handleColor = function (start: any, end: any) {
  if (dayjs().isBefore(dayjs(start)) && dayjs(start).diff(dayjs(), 'h') < 24)
    return 'orange'

  if (dayjs().isAfter(dayjs(start)) && dayjs(end).isAfter(dayjs()) && dayjs(end).diff(dayjs(), 'h') < 24)
    return 'red'

  if (dayjs().isAfter(dayjs(start)) && dayjs().isBefore(dayjs(end)))
    return 'green'
}
const { height } = useWindowSize()
const scheduleData = ref()

onMounted(() => {
  fetch('https://raw.gitmirror.com/Waaatanuki/asset/main/gbf/schedule.json')
    .then((resp) => {
      return resp.json()
    }).then((data) => {
      scheduleData.value = data
    })
})
</script>

<template>
  <el-card v-if="scheduleData" w-300px>
    <template #header>
      <div text-center>
        <span>{{ dayjs().month() + 1 }}月日程表</span>
      </div>
    </template>
    <el-scrollbar :max-height="height - 330">
      <el-timeline v-if="dayjs().isSame(dayjs(scheduleData[0].end), 'month')" style="padding: 0 15px 0 0">
        <el-timeline-item
          v-for="activity, idx in scheduleData" :key="idx" placement="top"
          :timestamp="`${dayjs(activity.start).format('MM/DD HH:mm')} - ${dayjs(activity.end).format('MM/DD HH:mm')}`"
          :color="handleColor(activity.start, activity.end)"
        >
          <el-card :body-style="{ padding: '10px' }" shadow="hover">
            <h4 style="margin: 0px">
              {{ activity.title }}
            </h4>
            <p v-if="activity.comment" style="margin: 14px 0 0 0">
              {{ activity.comment }}
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <div v-else h-300px>
        暂未更新
      </div>
    </el-scrollbar>
  </el-card>
</template>
