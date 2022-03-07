<template>
  <div class="otherpage"><CritCalc /> <GachaCalc /></div>
</template>

<script>
import CritCalc from "../components/CritCalc.vue";
import GachaCalc from "../components/GachaCalc.vue";
export default {
  name: "OtherPage",
  components: { CritCalc, GachaCalc },
};
</script>

<style scoped>
.otherpage {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
