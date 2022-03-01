<template>
  <h1>贤者相关素材计算器v2.1</h1>
  <div class="container">
    <div><MaterialInfo :materialInfo="materialInfo" /></div>
    <div class="materialAbout">
      <EvokerInfo :evokerInfo="evokerInfo" />
      <MaterialResult :result="result" :flag="flag" :percent="percent" />
    </div>
  </div>
  <div class="footer">
    <span>Created by Waaatanuki</span><br />
    <a href="https://bbs.nga.cn/read.php?tid=25257642">问题反馈</a>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";

import EvokerInfo from "./EvokerInfo.vue";
import MaterialInfo from "./MaterialInfo.vue";
import MaterialResult from "./MaterialResult.vue";

import {
  getEvokerPageResult,
  getFlag,
  getEvokerPagePercent,
} from "../assets/tools";
import { ratio } from "../assets/data";

export default {
  name: "EvokerPage",
  components: {
    EvokerInfo,
    MaterialInfo,
    MaterialResult,
  },
  setup() {
    const evokerInfo = JSON.parse(localStorage.getItem("evokerInfo")) || [
      {
        no: 7,
        name: "教皇",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 1,
        name: "芙劳",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 0,
        name: "女帝",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 8,
        name: "女教皇",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 4,
        name: "愚者",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 5,
        name: "魔术师",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 6,
        name: "皇帝",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 3,
        name: "节制",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 2,
        name: "战车",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
      {
        no: 9,
        name: "尼亚",
        target: true,
        tarotLevel: 7,
        getCard: true,
        evokerLevel: 4,
      },
    ];
    const materialInfo = JSON.parse(localStorage.getItem("materialInfo")) || {};

    const evokerData = reactive({ evokerInfo, materialInfo });

    evokerData.result = computed(() =>
      getEvokerPageResult(evokerData.evokerInfo, evokerData.materialInfo)
    );
    evokerData.flag = computed(() => getFlag(evokerData.evokerInfo));
    evokerData.percent = computed(() =>
      getEvokerPagePercent(
        evokerData.evokerInfo,
        evokerData.materialInfo,
        ratio
      )
    );

    onUpdated(() => {
      localStorage.setItem(
        "materialInfo",
        JSON.stringify(evokerData.materialInfo)
      );
      localStorage.setItem("evokerInfo", JSON.stringify(evokerData.evokerInfo));
    });

    return {
      ...toRefs(evokerData),
    };
  },
};
</script>

<style>
.container {
  display: flex;
}
h1 {
  color: rgb(184, 175, 175);
}
.materialAbout {
  background-color: wheat;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  background-color: rgb(25, 86, 110);
}
.footer {
  margin-top: 20px;
  color: white;
}
a {
  color: white;
}
</style>