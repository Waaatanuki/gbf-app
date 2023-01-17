<template>
  <el-button type="danger" :disabled="typeof analyser == 'object'" @click="init"
    >帕拉戴斯罗斯特</el-button
  >
  <canvas ref="canvas" :width="WIDTH" :height="HEIGHT"></canvas>
  <audio ref="audio1" controls></audio>
  <el-upload
    ref="upload"
    :limit="1"
    :on-exceed="handleExceed"
    :on-change="handleChange"
    :show-file-list="false"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button type="primary">选择本地音乐</el-button>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
const canvas = ref()
const audio1 = ref()
const ctx = computed(() => canvas.value.getContext('2d'))
const WIDTH = 350
const HEIGHT = 350
const upload = ref()
const onPlay = ref(false)
let analyser = ref()
let baseColor = ref()
let bufferLength: any
let dataArray: any

function init() {
  const audioCtx = new AudioContext()
  const audioSource = audioCtx.createMediaElementSource(audio1.value)
  analyser.value = audioCtx.createAnalyser()
  audioSource.connect(analyser.value)
  analyser.value.connect(audioCtx.destination)
  analyser.value.fftSize = 2048
  bufferLength = analyser.value.frequencyBinCount
  dataArray = new Uint8Array(bufferLength)

  audio1.value.addEventListener('pause', function () {
    onPlay.value = false
  })
  audio1.value.addEventListener('play', function () {
    onPlay.value = true
    animation()
  })
  handleChange()
}

function handleChange(uploadFile?: any) {
  if (!analyser.value) init()
  audio1.value.src = uploadFile
    ? URL.createObjectURL(uploadFile.raw)
    : new URL('/src/assets/music/ParadiseLost.mp3', import.meta.url)
  baseColor.value = Math.random() * 360
  audio1.value.load()
  nextTick(() => audio1.value.play())
}

function handleExceed(files: any) {
  upload.value.clearFiles()
  const file = files[0]
  upload.value.handleStart(file)
}

function animation() {
  if (onPlay.value) {
    ctx.value.clearRect(0, 0, WIDTH, HEIGHT)
    analyser.value.getByteFrequencyData(dataArray)
    drawVisualiser(bufferLength, dataArray)
    requestAnimationFrame(animation)
  }
}

function drawVisualiser(bufferLength: any, dataArray: any) {
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = dataArray[i] * 1.5
    ctx.value.save()
    ctx.value.translate(WIDTH / 2, HEIGHT / 2)
    ctx.value.rotate(i * 4.184)
    const hue = baseColor.value + i * 0.05
    ctx.value.fillStyle = `hsl(${hue},100%,50%)`
    ctx.value.beginPath()
    ctx.value.arc(0, barHeight / 4, barHeight / 4, 0, Math.PI / 4)
    ctx.value.fill()
    ctx.value.stroke()
    ctx.value.restore()
  }
}
</script>

<style lang="scss" scoped>
canvas {
  // border: 1px solid black;
  margin: 10px;
  filter: blur(1px) contrast(2);
}

audio {
  margin: 10px;
}
</style>
