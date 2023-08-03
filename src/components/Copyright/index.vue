<script setup lang="ts">
const state = reactive({
  copyrightCompany: 'Waaatanuki',
  copyrightWebsite: 'https://bbs.nga.cn/read.php?tid=30999435',
})

const { copyrightCompany, copyrightWebsite } = toRefs(state)
</script>

<template>
  <div class="copyright">
    <el-link :href="copyrightWebsite" :underline="false" target="_blank">
      {{
        ` Powered by ${copyrightCompany}`
      }}
    </el-link>
  </div>
</template>

<style lang="scss" scoped>
.copyright {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 15px;
  color: #808695;
  font-size: 14px;
  z-index: 10;
}
</style>
