<template>
    <el-tabs tab-position="left" style="background-color: #fff;border-radius: 10px;" :onTabChange="handleTabChange"
        v-model="currentTabName">
        <el-tab-pane label="个排" style="padding:10px" name="userRank">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <div class="card-header-front">
                            <el-radio-group v-model="currentUserLine" :onChange="guildWarsStore.handleUserLineChange">
                                <el-radio-button v-for="option in userLineOptions" :label='option.label' />
                            </el-radio-group>
                        </div>
                        <el-button class="button" @click="guildWarsStore.addUserData">增加玩家对比</el-button>
                    </div>
                </template>
                <LineChart :id="`userLine${currentUserLine}`" :labels="labels" :datasets="userLineDatasets" />
            </el-card>
            <TableMonitor type="userRank" :tableData='userLineTableData' :rawData="userRawData" :msg='msg.user' />
        </el-tab-pane>
        <el-tab-pane label="团排" style="padding:10px" name="guildRank">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <div class="card-header-front">
                            <el-radio-group v-model="currentGuildLine" :onChange="guildWarsStore.handleGuildLineChange">
                                <el-radio-button v-for="option in guildLineOptions" :label='option.label' />
                            </el-radio-group>
                        </div>
                        <el-button class="button" @click="guildWarsStore.addGuildData">增加骑空团对比</el-button>
                    </div>
                </template>
                <LineChart :id="`guildLine${currentGuildLine}`" :labels="labels" :datasets="guildLineDatasets" />
            </el-card>
            <TableMonitor type="guildRank" :tableData='guildLineTableData' :rawData="guildRawData" :msg='msg.guild' />
        </el-tab-pane>
        <el-tab-pane label="接战" style="padding:10px" name="battle">
            <el-card class="battle-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <el-input v-model="guildId1" placeholder="己方团ID" />
                        <span>vs</span>
                        <el-input v-model="guildId2" placeholder="对方团ID" />
                        <el-button type="danger" @click="guildWarsStore.handleBattleStart">Attack!</el-button>
                    </div>
                </template>
                <LineChart id="battle" :labels="labels" :datasets="battleDatasets" />
            </el-card>
            <TableMonitor type="battle" :tableData='battleTableData' :rawData="[1]" :msg='msg.battle' />
        </el-tab-pane>
        <el-tab-pane label="查询" style="padding:10px" name="search">
            <el-card class="search-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <el-input v-model="searchId" placeholder="ID" />
                        <el-input v-model="searchName" placeholder="名称" />
                        <el-radio-group v-model="searchType" class="search-radio">
                            <el-radio label="user">玩家</el-radio>
                            <el-radio label="guild">骑空团</el-radio>
                        </el-radio-group>
                        <el-button type="primary" @click="guildWarsStore.handleSearch">查询</el-button>
                    </div>
                </template>
                <TableMonitor :type="searchTableDataType" :tableData='searchTableData' />
            </el-card>
        </el-tab-pane>
    </el-tabs>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import LineChart from '../../components/Chart/LineChart.vue'
import TableMonitor from '../../components/Tool/GuildWars/TableMonitor.vue'
import { useGuildWarsStore } from '../../stores/guildWars'
import { storeToRefs } from 'pinia';

const guildWarsStore = useGuildWarsStore()
const { currentTabName, labels, msg,
    currentUserLine, userLineOptions, userLineDatasets, userRawData, userLineTableData,
    currentGuildLine, guildLineOptions, guildLineDatasets, guildRawData, guildLineTableData,
    guildId1, guildId2, battleDatasets, battleTableData,
    searchId, searchName, searchType, searchTableData, searchTableDataType } = storeToRefs(guildWarsStore)

const handleTabChange = function (TabPanelName) {
    const action = {
        userRank: guildWarsStore.handleUserLineChange,
        guildRank: guildWarsStore.handleGuildLineChange,
        battle: guildWarsStore.handleBattleStart,
        search: function () { }
    }
    action[TabPanelName]()
}
onMounted(() => {
    guildWarsStore.handleUserLineChange()
})

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

.battle-card {
    max-width: 1000px;

    .card-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 33px;
        line-height: 33px;
        position: relative;

        .el-input {
            width: 100px;
        }

        span {
            margin: 0 20px;
        }

        button {
            position: absolute;
            right: 0px;
        }
    }
}

.search-card {
    max-width: 1000px;

    .card-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 33px;
        line-height: 33px;
        position: relative;

        .el-input {
            width: 150px;
            margin-right: 10px;
        }

        .search-radio {
            margin-right: 20px;
        }
    }
}
</style>