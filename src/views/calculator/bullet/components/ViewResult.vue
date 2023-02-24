<template>
  <div>
    <div class="flex items-center justify-center h-28 bg-slate-300 relative">
      <div
        v-for="bullet in bulletList"
        class="flex items-center justify-center relative"
      >
        <div
          v-if="bullet.at(-1) && bullet.at(-1).done"
          class="absolute w-full h-full bg-black/40 flex justify-center items-center"
        >
          <el-icon :size="45" color="#409EFC"><CircleCheck /></el-icon>
        </div>
        <img class="w-14 h-14 m-2" :src="getImgSrc(bullet.at(-1))" />
      </div>
    </div>

    <el-scrollbar :max-height="height">
      <div class="waterfall">
        <div
          v-for="list in bulletList.filter((item:Bullet[])=>item.length!=0 && item[item.length-1].done!=true)"
          class="water p-2 m-auto"
        >
          <el-table :data="list">
            <el-table-column
              prop="seq_id"
              label="目标"
              width="80"
              align="center"
            >
              <template #default="{ row }">
                <div
                  class="flex flex-col items-center justify-center relative select-none"
                >
                  <div
                    v-if="row.done"
                    class="absolute w-full h-full bg-black/40"
                  ></div>
                  <img class="w-12 h-12 m-1" :src="getImgSrc(row)" />
                  <span>{{ row.number ? row.number : '1' }}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="article"
              label="材料"
              width="260"
              align="center"
            >
              <template #default="{ row, $index }">
                <div class="flex items-center justify-center">
                  <div
                    v-if="row.article.find((item:Article)=>item.kind=='54' && item.done!=true)"
                    class="absolute w-full h-full bg-black/80 z-10"
                  ></div>
                  <div
                    v-for="item in row.article"
                    class="relative cursor-pointer"
                    @click.prevent="handleCheck(list, row, item, $index)"
                  >
                    <div
                      v-if="item.done"
                      class="absolute w-full h-full bg-black/40 flex justify-center items-center"
                    >
                      <el-icon :size="45" color="#409EFC"
                        ><CircleCheck
                      /></el-icon>
                    </div>
                    <div
                      class="flex flex-col items-center justify-center select-none"
                    >
                      <img class="w-12 h-12 m-1" :src="getImgSrc(item)" />
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
  </div>
</template>

<script setup lang="ts">
import { Article, Bullet } from '..'
import { CircleCheck } from '@element-plus/icons-vue'

const props = defineProps(['selectedBullet'])
const emit = defineEmits(['change', 'update:selectedBullet'])

const bulletList = computed({
  get: () => props.selectedBullet,
  set: (value) => {
    emit('update:selectedBullet', value)
  },
})

const height = computed(() => document.documentElement.offsetHeight - 162)

function handleCheck(
  list: Bullet[],
  row: Bullet,
  item: Article,
  index: number
) {
  if (item.kind != '54') item.done = !item.done
  if (!row.article.find((item: Article) => !item.done)) {
    row.done = true
    if (index < list.length - 1) list.splice(index, 1)

    let i = index

    while (i < list.length) {
      const hit = list[i].article.find(
        (item: Article) => item.item_id == row.seq_id
      )
      if (hit) {
        hit.done = true
        break
      }
      i++
    }
  }
}

function getImgSrc(item: any) {
  if (!item) {
    return 'https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/job/bullet/empty.png'
  }

  if (item.article) {
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${item.seq_id}.jpg`
  }
  if (item.kind == '10') {
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item.image}.jpg`
  }
  if (item.kind == '17') {
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/evolution/s/${item.image}.jpg`
  }
  if (item.kind == '54') {
    return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${item.item_id}.jpg`
  }
}
</script>

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
