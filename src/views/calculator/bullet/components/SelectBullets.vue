<template>
  <div>
    <div class="flex flex-wrap justify-center items-center mt-2">
      <el-check-tag
        class="m-1"
        v-for="bulletType in checkBulletGroup"
        :checked="bulletType.checked"
        @change="bulletType.checked = !bulletType.checked"
      >
        <template #default>
          <div class="flex flex-col justify-center items-center w-[140px]">
            <span> {{ bulletType.name }}</span>
            <img
              class="h-5 mt-2"
              :src="`./images/bullet/${bulletType.slotType}.png`"
            />
          </div>
        </template>
      </el-check-tag>
    </div>

    <el-scrollbar :max-height="height" class="p-[5px] relative">
      <el-card
        class="m-2 w-auto"
        v-for="bulletType in checkBulletGroup.filter(
          (item) => item.checked == true
        )"
        :header="bulletType.name"
        :body-style="bulletCardStyle"
      >
        <div
          v-for="bullet in DATA.filter((item) =>
            item.seq_id.startsWith(bulletType.slotType.toString())
          )"
          class="w-[330px] border-solid border-2 border-sky-500 m-1 p-1 flex justify-start items-center cursor-pointer"
          @click="() => handleSelect(bullet)"
        >
          <div class="w-[48px] h-[48px] mr-2 flex-shrink-0">
            <img
              :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${bullet.seq_id}.jpg`"
            />
          </div>
          <div class="flex flex-col text-xs">
            <span class="font-black"> {{ bullet.name }}</span>
            <span v-html="bullet.comment"></span>
          </div>
        </div>
      </el-card>

      <div class="absolute bottom-3 right-3">
        <el-dropdown size="small" @command="handleCommand">
          <el-button type="success" plain> 预设配置 </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="config in DefaultBulletConfig"
                :command="config.list"
                >{{ config.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-scrollbar>

    <div class="flex items-center justify-center h-28 bg-slate-300 relative">
      <div
        v-for="(bullet, index) in bulletList"
        @click="() => handleDelete(index)"
        class="flex items-center justify-center cursor-pointer"
      >
        <img class="w-14 h-14 m-2" :src="getImgSrc(bullet.at(-1))" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DATA from '@/assets/data/bullet/data.json'
import type { Bullet, Article } from '../types'
import { cloneDeep } from 'lodash'
import { CSSProperties } from 'vue'

const props = defineProps(['selectedBullet'])
const emit = defineEmits(['update:selectedBullet'])

const bulletList = computed({
  get: () => props.selectedBullet,
  set: (value) => {
    emit('update:selectedBullet', value)
  },
})
const checkBulletGroup = ref([
  { name: 'パラベラム弾', checked: true, slotType: 1 },
  { name: 'ライフル弾', checked: true, slotType: 2 },
  { name: 'カートリッジ', checked: true, slotType: 3 },
  { name: 'エーテリアル弾', checked: true, slotType: 4 },
])
const bulletCardStyle: CSSProperties = {
  padding: '0px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}
const { width } = useWindowSize()
const height = ref()

watchEffect(() => {
  if (width.value < 712) {
    height.value = document.documentElement.offsetHeight - 150 - 158
  } else {
    height.value = document.documentElement.offsetHeight - 150 - 94
  }
})

const DefaultBulletConfig = [
  {
    name: '5巴布弹1极巴弹',
    list: ['20701', '20701', '20701', '20701', '20701', '20901'],
  },
]

function handleCommand(command: string[]) {
  command.forEach((id, i) => {
    const hit = DATA.find((bullet) => bullet.seq_id == id) as Bullet

    const articleList = getArticle([hit]).reverse()
    articleList.at(-1)!.total = getTotal(articleList)
    bulletList.value[i] = articleList
  })
}

function handleSelect(bullet: Bullet) {
  const index = bulletList.value.findIndex(
    (bullet: Bullet[]) => bullet.length == 0
  )

  if (index !== -1) {
    const articleList = getArticle([bullet]).reverse()
    articleList.at(-1)!.total = getTotal(articleList)
    bulletList.value[index] = articleList
  } else {
    ElMessage.info('已经到达上限')
  }
}

function handleDelete(index: number) {
  bulletList.value.splice(index, 1, [])
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

function getTotal(bullets: Bullet[]) {
  const total: Article[] = []
  bullets.forEach((bullet) => {
    bullet.article.forEach((article) => {
      if (article.kind !== '54') {
        const hit = total.find((item) => item.item_id == article.item_id)
        if (hit) {
          hit.number = hit.number + article.number
        } else {
          total.push(cloneDeep(article))
        }
      }
    })
  })

  return total
}

function getImgSrc(bullet: any) {
  return bullet
    ? `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${bullet.seq_id}.jpg`
    : 'https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/job/bullet/empty.png'
}
</script>

<style scoped></style>
