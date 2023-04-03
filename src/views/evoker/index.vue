<template>
  <div class="app-container">
    <div
      class="evoker-page"
      rounded-5px
      flex
      flex-wrap
      justify-evenly
      items-center
    >
      <MaterialInfo :materialInfo="materialInfo" />
      <div flex flex-col max-w-700px>
        <EvokerInfo :evokerInfo="evokerInfo" />
        <MaterialResult :result="evokerPageResult" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialInfo from './components/MaterialInfo.vue'
import EvokerInfo from './components//EvokerInfo.vue'
import MaterialResult from './components/MaterialResult.vue'
import evokerData from '@/assets/data/uncapData.json'
import { evokerInfoDefault } from '@/settings/evoker.setting'

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

      // 塔罗、贤者、贤武、领域素材计算
      for (let m = 0; m < 4; m++) {
        const type = loopGroup[m] as
          | 'tarotUncap'
          | 'evokerUncap'
          | 'weaponUncap'
          | 'domainUncap'
        for (
          let j = currentLevel[m];
          j < evokerData[currentNo][type].length;
          j++
        ) {
          const uncapData = evokerData[currentNo][type][j]
          for (const k in uncapData) {
            if (isNaN(result[k])) {
              result[k] = 0
            }
            result[k] += uncapData[k as keyof typeof uncapData]
          }
        }
      }

      // 贤者四技能解锁
      if (!e[i].isAbility4Release) {
        let tarotCardData = evokerData[currentNo].ability4Release
        for (const k in tarotCardData) {
          if (isNaN(result[k])) {
            result[k] = 0
          }
          result[k] += tarotCardData[k]
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
    })
  }
  return arr
}

const materialInfo = useStorage('materialInfo', {})
const evokerInfo = useStorage('evokerInfo', evokerInfoDefault)
const evokerPageResult = computed(() =>
  getEvokerPageResult(evokerInfo.value, materialInfo.value)
)
</script>

<style lang="scss" scoped>
.evoker-page {
  background: #3e5151;
  background: -webkit-linear-gradient(to top, #decba4, #3e5151);
  background: linear-gradient(to top, #decba4, #3e5151);
}
</style>
