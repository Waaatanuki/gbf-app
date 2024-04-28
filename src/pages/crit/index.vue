<script setup lang="ts">
import type { CritData } from '~/constants/critData'
import { critData } from '~/constants/critData'

const checkList = ref<CritData[]>([])
const boost = ref(0)

const totalNumber = computed(() =>
  checkList.value.reduce((pre, cur) => {
    if (cur.noEffect)
      pre.noEffect += cur.rate
    else
      pre.effect += cur.rate
    return pre
  }, { effect: 0, noEffect: 0 }))

const result = computed(() =>
  (totalNumber.value.effect * (boost.value + 100)) / 100 + totalNumber.value.noEffect,
)

function handleClick(data: CritData) {
  if (checkList.value.length >= 13)
    ElMessage.info('已达上限')
  else
    checkList.value.push(data)
}
</script>

<template>
  <div flex flex-wrap items-start justify-center gap-5>
    <el-card h-140 w-40>
      <div fc flex-wrap gap-2>
        <div v-for="data, idx in critData" :key="idx">
          <el-link select-none @click="handleClick(data)">
            {{ `${data.skillName} Lv${data.level}` }}
          </el-link>
        </div>
      </div>
    </el-card>

    <div space-y-4>
      <div flex items-center justify-between>
        <div>
          已选武器：
        </div>
        <div btn @click="checkList = []">
          清空
        </div>
      </div>

      <el-card w-500px :body-style="{ padding: '5px' }">
        <div fc flex-wrap gap-2>
          <div v-if="checkList.length === 0" h-20 fc>
            点击左侧选择武器技能
          </div>
          <div v-for="data, idx in checkList" :key="idx" @click="checkList.splice(idx, 1)">
            <el-card :body-style="{ padding: '2px' }" w-35 shadow="hover">
              <div fc flex-col cursor-pointer select-none gap-2 text-base>
                <div>{{ `${data.skillName} Lv${data.level}` }}</div>
                <div>{{ `效果量: ${data.rate}` }}</div>
              </div>
            </el-card>
          </div>
        </div>
      </el-card>

      <div w-500px fc>
        <span w-60px text-start>加护</span>
        <el-slider v-model="boost" :step="10" :max="500" :show-tooltip="false" />
        <div ml-4 w-50px>
          {{ boost }}
        </div>
      </div>
      <div w-500px fc>
        <span :class="{ 'text-rose': result >= 100 }">暴击率：  {{ result }}</span>
      </div>
    </div>
  </div>
</template>
