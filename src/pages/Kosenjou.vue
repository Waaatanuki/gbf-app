<template>
  <div class="kosenjou">
    <template v-for="(value, key, index) in monitorInfo" :key="index">
      <div class="title">
        <img
          :src="`./img/icon/expand_${value.isShow ? 'down' : 'right'}.png`"
          @click="value.isShow = !value.isShow"
        />
        {{ key }}
      </div>
      <div class="content" v-show="value.isShow">
        <div class="monitorInfo" v-if="key == '个排及团排监控'">
          <div class="monitorItem">
            <div class="inputInfo">
              <label
                ><select v-model="value.individualLine">
                  <option disabled value="undefined">个排选择</option>
                  <option value="0">英雄线</option>
                  <option value="1">一档线</option>
                  <option value="2">二档线</option>
                  <option value="3">三档线</option>
                </select>
                <input placeholder="玩家ID" />
              </label>
            </div>
            <div class="chart">
              <KosenjouChart
                :chartInfo="{ id: 'individualLineChart', chartType: 'line' }"
              ></KosenjouChart>
            </div>
          </div>
          <div class="monitorItem">
            <div class="inputInfo">
              <label
                ><select v-model="value.teamLine">
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
              <KosenjouChart
                :chartInfo="{ id: 'teamLineChart', chartType: 'line' }"
              ></KosenjouChart>
            </div>
          </div>
        </div>
        <div class="monitorInfo" v-if="key == '对战情况监控'">
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
        <div class="monitorInfo" v-if="key == '个人及骑空团查询'">
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
    </template>
  </div>
</template>

<script>
import { reactive } from "vue";
import KosenjouChart from "../components/KosenjouChart.vue";
import { getKosenjouData } from "../assets/tools";
export default {
  name: "Kosenjou",
  components: {
    KosenjouChart,
  },
  setup() {
    const monitorInfo = reactive({
      个排及团排监控: { isShow: true, individualLine: "1", teamLine: "1" },
      对战情况监控: { isShow: true },
      个人及骑空团查询: { isShow: true },
    });
    console.log(getKosenjouData());
    const demo = function () {
      console.log(monitorInfo);
    };
    return { monitorInfo };
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