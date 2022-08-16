<template>
    <audio ref='audio1' controls></audio>
    <canvas ref="canvas" :width="WIDTH" :height="HEIGHT"></canvas>
    <div>
        <!-- <el-button @click="start">开始</el-button>
        <el-button @click="stop">停止</el-button>
        <el-button @click="generation">分析</el-button> -->
    </div>
    <input type="file" ref="file" accept="audio/*">
</template>

<script setup>
import { onMounted, ref, computed, reactive } from 'vue'
const canvas = ref()
const file = ref()
const audio1 = ref()
const ctx = computed(() => canvas.value.getContext('2d'))
const WIDTH = 500
const HEIGHT = 500
const startLine = reactive({
    x: WIDTH / 2, y: HEIGHT, length: 20, angle: -Math.PI / 2
})

onMounted(() => {
    file.value.addEventListener('change', function () {
        const audioCtx = new AudioContext();
        const files = this.files
        audio1.value.src = URL.createObjectURL(files[0])
        audio1.value.load()
        audio1.value.play()

        const audioSource = audioCtx.createMediaElementSource(audio1.value)
        const analyser = audioCtx.createAnalyser()
        audioSource.connect(analyser)
        analyser.connect(audioCtx.destination)
        analyser.fftSize = 32;
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)


        let x

        function animation() {
            x = 0
            // ctx.value.clearRect(0, 0, WIDTH, HEIGHT)
            analyser.getByteFrequencyData(dataArray)
            drawVisualiser(bufferLength, dataArray, startLine)
            requestAnimationFrame(animation)
        }
        animation()
    })
})

function drawVisualiser(bufferLength, dataArray, startLine) {
    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i]
        drawLine(startLine)
    }
}

function drawLine(line) {
    const endPoint = getEndPoint(line)
    lineTo({ x: line.x, y: line.y }, endPoint)
}

function lineTo(p1, p2) {
    // ctx.value.strokeStyle = 'rgba(0,0,0,0.5)'
    ctx.value.beginPath();
    ctx.value.moveTo(p1.x, p1.y);
    ctx.value.lineTo(p2.x, p2.y);
    ctx.value.stroke();
}

function getEndPoint(line) {
    return {
        x: line.x + line.length * Math.cos(line.angle),
        y: line.y + line.length * Math.sin(line.angle),
    }
}
</script>

<style lang="less" scoped>
canvas {
    border: 1px solid black;
    margin: 10px;
}
</style>

