<template>
  <div>
    <el-scrollbar :max-height="height">
      <el-descriptions :column="1" border>
        <el-descriptions-item v-for="(type, index) in bulletType" :label="type">
          <template #default>
            <el-row>
              <el-tooltip
                v-for="bullet in DATA.filter((item) =>
                  item.seq_id.startsWith((index + 1).toString())
                )"
                :content="bullet.comment"
                placement="left"
                raw-content
              >
                <div
                  class="border-solid border-2 border-sky-500 m-3 p-2 flex justify-center items-center"
                  @click="() => handleSelect(bullet)"
                >
                  <img
                    class="w-12 h-12"
                    :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${bullet.seq_id}.jpg`"
                  />
                  <span> {{ bullet.name }}</span>
                </div>
              </el-tooltip>
            </el-row>
          </template>
        </el-descriptions-item>
      </el-descriptions>
    </el-scrollbar>

    <div class="flex items-center justify-center h-28 bg-slate-300 relative">
      <div class="absolute top-2 left-2">
        <span class="text-base">预设配置</span>
        <ul>
          <li v-for="config in DefaultBulletConfig">
            <el-button
              type="primary"
              link
              class="text-sm"
              @click="selectDefaultBullet(config)"
              >{{ config.name }}</el-button
            >
          </li>
        </ul>
      </div>
      <div
        v-for="(bullet, index) in bulletList"
        @click="() => handleDelete(index)"
      >
        <img class="w-16 h-16 m-3" :src="getImgSrc(bullet[0])" />
      </div>
      <el-button
        class="absolute bottom-5 right-5"
        type="primary"
        @click="viewChange"
        >查看进度</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import DATA from '@/assets/data/bullet/data.json'
import type { Bullet, Article } from '../index'
import { cloneDeep } from 'lodash'

const props = defineProps(['selectedBullet'])
const emit = defineEmits(['change', 'update:selectedBullet'])

const bulletList = computed({
  get: () => props.selectedBullet,
  set: (value) => {
    emit('update:selectedBullet', value)
  },
})

const bulletType = [
  'パラベラム弾',
  'ライフル弾',
  'カートリッジ',
  'エーテリアル弾',
]

const height = computed(() => document.documentElement.offsetHeight - 162)

const DefaultBulletConfig = [
  {
    name: '5巴布弹1极巴弹',
    list: ['20701', '20701', '20701', '20701', '20701', '20901'],
  },
]

function selectDefaultBullet(config: { name: string; list: string[] }) {
  config.list.forEach((id, i) => {
    const hit = DATA.find((bullet) => bullet.seq_id == id) as Bullet
    bulletList.value[i] = getArticle([hit])
  })
}

function handleSelect(bullet: any) {
  const index = bulletList.value.findIndex((bullet: any) => bullet.length == 0)

  if (index !== -1) {
    bulletList.value[index] = getArticle([bullet])
  } else {
    ElMessage.info('已经到达上限')
  }
}

function handleDelete(index: number) {
  bulletList.value.splice(index, 1, [])
}

function viewChange() {
  emit('change', 'result')
}

function getArticle(bullet: Bullet[]) {
  const targets = bullet
    .at(-1)
    ?.article.filter((item) => item.kind == '54') as []

  if (targets.length > 0) {
    targets.forEach((target: Article) => {
      const id = target.item_id
      const number = target.number
      const source = DATA.find((item) => item.seq_id == id) as Bullet

      const newItem = cloneDeep(source)
      newItem.number = number

      newItem.article.forEach((item) => (item.number = item.number * number))
      bullet.push(newItem)
      bullet = getArticle(bullet)
    })
  }
  return bullet
}

function getImgSrc(bullet: any) {
  return bullet
    ? `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${bullet.seq_id}.jpg`
    : 'https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/job/bullet/empty.png'
}
</script>

<style scoped></style>
