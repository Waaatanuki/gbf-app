<template>
  <div ref="playground" class="playground">
    <div>
      <div class="gacha_bg">
        <img
          class="list"
          :class="`result${index}`"
          v-for="(result, index) in resultList"
          :key="index"
          :src="`./images/gacha/${result.type}.png`"
          :style="`transform:translate(-50%, -150%) rotateZ(${
            36 * index
          }deg );opacity: 0;`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const playground = ref()

const props = defineProps(['resultList'])

const emits = defineEmits(['close'])
let num = ref(0)
const cssIndex = ref<number[]>([])

function start() {
  console.log(document.styleSheets[0].cssRules.length)
  for (let i = 0; i < props.resultList.length; i++) {
    const top = 375 - Math.cos((i * 36 * Math.PI) / 180) * 100
    const left = 250 + Math.sin((i * 36 * Math.PI) / 180) * 100

    const _top = 375 - Math.cos((i * 36 * Math.PI) / 180) * 500
    const _left = 250 + Math.sin((i * 36 * Math.PI) / 180) * 500
    cssIndex.value.push(document.styleSheets[0].cssRules.length)
    document.styleSheets[0].insertRule(
      '@keyframes move' +
        i +
        '{' +
        '0% {top: 50%;left: 50%;}' +
        `90% {top: ${top}px;left: ${left}px;opacity: 1;}` +
        `100% {top: ${_top}px;left: ${_left}px;opacity: 0;}` +
        '}',
      document.styleSheets[0].cssRules.length
    )
    cssIndex.value.push(document.styleSheets[0].cssRules.length)
    const speed =
      props.resultList.length > 10
        ? `animation: move${i} 0.5s ${0.1 * i}s;`
        : `animation: move${i} 2s ${0.5 * i}s;`
    document.styleSheets[0].insertRule(
      '.result' + i + '{' + speed + ' animation-fill-mode: forwards;' + '}',
      document.styleSheets[0].cssRules.length
    )
  }
}
onMounted(() => {
  playground.value.addEventListener('animationend', () => {
    num.value++
    if (num.value == props.resultList.length) {
      // console.log(document.styleSheets[0].cssRules[12]);
      // for (let i = 0; i < cssIndex.value.length; i++) {
      //     document.styleSheets[0].deleteRule(cssIndex.value[i])
      // }
      emits('close')
    }
  })
  start()
})
</script>

<style lang="scss" scoped>
.playground {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background: black;
  z-index: 99999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .gacha_bg {
    position: relative;
    width: 500px;
    height: 750px;
    background: url('/images/gacha/gacha_bg.jpg') no-repeat center;
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
