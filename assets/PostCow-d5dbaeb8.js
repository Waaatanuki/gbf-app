import"./base-d162ef96.js";import{E}from"./el-card-c6491a2c.js";import{E as w}from"./el-button-a3f7639e.js";import{E as y,a as x}from"./el-form-item-7e6f2d4a.js";import{E as C}from"./el-input-4552dc9d.js";import{b as U}from"./index-33390c92.js";import{E as $}from"./el-message-89a1a08b.js";import{e as v,r as k,Y as B,g as F,m as z,p as m,v as e,k as a,j as I,X as f}from"./index-e1e4d07d.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-927a9af8.js";import"./use-form-item-77ae3ce7.js";import"./constants-4db3609e.js";import"./icon-4d217982.js";import"./index-f8748455.js";import"./index-5725fa7a.js";import"./_baseClone-2e5d4ca7.js";import"./_Uint8Array-6184b0e9.js";import"./_initCloneObject-b176e66b.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./aria-60e0cdc6.js";const P={class:"footer"},j=v({__name:"PostCow",setup(D){const u=k(),o=B({title:"",team:"",weapon:"",summon:"",trial:"",ring1:"",ring2:"",ring3:"",comment:""}),{copy:_}=U();async function V(){const{title:d,team:l,weapon:n,summon:r,trial:s,ring1:p,ring2:i,ring3:t,comment:b}=o,g=`
[size=150%][b]${d}[/b][/size]   
[list]
[*]阵容：
${l}
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
${s}
[/collapse]
[*]戒指及耳环情况：
[list]
[*]${p}
[*]${i}
[*]${t}
[/list]
[*]备注：
${b}
[/list]
        `;await _(g),$.success("已复制到剪贴板")}function c(){u.value.resetFields()}return(d,l)=>{const n=C,r=y,s=x,p=w,i=E;return F(),z(i,{class:"box-card",header:"打牛贴生成器"},{default:m(()=>[e(s,{ref_key:"formEl",ref:u,model:a(o),"label-width":"120px"},{default:m(()=>[e(r,{label:"标题",prop:"title"},{default:m(()=>[e(n,{modelValue:a(o).title,"onUpdate:modelValue":l[0]||(l[0]=t=>a(o).title=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"阵容",prop:"team"},{default:m(()=>[e(n,{modelValue:a(o).team,"onUpdate:modelValue":l[1]||(l[1]=t=>a(o).team=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"武器盘",prop:"weapon"},{default:m(()=>[e(n,{modelValue:a(o).weapon,"onUpdate:modelValue":l[2]||(l[2]=t=>a(o).weapon=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"召唤",prop:"summon"},{default:m(()=>[e(n,{modelValue:a(o).summon,"onUpdate:modelValue":l[3]||(l[3]=t=>a(o).summon=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"木桩",prop:"trial"},{default:m(()=>[e(n,{modelValue:a(o).trial,"onUpdate:modelValue":l[4]||(l[4]=t=>a(o).trial=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"戒指及耳环情况1",prop:"ring1"},{default:m(()=>[e(n,{modelValue:a(o).ring1,"onUpdate:modelValue":l[5]||(l[5]=t=>a(o).ring1=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"戒指及耳环情况2",prop:"ring2"},{default:m(()=>[e(n,{modelValue:a(o).ring2,"onUpdate:modelValue":l[6]||(l[6]=t=>a(o).ring2=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"戒指及耳环情况3",prop:"ring3"},{default:m(()=>[e(n,{modelValue:a(o).ring3,"onUpdate:modelValue":l[7]||(l[7]=t=>a(o).ring3=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"备注",prop:"comment"},{default:m(()=>[e(n,{modelValue:a(o).comment,"onUpdate:modelValue":l[8]||(l[8]=t=>a(o).comment=t),type:"textarea",autosize:{minRows:5}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),I("div",P,[e(p,{type:"primary",onClick:V},{default:m(()=>[f(" 生成 ")]),_:1}),e(p,{type:"primary",onClick:c},{default:m(()=>[f(" 重置 ")]),_:1})])]),_:1})}}});const te=N(j,[["__scopeId","data-v-9fbfc7e0"]]);export{te as default};
