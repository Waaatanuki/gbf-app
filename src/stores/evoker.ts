import { acceptHMRUpdate, defineStore } from 'pinia'
import { defaultEvokerInfo } from '~/constants/evoker'
import evokerData from '~/assets/data/uncapData.json'

export const useEvokerStore = defineStore('evoker', () => {
  const materialInfo = useStorage('materialInfo', {} as { [key: string]: number })
  const evokerInfo = useStorage('evokerInfo', defaultEvokerInfo)

  const result = computed(() => {
    const result: { [key: string]: number } = {}
    const loopGroup = ['tarotUncap', 'evokerUncap', 'weaponUncap', 'domainUncap']
    for (let i = 0; i < 10; i++) {
      if (evokerInfo.value[i].target) {
        const currentNo = evokerInfo.value[i].no
        const currentTarotLevel = evokerInfo.value[i].tarotLevel || 0
        const currentEvokerLevel = evokerInfo.value[i].evokerLevel || 0
        const currentWeaponLevel = evokerInfo.value[i].weaponLevel || 0
        const currentDomainLevel = evokerInfo.value[i].domainLevel || 0
        const currentLevel = [currentTarotLevel, currentEvokerLevel, currentWeaponLevel, currentDomainLevel]

        // 塔罗、贤者、贤武、领域素材计算
        for (let m = 0; m < 4; m++) {
          const type = loopGroup[m] as 'tarotUncap' | 'evokerUncap' | 'weaponUncap' | 'domainUncap'
          for (let j = currentLevel[m]; j < evokerData[currentNo][type].length; j++) {
            const uncapData = evokerData[currentNo][type][j]
            for (const [key, value] of Object.entries(uncapData)) {
              if (!(key in result))
                result[key] = 0
              result[key] += value
            }
          }
        }

        // 贤者四技能解锁
        if (!evokerInfo.value[i].isAbility4Release) {
          const releaseData = evokerData[currentNo].ability4Release
          for (const [key, value] of Object.entries(releaseData)) {
            if (!(key in result))
              result[key] = 0
            result[key] += value
          }
        }
      }
    }

    const arr = []
    // 计算素材缺口
    for (const k in result) {
      arr.push({
        id: k,
        total: result[k],
        need: k in materialInfo.value ? result[k] - materialInfo.value[k] : result[k],
      })
    }

    return arr
  })

  return {
    materialInfo,
    evokerInfo,
    result,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useEvokerStore, import.meta.hot))
