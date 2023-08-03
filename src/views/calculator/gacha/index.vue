<script setup lang="ts">
import GachaAnimation from './components/GachaAnimation.vue'
import gachaNormalRatio from '~/assets/data/gachaData/gachaNormalRatio.json'
import gachaSrRatio from '~/assets/data/gachaData/gachaSrRatio.json'
import gachaInfo from '~/assets/data/gachaData/gachaInfo.json'

const { width } = useWindowSize()

const state = reactive({
  formData: {
    legendticket10: 0,
    legendticket: 0,
    stone: 0,
    drawn: 0,
    mobacoin: 0,
    price: 160,
    point: 3000,
  },
  formVisible: !(width.value < 800),
  totalStone: 0,
  count: 0,
  ssrCount: 0,
  cardN: [] as any[],
  cardSR: [] as any[],
  result: [] as any[],
  ssrList: [] as any[],
  animationVisible: false,
  animationResult: [] as any[],
  gachaLineup:
    `*当前卡池时间：${
    gachaInfo.legend.lineup[0].service_start
    }—${
    gachaInfo.legend.lineup[0].service_end}`,
})

const {
  formData,
  formVisible,
  totalStone,
  count,
  ssrCount,
  gachaLineup,
  result,
  ssrList,
  animationVisible,
  animationResult,
} = toRefs(state)

watchEffect(() => {
  state.totalStone
    = state.formData.legendticket10 * 3000
    + state.formData.legendticket * 300
    + state.formData.stone
    + state.formData.drawn * 300
    + state.formData.mobacoin
})

const cardType = ['weapon', 'weapon', 'summon']
const rarityType = ['', '', 'r', 'sr', 'ssr']

function getRate(raw: any) {
  const data = raw.appear
  const card: any[] = []
  data.forEach((item: any) => {
    const cat = cardType[item.category]
    const type = rarityType[item.rarity]
    item.item.forEach((obj: any) => {
      card.push({
        id: obj.reward_id,
        rate: Number.parseFloat(obj.drop_rate) / 100,
        cat,
        type,
        incidence: obj.incidence,
      })
    })
  })
  return card
}

function gacha(type?: any) {
  const card = type ? state.cardSR : state.cardN
  const len = card.length
  let rateNum = 0
  const pos = Math.floor(Math.random() * len)
  const pointer = Math.random()
  for (let i = pos; i < len; i++) {
    rateNum += card[i].rate
    if (rateNum > pointer)
      return card[i]
  }

  for (let i = 0; i < pos; i++) {
    rateNum += card[i].rate
    if (rateNum > pointer)
      return card[i]
  }

  let idx = pos
  if (pos === 0)
    idx = len - 1
  return card[idx]
}

function gacha10() {
  const result = []
  for (let i = 0; i < 10; i++) {
    if (i === 9)
      result.push(gacha('sr'))
    else
      result.push(gacha())
  }
  return result
}

function draw(times: number) {
  state.animationVisible = true
  state.animationResult.length = 0
  if (state.cardN.length === 0)
    state.cardN = getRate(gachaNormalRatio)
  if (state.cardSR.length === 0)
    state.cardSR = getRate(gachaSrRatio)
  for (let i = 0; i < times; i++) {
    state.result = gacha10()
    animationResult.value = animationResult.value.concat([...result.value])
    state.count += 10
    for (const item of state.result) {
      if (item.type === 'ssr') {
        state.ssrCount++
        state.ssrList.push(item)
      }
    }
  }
}

function reset() {
  state.result = []
  state.ssrList = []
  state.count = 0
  state.ssrCount = 0
}

function closeAnimation() {
  state.animationVisible = false
  state.animationResult.length = 0
}
</script>

