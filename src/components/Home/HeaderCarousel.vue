<template>
    <div class="carousel-box">
        <el-carousel :interval="4000" height="660px" :autoplay="true">
            <el-carousel-item v-for="item in showData" :key="item">
                <div class="carousel-card">
                    <img :src="`http://game-a.granbluefantasy.jp/assets/img/sp/gacha/header/${item.imgSrc}.png`"
                        class="image" />
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import gachaInfo from '../../assets/gachaData/gachaInfo.json'


const showData = ref([])
for (const img of gachaInfo.header_images) {
    showData.value.push({ imgSrc: img })
}
</script>

<style lang="less" scoped>
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