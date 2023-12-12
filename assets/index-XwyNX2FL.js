import{d as b,g as E,h as w,i as U,o as y,c as $,a as e,w as m,e as a,j as f,b as v,E as C,_ as k}from"./index-kh4_3tnz.js";import{E as F}from"./el-button-zp-FwRd0.js";import{E as B,a as z}from"./el-form-item-bPdNt8H2.js";import{E as I}from"./el-input-EMuTv3Rn.js";import{E as N}from"./el-message-iRCCBaD5.js";import"./index-C39bBYti.js";import"./use-form-item-ZuYs7LEE.js";import"./castArray-iqluTSQD.js";import"./_baseClone-i60ojiCo.js";import"./_Uint8Array-KwYoMc4c.js";import"./_initCloneObject-tVU8VaW3.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./aria-ClGo7ZJR.js";const A={class:"app-container"},T={fc:""},j=b({__name:"index",setup(D){const s=E(),l=w({title:"",team:"",weapon:"",summon:"",trial:"",ring1:"",ring2:"",ring3:"",comment:""}),{copy:c}=U();async function V(){const{title:u,team:o,weapon:n,summon:r,trial:d,ring1:p,ring2:i,ring3:t,comment:g}=l,x=`
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
        `;await c(x),N.success("已复制到剪贴板")}function _(){s.value.resetFields()}return(u,o)=>{const n=I,r=B,d=z,p=F,i=C;return y(),$("div",A,[e(i,{class:"box-card",header:"打牛贴生成器"},{default:m(()=>[e(d,{ref_key:"formEl",ref:s,model:a(l),"label-width":"100px"},{default:m(()=>[e(r,{label:"标题",prop:"title"},{default:m(()=>[e(n,{modelValue:a(l).title,"onUpdate:modelValue":o[0]||(o[0]=t=>a(l).title=t),placeholder:"平时/副团/AT 老王/方阵 职业 (FA)键数 奥义连携数"},null,8,["modelValue"])]),_:1}),e(r,{label:"阵容",prop:"team"},{default:m(()=>[e(n,{modelValue:a(l).team,"onUpdate:modelValue":o[1]||(o[1]=t=>a(l).team=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"武器盘",prop:"weapon"},{default:m(()=>[e(n,{modelValue:a(l).weapon,"onUpdate:modelValue":o[2]||(o[2]=t=>a(l).weapon=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"召唤",prop:"summon"},{default:m(()=>[e(n,{modelValue:a(l).summon,"onUpdate:modelValue":o[3]||(o[3]=t=>a(l).summon=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"木桩",prop:"trial"},{default:m(()=>[e(n,{modelValue:a(l).trial,"onUpdate:modelValue":o[4]||(o[4]=t=>a(l).trial=t),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性1",prop:"ring1"},{default:m(()=>[e(n,{modelValue:a(l).ring1,"onUpdate:modelValue":o[5]||(o[5]=t=>a(l).ring1=t),placeholder:"1508：婚戒、戒指15奥上、耳环10浑身、攻击觉醒Lv8"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性2",prop:"ring2"},{default:m(()=>[e(n,{modelValue:a(l).ring2,"onUpdate:modelValue":o[6]||(o[6]=t=>a(l).ring2=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性3",prop:"ring3"},{default:m(()=>[e(n,{modelValue:a(l).ring3,"onUpdate:modelValue":o[7]||(o[7]=t=>a(l).ring3=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"备注",prop:"comment"},{default:m(()=>[e(n,{modelValue:a(l).comment,"onUpdate:modelValue":o[8]||(o[8]=t=>a(l).comment=t),type:"textarea",autosize:{minRows:5},placeholder:"有无船炉，按键是啥，法武U武插件，等等"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),v("div",T,[e(p,{type:"primary",onClick:V},{default:m(()=>[f(" 生成 ")]),_:1}),e(p,{type:"primary",onClick:_},{default:m(()=>[f(" 重置 ")]),_:1})])]),_:1})])}}}),Y=k(j,[["__scopeId","data-v-de3961f9"]]);export{Y as default};