<template>
  <div class="app-container">
    <div class="flex flex-wrap justify-center items-start">
      <el-card v-if="formVisible" class="m-2 w-[250px] h-[500px]">
        <template #header>
          <div relative>
            <p class="text-center font-bold">
              {{
                `${Math.floor(totalStone / 90000)
                }井${
                  Math.floor((totalStone % 90000) / 300)
                }抽`
              }}
            </p>
            <div
              cursor-pointer
              absolute
              top-0
              bottom-0
              right-2
              m-auto
              i-carbon:checkbox-indeterminate
              @click="formVisible = !formVisible"
            />
          </div>
        </template>
        <el-form :model="formData" label-width="70px">
          <el-form-item label="10连券">
            <el-input v-model.number="formData.legendticket10" />
          </el-form-item>
          <el-form-item label="单抽券">
            <el-input v-model.number="formData.legendticket" />
          </el-form-item>
          <el-form-item label="宝晶石">
            <el-input v-model.number="formData.stone" />
          </el-form-item>
          <el-form-item label="已抽">
            <el-input v-model.number="formData.drawn" />
          </el-form-item>
          <el-form-item label="剩余点数">
            <el-input v-model.number="formData.mobacoin" />
          </el-form-item>
          <el-divider />
          <el-form-item label="点数价格">
            <el-input v-model.number="formData.price" />
          </el-form-item>
          <el-form-item label="对应点数">
            <el-input v-model.number="formData.point" />
          </el-form-item>
        </el-form>
        <p class="text-center">
          {{
            `下一井需要补${
              Math.floor(
                (formData.price * (90000 - (totalStone % 90000))) / formData.point,
              )
            }元`
          }}
        </p>
      </el-card>
      <div
        v-else
        class="bg-white dark:bg-#1d1e1f"
        m-2 w-250px relative
        style="box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12)"
      >
        <p text-center font-bold p-2>
          {{ `${Math.floor(totalStone / 90000)}井${Math.floor((totalStone % 90000) / 300)}抽` }}
        </p>
        <div
          cursor-pointer absolute top-0 bottom-0 right-2 m-auto
          i-carbon:checkbox-checked
          @click="formVisible = !formVisible"
        />
      </div>
      <el-card class="m-2 w-[500px] h-[500px]" body-style="padding:5px">
        <template #header>
          <div class="h-full flex justify-between items-center">
            <p class="gachaText">
              当前总抽数：{{ count }} , SSR个数：{{ ssrCount }} , SSR率：{{
                ((ssrCount / count) * 100).toFixed(2)
              }}%
            </p>
            <el-button type="warning" @click="reset">
              重置
            </el-button>
          </div>
        </template>
        <div class="relative">
          <div class="gacha-bg fc flex-col p-[2px] min-h-[139px]">
            <div class="flex">
              <img
                v-for="item, idx in result.slice(0, 3)" :key="idx" class="m-[3px]"
                :src="`http://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/${item.cat}/m/${item.id}.jpg`"
              >
            </div>
            <div class="flex">
              <img
                v-for="item, idx in result.slice(3, 7)" :key="idx" class="m-[3px]"
                :src="`http://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/${item.cat}/m/${item.id}.jpg`"
              >
            </div>
            <div class="flex">
              <img
                v-for="item, idx in result.slice(7, 10)" :key="idx" class="m-[3px]"
                :src="`http://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/${item.cat}/m/${item.id}.jpg`"
              >
            </div>
          </div>
          <div fc>
            <div class="btn-gacha fc" @click="draw(1)">
              <img src="/images/gacha/text_legend10.png" alt="text_legend10">
            </div>
            <div class="btn-gacha fc" @click="draw(30)">
              <img
                src="/images/gacha/text_legend300.png"
                alt="text_legend300"
              >
            </div>
          </div>
          <el-scrollbar height="195px">
            <div class="flex flex-wrap justify-center">
              <img
                v-for="item, idx in ssrList" :key="idx"
                class="h-10 m-[4px]"
                :class="{ target: item.incidence === '1' }"
                :src="`http://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/${item.cat}/m/${item.id}.jpg`"
              >
            </div>
          </el-scrollbar>
          <p class="text-xs text-right">
            {{ gachaLineup }}
          </p>
        </div>
      </el-card>
    </div>
    <div v-if="animationVisible" class="animation" @click="closeAnimation">
      <GachaAnimation :result-list="animationResult" @close="closeAnimation" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 40px;
}

.target {
  box-shadow: 0 0 3px 3px rgba(255, 0, 0, 0.8);
}
.gacha-bg {
  background: url('/images/bg/gacha_result_bg.jpg') 50% 50% no-repeat;
}
.btn-gacha {
  background: url('/images/gacha/parts_common.png') no-repeat 0 -232px;
  background-size: 320px 5559px;
  width: 148px;
  height: 65px;

  img {
    width: 112px;
    height: 38px;
  }
}

.btn-gacha:active {
  background: url('/images/gacha/parts_common.png') no-repeat 0 -776px;
  background-size: 320px 5559px;
  transform: scale(0.9);
}

@media (max-width: 600px) {
  .gachaText {
    font-size: 12px;
  }
}
</style>
