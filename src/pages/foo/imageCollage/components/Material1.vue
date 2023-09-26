<script setup lang="ts">
import html2canvas from 'html2canvas'
import type { UploadFile, UploadInstance } from 'element-plus'

const divEl = ref<HTMLElement>()
const uploadRef = ref<UploadInstance>()
const cropperOption = reactive<any>({})
const defaultUploader = [
  {
    name: 'weapon',
    label: '武器盘',
    cropWidth: 250,
    cropHeight: 270,
    imgData: '',
  },
  {
    name: 'summon',
    label: '召唤',
    cropWidth: 250,
    cropHeight: 85,
    imgData: '',
  },
  {
    name: 'subSummon',
    label: 'sub召唤',
    cropWidth: 250,
    cropHeight: 65,
    imgData: '',
  },
]
const state = reactive({
  dialog: {
    width: 200,
    visible: false,
    type: '',
  },
  uploaderConfig: useStorage('uploaderConfig_Material1', defaultUploader),
  formData: {} as any,
})

const { uploaderConfig, dialog, formData } = toRefs(state)

function cropperImg(uploadFile: UploadFile, item: any) {
  if (uploadFile.raw) {
    cropperOption.url = URL.createObjectURL(uploadFile.raw)
    cropperOption.cropHeight = item.cropHeight
    cropperOption.cropWidth = item.cropWidth
    cropperOption.name = item.name
    dialog.value.visible = true
    dialog.value.width = item.cropWidth + 100
    dialog.value.type = 'cropper'
  }
}

function cropperCb(data: any, name: string) {
  dialog.value.visible = false
  uploaderConfig.value.find(item => item.name === name)!.imgData = data
}
function handleEdit() {
  dialog.value.visible = true
  dialog.value.width = 300
  dialog.value.type = 'edit'
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

onMounted(() => {
  uploaderConfig.value.forEach((item) => {
    item.imgData = ''
  })
})
</script>

<template>
  <div m-1 fc flex-wrap>
    <el-upload
      v-for="item, idx in uploaderConfig" :key="idx"
      ref="uploadRef"
      m-1
      accept="image/*"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="(uploadFile) => cropperImg(uploadFile, item)"
    >
      <template #trigger>
        <el-button>{{ item.label }}</el-button>
      </template>
    </el-upload>

    <el-button m-1 type="primary" @click="handleCompose">
      生成
    </el-button>
    <el-button m-1 type="info" @click="handleEdit">
      自定义尺寸
    </el-button>
  </div>

  <div
    ref="divEl"
    :style="{
      width: `${uploaderConfig[0].cropWidth}px`,
      height:
        `${uploaderConfig[0].cropHeight
          + uploaderConfig[1].cropHeight
          + uploaderConfig[2].cropHeight
        }px`,
    }"

    m-auto flex flex-col bg-slate
  >
    <div
      v-for="item, idx in uploaderConfig" :key="idx"
      :style="{
        width: `${item.cropWidth}px`,
        height: `${item.cropHeight}px`,
      }"

      fc hover:bg-slate-600
    >
      <img v-if="item.imgData" :src="item.imgData">
      <div v-else>
        {{ item.label }}
      </div>
    </div>
  </div>

  <el-dialog
    v-model="dialog.visible"
    :width="dialog.width"
    top="5vh"
    destroy-on-close
  >
    <el-form
      v-if="dialog.type === 'edit'"
      :model="formData"
      label-width="50px"
    >
      <div v-for="item, idx in uploaderConfig" :key="idx">
        <el-form-item>
          <span ml-18>{{ item.label }}</span>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="宽">
              <el-input v-model.number="item.cropWidth" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="高">
              <el-input v-model.number="item.cropHeight" />
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <el-form-item>
        <el-button type="primary" @click="uploaderConfig = defaultUploader">
          重置
        </el-button>
      </el-form-item>
    </el-form>
    <ImgCropper
      v-if="dialog.type === 'cropper'"
      :cropper-option="cropperOption"
      @cropper-cb="cropperCb"
    />
  </el-dialog>
</template>
