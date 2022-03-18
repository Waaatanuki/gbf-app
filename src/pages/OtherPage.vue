<template>
  <div class="otherpage"><CritCalc /> <GachaCalc /><TokenCalc /></div>
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
  justify-content: center;
  flex-wrap: wrap;
}
</style>
