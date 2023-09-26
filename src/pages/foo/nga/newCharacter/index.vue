<script setup lang="ts">
import { Minus, Plus } from '@element-plus/icons-vue'

const formEl = ref()

const state = reactive({
  formData: {
    roleName: '',
    roleImage: '',
    element: '',
    race: '',
    weapon1: '',
    weapon2: '',
    voice: '',
    chargeAttackName: '',
    chargeAttackEffect: '',
    skillList: [
      {
        name: '',
        colddown: '',
        duration: '',
        effect: '',
      },
    ],
    supportSkillList: [
      {
        name: '',
        effect: '',
      },
    ],
  },
  elementList: ['火', '水', '土', '风', '光', '暗'],
  raceList: ['星晶兽', '人类', '兽耳', '豆丁', '牛族', '其他'],
  weaponList: ['剑', '短', '枪', '斧', '杖', '铳', '拳', '弓', '琴', '刀'],
})

const { formData, elementList, raceList, weaponList } = toRefs(state)

const { copy } = useClipboard()

async function copyForm() {
  const {
    roleName,
    roleImage,
    element,
    race,
    weapon1,
    weapon2,
    voice,
    chargeAttackName,
    chargeAttackEffect,
  } = formData.value

  let content = `
[quote][table]
[tr]
[td15][b]姓名[/b][/td]
[td20]
${roleName.split('/')[0]}
${roleName.split('/')[1] ?? ''}
[/td]
[td width=65 rowspan=5]${roleImage}[/td]
[/tr]

[tr]
[td][b]属性[/b][/td]
[td]${element}[/td]
[/tr]

[tr]
[td][b]种族[/b][/td]
[td]${race}[/td]
[/tr]

[tr]
[td][b]得意武器[/b][/td]
[td]${weapon1}${weapon2 ? `/${weapon2}` : ''}[/td]
[/tr]

[tr]
[td][b]声优[/b][/td]
[td]${voice}[/td]
[/tr]
[/table][/quote]

[quote][table]
[tr]
[td15][b]奥义[/b][/td]
[td][b]效果[/b][/td]
[/tr]

[tr]
[td]${chargeAttackName}[/td]
[td]${chargeAttackEffect}[/td]
[/tr]
[/table][/quote]
        `

  let skillTableStr = formData.value.skillList.reduce(
    (pre: string, cur) =>
      `${pre
      }
[tr]
[td]${cur.name}[/td]
[td]${cur.colddown}[/td]
[td]${cur.duration}[/td]
[td]${cur.effect}[/td]
[/tr]
`,
    `
[quote][table]
[tr]
[td15][b]技能[/b][/td]
[td10][b]冷却时间[/b][/td]
[td10][b]持续时间[/b][/td]
[td][b]效果[/b][/td]
[/tr]
  `,
  )
  skillTableStr += '[/table][/quote]'

  let supportSkillTableStr = formData.value.supportSkillList.reduce(
    (pre: string, cur) =>
      `${pre
      }
[tr]
[td]${cur.name}[/td]
[td]${cur.effect}[/td]
[/tr]
`,
    `
    
[quote][table]
[tr]
[td15][b]被动[/b][/td]
[td][b]效果[/b][/td]
[/tr]
  `,
  )
  supportSkillTableStr += '[/table][/quote]'

  content = content + skillTableStr + supportSkillTableStr
  await copy(content)
  ElMessage.success('已复制到剪贴板')
}

// 增加技能
function handlePlus(index: any, type: string) {
  if (type === 'skill') {
    formData.value.skillList.splice(index + 1, 0, {
      name: '',
      colddown: '',
      duration: '',
      effect: '',
    })
  }
  if (type === 'supportSkill') {
    formData.value.supportSkillList.splice(index + 1, 0, {
      name: '',
      effect: '',
    })
  }
}

