<template>
  <div class="hihiirrosuki">
    <div class="raid" v-for="(raid, index) in showData" :key="index">
      <div class="title">
        <img :src="`./img/raid/${RAID_NAME[index]}.jpg`" />
      </div>
      <div class="itemlist">
        <div class="item">总次数：{{ raid.count }}</div>
        <div class="item" v-if="index != 0">
          蓝箱次数：{{ raid.blueChestCount }}
        </div>
        <div class="item" v-if="index == 0">自发金：{{ raid.redChestFFJ }}</div>
        <div class="item" v-if="index != 0">
          蓝箱金：{{ raid.blueChestFFJ }}
        </div>
        <div class="item" v-if="index == 0">
          金箱金：{{ raid.normalChestFFJ }}
        </div>
      </div>
      <div class="itemlist" v-if="index != 0">
        <div class="item">
          总金率：{{
            ((raid.blueChestFFJ / raid.count || 0) * 100).toFixed(2)
          }}%
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
      <div class="itemlist" v-if="index != 0">
        <div class="item">白戒指：{{ raid.whiteRing }}</div>
        <div class="item">黑戒指：{{ raid.blackRing }}</div>
        <div class="item">红戒指：{{ raid.redChestFFJ }}</div>
      </div>
      <div class="itemlist">
        <div class="item longitem" v-if="index != 0">
          距离上次出金已经过去了{{ raid.lastCount }}把{{
            raid.lastBlueChestCount
          }}个蓝箱
        </div>
        <div class="item longitem" v-if="index == 0">
          距离上次出金已经过去了{{ raid.lastCount }}把
        </div>
      </div>
    </div>
    <div class="raid result">总掉落FFJ：{{ totalFFJ }}</div>
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

    const totalFFJ = computed(() => {
      return showData.value.reduce(function (total, kv) {
        return total + kv.totalFFJ;
      }, 0);
    });

    const RAID_NAME = ["cb", "tuyobaha", "akx", "gurande"];

    // const demo = function () {
    //   console.log(showData.value);
    // };

    return { showData, RAID_NAME, totalFFJ };
  },
};
</script>

<style scoped>
.hihiirrosuki {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  direction: column;
  padding: 5px;
}
.raid {
  width: 48%;
  background-color: wheat;
  margin: 5px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
}

img {
  width: 90%;
}
.title {
  margin-top: 10px;
  margin-bottom: 20px;
}
.itemlist {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
}
.item {
  width: 50%;
}
.longitem {
  width: 100%;
}
.result {
  width: 50%;
  background-color: rgb(255, 217, 0);
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;
}
</style>>
