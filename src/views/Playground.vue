<template>
    <div class="playground">
        <div>
            <div class="circle">
                <img class="list" :class="`result${index - 1}`" v-for=" index in 10" :key="index"
                    src="/img/gacha/ssr.png"
                    :style="`transform:translate(-50%, -150%) rotateZ(${36 * (index - 1)}deg );opacity: 0;`">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed, reactive } from 'vue'
const result = []

for (let i = 0; i < 10; i++) {
    const top = 375 - Math.cos((i * 36) * Math.PI / 180) * 100
    const left = 375 + Math.sin((i * 36) * Math.PI / 180) * 100
    result.push({ top: top + 'px', left: left + 'px' })

    document.styleSheets[0].insertRule(
        "@keyframes move" + i +
        "{" +
        "from {top: 50%;left: 50%;}" +
        `to {top: ${top}px;left: ${left}px;opacity: 1;}` +
        "}"
    )
    document.styleSheets[0].insertRule(".result" + i + "{" +
        `animation: move${i} 2s ${0.5 * i}s;` +
        " animation-fill-mode: forwards;" +
        "}"
    )


}

</script>

<style lang="less" scoped>
.playground {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;


    .circle {
        position: relative;
        width: 750px;
        height: 750px;
        background: url(/img/gacha/gacha_bg.jpg) no-repeat center;
        // border: 1px solid black;

        .list {
            position: absolute;
            left: 50%;
            top: 50%;
            transform-origin: bottom;
        }
    }
}
</style>