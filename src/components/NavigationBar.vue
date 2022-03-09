<template>
  <div id="nav">
    <router-link active-class="active" to="/">主页</router-link>
    <router-link active-class="active" to="/evokerpage">贤者素材</router-link>
    <router-link active-class="active" to="/hihiirosuki">金本统计</router-link>
    <router-link active-class="active" to="/otherpage">杂项</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a:hover {
  background-color: rgb(38, 140, 180);
}
#nav a {
  background-color: skyblue;
  flex-grow: 1;
  line-height: 30px;
  color: #282828;
  text-decoration: none;
  text-align: center;
  border-left: 0.5px solid grey;
  border-radius: 0px 0px 8px 8px;
}
#nav .active {
  background-color: orange;
}
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
</style>