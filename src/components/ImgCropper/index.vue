<template>
  <div class="cropper-box">
    <div
      class="cropper"
      :style="{
        width: cropperOption.cropWidth + 100 + 'px',
        height: cropperOption.cropHeight + 100 + 'px',
      }"
    >
      <VueCropper
        ref="cropper"
        :img="option.img"
        :outputSize="option.size"
        :outputType="option.outputType"
        :auto-crop="option.autoCrop"
        :autoCropWidth="option.autoCropWidth"
        :autoCropHeight="option.autoCropHeight"
        :fixedNumber="option.fixedNumber"
        fixed
        fixedBox
      />
    </div>
    <div class="footer-btn">
      <el-button type="primary" @click="submit">确认 </el-button>
    </div>
  </div>
</template>

<script setup>
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'

const props = defineProps({
  cropperOption: Object,
})
const cropper = ref(null)

onMounted(() => {
  option.img = props.cropperOption.url
})
const emits = defineEmits(['cropperCb'])
const option = reactive({
  img: '',
  size: 1,
  outputType: 'png',
  autoCrop: true,
  autoCropWidth: props.cropperOption.cropWidth,
  autoCropHeight: props.cropperOption.cropHeight,
  fixedNumber: [props.cropperOption.cropWidth, props.cropperOption.cropHeight],
})

const submit = function () {
  cropper.value.getCropData((data) => {
    emits('cropperCb', data, props.cropperOption.name)
  })
}
</script>

<style lang="scss" scoped>
.cropper-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:nth-child(2) {
    margin-top: 20px;
  }
}
</style>
