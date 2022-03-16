<template>
  <div class="canvasItem">
    <canvas :id="chartInfo.id"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted, onUpdated } from "vue";
import { getKosenjouData, formatKosenjouData } from "../assets/tools";

export default {
  name: "KosenjouChart",
  props: ["chartInfo"],
  setup(props) {
    let chart;
    const individualLineRank = {
      2000: "英雄线",
      80000: "一档线",
      140000: "二档线",
      180000: "三档线",
    };
    onMounted(() => {
      const ctx = document.getElementById(props.chartInfo.id);
      getKosenjouData(
        props.chartInfo.method[0],
        props.chartInfo.params[0],
        function (lineResult) {
          getKosenjouData(
            props.chartInfo.method[1],
            props.chartInfo.params[1],
            function (userResult) {
              lineResult.data = formatKosenjouData(lineResult, userResult);
              // console.log(lineResult);
              // console.log(userResult);
              chart = new Chart(ctx, {
                type: props.chartInfo.chartType,
                data: {
                  labels: userResult.labels,
                  datasets: [
                    {
                      label: individualLineRank[props.chartInfo.params[0].rank],
                      data: lineResult.data,
                      borderColor: "red",
                      borderWidth: 2,
                      pointRadius: 2,
                    },
                    {
                      label: props.chartInfo.params[1].userid,
                      data: userResult.data,
                      borderColor: "blue",
                      borderWidth: 2,
                      pointRadius: 2,
                    },
                  ],
                },
                options: {
                  plugins: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  },
                },
              });
            }
          );
        }
      );
    });

    onUpdated(() => {
      console.log(props);
      getKosenjouData(
        props.chartInfo.method[0],
        {
          rank: props.chartInfo.individualLine,
        },
        function (result) {
          chart.data.labels = result.labels;
          chart.data.datasets[0].data = result.data;
          chart.data.datasets[0].label =
            individualLineRank[props.chartInfo.individualLine];
          chart.update();
        }
      );
    });

    return { chart };
  },
};
</script>

<style>
</style>