<script setup lang="ts">
import html2canvas from 'html2canvas'
import type { UploadFile, UploadInstance } from 'element-plus'

const divEl = ref<HTMLElement>()
const uploadRef = ref<UploadInstance>()
const cropperOption = reactive<any>({})

const state = reactive({
  dialog: {
    width: '',
    visible: false,
  },
  uploaderInit: [
    {
      name: 'result',
      label: '结算',
      cropWidth: 200,
      cropHeight: 400,
      imgData: '',
    },
    {
      name: 'team',
      label: '队伍',
      cropWidth: 400,
      cropHeight: 180,
      imgData: '',
    },
    {
      name: 'weapon',
      label: '武器盘',
      cropWidth: 200,
      cropHeight: 220,
      imgData: '',
    },
    {
      name: 'summon',
      label: '召唤',
      cropWidth: 200,
      cropHeight: 220,
      imgData: '',
    },
  ],
})

const { uploaderInit, dialog } = toRefs(state)

function cropperImg(uploadFile: UploadFile, item: any) {
  if (uploadFile.raw) {
    cropperOption.url = URL.createObjectURL(uploadFile.raw)
    cropperOption.cropHeight = item.cropHeight
    cropperOption.cropWidth = item.cropWidth
    cropperOption.name = item.name
    dialog.value.visible = true
    dialog.value.width = item.cropWidth + 100
  }
}

function cropperCb(data: any, name: string) {
  dialog.value.visible = false
  uploaderInit.value.find(item => item.name === name)!.imgData = data
}

function handleCompose() {
  if (divEl.value) {
    html2canvas(divEl.value).then((canvas) => {
      const posterImg = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      const event = new MouseEvent('click')
      a.download = '配置图'
      a.href = posterImg
      a.dispatchEvent(event)
    })
  }
}
</script>

<template>
  <div fc m-2>
    <el-upload
      v-for="item, idx in uploaderInit" :key="idx"
      ref="uploadRef"
      m-2
      accept="image/*"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="(uploadFile) => cropperImg(uploadFile, item)"
    >
      <template #trigger>
        <el-button>{{ item.label }}</el-button>
      </template>
    </el-upload>

    <el-button m-2 type="primary" @click="handleCompose">
      生成
    </el-button>
  </div>

  <div
    ref="divEl"
    :style="{
      width: `${uploaderInit[0].cropWidth + uploaderInit[1].cropWidth}px`,
      height: `${uploaderInit[0].cropHeight}px`,
    }"
    bg-slate
    flex
  >
    <div
      :style="{
        width: `${uploaderInit[0].cropWidth}px`,
        height: `${uploaderInit[0].cropHeight}px`,
      }"
      bg-slate-300
      fc
    >
      <img v-if="uploaderInit[0].imgData" :src="uploaderInit[0].imgData">
      <div v-else>
        {{ uploaderInit[0].label }}
      </div>
    </div>
    <div
      :style="{
        width: `${uploaderInit[1].cropWidth}px`,
        height: `${uploaderInit[0].cropHeight}px`,
      }"
      flex-col
    >
      <div
        :style="{
          width: `${uploaderInit[1].cropWidth}px`,
          height: `${uploaderInit[1].cropHeight}px`,
        }"
        bg-slate-400
        fc
      >
        <img v-if="uploaderInit[1].imgData" :src="uploaderInit[1].imgData">
        <div v-else>
          {{ uploaderInit[1].label }}
        </div>
      </div>
      <div
        :style="{
          width: `${uploaderInit[1].cropWidth}px`,
          height: `${uploaderInit[2].cropHeight}px`,
        }"
        fc
      >
        <div
          :style="{
            width: `${uploaderInit[2].cropWidth}px`,
            height: `${uploaderInit[2].cropHeight}px`,
          }"
          bg-slate-500
          fc
        >
          <img v-if="uploaderInit[2].imgData" :src="uploaderInit[2].imgData">
          <div v-else>
            {{ uploaderInit[2].label }}
          </div>
        </div>
        <div
          :style="{
            width: `${uploaderInit[3].cropWidth}px`,
            height: `${uploaderInit[3].cropHeight}px`,
          }"
          bg-slate-600
          fc
        >
          <img v-if="uploaderInit[3].imgData" :src="uploaderInit[3].imgData">
          <div v-else>
            {{ uploaderInit[3].label }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog
    v-model="dialog.visible"
    :width="dialog.width"
    top="5vh"
    destroy-on-close
  >
    <ImgCropper :cropper-option="cropperOption" @cropper-cb="cropperCb" />
  </el-dialog>
</template>
