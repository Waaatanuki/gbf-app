<template>
    <el-main>
        <suspense>
            <Schedule />
        </suspense>
        <HeaderCarousel />
        <suspense>
            <OfficialNews />
        </suspense>
    </el-main>

    <el-footer>
        <Footer></Footer>
    </el-footer>

    <div class="bg"></div>
</template>

<script setup>
import HeaderCarousel from '../components/Home/HeaderCarousel.vue'
import Schedule from '../components/Home/Schedule.vue'
import OfficialNews from '../components/Home/OfficialNews.vue'
import Footer from '../components/layouts/Footer.vue'
</script>

<style lang="less" scoped>
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
    background: url(/img/bg/home_bg.png) no-repeat center center;
    background-size: cover;
    z-index: -1;
}

.el-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>