<template>
    <div class="gacha_bg">
        <img class="list" :class="`result${index}`" v-for=" (result, index) in resultList" :key="index"
            :src="`./img/gacha/${result.type}.png`"
            :style="`transform:translate(-50%, -150%) rotateZ(${36 * (index)}deg );opacity: 0;`">
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const resultList = ref([{ type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }, { type: 'ssr' }])

function start() {

    for (let i = 0; i < resultList.value.length; i++) {
        const top = 375 - Math.cos((i * 36) * Math.PI / 180) * 100
        const left = 250 + Math.sin((i * 36) * Math.PI / 180) * 100
        document.styleSheets[0].insertRule(
            "@keyframes move" + i +
            "{" +
            "0% {top: 50%;left: 50%;}" +
            `90% {top: ${top}px;left: ${left}px;opacity: 1;}` +
            `100% {top: ${top}px;left: ${left}px;opacity: 0;}` +
            "}", document.styleSheets[0].cssRules.length
        )
        document.styleSheets[0].insertRule(".result" + i + "{" +
            `animation: move${i} 1s ${0.1 * i}s infinite;` +
            " animation-fill-mode: forwards;" +
            "}", document.styleSheets[0].cssRules.length
        )
    }
}
onMounted(() => {
    start()
})


</script>

<style lang="less" scoped>
.playground {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;

    .gacha_bg {
        position: relative;
        width: 500px;
        height: 750px;
        background: url(/img/gacha/gacha_bg.jpg) no-repeat center;
        // border: 1px solid black;
        overflow: hidden;

        .list {
            height: 130px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform-origin: bottom;

        }
    }
}
</style>