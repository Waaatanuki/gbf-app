<template>
  <div class="kosenjou">
    <div class="lineMonitor">
      <div class="lineMonitor title">
        <img
          src="../../public/img/icon/expand_down.png"
          @click="changeExpandIcon"
          v-if="showLineMonitor"
        />
        <img
          src="../../public/img/icon/expand_right.png"
          @click="changeExpandIcon"
          v-else
        />
        个线及团线监控
      </div>
      <div class="lineMonitor chart">
        <div class="unitLine"></div>
        <div class="individualLine"></div>
      </div>
    </div>
    <div class="battleMonitor">
      <div class="battleMonitor title">对战情况监控</div>
      <div class="battleMonitor chart">
        <div class="unitLine"></div>
        <div class="individualLine"></div>
      </div>
    </div>
    <div class="battleMonitor">
      <div class="battleMonitor title">个人及骑空团查询</div>
      <div class="battleMonitor chart">
        <div class="unitLine"></div>
        <div class="individualLine"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Kosenjou",
  setup() {
    const showLineMonitor = ref(true);
    const changeExpandIcon = function (e) {
      console.log(e);
    };
    return { showLineMonitor, changeExpandIcon };
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
  background-color: rgba(128, 128, 128, 0.5);
}
img {
  height: 100%;
}
</style>