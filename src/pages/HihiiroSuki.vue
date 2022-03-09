<template>
  <div class="hihiirrosuki">
    <div class="raid" v-for="(raid, index) in showData" :key="index">
      <div class="title itemlist">{{ RAID_NAME[index] }}</div>
      <div class="itemlist">
        <div class="item">总次数：{{ raid.count }}</div>
        <div class="item" v-if="index != 0">
          蓝箱次数：{{ raid.blueChestCount }}
        </div>
      </div>
      <div class="itemlist">
        <div class="item">总金：{{ raid.totalFFJ }}</div>
        <div class="item" v-if="index == 0">自发金：{{ raid.redChestFFJ }}</div>
        <div class="item" v-if="index != 0">
          蓝箱金：{{ raid.blueChestFFJ }}
        </div>
        <div class="item" v-if="index == 0">
          金箱金：{{ raid.normalChestFFJ }}
        </div>
      </div>
      <div class="itemlist" v-if="index == 1">
        <div class="item">白戒指：{{ raid.whiteRing }}</div>
        <div class="item">黑戒指：{{ raid.blackRing }}</div>
        <div class="item">红戒指：{{ raid.redChestFFJ }}</div>
      </div>
      <div class="itemlist">
        <div class="item">距离上次出金已经过去了{{ raid.lastCount }}次</div>
      </div>
      <div class="itemlist">
        <div class="item" v-if="index != 0">
          距离上次出金已经过去了{{ raid.lastBlueChestCount }}蓝箱
        </div>
      </div>
    </div>

    <button @click="demo">测试</button>
  </div>
</template>

<script>
import localforage from "localforage";
import {
  exportToJson,
  importFromJson,
  clearDatabase,
  getHihiiroShowData,
} from "../assets/tools";
import { computed, reactive } from "vue";
export default {
  name: "HihiiroSuki",

  setup() {
    localforage.config({
      name: "gbfApp",
      storeName: "GoldBrick",
    });

    const rawData = reactive([]);

    localforage
      .iterate(function (value, key) {
        rawData.push({ [key]: value });
      })
      .then(function () {
        console.log("成功读取indexedDB数据");
      })
      .catch(function (err) {
        console.log(err);
      });

    const showData = computed(() => getHihiiroShowData(rawData));

    const RAID_NAME = ["超巴", "大巴", "阿卡夏", "大公"];

    const demo = function () {
      console.log(showData.value);
    };

    return { showData, RAID_NAME, demo };
  },
};
</script>

<style scoped>
.hihiirrosuki {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
}
.raid {
  width: 48%;
  height: 300px;
  background-color: wheat;
  margin: 5px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
}
.itemlist {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
.item {
  width: 50%;
}
</style>>
