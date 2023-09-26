import{d as b,g as E,h as y,i as w,o as U,c as $,a as e,w as n,e as a,b as v,j as _,E as C,_ as k}from"./index-db0350d3.js";import{E as F}from"./el-button-e9263de6.js";import{E as B,a as z}from"./el-form-item-ad57c4d4.js";import{E as I}from"./el-input-44c0d74c.js";import{E as N}from"./el-message-17bbf503.js";import"./index-698547a0.js";import"./use-form-item-4b9f9d03.js";import"./castArray-2a7d1104.js";import"./_baseClone-16ccc54b.js";import"./_Uint8Array-bbbc9a33.js";import"./_initCloneObject-f815f892.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./aria-60e0cdc6.js";const A={class:"app-container"},T={fc:""},j=b({__name:"index",setup(D){const s=E(),l=y({title:"",team:"",weapon:"",summon:"",trial:"",ring1:"",ring2:"",ring3:"",comment:""}),{copy:f}=w();async function c(){const{title:u,team:o,weapon:m,summon:r,trial:d,ring1:p,ring2:i,ring3:t,comment:g}=l,x=`
[size=150%][b]${u}[/b][/size]   
[list]
[*]阵容：
${o}
[*]武器盘：
[collapse]
${m}
[/collapse]
[*]召唤：
[collapse]
${r}
[/collapse]
[*]木桩图：
[collapse]
${d}
[/collapse]
[*]戒指及耳环情况：
[list]
[*]${p}
[*]${i}
[*]${t}
[/list]
[*]备注：
${g}
[/list]
        `;await f(x),N.success("已复制到剪贴板")}function V(){s.value.resetFields()}return(u,o)=>{const m=I,r=B,d=z,p=F,i=C;return U(),$("div",A,[e(i,{class:"box-card",header:"打牛贴生成器"},{default:n(()=>[e(d,{ref_key:"formEl",ref:s,model:a(l),"label-width":"100px"},{default:n(()=>[e(r,{label:"标题",prop:"title"},{default:n(()=>[e(m,{modelValue:a(l).title,"onUpdate:modelValue":o[0]||(o[0]=t=>a(l).title=t),placeholder:"平时/副团/AT 老王/方阵 职业 (FA)键数 奥义连携数"},null,8,["modelValue"])]),_:1}),e(r,{label:"阵容",prop:"team"},{default:n(()=>[e(m,{modelValue:a(l).team,"onUpdate:modelValue":o[1]||(o[1]=t=>a(l).team=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"武器盘",prop:"weapon"},{default:n(()=>[e(m,{modelValue:a(l).weapon,"onUpdate:modelValue":o[2]||(o[2]=t=>a(l).weapon=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"召唤",prop:"summon"},{default:n(()=>[e(m,{modelValue:a(l).summon,"onUpdate:modelValue":o[3]||(o[3]=t=>a(l).summon=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"木桩",prop:"trial"},{default:n(()=>[e(m,{modelValue:a(l).trial,"onUpdate:modelValue":o[4]||(o[4]=t=>a(l).trial=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性1",prop:"ring1"},{default:n(()=>[e(m,{modelValue:a(l).ring1,"onUpdate:modelValue":o[5]||(o[5]=t=>a(l).ring1=t),placeholder:"1508：婚戒、戒指15奥上、耳环10浑身、攻击觉醒Lv8"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性2",prop:"ring2"},{default:n(()=>[e(m,{modelValue:a(l).ring2,"onUpdate:modelValue":o[6]||(o[6]=t=>a(l).ring2=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性3",prop:"ring3"},{default:n(()=>[e(m,{modelValue:a(l).ring3,"onUpdate:modelValue":o[7]||(o[7]=t=>a(l).ring3=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"备注",prop:"comment"},{default:n(()=>[e(m,{modelValue:a(l).comment,"onUpdate:modelValue":o[8]||(o[8]=t=>a(l).comment=t),type:"textarea",autosize:{minRows:5},placeholder:"有无船炉，按键是啥，法武U武插件，等等"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),v("div",T,[e(p,{type:"primary",onClick:c},{default:n(()=>[_(" 生成 ")]),_:1}),e(p,{type:"primary",onClick:V},{default:n(()=>[_(" 重置 ")]),_:1})])]),_:1})])}}});const Y=k(j,[["__scopeId","data-v-de3961f9"]]);export{Y as default};
