<template>
    <div style="padding: 0 20px;">
        <el-row justify="center" :gutter="20">
            <el-col v-for="(raid, index) in dataObj.baseInfo" :sm="{ span: 10 }">
                <el-card class="box-card" :body-style="{ padding: '0px' }" @click="showDetail(index)">
                    <img :src="`./img/raid/${RAID_NAME[index].value}.jpg`" class="image" />
                    <div class="card-table">
                        <div class="card-row">
                            <div class="item">总次数：{{ raid.count }}</div>
                            <div class="item" v-if="index != 0">
                                蓝箱次数：{{ raid.blueChestCount }}
                            </div>
                            <div class="item" v-if="index == 0 || index == 1">
                                自发金：{{ raid.redChestFFJ }}
                            </div>
                            <div class="item" v-if="index != 0">
                                蓝箱金：{{ raid.blueChestFFJ }}
                            </div>
                            <div class="item" v-if="index == 0">
                                金箱金：{{ raid.normalChestFFJ }}
                            </div>
                        </div>
                        <div class="card-row" v-if="index != 0">
                            <div class="item">
                                总金率：{{ ((raid.totalFFJ / raid.count || 0) * 100).toFixed(2) }}%
                            </div>
                            <div class="item">
                                蓝箱率：{{
                                        ((raid.blueChestCount / raid.count || 0) * 100).toFixed(2)
                                }}%
                            </div>
                            <div class="item">
                                蓝箱金率：{{
                                        ((raid.blueChestFFJ / raid.blueChestCount || 0) * 100).toFixed(2)
                                }}%
                            </div>
                        </div>
                        <div class="card-row" v-if="index != 0">
                            <div class="item">白戒指：{{ raid.whiteRing }}</div>
                            <div class="item">黑戒指：{{ raid.blackRing }}</div>
                            <div class="item">红戒指：{{ raid.redRing }}</div>
                        </div>
                        <div class="card-row">
                            <div v-if="index != 0">
                                距离上次出金已经过去了{{ raid.lastCount }}把{{
                                        raid.lastBlueChestCount
                                }}个蓝箱
                            </div>
                            <div v-if="index == 0">
                                距离上次出金已经过去了{{ raid.lastCount }}把
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div class="result">
            总掉落FFJ：{{ dataObj.totalFFJ }}
        </div>
        <div class="uploader">
            <el-popconfirm title="清空操作无法恢复，确认清空吗?" :onConfirm="clearData">
                <template #reference>
                    <el-button type="danger">清空数据</el-button>
                </template>
            </el-popconfirm>
            <el-button type="info" @click="handleExport">导出</el-button>
            <el-upload ref="upload" :limit="1" :on-change="handleChange" :auto-upload="false" :show-file-list="false"
                accept=".json">
                <template #trigger>
                    <el-button type="primary">上传</el-button>
                </template>
            </el-upload>
        </div>
        <el-drawer v-model="drawer" :size="600">
            <template #header>
                <h1>{{ RAID_NAME[currentRaidIndex].name + '详细图表' }}</h1>
            </template>
            <HihiiroSukiDrawer :raidIndex='currentRaidIndex' :data='dataObj.rawData' />
        </el-drawer>
    </div>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import HihiiroSukiDrawer from '../components/Hihiiro/HihiiroSukiDrawer.vue';
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs';
import {
    getHihiiroShowData,
    exportJSONFile,
    importJSONFile,
    exportToJson,
    clearDatabase
} from "../utils/hihiiro";

const upload = ref()
const RAID_NAME = [{ name: "超巴", value: 'cb' }, { name: "大巴", value: 'tuyobaha' }, { name: "阿卡夏", value: 'akx' }, { name: "大公", value: 'gurande' }]
const currentRaidIndex = ref(0)
const drawer = ref(false)

const dataObj = reactive({});

exportToJson((err, data) => {
    if (!err) {
        dataObj.rawData = data.GoldBrick;
        dataObj.baseInfo = computed(() => getHihiiroShowData(dataObj.rawData));
        dataObj.totalFFJ = computed(() => {
            return dataObj.baseInfo.reduce(function (total, kv) {
                return total + kv.totalFFJ;
            }, 0);
        });
    }
});

const showDetail = function (index) {
    if (index != 0) {
        drawer.value = true
        currentRaidIndex.value = index
    } else {
        ElMessage.warning('超巴没有详细图表')
    }
}
const handleExport = function () {
    if (dataObj.rawData.length === 0) {
        return ElMessage.info('没有数据可以导出')
    }
    const filename = '金本数据 ' + dayjs().format('YYYY-MM-DD');
    exportJSONFile(dataObj.rawData, filename)
}
const handleChange = function (target) {
    const msg = importJSONFile(target.raw);
    if (msg) {
        ElMessage.info(msg);
        upload.value.handleRemove(target)
    } else {
        ElMessage.success('导入成功');
    }
}
const clearData = function () {
    clearDatabase((err) => {
        if (!err) {
            location.reload()
            ElMessage.success("清空成功");
        } else {
            ElMessage.info(err);
        }
    });
}
</script>

<style lang="less" scoped>
.box-card {
    min-height: 340px;
    // min-width: 440px;
    margin-bottom: 20px;
    font-size: 14px;

    .image {
        width: 100%;
        display: block;
    }

    .card-table {
        padding: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 124px;

        .card-row {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;

            .item {
                margin-right: 20px;
            }
        }
    }
}

.result {
    width: 300px;
    height: 50px;
    margin: auto;
    border: 1px solid;
    background-color: rgb(255, 217, 0);
    line-height: 50px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}

.uploader {
    display: flex;
    justify-content: center;

    button {
        margin: 10px;
    }
}

.box-card:hover {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-box-shadow: 0 0 6px #999;
    box-shadow: 0 0 6px #999;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
}
</style>