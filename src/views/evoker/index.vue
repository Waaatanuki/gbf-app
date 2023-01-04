<template>
  <div class="evoker-page">
    <el-container>
      <el-aside>
        <MaterialInfo :materialInfo="materialInfo" />
      </el-aside>
      <el-container>
        <el-main>
          <EvokerInfo :evokerInfo="evokerInfo" />
        </el-main>
        <el-footer>
          <MaterialResult class="showResult" :result="evokerPageResult" />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MaterialInfo from './components/MaterialInfo.vue'
import EvokerInfo from './components//EvokerInfo.vue'
import MaterialResult from './components/MaterialResult.vue'
import evokerData from '@/assets/data/uncapData.json'

const evokerInfoDefault: any = [
  {
    no: 7,
    name: '教皇',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 0,
    name: '女帝',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 4,
    name: '愚者',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 6,
    name: '皇帝',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 2,
    name: '战车',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 1,
    name: '芙劳',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 8,
    name: '女教皇',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 5,
    name: '魔术师',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 3,
    name: '节制',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
  {
    no: 9,
    name: '尼亚',
    target: true,
    tarotLevel: 7,
    getCard: true,
    evokerLevel: 4,
  },
]

evokerInfoDefault.forEach(
  (info: any) =>
    (info.img = new URL(`/src/assets/images/npc/304016${info.no}000_01.jpg`, import.meta.url).href)
)

const getEvokerPageResult = function (e: any, v: any) {
  const result: any = {}
  const loopGroup = ['tarotUncap', 'evokerUncap', 'weaponUncap', 'domainUncap']
  for (let i = 0; i < 10; i++) {
    if (e[i].target) {
      const currentNo = e[i].no
      const currentTarotLevel = e[i].tarotLevel || 0
      const currentEvokerLevel = e[i].evokerLevel || 0
      const currentWeaponLevel = e[i].weaponLevel || 0
      const currentDomainLevel = e[i].domainLevel || 0
      const currentLevel = [
        currentTarotLevel,
        currentEvokerLevel,
        currentWeaponLevel,
        currentDomainLevel,
      ]

      // 塔罗卡片交换
      if (!e[i].getCard) {
        let tarotCardData: any = evokerData[currentNo].tarotCard
        for (const k in tarotCardData) {
          if (isNaN(result[k])) {
            result[k] = 0
          }
          result[k] += tarotCardData[k]
        }
      }

      // 塔罗、贤者、贤武、领域素材计算
      for (let m = 0; m < 4; m++) {
        const type = loopGroup[m] as 'tarotUncap' | 'evokerUncap' | 'weaponUncap' | 'domainUncap'
        for (let j = currentLevel[m]; j < evokerData[currentNo][type].length; j++) {
          const uncapData = evokerData[currentNo][type][j]
          for (const k in uncapData) {
            if (isNaN(result[k])) {
              result[k] = 0
            }
            result[k] += uncapData[k as keyof typeof uncapData]
          }
        }
      }
    }
  }
  const total = { ...result }
  // 计算素材缺口
  for (const k in v) {
    if (result[k]) {
      result[k] -= v[k]
      if (result[k] <= 0) {
        delete result[k]
      }
    }
  }
  const arr = []
  for (const k in result) {
    arr.push({
      id: k,
      total: total[k],
      need: result[k],
      img: new URL(`/src/assets/images/item/${k}.jpg`, import.meta.url).href,
    })
  }
  return arr
}

const materialInfo = useStorage('materialInfo', {})
const evokerInfo = useStorage('evokerInfo', evokerInfoDefault)
const evokerPageResult = computed(() => getEvokerPageResult(evokerInfo.value, materialInfo.value))
</script>

<style lang="scss" scoped>
.evoker-page {
  padding-top: 0px;
  border-radius: 10px;
  background: #3e5151;
  background: -webkit-linear-gradient(to top, #decba4, #3e5151);
  background: linear-gradient(to top, #decba4, #3e5151);
}

.el-main {
  flex-grow: 0;
  padding: 0px;
}

.el-footer {
  flex-grow: 1;
  padding: 0px;
}

.el-aside {
  width: 280px;
}
</style>
