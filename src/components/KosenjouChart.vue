<template>
  <slot></slot>
  <div class="tip" v-show="chartInfo.showTable == 1">加载中。。。</div>
  <div class="mainTable" v-show="chartInfo.showTable == 2">
    <label class="msg">{{ chartInfo.msg }}</label>
    <table border="1" v-for="(item, index) in chartInfo.data" :key="index">
      <tr>
        <td>{{ item[0] }}</td>
        <td>{{ item[1] }}</td>
        <td>{{ item[2] }}</td>
        <td v-show="item[3]">{{ item[3] }}</td>
        <td v-show="item[4]">{{ item[4] }}</td>
        <td v-show="item[5]">{{ item[5] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { onMounted, onUpdated, onBeforeUpdate, ref, reactive } from "vue";

export default {
  name: "KosenjouChart",
  props: ["chartInfo"],
  setup() {},
};
</script>

<style scoped>
.mainTable {
  display: flex;
  flex-direction: column;
}
table {
  border-collapse: collapse;
  margin: 1px;
}
td {
  width: 50px;
  line-height: 20px;
}
tr:hover {
  background-color: wheat;
}
.msg {
  margin-bottom: 10px;
}
</style>