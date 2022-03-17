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
            <div class="chart">
              <KosenjouChart
                :chartInfo="{
                  data: item.data1,
                  msg: item.msg1,
                  showTable: item.showTable1,
                }"
              >
                <div class="inputInfo">
                  <label
                    ><select v-model="item['params1'][0].rank">
                      <option disabled value="undefined">个排选择</option>
                      <option value="2000">英雄线</option>
                      <option value="80000">一档线</option>
                      <option value="140000">二档线</option>
                      <option value="180000">三档线</option>
                    </select>
                    <input
                      placeholder="玩家ID"
                      v-model.lazy="item['params1'][1].userid"
                    />
                    <button @click="search(item, index, 1)">查询</button>
                  </label>
                </div>
              </KosenjouChart>
            </div>
          </div>
          <div class="monitorItem">
            <div class="chart">
              <KosenjouChart
                :chartInfo="{
                  data: item.data2,
                  msg: item.msg2,
                  showTable: item.showTable2,
                }"
                ><div class="inputInfo">
                  <label
                    ><select v-model="item['params2'][0].rank">
                      <option disabled value="undefined">团排选择</option>
                      <option value="300">300线</option>
                      <option value="2000">2000线</option>
                      <option value="5500">5500线</option>
                      <option value="9000">9000线</option>
                    </select>
                    <input
                      placeholder="骑空团ID"
                      v-model.lazy="item['params2'][1].guildid"
                    />
                    <button @click="search(item, index, 2)">查询</button>
                  </label>
                </div></KosenjouChart
              >
            </div>
          </div>
        </div>
        <div class="monitorInfo" v-if="item.title == '对战情况监控'">
          <div class="monitorItem">
            <div class="chart">
              <KosenjouChart
                :chartInfo="{
                  data: item.data,
                  msg: item.msg,
                  showTable: item.showTable,
                }"
              >
                <div class="inputInfo">
                  <label>
                    <input
                      placeholder="己方团ID"
                      v-model.lazy="item['params'][0].guildid"
                    />
                    VS
                    <input
                      placeholder="对方团ID"
                      v-model.lazy="item['params'][1].guildid"
                    />
                    <button @click="search(item, index)">查询</button>
                  </label>
                </div>
              </KosenjouChart>
            </div>
          </div>
        </div>
        <div class="monitorInfo" v-if="item.title == '个人及骑空团查询'">
          <div class="monitorItem">
            <div class="chart">
              <KosenjouChart
                :chartInfo="{
                  data: item.data1,
                  msg: item.msg1,
                  showTable: item.showTable1,
                }"
              >
                <div class="inputInfo">
                  <label
                    ><input
                      placeholder="玩家名"
                      v-model="item['params1'][0].username"
                    />
                    <input
                      placeholder="玩家ID"
                      v-model="item['params1'][1].userid"
                    />
                    <button @click="search(item, index, 1)">查询</button>
                  </label>
                </div>
              </KosenjouChart>
            </div>
          </div>
          <div class="monitorItem">
            <div class="chart">
              <KosenjouChart
                :chartInfo="{
                  data: item.data2,
                  msg: item.msg2,
                  showTable: item.showTable2,
                }"
              >
                <div class="inputInfo">
                  <label>
                    <input
                      placeholder="骑空团名"
                      v-model="item['params2'][0].guildname"
                    />
                    <input
                      placeholder="骑空团ID"
                      v-model="item['params2'][1].guildid"
                    />
                    <button @click="search(item, index, 2)">查询</button>
                  </label>
                </div>
              </KosenjouChart>
            </div>
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
import {
  getKosenjouData,
  formatKosenjouData1,
  formatKosenjouData2,
  formatKosenjouData3,
} from "../assets/tools";
export default {
  name: "Kosenjou",
  components: {
    KosenjouChart,
  },
  setup() {
    const monitorInfo = reactive([
      {
        title: "个排及团排监控",
        isShow: true,
        method1: ["getUserrankChartByRank", "getUserrankChartById"],
        params1: [
          { teamraidid: "teamraid060", rank: "80000" },
          { teamraidid: "teamraid060", userid: "" },
        ],
        method2: ["getGuildrankChartByRank", "getGuildrankChartById"],
        params2: [
          { teamraidid: "teamraid060", rank: "2000" },
          { teamraidid: "teamraid060", guildid: "" },
        ],
      },
      {
        title: "对战情况监控",
        isShow: true,
        method: ["getGuildrankChartById", "getGuildrankChartById"],
        params: [
          { teamraidid: "teamraid060", guildid: "" },
          { teamraidid: "teamraid060", guildid: "" },
        ],
      },
      {
        title: "个人及骑空团查询",
        isShow: true,
        method1: ["getUserrank", "getUserDayPoint"],
        params1: [
          { userid: "", username: "" },
          { teamraidid: "teamraid060", userid: "" },
        ],
        method2: ["getGuildrank", "getGuildDayPoint"],
        params2: [
          { teamraidid: "teamraid060", guildid: "", guildname: "" },
          { teamraidid: "teamraid060", guildid: "" },
        ],
      },
    ]);

    const search = function (item, index, no = "") {
      monitorInfo[index]["showTable" + no] = 1;
      let temp;
      getKosenjouData(
        item["method" + no][0],
        item["params" + no][0],
        function (firstData) {
          getKosenjouData(
            item["method" + no][1],
            item["params" + no][1],
            function (secondData) {
              temp =
                item.title == "个排及团排监控"
                  ? formatKosenjouData1(firstData, secondData)
                  : item.title == "对战情况监控"
                  ? formatKosenjouData2(firstData, secondData)
                  : formatKosenjouData3(firstData, secondData);

              monitorInfo[index]["data" + no] = temp.result;
              monitorInfo[index]["msg" + no] = temp.msg;
              monitorInfo[index]["showTable" + no] = 2;
            }
          );
        }
      );
    };

    // onUpdated(() => {
    //   console.log(monitorInfo[0]);
    // });
    return { monitorInfo, search };
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
  width: 420px;
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.inputInfo,
select,
input {
  margin: 5px;
}
button {
  margin-left: 10px;
}
</style>