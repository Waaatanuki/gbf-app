<template>
  <div class="container">
    <div>
      <el-card class="gacha-calc-card">
        <template #header>
          <div class="card-header">
            <span>攒井计算器</span>
            <label>
              {{
                Math.floor(totalStone / 90000) +
                '井' +
                Math.floor((totalStone % 90000) / 300) +
                '抽'
              }}</label
            >
          </div>
        </template>
        <div class="card-body">
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
          </el-form>
          <el-divider />
          <el-form label-width="70px">
            <el-form-item label="点数价格">
              <el-input v-model.number="formData.price" />
            </el-form-item>
            <el-form-item label="对应点数">
              <el-input v-model.number="formData.point" />
            </el-form-item>
          </el-form>
          <div style="text-align: center">
            {{
              '下一井需要补' +
              Math.floor((formData.price * (90000 - (totalStone % 90000))) / formData.point) +
              '元'
            }}
          </div>
        </div>
      </el-card>
    </div>
    <div style="width: 100%">
      <el-card class="gacha-simulate-card">
        <template #header>
          <div class="card-header">
            <span>抽卡模拟</span>
            <span
              >当前总抽数：{{ count }} , SSR个数：{{ ssrCount }} , SSR率：{{
                ((ssrCount / count) * 100).toFixed(2)
              }}%</span
            >
            <div>
              <el-button type="warning" @click="reset">重置</el-button>
            </div>
          </div>
        </template>
        <div class="card-body">
          <div class="gacha-bg">
            <div>
              <el-image v-for="item in result.slice(0, 3)" :src="item.img" />
            </div>
            <div>
              <el-image v-for="item in result.slice(3, 7)" :src="item.img" />
            </div>
            <div>
              <el-image v-for="item in result.slice(7, 10)" :src="item.img" />
            </div>
          </div>
          <div class="btn-gacha-box">
            <div class="btn-gacha" @click="draw(1)">
              <img :src="gachaButtonText10" alt="text_legend10" />
            </div>
            <div class="btn-gacha" @click="draw(30)">
              <img :src="gachaButtonText300" alt="text_legend300" />
            </div>
          </div>
          <div class="show-ssr-box">
            <el-scrollbar height="200px">
              <el-image
                v-for="item in ssrList"
                :class="{ target: item.incidence == '1' }"
                :src="item.img"
              />
            </el-scrollbar>
          </div>
        </div>
        <span class="tip">{{ gachaLineup }}</span>
      </el-card>
    </div>
  </div>
  <div class="animation" v-if="animationVisible" @click="closeAnimation">
    <GachaAnimation :resultList="animationResult" @close="closeAnimation" />
  </div>
</template>

<script setup lang="ts">
import GachaAnimation from './components/GachaAnimation.vue'
import gachaNormalRatio from '@/assets/data/gachaData/gachaNormalRatio.json'
import gachaSrRatio from '@/assets/data/gachaData/gachaSrRatio.json'
import gachaInfo from '@/assets/data/gachaData/gachaInfo.json'

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
    '*当前卡池时间：' +
    gachaInfo.legend.lineup[0].service_start +
    '—' +
    gachaInfo.legend.lineup[0].service_end +
    ' 彩框为卡池UP',
  gachaButtonText10: new URL(`/src/assets/images/gacha/text_legend10.png`, import.meta.url).href,
  gachaButtonText300: new URL(`/src/assets/images/gacha/text_legend300.png`, import.meta.url).href,
})

const {
  formData,
  totalStone,
  count,
  ssrCount,
  gachaLineup,
  result,
  ssrList,
  animationVisible,
  animationResult,
  gachaButtonText10,
  gachaButtonText300,
} = toRefs(state)

watchEffect(() => {
  state.totalStone =
    state.formData.legendticket10 * 3000 +
    state.formData.legendticket * 300 +
    state.formData.stone +
    state.formData.drawn * 300 +
    state.formData.mobacoin
})

const cardType = ['weapon', 'weapon', 'summon']
const rarityType = {
  2: 'r',
  3: 'sr',
  4: 'ssr',
}

function getRate(raw: any) {
  const data = raw.appear
  const card: any[] = []
  data.forEach((item: any) => {
    const cat = cardType[item.category]
    const type = rarityType[item.rarity]
    item.item.forEach((obj: any) => {
      card.push({
        id: obj.reward_id,
        rate: parseFloat(obj.drop_rate) / 100,
        cat: cat,
        type,
        incidence: obj.incidence,
        img: new URL(`/src/assets/images/gacha/${cat}/${obj.reward_id}.jpg`, import.meta.url).href,
        typeImg: new URL(`/src/assets/images/gacha/${type}.png`, import.meta.url).href,
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
    if (rateNum > pointer) return card[i]
  }

  for (let i = 0; i < pos; i++) {
    rateNum += card[i].rate
    if (rateNum > pointer) return card[i]
  }

  let idx = pos
  if (pos === 0) idx = len - 1
  return card[idx]
}

function gacha10() {
  const result = []
  for (let i = 0; i < 10; i++) {
    if (i === 9) {
      result.push(gacha('sr'))
    } else {
      result.push(gacha())
    }
  }
  return result
}

function draw(times: number) {
  state.animationVisible = true
  state.animationResult.length = 0
  if (state.cardN.length == 0) state.cardN = getRate(gachaNormalRatio)
  if (state.cardSR.length == 0) state.cardSR = getRate(gachaSrRatio)
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

<style lang="scss" scoped>
.container {
  display: flex;
}

.gacha-calc-card {
  margin-right: 5px;
  height: 550px;
  width: 250px;

  .input-form {
    display: flex;
    justify-content: center;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.gacha-simulate-card {
  height: 550px;
  margin-right: 2px;
  position: relative;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 21px;
  }

  .card-body {
    display: flex;
    flex-direction: column;

    .btn-gacha-box {
      display: flex;
      justify-content: center;
      align-items: center;

      .btn-gacha {
        background: url(@/assets/images/gacha/parts_common.png) no-repeat 0 -232px;
        background-size: 320px 5559px;
        width: 148px;
        height: 65px;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        position: relative;
        padding-top: 11px;

        img {
          width: 112px;
          height: 38px;
        }
      }

      .btn-gacha:active {
        background: url(@/assets/images/gacha/parts_common.png) no-repeat 0 -776px;
        background-size: 320px 5559px;
        transform: scale(0.9);
      }
    }

    .gacha-bg {
      height: 166px;
      padding-top: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: url(@/assets/images/bg/gacha_result_bg.jpg) 50% 50% no-repeat;
    }

    .el-image {
      height: 50px;
      margin: 0px 2px;
    }

    .target {
      box-shadow: rgb(85, 91, 255) 0px 0px 0px 2px, rgb(31, 193, 27) 0px 0px 0px 4px,
        rgb(255, 217, 19) 0px 0px 0px 6px, rgb(255, 156, 85) 0px 0px 0px 8px,
        rgb(255, 85, 85) 0px 0px 0px 10px;
    }

    .show-ssr-box {
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;

      .el-image {
        margin: 12px;
      }
    }
  }

  .tip {
    position: absolute;
    bottom: 1px;
    right: 1px;
    font-size: 13px;
  }
}
</style>
