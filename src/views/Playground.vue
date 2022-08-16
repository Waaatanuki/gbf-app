<template>
    <div ref="playground" class="playground">
        <DrawWithMusic />
    </div>
</template>

<script setup>
import DrawWithMusic from '../components/Animation/DrawWithMusic.vue';

</script>

<style lang="less" scoped>
.playground {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>