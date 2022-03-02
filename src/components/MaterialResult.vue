<template>
  <div class="container">
    <div class="subTitle" v-show="flag == 0">尚未勾选目标</div>
    <div class="subTitle" v-show="flag == 1 && Object.keys(result).length != 0">
      完成目标还需以下素材
    </div>
    <div class="subTitle" v-show="flag == 1 && Object.keys(result).length == 0">
      目标素材已收集完毕
    </div>
    <div class="showBox">
      <div class="item" v-for="(v, name) in result" :key="name">
        <img style="width: 100%" :src="`./img/item/${name}.jpg`" /><br />
        <label class="itemNum">{{ v }}</label>
      </div>
    </div>
    <div class="percentClass" v-show="flag">当前进度为:{{ percent }}%</div>
  </div>
</template>

<script>
export default {
  name: "MaterialResult",
  props: ["result", "flag", "percent"],
};
</script>

<style scoped>
.container {
  height: 100%;
  background-color: wheat;
  display: flex;
  flex-direction: column;
}
.container .subTitle {
  font-size: 30px;
}
.container .showBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.container .showBox .item {
  height: 80px;
  width: 50px;
}
.container .percentClass {
  margin-right: 5px;
  color: rgb(189, 27, 27);
  font-size: 1.5em;
  font-weight: bold;
  text-align: right;
}
</style>