<template><EvokerPage /></template>

<script>
import EvokerPage from "./components/EvokerPage.vue";

export default {
  name: "App",
  components: {
    EvokerPage,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  background-color: rgb(25, 86, 110);
  /* margin: -20px -8px auto; */
}
.container {
  display: flex;
}
h1 {
  color: rgb(184, 175, 175);
}
.materialAbout {
  background-color: wheat;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  background-color: rgb(25, 86, 110);
}
.footer {
  margin-top: 20px;
  color: white;
}
a {
  color: white;
}
</style>
