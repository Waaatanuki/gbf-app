<template>
  <div class="carousel-box">
    <el-carousel :interval="4000" height="660px" :autoplay="true">
      <el-carousel-item v-for="src in imgSrc">
        <div class="carousel-card">
          <img :src="src" class="image" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import gachaInfo from '@/assets/data/gachaData/gachaInfo.json'

const imgSrc = ref([] as string[])
for (const img of gachaInfo.header_images) {
  imgSrc.value.push(
    new URL(`/src/assets/images/homepage/carousel/${img}.png`, import.meta.url)
      .href
  )
}
</script>

<style lang="scss" scoped>
.demonstration {
  color: var(--el-text-color-secondary);
  text-align: center;
}

.carousel-box {
  width: 500px;
  height: 660px;
  margin: 0 10px;

  .carousel-card {
    .image {
      width: 100%;
      display: block;
    }
  }
}
</style>
