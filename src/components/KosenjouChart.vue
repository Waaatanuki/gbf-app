<template>
  <div class="canvasItem">
    <canvas :id="chartInfo.id"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted, onUpdated } from "vue";
export default {
  name: "KosenjouChart",
  props: ["chartInfo"],
  setup(props) {
    let countChart;
    onMounted(() => {
      const ctx = document.getElementById(props.chartInfo.id);

      countChart = new Chart(ctx, {
        type: props.chartInfo.chartType,
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      });
    });

    onUpdated(() => {
      countChart.destroy();
    });
    return { countChart };
  },
};
</script>

<style>
</style>