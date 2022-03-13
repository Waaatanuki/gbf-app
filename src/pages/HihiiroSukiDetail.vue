<template>
  <div class="detailPage">
    <div>
      <h1>{{ detailConfig.RAID_NAME[raidName] }}</h1>
      <select v-model="detailConfig.range">
        <option value="month">最近30天</option>
        <option value="halfYear">最近半年</option>
        <option value="year">最近一年</option>
        <option value="total">总体</option>
      </select>
    </div>
    <div class="canvasList">
      <div class="canvasItem">
        <canvas id="countChart"></canvas>
        <canvas id="blueChestChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, onUpdated, onMounted, toRefs } from "vue";
import Chart from "chart.js/auto";
import {
  exportToJson,
  getHihiiroDetailCountData,
  getHihiiroDetailBlueChestData,
} from "../assets/tools";
import { onBeforeRouteLeave } from "vue-router";
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  name: "HihiiroSukiDetail",
  props: ["raidName"],
  setup(props) {
    const detailConfig = reactive({
      RAID_NAME: { tuyobaha: "大巴", akx: "阿卡夏", gurande: "大公" },
      raidNameList: ["tuyobaha", "akx", "gurande"],
      raidName: props.raidName,
      range: "month",
    });
    let countChart;
    let blueChestChart;
    exportToJson((err, data) => {
      if (!err) {
        detailConfig.rawData = data.GoldBrick;
        detailConfig.countData = computed(() =>
          getHihiiroDetailCountData({ ...detailConfig })
        );
        detailConfig.blueChestData = computed(() =>
          getHihiiroDetailBlueChestData({ ...detailConfig })
        );
        const ctx1 = document.getElementById("countChart");
        const ctx2 = document.getElementById("blueChestChart");
        countChart = new Chart(ctx1, {
          type: "bar",
          data: {
            labels:
              detailConfig.countData[
                detailConfig.raidNameList.indexOf(props.raidName)
              ].labels,
            datasets: [
              {
                data: detailConfig.countData[
                  detailConfig.raidNameList.indexOf(props.raidName)
                ].count,
                backgroundColor: "rgb(10, 115, 236)",
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
                text: "次数统计",
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
        blueChestChart = new Chart(ctx2, {
          type: "bar",
          data: {
            labels:
              detailConfig.blueChestData[
                detailConfig.raidNameList.indexOf(props.raidName)
              ].labels,
            datasets: [
              {
                data: detailConfig.blueChestData[
                  detailConfig.raidNameList.indexOf(props.raidName)
                ].count,
                backgroundColor: "rgb(10, 115, 236)",
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
                text: "出金蓝箱次数统计",
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
      }
    });

    onUpdated(() => {
      countChart.data.labels =
        detailConfig.countData[
          detailConfig.raidNameList.indexOf(props.raidName)
        ].labels;
      countChart.data.datasets[0].data =
        detailConfig.countData[
          detailConfig.raidNameList.indexOf(props.raidName)
        ].count;

      blueChestChart.data.labels =
        detailConfig.blueChestData[
          detailConfig.raidNameList.indexOf(props.raidName)
        ].labels;
      blueChestChart.data.datasets[0].data =
        detailConfig.blueChestData[
          detailConfig.raidNameList.indexOf(props.raidName)
        ].count;

      countChart.update();
      blueChestChart.update();
    });
    onBeforeRouteLeave((to, from, next) => {
      detailConfig.range = "month";
      next();
    });
    return { detailConfig };
  },
};
</script>

<style scoped>
.detailPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.canvasItem {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>