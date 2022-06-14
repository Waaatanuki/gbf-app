<template>
    <el-card class="box-card" :body-style="{ padding: '20px 20px 0px 20px' }">
        <template #header>
            <div class="card-header">
                <span>六月日程表</span>
            </div>
        </template>
        <el-scrollbar height="600px">
            <el-timeline style="padding:0 15px 0 0">
                <el-timeline-item placement="top" v-for="activity in schedule"
                    :timestamp="dayjs(activity.start).format('MM/DD HH:mm') + ' - ' + dayjs(activity.end).format('MM/DD HH:mm')"
                    :color="handleColor(activity.start, activity.end)">
                    <el-card :body-style="{ padding: '10px' }" shadow="hover">
                        <h4 style="margin:0px">{{ activity.title }}</h4>
                        <p v-if="activity.comment" style="margin:14px 0 0 0">{{ activity.comment }}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </el-scrollbar>
    </el-card>
</template>

<script setup>
import dayjs from 'dayjs'
import schedule from '../../assets/schedule.json'

const handleColor = function (start, end) {
    if (dayjs().isBefore(dayjs(start)) && dayjs(start).diff(dayjs(), 'h') < 24) {
        return 'orange'
    }
    if (dayjs().isAfter(dayjs(start)) && dayjs(end).isAfter(dayjs()) && dayjs(end).diff(dayjs(), 'h') < 24) {
        return 'red'
    }
    if (dayjs().isAfter(dayjs(start)) && dayjs().isBefore(dayjs(end))) {
        return 'green'
    }
}
</script>

<style lang="less" scoped>
.box-card {
    width: 400px;
    height: 660px;

    .card-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>