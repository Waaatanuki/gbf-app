<template>
  <h1>贤者相关素材计算器v2.0</h1>
  <div class="container">
    <div><MaterialInfo /></div>

    <div class="materialAbout">
      <EvokerInfo />
      <MaterialCompute />
    </div>
  </div>
  <div class="footer">
    <span>Created by Waaatanuki</span><br />
    <a href="https://bbs.nga.cn/read.php?tid=25257642">问题反馈</a>
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
  -webkit-font-smoothing: antialiased;
  text-align: center;
  background-color: rgb(25, 86, 110);
  /* margin: -20px -8px auto; */
}
.container {
  display: flex;
}
h1 {
  color: rgb(184, 175, 175);
}
.materialAbout {
  background-color: wheat;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  background-color: rgb(25, 86, 110);
}
.footer {
  margin-top: 20px;
  color: white;
}
a {
  color: white;
}
</style>
