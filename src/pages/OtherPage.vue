<template>
  <div class="otherpage">
    <div><CritCalc /></div>
    <div><GachaCalc /><TokenCalc /></div>
  </div>
</template>

<script>
import CritCalc from "../components/CritCalc.vue";
import GachaCalc from "../components/GachaCalc.vue";
import TokenCalc from "../components/TokenCalc.vue";
export default {
  name: "OtherPage",
  components: { CritCalc, GachaCalc, TokenCalc },
};
</script>

<style scoped>
.otherpage {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
