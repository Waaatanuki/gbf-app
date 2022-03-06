<template>
  <div class="container"><CritCalc /></div>
</template>

<script>
import CritCalc from "../components/CritCalc.vue";

export default {
  name: "OtherPage",
  components: { CritCalc },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
