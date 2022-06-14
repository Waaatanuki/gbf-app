<script setup>
import Header from './components/layouts/Header.vue'
</script>

<template>
  <div id="animation_bg"></div>
  <div class="site">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>

</template>

<style lang="less" scoped>
* {
  padding: 0px;
  margin: 0px;
  --el-menu-hover-bg-color: #fff;
}

html,
body,
#app {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}

#animation_bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/img/bg/common_bg.png) no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.el-header {
  padding: 0px;
  margin-bottom: 5px
}

.el-main {
  padding: 0px;
  margin: 0px;
}
</style>
