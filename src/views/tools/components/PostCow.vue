<template>
  <el-card class="box-card" header="打牛贴生成器">
    <el-form :model="formData" label-width="120px" ref="formEl">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title" />
      </el-form-item>
      <el-form-item label="阵容" prop="team">
        <el-input v-model="formData.team" />
      </el-form-item>
      <el-form-item label="武器盘" prop="weapon">
        <el-input v-model="formData.weapon" />
      </el-form-item>
      <el-form-item label="召唤" prop="summon">
        <el-input v-model="formData.summon" />
      </el-form-item>
      <el-form-item label="木桩" prop="trial">
        <el-input v-model="formData.trial" />
      </el-form-item>
      <el-form-item label="戒指及耳环情况1" prop="ring1">
        <el-input v-model="formData.ring1" />
      </el-form-item>
      <el-form-item label="戒指及耳环情况2" prop="ring2">
        <el-input v-model="formData.ring2" />
      </el-form-item>
      <el-form-item label="戒指及耳环情况3" prop="ring3">
        <el-input v-model="formData.ring3" />
      </el-form-item>
      <el-form-item label="备注" prop="comment">
        <el-input v-model="formData.comment" type="textarea" :autosize="{ minRows: 5 }" />
      </el-form-item>
    </el-form>
    <div class="footer">
      <el-button type="primary" @click="copyForm">生成</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
    </div>
  </el-card>
</template>

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
  const { title, team, weapon, summon, trial, ring1, ring2, ring3, comment } = formData
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

<style lang="less" scoped>
.box-card {
  width: 600px;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>
