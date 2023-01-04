<!-- setup 无法设置组件名称，组件名称keepAlive必须 -->
<script lang="ts">
export default {
  name: 'Page404',
}
</script>

<script setup lang="ts"></script>

<template>
  <div class="http404-container">
    <h1>我是谁</h1>
    <h1>我从哪里来</h1>
    <h1>我要到哪去</h1>
  </div>
</template>

<style lang="scss" scoped>
.http404-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
