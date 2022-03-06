
<template>
  <div class="container">
    <div class="title">攒井计算器</div>
    <div class="setData">
      <ul>
        <li>
          10连券<input v-model.number="tenTicket" onfocus="this.select()" />
        </li>
        <li>
          单抽券<input v-model.number="sigleTicket" onfocus="this.select()" />
        </li>
        <li>
          宝晶石<input v-model.number="crystal" onfocus="this.select()" />
        </li>
        <li>已抽<input v-model.number="drawn" onfocus="this.select()" /></li>
        <li>
          梦宝谷点数<input v-model.number="mobacoin" onfocus="this.select()" />
        </li>
        <li>==============</li>
        <li>点数价格<input /></li>
        <li>对应点数<input /></li>
      </ul>
    </div>
    <div class="output"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";

export default {
  name: "GachaCalc",
  setup() {
    const gachaData = reactive({
      sigleTicket: 0,
      tenTicket: 0,
      crystal: 0,
      drawn: 0,
      mobacoin: 0,
    });

    const needCrystal = computed(() => {
      const sum =
        gachaData.sigleTicket * 300 +
        gachaData.tenTicket * 3000 +
        gachaData.crystal +
        gachaData.drawn * 300 +
        gachaData.mobacoin;

      return sum;
    });

    onUpdated(() => {
      console.log(needCrystal.value);
    });
    return { ...toRefs(gachaData) };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
}
.title {
  font-weight: bold;
  font-size: 20px;
}
.setData {
  display: flex;
  flex-direction: column;
}
input {
  width: 80px;
  direction: rtl;
}
ul {
  text-align: justify;
  text-align-last: justify;
  list-style: none;
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

.goal {
  color: orange;
}
button {
  width: 70px;
  background-color: rgb(100, 166, 219);
  margin: 2px;
  border-radius: 5px;
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