<template>
  <div class="kosenjou">
    <template v-for="(item, index) in monitorInfo" :key="index">
      <div class="title">
        <img
          :src="`./img/icon/expand_${item.isShow ? 'down' : 'right'}.png`"
          @click="item.isShow = !item.isShow"
        />
        {{ item.title }}
      </div>
      <div class="content" v-show="item.isShow">
        <div class="monitorInfo" v-if="item.title == '个排及团排监控'">
          <div class="monitorItem">
            <div class="inputInfo">
              <label
                ><select v-model="item.individualLine">
                  <option disabled value="undefined">个排选择</option>
                  <option value="2000">英雄线</option>
                  <option value="80000">一档线</option>
                  <option value="140000">二档线</option>
                  <option value="180000">三档线</option>
                </select>
                <input placeholder="玩家ID" v-model.lazy="item.userId" />
              </label>
            </div>
            <div class="chart">
              <KosenjouChart
                :chartInfo="{
                  id: 'individualLineChart',
                  chartType: 'line',
                  method: ['getUserrankChartByRank', 'getUserrankChartById'],
                  params: [
                    { teamraidid: 'teamraid060', rank: item.individualLine },
                    { teamraidid: 'teamraid060', userid: '25246588' },
                  ],
                }"
              ></KosenjouChart>
            </div>
          </div>
          <div class="monitorItem">
            <div class="inputInfo">
              <label
                ><select v-model="item.teamLine">
                  <option disabled value="undefined">团排选择</option>
                  <option value="0">300线</option>
                  <option value="1">一档线</option>
                  <option value="2">二档线</option>
                  <option value="3">三档线</option>
                </select>
                <input placeholder="骑空团ID" />
              </label>
            </div>
            <div class="chart">
              <!-- <KosenjouChart
                :chartInfo="{ id: 'teamLineChart', chartType: 'line' }"
              ></KosenjouChart> -->
            </div>
          </div>
        </div>
        <div class="monitorInfo" v-if="item.title == '对战情况监控'">
          <div class="monitorItem">
            <div class="inputInfo">
              <label>
                <input placeholder="己方团ID" />
                VS
                <input placeholder="对方团ID" />
              </label>
            </div>
            <div class="chart"></div>
          </div>
        </div>
        <div class="monitorInfo" v-if="item.title == '个人及骑空团查询'">
          <div class="monitorItem">
            <div class="inputInfo">
              <label>
                <input placeholder="玩家名" /> <input placeholder="玩家ID" />
              </label>
            </div>
            <div class="chart"></div>
          </div>
          <div class="monitorItem">
            <div class="inputInfo">
              <label>
                <input placeholder="骑空团名" />
                <input placeholder="骑空团ID" />
              </label>
            </div>
            <div class="chart"></div>
          </div>
        </div>
      </div>
      <!-- <button @click="demo">22222222</button> -->
    </template>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  computed,
  onUpdated,
  getCurrentInstance,
  watch,
  defineAsyncComponent,
} from "vue";
import KosenjouChart from "../components/KosenjouChart.vue";

export default {
  name: "Kosenjou",
  components: {
    KosenjouChart,
  },
  setup() {
    const instance = getCurrentInstance();
    const monitorInfo = reactive([
      {
        title: "个排及团排监控",
        isShow: true,
        individualLine: "80000",
        teamLine: "1",
        userId: "",
      },
      { title: "对战情况监控", isShow: true },
      { title: "个人及骑空团查询", isShow: true },
    ]);

    // watch(monitorInfo, () => {
    //   console.log("change");
    //   instance.proxy.$forceUpdate();
    // });

    const demo = function () {
      console.log(monitorInfo[0].individualLineData);
    };

    // onUpdated(() => {
    //   console.log(monitorInfo[0]);
    // });
    return { monitorInfo, demo };
  },
};
</script>

<style scoped>
.kosenjou {
  display: flex;
  flex-direction: column;
}
.title {
  margin-left: 10px;
  display: flex;
  align-self: left;
  font-size: 1.5em;
  font-weight: bold;
  height: 1.5em;
}
img {
  height: 100%;
}
.monitorInfo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
input {
  width: 80px;
}
.monitorItem {
  width: 45%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.inputInfo,
select,
input {
  margin: 5px;
}
</style>