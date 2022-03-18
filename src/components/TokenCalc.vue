
<template>
  <div class="tokencalc">
    <div class="title">战货计算器</div>
    <div class="show">
      <div class="setData">
        <select v-model="type">
          <option value="0">古战场战货</option>
          <option value="1">月末战货</option>
        </select>
        <ul>
          <li>
            当前战货数量<input
              v-model.number="currentToken"
              onfocus="this.select()"
            />
          </li>
          <li>
            已抽箱数<input v-model.number="drawnBox" onfocus="this.select()" />
          </li>
          <li>
            目标箱数<input v-model.number="targetBox" onfocus="this.select()" />
          </li>
        </ul>
      </div>
      <div class="result">
        <p v-show="targetBox - totalBox <= 0">
          目前一共【{{ totalBox }}】箱,目标已达成！
        </p>
        <p v-show="targetBox - totalBox > 0">
          目前一共【{{ totalBox }}】箱,距离目标还差【{{
            targetBox - totalBox
          }}】箱【{{ needToken }}】战货
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";

export default {
  name: "TokenCalc",
  setup() {
    const tokenData = reactive({
      currentToken: 0,
      drawnBox: 0,
      targetBox: 0,
      type: 0,
    });

    const data = [
      [
        { 440800: { perToken: 15000, drawnBox: 80 } },
        { 90800: { perToken: 10000, drawnBox: 45 } },
        { 8800: { perToken: 2000, drawnBox: 4 } },
        { 1600: { perToken: 2400, drawnBox: 1 } },
        { 0: { perToken: 1600, drawnBox: 0 } },
      ],
      [
        { 40706: { perToken: 2104, drawnBox: 20 } },
        { 6914: { perToken: 2112, drawnBox: 4 } },
        { 4800: { perToken: 2114, drawnBox: 3 } },
        { 2800: { perToken: 2000, drawnBox: 2 } },
        { 1200: { perToken: 1600, drawnBox: 1 } },
        { 0: { perToken: 1200, drawnBox: 0 } },
      ],
    ];

    tokenData.totalToken = computed(() => {
      let total = 0;
      for (let i = 0; i < data[tokenData.type].length; i++) {
        const key = Object.keys(data[tokenData.type][i])[0];
        const value = data[tokenData.type][i][key];
        if (tokenData.drawnBox >= value.drawnBox) {
          total =
            parseInt(key) +
            (tokenData.drawnBox - value.drawnBox) * value.perToken;
          break;
        }
      }
      return parseInt(total + tokenData.currentToken);
    });

    tokenData.totalBox = computed(() => {
      let total = 0;
      for (let i = 0; i < data[tokenData.type].length; i++) {
        const key = Object.keys(data[tokenData.type][i])[0];
        const value = data[tokenData.type][i][key];
        if (tokenData.totalToken >= key) {
          total =
            value.drawnBox +
            parseInt((tokenData.totalToken - parseInt(key)) / value.perToken);
          break;
        }
      }
      return total;
    });

    tokenData.needToken = computed(() => {
      let total = 0;
      for (let i = 0; i < data[tokenData.type].length; i++) {
        const key = Object.keys(data[tokenData.type][i])[0];
        const value = data[tokenData.type][i][key];
        if (tokenData.targetBox >= value.drawnBox) {
          total =
            parseInt(key) +
            (tokenData.targetBox - value.drawnBox) * value.perToken;
          break;
        }
      }
      return total - tokenData.totalToken;
    });

    return { ...toRefs(tokenData) };
  },
};
</script>

<style scoped>
.tokencalc {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-weight: bold;
  font-size: 20px;
}
.show {
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin: 5px;
  width: 300px;
}
.setData {
  width: 180px;
  margin-top: 10px;
}
input {
  width: 80px;
  font-size: 13.3333px;
}
ul {
  text-align: justify;
  text-align-last: justify;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-top: 5px;
}
.result {
  margin-top: 10px;
}

.result p {
  margin: 0px;
  padding: 0px;
}
</style>