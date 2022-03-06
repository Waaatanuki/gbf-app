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
html {
  height: 100%;
}
body {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  margin: 0;
  background: #373b44; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #4286f4,
    #373b44
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #4286f4,
    #373b44
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
