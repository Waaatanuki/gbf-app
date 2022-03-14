<template>
  <div class="homepage"></div>
  <a class="footer" href="https://bbs.nga.cn/read.php?tid=30999435">问题反馈</a>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.homepage {
  position: fixed;
  top: 1;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../public/img/raid/bg_static.jpg) no-repeat center center;
  background-size: cover;
}
.footer {
  font-weight: bold;
  color: white;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 1.2em;
}
</style>