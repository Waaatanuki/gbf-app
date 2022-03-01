<template>
  <h1>贤者相关素材计算器v2.0</h1>
  <!-- <div class="container">
    <div><MaterialInfo /></div>

    <div class="materialAbout">
      <EvokerInfo />
      <MaterialCompute />
    </div>
  </div>
  <div class="footer">
    <span>Created by Waaatanuki</span><br />
    <a href="https://bbs.nga.cn/read.php?tid=25257642">问题反馈</a>
  </div> -->
</template>

<script>
import { reactive } from "@vue/reactivity";

import EvokerInfo from "./EvokerInfo.vue";
import MaterialInfo from "./MaterialInfo.vue";
import MaterialCompute from "./MaterialCompute.vue";

import { getEvokerPageResult } from "../assets/tools";

export default {
  name: "EvokerPage",
  components: {
    EvokerInfo,
    MaterialInfo,
    MaterialCompute,
  },
  setup() {
    //   数据初始化
    const evokerInfo = JSON.parse(localStorage.getItem("evokerInfo")) || [
      { no: 7, name: "教皇", target: true },
      { no: 1, name: "芙劳", target: true },
      { no: 0, name: "女帝", target: true },
      { no: 8, name: "女教皇", target: true },
      { no: 4, name: "愚者", target: true },
      { no: 5, name: "魔术师", target: true },
      { no: 6, name: "皇帝", target: true },
      { no: 3, name: "节制", target: true },
      { no: 2, name: "战车", target: true },
      { no: 9, name: "尼亚", target: true },
    ];
    const materialInfo = JSON.parse(localStorage.getItem("materialInfo")) || {};
    const flag = localStorage.getItem("flag") || 1;
    const result = JSON.parse(localStorage.getItem("result")) || {};
    getEvokerPageResult(evokerInfo, materialInfo);

    const evokerData = reactive({ evokerInfo, materialInfo, flag, result });
    console.log(evokerData);
  },
};
</script>

<style>
</style>