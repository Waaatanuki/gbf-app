<template>
    <el-scrollbar>
        <div class="showBox">
            <div class="item" v-for="item in result" :key="item.id">
                <el-tooltip :content="`总需${item.total}`" placement="top">
                    <img style="width: 100%" :src="`./img/item/${item.id}.jpg`" />
                </el-tooltip>

                <label class="itemNum">{{ item.need }}</label>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup>
defineProps(["result"])
</script>

<style lang="less" scoped>
.showBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 50px;
    }
}
</style>