// 删除技能
function handleRemove(index: any, type: string) {
  if (type === 'skill') {
    formData.value.skillList.splice(index, 1)
    if (formData.value.skillList.length === 0) {
      formData.value.skillList = [
        {
          name: '',
          colddown: '',
          duration: '',
          effect: '',
        },
      ]
    }
  }
  if (type === 'supportSkill') {
    formData.value.supportSkillList.splice(index, 1)
    if (formData.value.supportSkillList.length === 0) {
      formData.value.supportSkillList = [
        {
          name: '',
          effect: '',
        },
      ]
    }
  }
}

function reset() {
  formEl.value.resetFields()
  formData.value.skillList = [
    {
      name: '',
      colddown: '',
      duration: '',
      effect: '',
    },
  ]
  formData.value.supportSkillList = [
    {
      name: '',
      effect: '',
    },
  ]
}
</script>

<template>
  <div class="app-container">
    <el-card class="box-card" header="新角色介绍">
      <el-form ref="formEl" :model="formData" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="角色名" prop="roleName">
              <el-input v-model="formData.roleName" placeholder="日文/中文" />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="声优" prop="voice">
              <el-input v-model="formData.voice" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="角色图片" prop="roleImage">
          <el-input v-model="formData.roleImage" placeholder="[img]xxx[/img]" />
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item label="属性" prop="element">
              <el-select v-model="formData.element">
                <el-option
                  v-for="item, idx in elementList" :key="idx"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="种族" prop="race">
              <el-select v-model="formData.race">
                <el-option
                  v-for="item, idx in raceList" :key="idx"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="得意武器1" prop="weapon1">
              <el-select v-model="formData.weapon1" clearable>
                <el-option
                  v-for="item, idx in weaponList" :key="idx"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="得意武器2" prop="weapon2">
              <el-select v-model="formData.weapon2" clearable>
                <el-option
                  v-for="item, idx in weaponList" :key="idx"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="奥义名" prop="chargeAttackName">
              <el-input v-model="formData.chargeAttackName" />
            </el-form-item>
          </el-col>

          <el-col :span="18">
            <el-form-item label="奥义效果" prop="chargeAttackEffect">
              <el-input v-model="formData.chargeAttackEffect" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-for="skill, idx in formData.skillList" :key="idx">
          <el-col :span="8">
            <el-form-item :label="`技能${idx + 1}`">
              <el-input v-model="skill.name" />
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="冷却">
              <el-input v-model="skill.colddown" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="持续时间">
              <el-input v-model="skill.duration" />
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <div class="operation-button">
              <el-button
                type="success"
                :icon="Plus"
                circle
                @click="handlePlus(idx, 'skill')"
              />
              <el-button
                type="danger"
                :icon="Minus"
                circle
                @click="handleRemove(idx, 'skill')"
              />
            </div>
          </el-col>

          <el-col :span="24">
            <el-form-item label="效果">
              <el-input
                v-model="skill.effect"
                type="textarea"
                :autosize="{ minRows: 2 }"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-for="skill, idx in formData.supportSkillList" :key="idx">
          <el-col :span="6">
            <el-form-item :label="`被动${idx + 1}`">
              <el-input v-model="skill.name" />
            </el-form-item>
          </el-col>

          <el-col :span="14">
            <el-form-item label="效果">
              <el-input v-model="skill.effect" />
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <div class="operation-button">
              <el-button
                type="success"
                :icon="Plus"
                circle
                @click="handlePlus(idx, 'supportSkill')"
              />
              <el-button
                type="danger"
                :icon="Minus"
                circle
                @click="handleRemove(idx, 'supportSkill')"
              />
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div class="footer">
        <el-button type="primary" @click="copyForm">
          生成
        </el-button>
        <el-button type="warning" @click="reset">
          重置
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.box-card {
  width: 800px;
  margin: auto;
}
.operation-button {
  display: flex;
  justify-content: right;
  //   margin-top: 30px;
}
.footer {
  display: flex;
  justify-content: center;
}
</style>
