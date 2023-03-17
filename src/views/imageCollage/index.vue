<template>
  <div class="app-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="配置" name="first"><Build /></el-tab-pane>
      <el-tab-pane label="素材1" name="second"><Material1 /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import Build from './components/Build.vue'
import Material1 from './components/Material1.vue'

const activeName = ref('first')
</script>
