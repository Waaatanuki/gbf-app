<template>
  <div class="flex flex-col">
    <el-link
      :underline="false"
      href="https://bbs.nga.cn/read.php?tid=30999435"
      target="_blank"
    >
      <template #icon>
        <svg-icon icon-class="bug" size="15px" class="m-2" />
      </template>
    </el-link>

    <el-link
      :underline="false"
      href="https://github.com/Waaatanuki/gbf-app"
      target="_blank"
    >
      <template #icon>
        <svg-icon icon-class="github" size="15px" class="m-2" />
      </template>
    </el-link>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>
