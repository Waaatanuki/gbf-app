<template>
  <EvokerInfo msg="gbf-app" />
</template>

<script>
import EvokerInfo from "./components/EvokerInfo.vue";

export default {
  name: "App",
  components: {
    EvokerInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
