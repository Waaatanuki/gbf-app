<template>
    <div ref="playground" class="playground">
        <AudioVisualizers />
    </div>
</template>

<script setup>
import AudioVisualizers from '../components/Animation/AudioVisualizers.vue';

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