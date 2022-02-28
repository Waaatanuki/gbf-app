<template>
  <div class="containe_EvokerInfor">
    <div class="evokerDataClass" v-for="k in evokerData" :key="k.no">
      <img :src="`./img/npc/304016${k.no}000_01.jpg`" />
      <select v-model="k.tarotLevel" :class="{ completed: k.tarotLevel == 7 }">
        <option disabled value="undefined">塔罗牌进度</option>
        <option value="0" isshow="1">未入手</option>
        <option value="1">塔罗牌0凸</option>
        <option value="2">塔罗牌1凸</option>
        <option value="3">塔罗牌2凸</option>
        <option value="4">塔罗牌3凸</option>
        <option value="5">塔罗牌SSR化</option>
        <option value="6">塔罗牌4凸</option>
        <option value="7">塔罗牌5凸</option></select
      ><br />
      <label style="font-size: 10px"
        ><input type="checkbox" v-model="k.getCard" />交换贤者卡牌</label
      ><br />
      <select
        v-model="k.evokerLevel"
        :class="{ completed: k.evokerLevel == 4 }"
      >
        <option disabled value="undefined">贤者进度</option>
        <option value="0">贤者0凸</option>
        <option value="1">贤者1凸</option>
        <option value="2">贤者2凸</option>
        <option value="3">贤者3凸</option>
        <option value="4">贤者4凸</option></select
      ><br />
      <select
        v-model="k.weaponLevel"
        :class="{ completed: k.weaponLevel == 5 }"
      >
        <option disabled value="undefined">贤武进度</option>
        <option value="0">未入手</option>
        <option value="1">贤武0凸</option>
        <option value="2">贤武1凸</option>
        <option value="3">贤武2凸</option>
        <option value="4">贤武3凸</option>
        <option value="5">贤武终突</option></select
      ><br />
      <select
        v-model="k.domainLevel"
        :class="{ completed: k.domainLevel == 4 }"
      >
        <option disabled value="undefined">领域进度</option>
        <option value="0">未解放</option>
        <option value="1">解放一格</option>
        <option value="2">解放两格</option>
        <option value="3">解放三格</option>
        <option value="4">全部解放</option></select
      ><br />
      <label style="font-size: 10px"
        ><input type="checkbox" v-model="k.target" />目标</label
      >
    </div>
  </div>
  <!-- <button @click="demo">输出</button> -->
</template>

<script>
import { reactive } from "@vue/reactivity";
import { getCurrentInstance, onMounted, onUpdated } from "@vue/runtime-core";

export default {
  name: "EvokerInfo",
  setup() {
    let evokerData = reactive(
      JSON.parse(localStorage.getItem("evokerData")) || [
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
      ]
    );

    const { proxy } = getCurrentInstance();

    const sendFlag = function () {
      let flag = 0;
      evokerData.forEach((e) => {
        if (e.target) {
          flag = 1;
        }
      });
      proxy.$mybus.emit("getFlag", flag);
    };

    onMounted(() => {
      sendFlag();
    });

    onUpdated((a) => {
      localStorage.setItem("evokerData", JSON.stringify(evokerData));
      // console.log(evokerData);
      proxy.$mybus.emit("getEvokerInfo", evokerData);
      sendFlag();
    });
    const demo = function () {
      console.log(localStorage.getItem("evokerData"));
      // console.log(evokerData.value);
    };
    return { evokerData, demo };
  },
};
</script>

<style scoped>
.containe_EvokerInfor {
  width: 100%;
  background-color: skyblue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.evokerDataClass {
  margin: 10px;
  background-color: rgb(96, 201, 166);
  border-radius: 0.5em;
  width: 120px;
}
img {
  width: 100%;
}
label {
  vertical-align: middle;
}
select {
  text-align: center;
  margin-top: 0.5em;
}
input {
  vertical-align: middle;
}
.completed {
  background-color: orange;
}
/* style="background-color: yellow" */
</style>
