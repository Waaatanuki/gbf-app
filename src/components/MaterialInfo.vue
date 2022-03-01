<template>
  <div class="itemBox">
    <div class="tips">素材界面选择上限解放可按顺序输入</div>
    <div class="itemLine" v-for="(l, index) in itemList" :key="index">
      <div class="item" v-for="(i, index) in l" :key="index" v-show="i != 0">
        <img style="width: 100%" :src="`./img/item/${i}.jpg`" /><br />
        <input
          class="itemNum"
          v-model.number.lazy="materialInfo[i]"
          onfocus="this.select()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialInfo",
  props: ["materialInfo"],
  setup() {
    const itemList = [
      [0, 0, 0, 25000, 25001],
      [25002, 25003, 25004, 25005, 25006],
      [25007, 25008, 25009, 25010, 25011],
      [25012, 25013, 25014, 25015, 25016],
      [25020, 25021, 25033, 25034, 25035],
      [25036, 25023, 25024, 25025, 25026],
      [25047, 25048, 25049, 25050, 25051],
      [25052, 25053, 25054, 25055, 25056],
      [25070, 25071, 25072, 25073, 25074],
    ];

    return { itemList };
  },
};
</script>

<style>
.itemBox {
  padding-top: 10px;
  height: 800px;
  width: 270px;
  background-color: grey;
}
.itemLine {
  padding-top: 5px;
  height: 80px;
  width: 270px;
}
.item {
  height: 50px;
  width: 50px;
  display: inline-block;
  position: relative;
  margin-right: 3;
}
.itemNum {
  width: 30px;
}
.tips {
  float: left;
  height: 50px;
  width: 140px;
  background-color: skyblue;
  padding: 3px;
  margin-top: 15px;
  margin-left: 7px;
}
</style>