<template>
  <NavigationBar />
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
html,
body {
  height: 100%;
}
body {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  margin: 0;
  background-color: #f0ebe6;
  color: #1a2a3a;
  font-size: 13.3333px;
  height: 100%;
}
</style>
