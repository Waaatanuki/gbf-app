<template>
  <h1>贤者相关素材计算器</h1>
  <EvokerInfo />
  <div class="materialAbout">
    <MaterialInfo />
    <MaterialCompute />
  </div>
</template>

<script>
import EvokerInfo from "./components/EvokerInfo.vue";
import MaterialInfo from "./components/MaterialInfo.vue";
import MaterialCompute from "./components/MaterialCompute.vue";

export default {
  name: "App",
  components: {
    EvokerInfo,
    MaterialInfo,
    MaterialCompute,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(25, 86, 110);
  margin-top: 60px;
}
h1 {
  color: rgb(184, 175, 175);
}
.materialAbout {
  background-color: wheat;
  display: flex;
}
</style>
