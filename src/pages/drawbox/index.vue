<script setup lang="ts">
const eventInfo = [
  {
    name: '古战场',
    type: 0,
    boxToken: [
      [1600, 1],
      [2400, 3],
      [2000, 41],
      [10000, 35],
    ],
    last: 15000,
  },
  {
    name: '月末剧情',
    type: 1,
    boxToken: [
      [1200, 1],
      [1580, 1],
      [1980, 1],
      [2112, 17],
    ],
    last: 2104,
  },
  {
    name: '公会战',
    type: 2,
    boxToken: [
      [1600, 1],
      [2400, 3],
      [2000, 16],
      [10000, 20],
    ],
    last: 15000,
  },
]

const form = reactive({
  type: 0,
  currentToken: 0,
  drawnBox: 0,
  targetBox: 0,
})

const result = computed(() => {
  const event = eventInfo.find(e => e.type === form.type)!

  const tokenList = event.boxToken.reduce((pre, cur) => {
    for (let i = 0; i < cur[1]; i++)
      pre.push(cur[0])
    return pre
  }, [])

  let remainingToken = form.currentToken
  let numberOfBoxes = form.drawnBox
  let _numberOfBoxes = form.drawnBox
  let needToken = 0

  for (let i = 0; i < tokenList.length; i++) {
    if (form.drawnBox > i)
      continue

    const token = tokenList[i]

    if (remainingToken >= token) {
      numberOfBoxes++
      _numberOfBoxes++
      remainingToken -= token
    }
    else {
      if (_numberOfBoxes >= form.targetBox) {
        break
      }
      else {
        _numberOfBoxes++
        needToken += token
      }
    }
  }

  if (numberOfBoxes >= tokenList.length)
    numberOfBoxes += Math.floor(remainingToken / event.last)
  if (_numberOfBoxes >= tokenList.length && _numberOfBoxes < form.targetBox)
    needToken += (form.targetBox - _numberOfBoxes) * event.last
  return { totalBox: numberOfBoxes, needToken: needToken - remainingToken }
})
</script>

<template>
  <el-card m-auto w-500px header="战货计算">
    <el-form :model="form" label-width="120px">
      <el-form-item label="类型">
        <el-radio-group v-model="form.type">
          <el-radio v-for="event in eventInfo" :key="event.type" :label="event.type">
            {{ event.name }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="当前战货数量">
        <el-input v-model.number="form.currentToken" />
      </el-form-item>
      <el-form-item label="已抽箱数">
        <el-input v-model.number="form.drawnBox" />
      </el-form-item>
      <el-form-item label="目标箱数">
        <el-input v-model.number="form.targetBox" />
      </el-form-item>
    </el-form>

    <el-tag v-if="result.needToken <= 0" type="success" size="large">
      目前一共【 {{ result.totalBox.toLocaleString() }} 】箱,目标已达成！
    </el-tag>
    <el-tag v-else type="warning" size="large">
      目前一共【 {{ result.totalBox.toLocaleString() }} 】箱,距离目标还差【 {{ result.needToken.toLocaleString() }} 】战货
    </el-tag>
  </el-card>
</template>
