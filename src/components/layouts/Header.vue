<template>
  <el-menu class="menu" mode="horizontal" router :default-active="currentItem">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/evokerpage">贤者素材</el-menu-item>
    <!-- <el-menu-item index="/guildwarsmonitor" disabled>团战监控(开发中)</el-menu-item> -->
    <el-menu-item index="/guildwarsplan">团战规划</el-menu-item>
    <el-menu-item index="/hihiirosuki">金金</el-menu-item>
    <el-sub-menu index="2">
      <template #title>计算器</template>
      <el-menu-item index="/critcalc">暴击计算器</el-menu-item>
      <el-menu-item index="/gachacalc">攒井计算器</el-menu-item>
      <el-menu-item index="/tokencalc">战货计算器</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/ngatools">NGA工具</el-menu-item>
    <el-menu-item index="/playground">实验广场</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import router from "../../router";

const currentItem = ref()
watchEffect(() => {
  currentItem.value = '/' + router.currentRoute.value.path.split('/')[1]
})

</script>

<style lang="less" scoped>
.menu {
  border-radius: 10px;

  // .el-menu-item:last-child {
  //   margin-left: auto;
  // }
}

.main {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>