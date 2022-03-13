<template>
  <div class="hihiirrosuki" v-show="!isShowDetail">
    <div
      class="raid"
      v-for="(raid, index) in showData"
      :key="index"
      @click="toDetailPage(RAID_NAME[index])"
    >
      <div class="title">
        <img :src="`./img/raid/${RAID_NAME[index]}.jpg`" />
      </div>
      <div class="itemlist">
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
      <div class="itemlist" v-if="index != 0">
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
      <div class="itemlist" v-if="index != 0">
        <div class="item">白戒指：{{ raid.whiteRing }}</div>
        <div class="item">黑戒指：{{ raid.blackRing }}</div>
        <div class="item">红戒指：{{ raid.redRing }}</div>
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
    <div class="result">
      总掉落FFJ：{{ totalFFJ }}
      <div class="outin">
        <button @click="downloadFile">导出</button>
        <button @click="showUploadButton = !showUploadButton">导入</button>
        <input
          type="file"
          accept=".json"
          v-show="showUploadButton"
          v-on:change="uploadFile"
        />
      </div>
    </div>
  </div>
  <router-view v-slot="{ Component }" v-show="isShowDetail">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import {
  getHihiiroShowData,
  exportJSONFile,
  importJSONFile,
  exportToJson,
} from "../assets/tools";
import { computed, reactive, onUpdated, toRefs } from "vue";
import router from "@/router";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
export default {
  name: "HihiiroSuki",
  setup() {
    const config = reactive({
      RAID_NAME: ["cb", "tuyobaha", "akx", "gurande"],
      showData: {},
      showUploadButton: 0,
      totalFFJ: 0,
      isShowDetail: 0,
    });

    exportToJson((err, data) => {
      if (!err) {
        config.rawData = data.GoldBrick;
        config.showData = computed(() => getHihiiroShowData(config.rawData));
        config.totalFFJ = computed(() => {
          return config.showData.reduce(function (total, kv) {
            return total + kv.totalFFJ;
          }, 0);
        });
      }
    });
    const toDetailPage = function (raidName) {
      if (raidName != "cb") {
        router.push({
          name: "HihiiroSukiDetail",
          params: { raidName },
        });
      }
    };
    const uploadFile = function ({ target }) {
      importJSONFile(target);
    };
    const downloadFile = () => exportJSONFile(config.rawData);

    onBeforeRouteUpdate((to, from, next) => {
      config.isShowDetail = to.name == "HihiiroSuki" ? false : true;
      next();
    });
    onBeforeRouteLeave((to, from, next) => {
      config.isShowDetail = false;
      next();
    });

    return {
      ...toRefs(config),
      uploadFile,
      downloadFile,
      toDetailPage,
    };
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
  width: 400px;
  background-color: wheat;
  margin: 5px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
}
.raid:hover {
  background-color: rgb(248, 191, 85);
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
  height: 50px;
  margin: 5px;
  border: 1px solid;
  background-color: rgb(255, 217, 0);
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;
}
button {
  margin: 10px;
}
</style>>
