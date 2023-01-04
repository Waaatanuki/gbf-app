<template>
  <div class="container">
    <el-row justify="space-between">
      <el-col :span="25" v-for="k in evokerInfo" :key="k.no">
        <el-card class="item-card" :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="k.img" class="image" />
          <div style="padding: 10px 10px 0px 10px" class="item-select">
            <select v-model="k.tarotLevel" :class="{ completed: k.tarotLevel == 7 }">
              <option disabled value="undefined">塔罗牌进度</option>
              <option value="0">未入手</option>
              <option value="1">塔罗牌0凸</option>
              <option value="2">塔罗牌1凸</option>
              <option value="3">塔罗牌2凸</option>
              <option value="4">塔罗牌3凸</option>
              <option value="5">塔罗牌SSR化</option>
              <option value="6">塔罗牌4凸</option>
              <option value="7">塔罗牌5凸</option>
            </select>
            <div style="margin-bottom: 2px">
              <el-checkbox v-model="k.getCard" label="交换贤者卡牌" size="small" />
            </div>
            <select v-model="k.evokerLevel" :class="{ completed: k.evokerLevel == 4 }">
              <option disabled value="undefined">贤者进度</option>
              <option value="0">贤者0凸</option>
              <option value="1">贤者1凸</option>
              <option value="2">贤者2凸</option>
              <option value="3">贤者3凸</option>
              <option value="4">贤者4凸</option>
            </select>
            <select v-model="k.weaponLevel" :class="{ completed: k.weaponLevel == 6 }">
              <option disabled value="undefined">贤武进度</option>
              <option value="0">未入手</option>
              <option value="1">贤武0凸</option>
              <option value="2">贤武1凸</option>
              <option value="3">贤武2凸</option>
              <option value="4">贤武3凸</option>
              <option value="5">贤武4凸</option>
              <option value="6">贤武5凸</option>
            </select>
            <select v-model="k.domainLevel" :class="{ completed: k.domainLevel == 4 }">
              <option disabled value="undefined">领域进度</option>
              <option value="0">未解放</option>
              <option value="1">解放一格</option>
              <option value="2">解放两格</option>
              <option value="3">解放三格</option>
              <option value="4">全部解放</option>
            </select>
            <div style="margin-bottom: 2px">
              <el-checkbox v-model="k.target" label="目标" size="small" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
defineProps(['evokerInfo'])
</script>

<style lang="less" scoped>
.el-col-25 {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.item-card {
  width: 120px;
}

.item-select {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  select {
    margin-bottom: 2px;
  }
}

.image {
  width: 100%;
  display: block;
}

.container {
  padding-top: 10px;
}

.completed {
  background-color: orange;
}
</style>
