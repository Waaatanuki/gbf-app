<template>
    <el-table class="box-table" :data="tableData" height='500' border stripe>
        <template v-if="type == 'userRank' || type == 'guildRank'">
            <el-table-column prop="label" label="时间" width="100" />
            <el-table-column prop="userPoint" label="我贡(亿)" width="120" v-if='rawData.length != 0' />
            <el-table-column prop="linePoint" label="线贡(亿)" width="120" />
            <el-table-column prop="userSpeed" label="我速(万/小时)" width="150" v-if='rawData.length != 0' />
            <el-table-column prop="lineSpeed" label="线速(万/小时)" width="150" />
            <el-table-column prop="diffPoint" label="贡献差(万)" v-if='rawData.length != 0' />
        </template>
        <template v-if="type == 'battle'">
            <el-table-column prop="label" label="时间" width="100" />
            <el-table-column prop="guildPoint1" label="我贡(亿)" width="120" />
            <el-table-column prop="guildPoint2" label="敌贡(亿)" width="120" />
            <el-table-column prop="guildSpeed1" label="我速(亿/小时)" width="150" />
            <el-table-column prop="guildSpeed2" label="敌速(亿/小时)" width="150" />
            <el-table-column prop="diffPoint" label="贡献差(亿)" />
        </template>
        <template v-if="type == 'guild' || type == 'user'">
            <el-table-column prop="userid" label="ID" width="100" v-if="type == 'user'" />
            <el-table-column prop="guildid" label="ID" width="100" v-if="type == 'guild'" />
            <el-table-column prop="name" label="名称" width="200" />
            <el-table-column prop="level" label="等级" width="120" sortable v-if="type == 'user'"
                :sort-method='sortMethod' />
            <el-table-column prop="point" label="预选贡献(亿)" width="120" v-if="type == 'guild'" :formatter='formatPoint' />
            <el-table-column prop="rank" label="预选排名" sortable width="120" v-if="type == 'guild'"
                :sort-method='sortMethod' />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="info" @click="getDetails(scope)">详细</el-button>
                    <el-button type="info" @click="addToMonitor(scope)">加入监控</el-button>
                </template>
            </el-table-column>
        </template>
    </el-table>
    <el-dialog v-model="dialogTableVisible" title="详细信息">
        <el-table :data="tableData">
            <el-table-column prop="userid" label="ID" width="100" v-if="type == 'user'" />
            <el-table-column prop="guildid" label="ID" width="100" v-if="type == 'guild'" />
            <el-table-column prop="name" label="名称" width="200" />
            <el-table-column prop="level" label="等级" width="120" sortable v-if="type == 'user'"
                :sort-method='sortMethod' />
            <el-table-column prop="point" label="预选贡献(亿)" width="120" v-if="type == 'guild'" :formatter='formatPoint' />
            <el-table-column prop="rank" label="预选排名" sortable width="120" v-if="type == 'guild'"
                :sort-method='sortMethod' />
        </el-table>
    </el-dialog>
    <h2 style="text-align:center;max-width: 1000px;">{{ msg }}</h2>
</template>

<script setup>
import { ref } from 'vue';
import { useGuildWarsStore } from '../../../stores/guildWars'
defineProps(['tableData', 'type', 'rawData', 'msg'])

const guildWarsStore = useGuildWarsStore()
const dialogTableVisible = ref(false)

const formatPoint = function (row, column, cellValue, index) {
    if (cellValue == '-') return '-'
    return (cellValue / 100000000).toFixed(2)
}
const sortMethod = (a, b) => {
    if (a.hasOwnProperty('level')) return a.level - b.level
    if (a.hasOwnProperty('rank')) return a.rank - b.rank
}

const getDetails = function (scope) {
    dialogTableVisible.value = true
}
const addToMonitor = function (scope) {

    if (scope.row.hasOwnProperty('level')) {
        guildWarsStore.currentTabName = 'userRank'
        guildWarsStore.userid = scope.row.userid
    }
    if (scope.row.hasOwnProperty('rank')) {
        guildWarsStore.currentTabName = 'guildRank'
        guildWarsStore.guildid = scope.row.guildid
    }



}
</script>

<style lang="less" scoped>
.box-card {
    max-width: 1000px;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 33px;
        line-height: 33px;

        .card-header-front {
            display: flex;
        }
    }

}

.box-table {
    max-width: 1000px;
    margin-top: 10px;
}
</style>