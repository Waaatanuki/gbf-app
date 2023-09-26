<script setup lang="ts">
import type { Article, Bullet } from 'bullet'
import DATA from '~/assets/data/bullet/data.json'

const bulletList = defineModel<Bullet[][]>({ required: true })

const currentBulletType = ref(1)
const bulletTypeList = ref([
  { name: 'パラベラム弾', slotType: 1 },
  { name: 'ライフル弾', slotType: 2 },
  { name: 'カートリッジ', slotType: 3 },
  { name: 'エーテリアル弾', slotType: 4 },
])

const { height } = useWindowSize()

const DefaultBulletConfig = [
  {
    name: '5巴布弹1极巴弹',
    list: ['20701', '20701', '20701', '20701', '20701', '20901'],
  },
]

function handleCommand(command: string[]) {
  command.forEach((id, i) => {
    const hit = DATA.find(bullet => bullet.seq_id === id) as Bullet

    const articleList = getArticle([hit]).reverse()
    articleList.at(-1)!.total = getTotal(articleList)
    bulletList.value[i] = articleList
  })
}

function handleSelect(bullet: Bullet) {
  const index = bulletList.value.findIndex(bullet => bullet.length === 0)

  if (index !== -1) {
    const articleList = getArticle([bullet]).reverse()
    articleList.at(-1)!.total = getTotal(articleList)
    bulletList.value[index] = articleList
  }
  else {
    ElMessage.info('已经到达上限')
  }
}

function handleDelete(index: number) {
  bulletList.value.splice(index, 1, [])
}

function getArticle(bullet: Bullet[]) {
  const targets = bullet.at(-1)?.article.filter(item => item.kind === '54')

  if (targets && targets.length > 0) {
    targets.forEach((target) => {
      const id = target.item_id
      const number = target.number
      const source = DATA.find(item => item.seq_id === id) as Bullet

      const newItem: Bullet = JSON.parse(JSON.stringify(source))
      newItem.number = number

      newItem.article.forEach(item => (item.number = item.number * number))
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
        const hit = total.find(item => item.item_id === article.item_id)
        if (hit)
          hit.number = hit.number + article.number
        else
          total.push(JSON.parse(JSON.stringify(article)))
      }
    })
  })

  return total
}

function getImgSrc(bullet: Bullet) {
  return bullet
    ? `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${bullet.seq_id}.jpg`
    : 'https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/job/bullet/empty.png'
}
</script>

<template>
  <el-card>
    <el-tabs v-model="currentBulletType" stretch>
      <el-tab-pane
        v-for="bulletType in bulletTypeList" :key="bulletType.slotType" :label="bulletType.name"
        :name="bulletType.slotType"
      >
        <el-scrollbar :height="height - 365">
          <div fc flex-wrap gap-10px>
            <el-card
              v-for="bullet, idx in DATA.filter((item) => item.seq_id.startsWith(bulletType.slotType.toString()))"
              :key="idx" :body-style="{ padding: '5px' }" shadow="hover" w-300px flex items-center justify-start
              @click="() => handleSelect(bullet)"
            >
              <div fc cursor-pointer>
                <div mr-2 h-48px w-48px flex-shrink-0>
                  <img :src="getBulletImg(bullet.seq_id)">
                </div>
                <div flex flex-col text-start text-xs>
                  <span font-bold> {{ bullet.name }}</span>
                  <span v-html="bullet.comment" />
                </div>
              </div>
            </el-card>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
    <div relative mt-20px border-t-1 pt-20px>
      <div fc>
        <div v-for="bullet, idx in bulletList" :key="idx">
          <img :src="getImgSrc(bullet.at(-1)!)" class="m-1 h-14 w-14 cursor-pointer" @click="() => handleDelete(idx)">
        </div>
      </div>
      <div absolute bottom-1 left-1>
        <el-dropdown size="small" @command="handleCommand">
          <el-button type="success" plain>
            预设配置
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="config, idx in DefaultBulletConfig" :key="idx" :command="config.list">
                {{ config.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-card>
</template>
