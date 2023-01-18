<template>
  <el-scrollbar>
    <div class="showBox">
      <div class="item" v-for="item in result" :key="item.id">
        <el-tooltip :content="`总需${item.total}`" placement="top">
          <img style="width: 100%" :src="`./images/item/${item.id}.jpg`" />
        </el-tooltip>

        <label class="itemNum">{{ item.need }}</label>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
defineProps(['result'])
</script>

<style lang="scss" scoped>
.showBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50px;
  }
}
</style>
