<script setup lang="ts">
const formEl = ref()
const formData = reactive({
  title: '',
  team: '',
  weapon: '',
  summon: '',
  trial: '',
  ring1: '',
  ring2: '',
  ring3: '',
  comment: '',
})

const { copy } = useClipboard()

async function copyForm() {
  const { title, team, weapon, summon, trial, ring1, ring2, ring3, comment }
    = formData
  const content = `
[size=150%][b]${title}[/b][/size]   
[list]
[*]阵容：
${team}
[*]武器盘：
[collapse]
${weapon}
[/collapse]
[*]召唤：
[collapse]
${summon}
[/collapse]
[*]木桩图：
[collapse]
${trial}
[/collapse]
[*]戒指及耳环情况：
[list]
[*]${ring1}
[*]${ring2}
[*]${ring3}
[/list]
[*]备注：
${comment}
[/list]
        `
  await copy(content)
  ElMessage.success('已复制到剪贴板')
}

function reset() {
  formEl.value.resetFields()
}
</script>

<template>
  <div class="app-container">
    <el-card class="box-card" header="打牛贴生成器">
      <el-form ref="formEl" :model="formData" label-width="100px">
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="formData.title"
            placeholder="平时/副团/AT 老王/方阵 职业 (FA)键数 奥义连携数"
          />
        </el-form-item>
        <el-form-item label="阵容" prop="team">
          <el-input v-model="formData.team" placeholder="[img]xxx[/img]" />
        </el-form-item>
        <el-form-item label="武器盘" prop="weapon">
          <el-input v-model="formData.weapon" placeholder="[img]xxx[/img]" />
        </el-form-item>
        <el-form-item label="召唤" prop="summon">
          <el-input v-model="formData.summon" placeholder="[img]xxx[/img]" />
        </el-form-item>
        <el-form-item label="木桩" prop="trial">
          <el-input v-model="formData.trial" placeholder="[img]xxx[/img]" />
        </el-form-item>
        <el-form-item label="角色属性1" prop="ring1">
          <el-input
            v-model="formData.ring1"
            placeholder="1508：婚戒、戒指15奥上、耳环10浑身、攻击觉醒Lv8"
          />
        </el-form-item>
        <el-form-item label="角色属性2" prop="ring2">
          <el-input v-model="formData.ring2" />
        </el-form-item>
        <el-form-item label="角色属性3" prop="ring3">
          <el-input v-model="formData.ring3" />
        </el-form-item>
        <el-form-item label="备注" prop="comment">
          <el-input
            v-model="formData.comment"
            type="textarea"
            :autosize="{ minRows: 5 }"
            placeholder="有无船炉，按键是啥，法武U武插件，等等"
          />
        </el-form-item>
      </el-form>
      <div fc>
        <el-button type="primary" @click="copyForm">
          生成
        </el-button>
        <el-button type="primary" @click="reset">
          重置
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.box-card {
  width: 600px;
  margin: auto;
}
</style>
