<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>开发中...</h3>
    <h3>{{ hi }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  setup() {
    let hi = "(<ゝω・)☆";

    return { hi };
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
