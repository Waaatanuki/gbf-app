<template>
  <div class="subTitle" v-show="flag == 0">尚未勾选目标</div>
  <div
    class="subTitle"
    v-show="flag == 1 && Object.keys(result.temp).length != 0"
  >
    完成目标还需以下素材
  </div>
  <div
    class="subTitle"
    v-show="flag == 1 && Object.keys(result.temp).length == 0"
  >
    目标素材已收集完毕
  </div>
  <div class="container_MaterialCompute">
    <div
      class="item_MaterialCompute"
      v-for="(v, name) in result.temp"
      :key="name"
    >
      <img style="width: 100%" :src="`./img/item/${name}.jpg`" /><br />
      <label class="itemNum">{{ v }}</label>
    </div>
  </div>

  <!-- <button @click="demo">test</button> -->
</template>

<script>
import uncapData from "../assets/uncapData";
import { reactive } from "@vue/reactivity";
import { ref, getCurrentInstance, onMounted } from "@vue/runtime-core";

export default {
  name: "MaterialCompute",
  setup() {
    const { proxy } = getCurrentInstance();
    let flag = ref(localStorage.getItem("flag") || 1);
    let tempEvokerInfo = JSON.parse(localStorage.getItem("evokerData")) || [
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
    let tempMaterialInfo = JSON.parse(localStorage.getItem("itemNum")) || {};

    let result = reactive({});

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

    result.temp =
      JSON.parse(localStorage.getItem("result")) ||
      needMaterial(tempEvokerInfo, tempMaterialInfo);

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

    proxy.$mybus.on("getFlag", (e) => {
      flag.value = e;
      localStorage.setItem("flag", e);
    });

    const demo = function () {};
    return { demo, result, flag };
  },
};
</script>

<style>
.container_MaterialCompute {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item_MaterialCompute {
  height: 80px;
  width: 50px;
}
.subTitle {
  text-align: center;
  font-size: 30px;
}
</style>