<template>
  <div>
    <div class="flex items-center justify-center h-28 bg-slate-300" relative>
      <div v-for="bullet in bulletList">
        <img class="w-16 h-16 m-3" :src="getImgSrc(bullet[0])" />
      </div>
      <el-button
        class="absolute top-5 right-5"
        type="primary"
        @click="viewChange"
        >选择子弹</el-button
      >
    </div>

    <el-scrollbar :max-height="height">
      <div class="waterfall">
        <div v-for="list in bulletList" class="water p-2">
          <el-table :data="list">
            <el-table-column
              prop="目标"
              label="目标"
              width="100"
              align="center"
            >
              <template #default="{ row }">
                <div class="flex flex-col items-center justify-center relative">
                  <div
                    v-if="row.done"
                    class="absolute w-full h-full bg-black/40"
                  ></div>
                  <img class="w-16 h-16 m-3" :src="getImgSrc(row)" />
                  <span>{{ row.number ? row.number : '1' }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="材料"
              label="材料"
              width="400"
              align="center"
            >
              <template #default="{ row, $index }">
                <div class="flex items-center justify-center">
                  <div
                    v-for="item in row.article"
                    class="flex flex-col items-center justify-center relative"
                    @click="handleCheck(list, row, item, $index)"
                  >
                    <div
                      v-if="item.done"
                      class="absolute w-full h-full bg-black/40"
                    ></div>
                    <img class="w-16 h-16 m-3" :src="getImgSrc(item)" />
                    <span>{{ item.number }}</span>
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
  item.done = !item.done
  if (!row.article.find((item: Article) => !item.done)) {
    row.done = true
    if (index > 0) list.splice(index, 1)
    let i = index

    while (i > 0) {
      const hit = list[i - 1].article.find(
        (item: Article) => item.item_id == row.seq_id
      )
      if (hit) {
        hit.done = true
        break
      }
      i--
    }
  }
}

function viewChange() {
  emit('change', 'select')
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

<style scoped>
.waterfall {
  column-count: 1;
}
.water {
  width: 516px;
  break-inside: avoid;
}

@media (min-width: 520px) {
  .waterfall {
    column-count: 1;
  }
}
@media (min-width: 1200px) {
  .waterfall {
    column-count: 2;
  }
}
@media (min-width: 1800px) {
  .waterfall {
    column-count: 3;
  }
}
</style>
