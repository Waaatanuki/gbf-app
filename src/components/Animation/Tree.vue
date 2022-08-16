<template>
    <canvas ref="canvas" :width="WIDTH" :height="HEIGHT"></canvas>
</template>

<script setup>
import { onMounted, ref, computed, reactive } from 'vue'
const canvas = ref()
const ctx = computed(() => canvas.value.getContext('2d'))
const WIDTH = 500
const HEIGHT = 500
const startLine = reactive({
    x: WIDTH / 2, y: HEIGHT, length: 20, angle: -Math.PI / 2
})
const taskFuction = ref([])

function getEndPoint(line) {
    return {
        x: line.x + line.length * Math.cos(line.angle),
        y: line.y + line.length * Math.sin(line.angle),
    }
}

function drawLine(line, depth = 0) {
    const endPoint = getEndPoint(line)
    lineTo({ x: line.x, y: line.y }, endPoint)

    if (depth < 5 || Math.random() < 0.4) {
        taskFuction.value.push(() => {
            drawLine({
                x: endPoint.x,
                y: endPoint.y,
                length: line.length + Math.random() * 10 - 5,
                angle: line.angle - 0.4 * Math.random()
            }, depth + 1)
        })
    }
    if (depth < 5 || Math.random() < 0.4) {
        taskFuction.value.push(() => {
            drawLine({
                x: endPoint.x,
                y: endPoint.y,
                length: line.length + Math.random() * 10 - 5,
                angle: line.angle + 0.4 * Math.random()
            }, depth + 1)
        })
    }
}

function lineTo(p1, p2) {
    // ctx.value.strokeStyle = 'rgba(0,0,0,0.5)'
    ctx.value.beginPath();
    ctx.value.moveTo(p1.x, p1.y);
    ctx.value.lineTo(p2.x, p2.y);
    ctx.value.stroke();
}

function init() {
    drawLine(startLine)
}

function frame() {
    const tasks = [...taskFuction.value]
    taskFuction.value.length = 0
    tasks.forEach(func => func())
    return tasks.length
}

let count = 0
let length = 1
function render() {
    requestAnimationFrame(() => {
        count++
        if (count % 3 == 0) {
            length = frame()
        }
        if (length > 0) {
            console.log(length);
            render()
        }
    })
}
render()

onMounted(() => {
    init()
})

</script>

<style lang="less" scoped>
canvas {
    border: 1px solid black
}
</style>

