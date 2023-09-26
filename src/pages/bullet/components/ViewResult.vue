<script setup lang="ts">
import { CircleCheck, InfoFilled } from '@element-plus/icons-vue'
import type { Article, Bullet } from '../types'

const props = defineProps(['selectedBullet'])
const emit = defineEmits(['change', 'update:selectedBullet'])

const bulletList = computed<Bullet[][]>({
  get: () => props.selectedBullet,
  set: (value) => {
    emit('update:selectedBullet', value)
  },
})

const articleList = computed(() => {
  const list: Article[] = []
  bulletList.value.forEach((bullet) => {
    if (bullet.at(-1)?.total) {
      const articles = bullet.at(-1)!.total
      articles?.forEach((article) => {
        const hit = list.find(a => a.item_id === article.item_id)
        if (hit)
          hit.number += article.number
        else
          list.push(JSON.parse(JSON.stringify(article)))
      })
    }
  })
  return list
})

const { height } = useWindowSize()

function handleCheck(list: Bullet[], row: Bullet, item: Article, index: number) {
  if (item.kind !== '54')
    item.done = !item.done
  if (!row.article.find(item => !item.done)) {
    row.done = true
    if (index < list.length - 1)
      list.splice(index, 1)

    let i = index

    while (i < list.length) {
      const hit = list[i].article.find(item => item.item_id === row.seq_id && item.number === row.number)
      if (hit) {
        hit.done = true
        break
      }
      i++
    }
  }
}

function getImgSrc(item: any) {
  if (!item)
    return 'https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/job/bullet/empty.png'

  if (item.article)
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${item.seq_id}.jpg`

  if (item.kind === '10')
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item.item_id}.jpg`

  if (item.kind === '17')
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/evolution/s/${item.item_id}.jpg`

  if (item.kind === '54')
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${item.item_id}.jpg`
}
</script>

<template>
  <el-card>
    <template #header>
      <div fc>
        <div v-for="bullet, idx in bulletList" :key="idx" relative fc>
          <div v-if="bullet.at(-1) && bullet.at(-1)?.done" class="absolute h-full w-full fc bg-black/40">
            <el-icon :size="45" color="#409EFC">
              <CircleCheck />
            </el-icon>
          </div>

          <img v-if="bullet.length === 0" class="m-2 h-14 w-14" :src="getImgSrc(bullet.at(-1))">
          <el-tooltip v-else effect="dark" placement="bottom">
            <img class="m-2 h-14 w-14" :src="getImgSrc(bullet.at(-1))">
            <template #content>
              <div class="w-44 fc flex-wrap">
                <div v-for="article, idx1 in bullet.at(-1)?.total" :key="idx1" class="fc flex-col select-none">
                  <img class="m-1 h-12 w-12" :src="getImgSrc(article)">
                  <span>{{ article.number }}</span>
                </div>
              </div>
            </template>
          </el-tooltip>
        </div>
        <el-tooltip effect="dark" placement="bottom">
          <el-icon ml-2 mt-9>
            <InfoFilled />
          </el-icon>
          <template #content>
            <div class="w-44 fc flex-wrap">
              <div v-for="article, idx in articleList" :key="idx" class="fc flex-col select-none">
                <img class="m-1 h-12 w-12" :src="getImgSrc(article)">
                <span>{{ article.number }}</span>
              </div>
            </div>
          </template>
        </el-tooltip>
      </div>
    </template>
    <el-scrollbar :height="height - 315">
      <div class="waterfall">
        <div
          v-for="list, idx in bulletList.filter((item) => item.length !== 0 && item[item.length - 1].done !== true)"
          :key="idx" class="water m-auto p-2"
        >
          <el-table :data="list">
            <el-table-column prop="seq_id" label="目标" width="80" align="center">
              <template #default="{ row }">
                <div class="relative fc flex-col select-none">
                  <div v-if="row.done" class="absolute h-full w-full bg-black/40" />
                  <img class="m-1 h-12 w-12" :src="getImgSrc(row)">
                  <span>{{ row.number ? row.number : '1' }}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="article" label="材料" width="260" align="center">
              <template #default="{ row, $index }">
                <div class="fc">
                  <div
                    v-if="row.article.find((item: Article) => item.kind === '54' && item.done !== true)"
                    class="absolute z-10 h-full w-full bg-black/80"
                  />
                  <div
                    v-for="item, idx1 in row.article" :key="idx1" class="relative cursor-pointer"
                    @click.prevent="handleCheck(list, row, item, $index)"
                  >
                    <div v-if="item.done" class="absolute h-full w-full fc bg-black/40">
                      <el-icon :size="45" color="#409EFC">
                        <CircleCheck />
                      </el-icon>
                    </div>
                    <div class="fc flex-col select-none">
                      <img class="m-1 h-12 w-12" :src="getImgSrc(item)">
                      <span>{{ item.number }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-scrollbar>
  </el-card>
</template>

<style>
.waterfall {
  column-count: 1;
}

.water {
  width: 356px;
  break-inside: avoid;
}

@media (min-width: 400px) {
  .waterfall {
    column-count: 1;
  }
}

@media (min-width: 800px) {
  .waterfall {
    column-count: 2;
  }
}

@media (min-width: 1200px) {
  .waterfall {
    column-count: 3;
  }
}
</style>
