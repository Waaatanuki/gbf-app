<script setup>
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'

const props = defineProps({
  cropperOption: Object,
})
const emits = defineEmits(['cropperCb'])

const cropper = ref(null)

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
onMounted(() => {
  option.img = props.cropperOption.url
})
</script>

<template>
  <div class="cropper-box">
    <div
      class="cropper"
      :style="{
        width: `${cropperOption.cropWidth + 100}px`,
        height: `${cropperOption.cropHeight + 100}px`,
      }"
    >
      <VueCropper
        ref="cropper"
        :img="option.img"
        :output-size="option.size"
        :output-type="option.outputType"
        :auto-crop="option.autoCrop"
        :auto-crop-width="option.autoCropWidth"
        :auto-crop-height="option.autoCropHeight"
        :fixed-number="option.fixedNumber"
        fixed
        fixed-box
      />
    </div>
    <div class="footer-btn">
      <el-button type="primary" @click="submit">
        确认
      </el-button>
    </div>
  </div>
</template>

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
