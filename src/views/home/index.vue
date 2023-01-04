<template>
  <el-main>
    <Schedule />
    <HeaderCarousel />
    <OfficialNews />
  </el-main>

  <el-footer>
    <Footer></Footer>
  </el-footer>

  <div class="bg"></div>
</template>

<script setup lang="ts">
import HeaderCarousel from './components/HeaderCarousel.vue'
import Schedule from './components/Schedule.vue'
import OfficialNews from './components/OfficialNews.vue'
import Footer from '@/layout/Footer/index.vue'
</script>

<style lang="scss" scoped>
.el-main {
  display: flex;
  justify-content: center;
  padding-top: 0px;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(@/assets/images/bg/home_bg.png) no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
