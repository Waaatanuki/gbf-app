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
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 800px;
}
.main {
  margin-top: 10px;
  font-weight: bold;
  width: 370px;
  font-size: 9em;
  text-align: center;
}
.footer {
  margin-bottom: 10px;
}
a {
  color: #1a2a3a;
  text-decoration: none;
}
</style>