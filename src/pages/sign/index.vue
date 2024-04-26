<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'

const assetIndex: { [key: string]: { raid_chain: number } } = {
  characters: { raid_chain: 6 },
  partners: { raid_chain: 6 },
  skins: { raid_chain: 6 },
  job: { raid_chain: 3 },
}
const form = reactive({
  id: '',
  height: 300,
  width: 780,
})
const rawData = ref<{ [key: string]: { [npcId: string]: string[][] } }>()
const npcCutInData = ref<string[]>([])
const isNpc = ref(true)
const selectImgList = ref<{ id: number, src: string }[]>([])
const msg = ref('输入id查询对应图片，点击图片加入到签名')

function handleQuery(value: string | number) {
  for (const [cat, indexInfo] of Object.entries(assetIndex)) {
    if (rawData.value && rawData.value[cat][value]) {
      isNpc.value = cat !== 'job'
      npcCutInData.value = rawData.value[cat][value][indexInfo.raid_chain]
      return
    }
  }
  npcCutInData.value = []
  msg.value = '没有查询到该id对应的数据'
}

function handleSelect(imgId: string) {
  selectImgList.value.push({ id: Date.now(), src: `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/${isNpc.value ? 'npc' : 'leader'}/raid_chain/${imgId}.jpg` })
}

const wrapperStyle = computed(() => ({
  height: `${form.height}px`,
  width: `${form.width}px`,
}))

const innerStyle = computed(() => ({
  'padding-top': `${Number(wrapperStyle.value.height.split('px')[0]) * 0.05}px`,
  'padding-bottom': `${Number(wrapperStyle.value.height.split('px')[0]) * 0.05}px`,
}))

onMounted(async () => {
  const resp = await fetch(`https://raw.githubusercontent.com/MizaGBF/GBFAL/main/json/data.json?${Date.now()}`)
  rawData.value = await resp.json()
})
</script>

<template>
  <div h-180px flex gap-2>
    <div>
      <el-form :model="form" label-width="100">
        <el-form-item label="ID" w-100>
          <el-input v-model.trim="form.id" placeholder="输入角色id、职业id或者皮肤id" clearable @change="handleQuery" />
        </el-form-item>
        <el-form-item label="签名高度" w-100>
          <el-slider v-model="form.height" :max="1000" show-input />
          <div text="gray sm" mt-2>
            注：nga签名超过300会被折叠
          </div>
        </el-form-item>
        <el-form-item label="签名宽度" w-100>
          <el-slider v-model="form.width" :max="2000" show-input />
        </el-form-item>
      </el-form>
    </div>
    <div v-if="npcCutInData.length === 0" m-auto>
      {{ msg }}
    </div>
    <div flex gap-2>
      <div v-for="imgId in npcCutInData" :key="imgId" cursor-pointer @click="handleSelect(imgId)">
        <img h-full :src="`https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/${isNpc ? 'npc' : 'leader'}/raid_chain/${imgId}.jpg`">
      </div>
    </div>
  </div>
  <div relative mx-auto mt-5 :style="wrapperStyle">
    <img absolute z--1 h-full w-full src="https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/ui/frame/bg.png">
    <VueDraggableNext v-model="selectImgList" h-full fc gap-2 :style="innerStyle">
      <transition-group name="list">
        <div v-for="img, idx in selectImgList" :key="img.id" class="group" relative h-full cursor-pointer select-none>
          <div i-carbon:close-filled absolute right-1 top-1 hidden text-white group-hover:block icon-btn @click="selectImgList.splice(idx, 1)" />
          <img h-full :src="img.src">
        </div>
      </transition-group>
    </VueDraggableNext>
  </div>
  <div text="gray sm" mt-2>
    *可拖动改变顺序，悬浮显示删除按钮
  </div>
  <div>
    <el-link type="primary" href="https://github.com/MizaGBF/GBFAL">
      @数据来源
    </el-link>
  </div>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
