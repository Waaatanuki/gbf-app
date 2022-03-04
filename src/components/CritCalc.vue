<template>
  <div class="container">
    <div class="title">暴击计算器</div>
    <div class="input">
      <div>
        加护:
        <label
          ><input
            type="radio"
            name="boostType"
            v-model="inputInfo[0]"
            :value="[300, 0]"
          />双面神石</label
        >
        <label
          ><input
            type="radio"
            name="boostType"
            v-model="inputInfo[0]"
            :value="[150, 0]"
          />单面神石</label
        >
        <label
          ><input
            type="radio"
            name="boostType"
            v-model="inputInfo[0]"
            :value="[0, 280]"
          />双面方阵</label
        >
        <label
          ><input
            type="radio"
            name="boostType"
            v-model="inputInfo[0]"
            :value="[0, 140]"
          />单面方阵</label
        >
        <label
          ><input
            type="radio"
            name="boostType"
            v-model="inputInfo[0]"
            :value="[0, 0]"
          />无加护</label
        >
      </div>
      <div>
        六龙SUB加护:
        <label
          ><input
            type="radio"
            name="dragon"
            v-model="inputInfo[1]"
            :value="20"
          />20</label
        >
        <label
          ><input
            type="radio"
            name="dragon"
            v-model="inputInfo[1]"
            :value="10"
          />10</label
        >
        <label
          ><input
            type="radio"
            name="dragon"
            v-model="inputInfo[1]"
            :value="0"
          />无</label
        >
      </div>
    </div>
    <div class="selectDiv">
      <div class="select">
        <div class="showItem">
          <div class="itemClass">神石</div>
          <div class="itemClasslist">
            <button
              class="item"
              :class="{
                sRate: item.rate < 5,
                mRate: 5 < item.rate && item.rate < 8,
                lRate: 8 < item.rate && item.rate <= 11,
                xlRate: 11 < item.rate && item.rate < 40,
              }"
              v-for="(item, index) in itemsList"
              :key="index"
              v-show="item.magunaOnly != true && item.boosted != false"
              @click="setCalc(item, 0)"
            >
              {{ item.skillName + " Lv" + item.level }}
            </button>
          </div>
        </div>
        <div class="showItem">
          <div class="itemClassTitle">方阵</div>
          <div class="itemClasslist">
            <button
              class="item"
              :class="{
                sRate: item.rate < 5,
                mRate: 5 < item.rate && item.rate < 8,
                lRate: 8 < item.rate && item.rate <= 11,
                xlRate: 11 < item.rate && item.rate < 40,
              }"
              v-for="(item, index) in itemsList"
              :key="index"
              v-show="item.kamiOnly != true && item.boosted != false"
              @click="setCalc(item, 1)"
            >
              {{ item.skillName + " Lv" + item.level }}
            </button>
          </div>
        </div>
        <div class="showItem">
          <div class="itemClass">特殊</div>
          <div class="itemClasslist">
            <button
              class="item"
              :class="{
                sRate: item.rate < 5,
                mRate: 5 < item.rate && item.rate < 8,
                lRate: 8 < item.rate && item.rate <= 11,
                xlRate: 11 < item.rate && item.rate < 40,
              }"
              v-for="(item, index) in itemsList"
              :key="index"
              v-show="item.boosted == false"
              @click="setCalc(item, 2)"
            >
              {{ item.skillName + " Lv" + item.level }}
            </button>
          </div>
        </div>
      </div>
      <div class="select">
        <div class="showItem">
          <div class="itemClass">神石</div>
          <div class="itemClasslist">
            <button
              class="item"
              :class="{
                sRate: item.rate < 5,
                mRate: 5 < item.rate && item.rate < 8,
                lRate: 8 < item.rate && item.rate <= 11,
                xlRate: 11 < item.rate && item.rate < 40,
              }"
              v-for="(item, index) in calcItems"
              :key="index"
              v-show="
                item.magunaOnly != true &&
                item.boosted != false &&
                item.type == 0
              "
              @click="calcItems.splice(index, 1)"
            >
              {{ item.skillName + " Lv" + item.level }}
            </button>
          </div>
        </div>
        <div class="showItem">
          <div class="itemClassTitle">方阵</div>
          <div class="itemClasslist">
            <button
              class="item"
              :class="{
                sRate: item.rate < 5,
                mRate: 5 < item.rate && item.rate < 8,
                lRate: 8 < item.rate && item.rate <= 11,
                xlRate: 11 < item.rate && item.rate < 40,
              }"
              v-for="(item, index) in calcItems"
              :key="index"
              v-show="
                item.kamiOnly != true && item.boosted != false && item.type == 1
              "
              @click="calcItems.splice(index, 1)"
            >
              {{ item.skillName + " Lv" + item.level }}
            </button>
          </div>
        </div>
        <div class="showItem">
          <div class="itemClass">特殊</div>
          <div class="itemClasslist">
            <button
              class="item"
              :class="{
                sRate: item.rate < 5,
                mRate: 5 < item.rate && item.rate < 8,
                lRate: 8 < item.rate && item.rate <= 11,
                xlRate: 11 < item.rate && item.rate < 40,
              }"
              v-for="(item, index) in calcItems"
              :key="index"
              v-show="item.boosted == false && item.type == 2"
              @click="calcItems.splice(index, 1)"
            >
              {{ item.skillName + " Lv" + item.level }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="output">
      <div class="showTotalCrit">
        <label :class="{ goal: calcResult >= 100 ? true : false }"
          >总暴击率:{{ calcResult }}%</label
        ><br />
        <button class="clear" @click="clearCalc">清空</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";

import { critData } from "../assets/data";
export default {
  name: "CritCalc",
  setup() {
    const inputInfo = reactive([[300, 0], 20]);
    let calcItems = reactive([]);
    let itemsList = { ...critData };

    let calcResult = computed(() => {
      let sum = 0;
      let boostLevel = [inputInfo[0][0] + inputInfo[1], inputInfo[0][1]];
      for (let i = 0; i < calcItems.length; i++) {
        calcItems[i].boostRate =
          calcItems[i].type == 2
            ? calcItems[i].rate
            : Number(
                (
                  ((boostLevel[calcItems[i].type] + 100) / 100) *
                  calcItems[i].rate
                ).toFixed(2)
              );
        sum += calcItems[i].boostRate;
      }
      return sum.toFixed(1);
    });

    const setCalc = function (item, type) {
      item.type = type;
      calcItems.push({ ...item });
    };

    const clearCalc = function () {
      calcItems.length = 0;
    };

    onUpdated(() => {
      // console.log("calcItems", calcItems);
    });

    return {
      inputInfo,
      itemsList,
      calcItems,
      calcResult,
      clearCalc,
      setCalc,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(190, 142, 51);
}
.title {
  font-weight: bold;
  font-size: 20px;
}
.input div {
  margin: 5px;
}
.selectDiv {
  display: flex;
}
.select {
  display: flex;
  width: 50%;
  border: 1px solid;
  padding: 5px;
}

.showItem {
  width: 33%;
}
.sRate {
  background-color: rgb(120, 100, 200);
}
.mRate {
  background-color: rgb(90, 130, 200);
}
.lRate {
  background-color: rgb(60, 160, 200);
}
.xlRate {
  background-color: rgb(30, 190, 200);
}
.goal {
  color: rgb(190, 30, 30);
}
button {
  width: 70px;
  background-color: rgb(100, 166, 219);
  margin: 2px;
}
.showTotalCrit {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 20px;
  align-items: center;
}
.showTotalCrit label {
  height: 10px;
}
.clear {
  background-color: rgb(255, 255, 255);
}
</style>