
<template>
  <div class="gachacalc">
    <div class="title">攒井计算器</div>
    <div class="show">
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
            剩余点数<input v-model.number="mobacoin" onfocus="this.select()" />
          </li>
          <li>==============</li>
          <li>
            点数价格<input v-model.number="rmb" onfocus="this.select()" />
          </li>
          <li>
            对应点数<input v-model.number="point" onfocus="this.select()" />
          </li>
        </ul>
      </div>
      <div class="result">
        <p>
          当前{{ parseInt(totalCrystal / 90000) }}井 , 下一井需要补{{
            300 - (totalDraw % 300)
          }}抽 , 合计{{ 90000 - (totalCrystal % 90000) }}点数
        </p>
        <br />
        <p v-show="rmb && point">
          对应RMB :
          {{ parseInt((rmb * (90000 - (totalCrystal % 90000))) / point) }}元
        </p>
      </div>
    </div>
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

    gachaData.totalCrystal = computed(() => {
      return (
        gachaData.sigleTicket * 300 +
        gachaData.tenTicket * 3000 +
        gachaData.crystal +
        gachaData.drawn * 300 +
        gachaData.mobacoin
      );
    });

    gachaData.totalDraw = computed(() => {
      return parseInt(gachaData.totalCrystal / 300);
    });
    const price = reactive({
      rmb: 0,
      point: 0,
    });

    return { ...toRefs(gachaData), ...toRefs(price) };
  },
};
</script>

<style scoped>
.gachacalc {
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
}
.setData {
  width: 200px;
}
input {
  width: 80px;
  font-size: 13.3333px;
}
ul {
  text-align: justify;
  text-align-last: justify;
  list-style: none;
}
.result p {
  margin: 0px;
  padding: 0px;
}
</style>