<template>
  <h1>贤者素材计算器</h1>
  <EvokerInfo />
  <MaterialInfo />
</template>

<script>
import EvokerInfo from "./components/EvokerInfo.vue";
import MaterialInfo from "./components/MaterialInfo.vue";

export default {
  name: "App",
  components: {
    EvokerInfo,
    MaterialInfo,
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
</style>
