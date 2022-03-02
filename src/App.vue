<template>
  <NavigationBar />
  <!-- <EvokerPage /> -->
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  background-color: rgb(25, 85, 110);
  margin: 0;
}
</style>
