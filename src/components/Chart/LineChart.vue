<template>
    <canvas :id="id"></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted, watch } from "vue";
import dayjs from 'dayjs';
const props = defineProps(['id', 'title', 'labels', 'data', 'datasets'])
let templateChart

onMounted(() => {
    const ctx = document.getElementById(props.id);
    templateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: props.labels.map(label => label.format('HH:mm')),
            datasets: props.datasets
        },
        options: {
            plugins: {
                title: {
                    display: true, text: dayjs().format('YYYY-MM-DD'),
                    font: {
                        size: 25
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxTicksLimit: 18,
                    },
                },
                y: {
                    ticks: {
                        callback: v => (v / 100000000) + '亿'
                    },
                }
            }
        }
    });

})

watch(props.datasets, () => {
    // templateChart.data.datasets = props.datasets;
    templateChart.update();
})


</script>

<style lang="less" scoped>
</style>