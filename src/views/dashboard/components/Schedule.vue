<template>
  <el-card
    class="box-card"
    :body-style="{
      padding: '20px 20px 0px 20px',
      height: dynamicHeight - 62 + 'px',
    }"
  >
    <template #header>
      <div class="card-header">
        <span>{{ dayjs().month() + 1 }}月日程表</span>
      </div>
    </template>
    <el-scrollbar :height="dynamicHeight - 62">
      <el-timeline
        style="padding: 0 15px 0 0"
        v-if="dayjs().isSame(dayjs(schedule[0].end), 'month')"
      >
        <el-timeline-item
          placement="top"
          v-for="activity in schedule"
          :timestamp="
            dayjs(activity.start).format('MM/DD HH:mm') +
            ' - ' +
            dayjs(activity.end).format('MM/DD HH:mm')
          "
          :color="handleColor(activity.start, activity.end)"
        >
          <el-card :body-style="{ padding: '10px' }" shadow="hover">
            <h4 style="margin: 0px">{{ activity.title }}</h4>
            <p v-if="activity.comment" style="margin: 14px 0 0 0">
              {{ activity.comment }}
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <label v-else>暂未更新</label>
    </el-scrollbar>
  </el-card>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import schedule from '@/assets/data/schedule.json'
import useDynamicHeight from '@/composables/useDynamicHeight'
const { dynamicHeight } = useDynamicHeight()

const handleColor = function (start: any, end: any) {
  if (dayjs().isBefore(dayjs(start)) && dayjs(start).diff(dayjs(), 'h') < 24) {
    return 'orange'
  }
  if (
    dayjs().isAfter(dayjs(start)) &&
    dayjs(end).isAfter(dayjs()) &&
    dayjs(end).diff(dayjs(), 'h') < 24
  ) {
    return 'red'
  }
  if (dayjs().isAfter(dayjs(start)) && dayjs().isBefore(dayjs(end))) {
    return 'green'
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  min-width: 300px;
  margin: 15px;
  z-index: 10;
  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
