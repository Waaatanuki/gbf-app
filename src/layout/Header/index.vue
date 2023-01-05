<template>
  <el-menu class="menu" mode="horizontal" router :default-active="currentItem">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/evoker">贤者素材</el-menu-item>
    <el-menu-item index="/guildwars">团战规划</el-menu-item>
    <el-menu-item index="/goldbrick">猎金统计</el-menu-item>
    <el-sub-menu index="2">
      <template #title>计算器</template>
      <el-menu-item index="/critCalc">暴击计算器</el-menu-item>
      <el-menu-item index="/gachaCalc">攒井计算器</el-menu-item>
      <el-menu-item index="/tokenCalc">战货计算器</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/tools">NGA工具</el-menu-item>
    <el-menu-item index="/playground">实验广场</el-menu-item>
    <!-- <el-menu-item index="/evokerDataMaker">贤者素材编辑</el-menu-item> -->
  </el-menu>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import router from '@/router'

const currentItem = ref()
watchEffect(() => {
  currentItem.value = '/' + router.currentRoute.value.path.split('/')[1]
})
</script>

<style lang="scss" scoped>
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
