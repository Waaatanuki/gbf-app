<template>
    <canvas :id="id"></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { onMounted, onUpdated } from "vue";

const props = defineProps(['id', 'title', 'labels', 'data'])
let templateChart

onMounted(() => {
    const ctx = document.getElementById(props.id);
    templateChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels:
                props.labels,
            datasets: [
                {
                    data: props.data,
                    backgroundColor: "#409EFF",
                    barThickness: 10,
                    datalabels: {
                        anchor: "end",
                        align: "top",
                        color: "gray",
                    },
                },
            ],
        },
        plugins: [ChartDataLabels],
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: props.title,
                    font: {
                        size: 20,
                    },
                    padding: {
                        top: 20,
                        bottom: 20,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        },
    });

})

onUpdated(() => {
    templateChart.data.labels = props.labels;
    templateChart.data.datasets[0].data = props.data;
    templateChart.update();
})

</script>

<style lang="less" scoped>
</style>