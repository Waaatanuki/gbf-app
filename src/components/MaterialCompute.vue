<template>
  <div class="container">
    <div class="item" v-for="(v, name) in result.temp" :key="name">
      <img style="width: 100%" :src="`./img/item/${name}.jpg`" /><br />
      <input class="itemNum" :value="v" />
    </div>
  </div>
  <!-- <button @click="demo">test</button> -->
</template>

<script>
import uncapData from "../assets/uncapData";
import { reactive } from "@vue/reactivity";
import { getCurrentInstance } from "@vue/runtime-core";

export default {
  name: "MaterialCompute",
  setup() {
    const { proxy } = getCurrentInstance();
    let tempEvokerInfo = reactive(
      JSON.parse(localStorage.getItem("evokerData")) || [
        { no: 7, name: "教皇" },
        { no: 1, name: "芙劳" },
        { no: 0, name: "女帝" },
        { no: 8, name: "女教皇" },
        { no: 4, name: "愚者" },
        { no: 5, name: "魔术师" },
        { no: 6, name: "皇帝" },
        { no: 3, name: "节制" },
        { no: 2, name: "战车" },
        { no: 9, name: "尼亚" },
      ]
    );
    let tempMaterialInfo = reactive(
      JSON.parse(localStorage.getItem("itemNum")) || {}
    );
    let result = reactive({});
    result.temp = JSON.parse(localStorage.getItem("result")) || {};

    const needMaterial = function (e, v) {
      let result = {};
      for (let i = 0; i < 10; i++) {
        if (e[i].target) {
          let currentNo = e[i].no;
          let currentTarotLevel = e[i].tarotLevel || 0;
          let currentEvokerLevel = e[i].evokerLevel || 0;
          let currentWeaponLevel = e[i].weaponLevel || 0;
          let currentDomainLevel = e[i].domainLevel || 0;

          // 塔罗突破素材
          for (
            let j = currentTarotLevel;
            j < uncapData[currentNo].tarotUncap.length;
            j++
          ) {
            let tarotUncapData = uncapData[currentNo].tarotUncap[j];
            for (const k in tarotUncapData) {
              if (isNaN(result[k])) {
                result[k] = 0;
              }
              result[k] += tarotUncapData[k];
            }
          }

          // 塔罗卡片交换
          if (!e[i].getCard) {
            let tarotCardData = uncapData[currentNo].tarotCard;
            for (const k in tarotCardData) {
              if (isNaN(result[k])) {
                result[k] = 0;
              }
              result[k] += tarotCardData[k];
            }
          }

          // 贤者突破素材
          for (
            let j = currentEvokerLevel;
            j < uncapData[currentNo].evokerUncap.length;
            j++
          ) {
            let evokerUncapData = uncapData[currentNo].evokerUncap[j];
            for (const k in evokerUncapData) {
              if (isNaN(result[k])) {
                result[k] = 0;
              }
              result[k] += evokerUncapData[k];
            }
          }

          // 贤武突破素材
          for (
            let j = currentWeaponLevel;
            j < uncapData[currentNo].weaponUncap.length;
            j++
          ) {
            let weaponUncapData = uncapData[currentNo].weaponUncap[j];
            for (const k in weaponUncapData) {
              if (isNaN(result[k])) {
                result[k] = 0;
              }
              result[k] += weaponUncapData[k];
            }
          }

          // 领域突破素材
          for (
            let j = currentDomainLevel;
            j < uncapData[currentNo].domainUncap.length;
            j++
          ) {
            let domainUncapData = uncapData[currentNo].domainUncap[j];
            for (const k in domainUncapData) {
              if (isNaN(result[k])) {
                result[k] = 0;
              }
              result[k] += domainUncapData[k];
            }
          }
        }
      }

      for (const k in v) {
        if (result[k]) {
          result[k] -= v[k];
          if (result[k] <= 0) {
            delete result[k];
          }
        }
      }

      return result;
    };

    proxy.$mybus.on("getEvokerInfo", (e) => {
      tempEvokerInfo = e;
      result.temp = needMaterial(tempEvokerInfo, tempMaterialInfo);
      localStorage.setItem("result", JSON.stringify(result.temp));
    });
    proxy.$mybus.on("getMaterialInfo", (e) => {
      tempMaterialInfo = e;
      result.temp = needMaterial(tempEvokerInfo, tempMaterialInfo);
      localStorage.setItem("result", JSON.stringify(result.temp));
    });

    const demo = function () {};
    return { demo, result };
  },
};
</script>

<style>
.container {
  background-color: rgb(72, 104, 25);
  width: 100%;
}
.item {
  height: 50px;
  width: 50px;
  display: inline-block;
  position: relative;
  margin-right: 3;
  background-color: white;
}
</style>