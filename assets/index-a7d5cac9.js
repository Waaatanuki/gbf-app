import"./base-d162ef96.js";import{E as b}from"./el-card-c6491a2c.js";import{E}from"./el-button-a3f7639e.js";import{E as y,a as U}from"./el-form-item-7e6f2d4a.js";import{E as v}from"./el-input-4552dc9d.js";import{b as w}from"./index-33390c92.js";import{E as $}from"./el-message-89a1a08b.js";import{e as k,r as C,Y as F,g as B,h as z,v as e,p as m,k as a,j as I,X as _}from"./index-e1e4d07d.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-927a9af8.js";import"./use-form-item-77ae3ce7.js";import"./constants-4db3609e.js";import"./icon-4d217982.js";import"./index-f8748455.js";import"./index-5725fa7a.js";import"./_baseClone-2e5d4ca7.js";import"./_Uint8Array-6184b0e9.js";import"./_initCloneObject-b176e66b.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./aria-60e0cdc6.js";const A={class:"app-container"},T={fc:""},j=k({__name:"index",setup(D){const s=C(),l=F({title:"",team:"",weapon:"",summon:"",trial:"",ring1:"",ring2:"",ring3:"",comment:""}),{copy:f}=w();async function c(){const{title:u,team:o,weapon:n,summon:r,trial:i,ring1:p,ring2:d,ring3:t,comment:g}=l,x=`
[size=150%][b]${u}[/b][/size]   
[list]
[*]阵容：
${o}
[*]武器盘：
[collapse]
${n}
[/collapse]
[*]召唤：
[collapse]
${r}
[/collapse]
[*]木桩图：
[collapse]
${i}
[/collapse]
[*]戒指及耳环情况：
[list]
[*]${p}
[*]${d}
[*]${t}
[/list]
[*]备注：
${g}
[/list]
        `;await f(x),$.success("已复制到剪贴板")}function V(){s.value.resetFields()}return(u,o)=>{const n=v,r=y,i=U,p=E,d=b;return B(),z("div",A,[e(d,{class:"box-card",header:"打牛贴生成器"},{default:m(()=>[e(i,{ref_key:"formEl",ref:s,model:a(l),"label-width":"100px"},{default:m(()=>[e(r,{label:"标题",prop:"title"},{default:m(()=>[e(n,{modelValue:a(l).title,"onUpdate:modelValue":o[0]||(o[0]=t=>a(l).title=t),placeholder:"平时/副团/AT 老王/方阵 职业 (FA)键数 奥义连携数"},null,8,["modelValue"])]),_:1}),e(r,{label:"阵容",prop:"team"},{default:m(()=>[e(n,{modelValue:a(l).team,"onUpdate:modelValue":o[1]||(o[1]=t=>a(l).team=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"武器盘",prop:"weapon"},{default:m(()=>[e(n,{modelValue:a(l).weapon,"onUpdate:modelValue":o[2]||(o[2]=t=>a(l).weapon=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"召唤",prop:"summon"},{default:m(()=>[e(n,{modelValue:a(l).summon,"onUpdate:modelValue":o[3]||(o[3]=t=>a(l).summon=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"木桩",prop:"trial"},{default:m(()=>[e(n,{modelValue:a(l).trial,"onUpdate:modelValue":o[4]||(o[4]=t=>a(l).trial=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性1",prop:"ring1"},{default:m(()=>[e(n,{modelValue:a(l).ring1,"onUpdate:modelValue":o[5]||(o[5]=t=>a(l).ring1=t),placeholder:"1508：婚戒、戒指15奥上、耳环10浑身、攻击觉醒Lv8"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性2",prop:"ring2"},{default:m(()=>[e(n,{modelValue:a(l).ring2,"onUpdate:modelValue":o[6]||(o[6]=t=>a(l).ring2=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性3",prop:"ring3"},{default:m(()=>[e(n,{modelValue:a(l).ring3,"onUpdate:modelValue":o[7]||(o[7]=t=>a(l).ring3=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"备注",prop:"comment"},{default:m(()=>[e(n,{modelValue:a(l).comment,"onUpdate:modelValue":o[8]||(o[8]=t=>a(l).comment=t),type:"textarea",autosize:{minRows:5},placeholder:"有无船炉，按键是啥，法武U武插件，等等"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),I("div",T,[e(p,{type:"primary",onClick:c},{default:m(()=>[_(" 生成 ")]),_:1}),e(p,{type:"primary",onClick:V},{default:m(()=>[_(" 重置 ")]),_:1})])]),_:1})])}}});const ae=N(j,[["__scopeId","data-v-76d4174e"]]);export{ae as default};
