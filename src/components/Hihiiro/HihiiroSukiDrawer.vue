<template>
  <div class="detailPage">
    <div>
      <el-select v-model="countRange" class="m-2" placeholder="Select" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="chart-list">
      <BarChart :id="`${raidIndex}_count`" title="次数统计" :labels='countData[raidIndex - 1].labels'
        :data='countData[raidIndex - 1].count' />
      <BarChart :id="`${raidIndex}_blueChest`" title="出金蓝箱次数统计" :labels='blueChestData[raidIndex - 1].labels'
        :data='blueChestData[raidIndex - 1].count' />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import BarChart from '../Chart/BarChart.vue'
import database from '../../assets/goldbrick.json'
import dayjs from 'dayjs'

const props = defineProps(['raidIndex', 'data'])

const options = [
  { label: '最近30天', value: 'month' },
  { label: '最近半年', value: 'halfYear' },
  { label: '最近一年', value: 'year' },
  { label: '总体', value: 'total' }]

const countRange = ref('month')

const getCountData = function (range, rawData) {
  rawData.sort(function (a, b) {
    return Object.keys(a)[0] - Object.keys(b)[0];
  });
  const raidNameList = ["tuyobaha", "akx", "gurande"];

  const showData = [{}, {}, {}];
  // 初始化
  for (let i = 0; i < raidNameList.length; i++) {
    showData[i].labels = [];
    showData[i].count = [];
    if (range == "month") {
      let date = dayjs().subtract(30, "day");
      for (let j = 0; j < 30; j++) {
        showData[i].labels.push(`${date.month() + 1}-${date.date()}`);
        showData[i].count.push(0);
        date = dayjs(date).add(1, "day");
      }
    } else if (range == "halfYear") {
      let date = dayjs().subtract(6, "month");
      for (let j = 0; j < 6; j++) {
        showData[i].labels.push(`${date.month() + 1}`);
        showData[i].count.push(0);
        date = dayjs(date).add(1, "month");
      }
    } else if (range == "year") {
      let date = dayjs().subtract(1, "year");
      for (let j = 0; j < 12; j++) {
        showData[i].labels.push(`${date.month() + 1}`);
        showData[i].count.push(0);
        date = dayjs(date).add(1, "month");
      }
    }
  }
  for (let i = 0; i < rawData.length; i++) {
    const item = rawData[i];
    const key = Object.keys(item)[0];
    const value = item[key];
    // if (value.raidName == "tuyobaha") {
    //     console.log(dayjs(value.timestamp).format("MM-DD"));
    // }

    const dataNo = raidNameList.indexOf(value.raidName);
    if (dataNo != -1) {
      if (range == "month") {
        let date = dayjs().subtract(30, "day");
        for (let j = 0; j < 30; j++) {
          if (date.isSame(dayjs(value.timestamp), "date")) {
            showData[dataNo].count[j]++;
          }
          date = date.add(1, "day");
        }
      } else if (range == "halfYear") {
        let date = dayjs().subtract(6, "month");
        for (let j = 0; j < 6; j++) {
          if (date.isSame(dayjs(value.timestamp), "month")) {
            showData[dataNo].count[j]++;
          }
          date = dayjs(date).add(1, "month");
        }
      } else if (range == "year") {
        let date = dayjs().subtract(1, "year");
        for (let j = 0; j < 12; j++) {
          if (date.isSame(dayjs(value.timestamp), "month")) {
            showData[dataNo].count[j]++;
          }
          date = dayjs(date).add(1, "month");
        }
      }
    }
  }
  // console.log(showData);
  return showData;
}
const getBlueChestData = function (rawData) {
  rawData.sort(function (a, b) {
    return Object.keys(a)[0] - Object.keys(b)[0];
  });
  const raidNameList = ["tuyobaha", "akx", "gurande"];

  const showData = [{}, {}, {}];
  // 初始化
  for (let i = 0; i < raidNameList.length; i++) {
    showData[i].labels = [1];
    showData[i].count = [0];
  }
  for (let i = 0; i < rawData.length; i++) {
    const item = rawData[i];
    const key = Object.keys(item)[0];
    const value = item[key];
    const dataNo = raidNameList.indexOf(value.raidName);
    if (dataNo != -1) {
      if (value.goldBrick == 11) {
        showData[dataNo].count[showData[dataNo].count.length - 1]++;
        showData[dataNo].labels.push(showData[dataNo].labels.length + 1);
        showData[dataNo].count.push(0);
      } else {
        value.blueChests && showData[dataNo].count[showData[dataNo].count.length - 1]++;
      }
    }
  }
  return showData;
}
const countData = computed(() =>
  getCountData(countRange.value, props.data)
);
const blueChestData = computed(() =>
  getBlueChestData(props.data)
);


</script>

<style scoped>
.detailPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chart-list {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>