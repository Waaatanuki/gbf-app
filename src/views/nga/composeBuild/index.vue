<template>
  <div class="app-container">
    <div fc m-1 flex-wrap>
      <el-upload
        m-1
        ref="uploadRef"
        accept="image/*"
        v-for="item in uploaderInit"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="(uploadFile) => cropperImg(uploadFile, item)"
      >
        <template #trigger>
          <el-button>{{ item.label }}</el-button>
        </template>
      </el-upload>

      <el-button m-1 @click="handleCompose" type="primary">生成</el-button>
      <el-button m-1 @click="handleEdit" type="info">自定义尺寸</el-button>
    </div>

    <div
      ref="divEl"
      :style="{
        width: uploaderInit[0].cropWidth + uploaderInit[1].cropWidth + 'px',
        height: uploaderInit[0].cropHeight + 'px',
      }"
      bg-slate
      flex
      m-auto
    >
      <div
        :style="{
          width: uploaderInit[0].cropWidth + 'px',
          height: uploaderInit[0].cropHeight + 'px',
        }"
        bg-slate-300
        fc
      >
        <img v-if="uploaderInit[0].imgData" :src="uploaderInit[0].imgData" />
        <div v-else>{{ uploaderInit[0].label }}</div>
      </div>
      <div
        :style="{
          width: uploaderInit[1].cropWidth + 'px',
          height: uploaderInit[0].cropHeight + 'px',
        }"
        flex-col
      >
        <div
          :style="{
            width: uploaderInit[1].cropWidth + 'px',
            height: uploaderInit[1].cropHeight + 'px',
          }"
          bg-slate-400
          fc
        >
          <img v-if="uploaderInit[1].imgData" :src="uploaderInit[1].imgData" />
          <div v-else>{{ uploaderInit[1].label }}</div>
        </div>
        <div
          :style="{
            width: uploaderInit[1].cropWidth + 'px',
            height: uploaderInit[2].cropHeight + 'px',
          }"
          fc
        >
          <div
            :style="{
              width: uploaderInit[2].cropWidth + 'px',
              height: uploaderInit[2].cropHeight + 'px',
            }"
            bg-slate-500
            fc
          >
            <img
              v-if="uploaderInit[2].imgData"
              :src="uploaderInit[2].imgData"
            />
            <div v-else>{{ uploaderInit[2].label }}</div>
          </div>
          <div
            :style="{
              width: uploaderInit[3].cropWidth + 'px',
              height: uploaderInit[3].cropHeight + 'px',
            }"
            bg-slate-600
            fc
          >
            <img
              v-if="uploaderInit[3].imgData"
              :src="uploaderInit[3].imgData"
            />
            <div v-else>{{ uploaderInit[3].label }}</div>
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
      <el-form
        :model="formData"
        label-width="50px"
        ref="formEl"
        v-if="dialog.type == 'edit'"
      >
        <template v-for="item in uploaderInit">
          <el-form-item
            ><span ml-18>{{ item.label }}</span>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="宽">
                <el-input v-model.number="item.cropWidth" /> </el-form-item
            ></el-col>
            <el-col :span="12">
              <el-form-item label="高">
                <el-input v-model.number="item.cropHeight" /> </el-form-item
            ></el-col>
          </el-row>
        </template>
        <el-form-item>
          <el-button @click="uploaderInit = defaultUploader" type="primary"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <ImgCropper
        v-if="dialog.type == 'cropper'"
        :cropperOption="cropperOption"
        @cropperCb="cropperCb"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas'
import type { UploadInstance, UploadFile } from 'element-plus'

const divEl = ref<HTMLElement>()
const uploadRef = ref<UploadInstance>()
const cropperOption = reactive<any>({})
const defaultUploader = [
  {
    name: 'result',
    label: '结算',
    cropWidth: 250,
    cropHeight: 500,
    imgData: '',
  },
  {
    name: 'team',
    label: '队伍',
    cropWidth: 500,
    cropHeight: 225,
    imgData: '',
  },
  {
    name: 'weapon',
    label: '武器盘',
    cropWidth: 250,
    cropHeight: 275,
    imgData: '',
  },
  {
    name: 'summon',
    label: '召唤',
    cropWidth: 250,
    cropHeight: 275,
    imgData: '',
  },
]
const state = reactive({
  dialog: {
    width: 200,
    visible: false,
    type: '',
  },
  uploaderInit: useStorage('uploaderInit', defaultUploader),
  formData: {} as any,
})

const { uploaderInit, dialog, formData } = toRefs(state)

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
  uploaderInit.value.find((item) => item.name == name)!.imgData = data
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
</script>
