<template>
  <h1>hello{{ raid }}</h1>
  <button @click="raid = !raid">1111</button>
</template>

<script>
import {
  computed,
  reactive,
  ref,
  onUpdated,
  onMounted,
  onActivated,
  onBeforeUnmount,
} from "vue";
import router from "../router";
import { useRoute } from "vue-router";
export default {
  name: "HihiiroSukiDetail",
  props: ["raid"],
  setup() {
    const demo = function () {};

    onBeforeUnmount(() => {
      console.log("son due");
      router.replace({
        name: "HihiiroSuki",
      });
    });
  },
};
</script>

<style scoped>
</style>