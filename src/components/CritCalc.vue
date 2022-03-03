<template>
  <div class="container">
    <div class="input">
      <div>
        自身加护:
        <label
          ><input
            type="radio"
            name="self"
            v-model="inputInfo[0]"
            value="kami150"
          />老王150</label
        >
        <label
          ><input
            type="radio"
            name="self"
            v-model="inputInfo[0]"
            value="maguna140"
          />方阵140</label
        >
        <label
          ><input
            type="radio"
            name="self"
            v-model="inputInfo[0]"
            value="kami140"
          />老王140</label
        >
        <label
          ><input
            type="radio"
            name="self"
            v-model="inputInfo[0]"
            value="maguna120"
          />方阵120</label
        >
        <label
          ><input
            type="radio"
            name="self"
            v-model="inputInfo[0]"
            value="0"
          />无</label
        >
      </div>
      <div>
        好友加护:
        <label
          ><input
            type="radio"
            name="friend"
            v-model="inputInfo[1]"
            value="kami150"
            :disabled="inputInfo[3]"
          />老王150</label
        >
        <label
          ><input
            type="radio"
            name="friend"
            v-model="inputInfo[1]"
            value="maguna140"
            :disabled="inputInfo[3]"
          />方阵140</label
        >
        <label
          ><input
            type="radio"
            name="friend"
            v-model="inputInfo[1]"
            value="kami140"
            :disabled="inputInfo[3]"
          />老王140</label
        >
        <label
          ><input
            type="radio"
            name="friend"
            v-model="inputInfo[1]"
            value="maguna120"
            :disabled="inputInfo[3]"
          />方阵120</label
        >
        <label
          ><input
            type="radio"
            name="friend"
            v-model="inputInfo[1]"
            value="0"
            :disabled="inputInfo[3]"
          />无</label
        >
      </div>
      <div>
        六龙召唤:
        <label
          ><input
            type="radio"
            name="dragon"
            v-model="inputInfo[2]"
            :value="20"
          />20</label
        >
        <label
          ><input
            type="radio"
            name="dragon"
            v-model="inputInfo[2]"
            :value="10"
          />10</label
        >
        <label
          ><input
            type="radio"
            name="dragon"
            v-model="inputInfo[2]"
            :value="0"
          />无</label
        >
        <label
          ><input
            class="others"
            type="checkbox"
            v-model="inputInfo[3]"
          />转世</label
        >
        <label
          ><input
            class="others"
            type="checkbox"
            v-model="inputInfo[4]"
          />不计算水龙枪</label
        >
      </div>
    </div>
    <div class="output"></div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";
import { getCritCalcResult } from "../assets/tools";
export default {
  name: "CritCalc",
  setup() {
    const inputInfo = reactive(["kami150", "kami150", 20, false, true]);

    // 0为老王加护数值 1为方阵加护数值
    const boostLevel = computed(() => {
      const arr = [inputInfo[2], 0];
      arr[inputInfo[0].indexOf("kami") == 0 ? 0 : 1] += Number(
        inputInfo[0].match(/\d+/g)[0]
      );
      if (!inputInfo[3]) {
        arr[inputInfo[1].indexOf("kami") == 0 ? 0 : 1] += Number(
          inputInfo[1].match(/\d+/g)[0]
        );
      }
      return arr;
    });

    const result = computed(() => {
      return getCritCalcResult(boostLevel.value);
    });

    onUpdated(() => {
      console.log("result.value", result.value);
    });
    return { inputInfo, result };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(36, 111, 141);
}
label .others {
  margin-left: 35px;
}
</style>