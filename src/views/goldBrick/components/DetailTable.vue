<script setup lang="ts">
import type { MonthlyTableData } from '~/constants'

defineProps<{ data: MonthlyTableData[] }>()
</script>

<template>
  <el-table :data="data">
    <el-table-column align="center" prop="date" label="日期" />
    <el-table-column align="center" prop="total" label="总次数" />
    <el-table-column align="center" prop="blueChest" label="蓝箱次数" />
    <el-table-column align="center" prop="blueChestFFJ" label="蓝箱金" />
    <el-table-column align="center" prop="ring3" label="红戒指" />
  </el-table>
</template>
