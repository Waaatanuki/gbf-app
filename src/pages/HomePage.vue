<template>
  <div class="homepage">
    <div class="main">LET'S PLAY SOME GBF</div>
    <div class="footer">
      Presented by Waaatanuki
      <a href="https://bbs.nga.cn/read.php?tid=30999435">@问题反馈</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-weight: bold;
  width: 370px;
  font-size: 9em;
  text-align: center;
}
.footer {
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate3d(-50%, -50%, 0);
  width: 300px;
}
a {
  color: #1a2a3a;
  text-decoration: none;
}
</style>