import{d as b,r as E,G as y,a$ as w,a as U,c as $,a3 as e,w as n,aq as v,f as t,j as C,Z as _,aE as k,a8 as F}from"./index-eec80e3a.js";import{E as B}from"./el-button-5e4bc2ff.js";import{E as z,a as I}from"./el-form-item-51936f26.js";import{E as N}from"./el-message-8b3b17b8.js";import"./index-0b2fffe3.js";import"./index-f8748455.js";import"./_baseClone-1c1acd31.js";import"./_initCloneObject-338777b6.js";import"./aria-60e0cdc6.js";const A={class:"app-container"},T={fc:""},j=b({__name:"index",setup(q){const i=E(),l=y({title:"",team:"",weapon:"",summon:"",trial:"",ring1:"",ring2:"",ring3:"",comment:""}),{copy:f}=w();async function c(){const{title:u,team:o,weapon:m,summon:r,trial:p,ring1:d,ring2:s,ring3:a,comment:g}=l,x=`
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
${p}
[/collapse]
[*]戒指及耳环情况：
[list]
[*]${d}
[*]${s}
[*]${a}
[/list]
[*]备注：
${g}
[/list]
        `;await f(x),N.success("已复制到剪贴板")}function V(){i.value.resetFields()}return(u,o)=>{const m=k,r=z,p=I,d=B,s=v;return U(),$("div",A,[e(s,{class:"box-card",header:"打牛贴生成器"},{default:n(()=>[e(p,{ref_key:"formEl",ref:i,model:t(l),"label-width":"100px"},{default:n(()=>[e(r,{label:"标题",prop:"title"},{default:n(()=>[e(m,{modelValue:t(l).title,"onUpdate:modelValue":o[0]||(o[0]=a=>t(l).title=a),placeholder:"平时/副团/AT 老王/方阵 职业 (FA)键数 奥义连携数"},null,8,["modelValue"])]),_:1}),e(r,{label:"阵容",prop:"team"},{default:n(()=>[e(m,{modelValue:t(l).team,"onUpdate:modelValue":o[1]||(o[1]=a=>t(l).team=a),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"武器盘",prop:"weapon"},{default:n(()=>[e(m,{modelValue:t(l).weapon,"onUpdate:modelValue":o[2]||(o[2]=a=>t(l).weapon=a),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"召唤",prop:"summon"},{default:n(()=>[e(m,{modelValue:t(l).summon,"onUpdate:modelValue":o[3]||(o[3]=a=>t(l).summon=a),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"木桩",prop:"trial"},{default:n(()=>[e(m,{modelValue:t(l).trial,"onUpdate:modelValue":o[4]||(o[4]=a=>t(l).trial=a),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性1",prop:"ring1"},{default:n(()=>[e(m,{modelValue:t(l).ring1,"onUpdate:modelValue":o[5]||(o[5]=a=>t(l).ring1=a),placeholder:"1508：婚戒、戒指15奥上、耳环10浑身、攻击觉醒Lv8"},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性2",prop:"ring2"},{default:n(()=>[e(m,{modelValue:t(l).ring2,"onUpdate:modelValue":o[6]||(o[6]=a=>t(l).ring2=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"角色属性3",prop:"ring3"},{default:n(()=>[e(m,{modelValue:t(l).ring3,"onUpdate:modelValue":o[7]||(o[7]=a=>t(l).ring3=a)},null,8,["modelValue"])]),_:1}),e(r,{label:"备注",prop:"comment"},{default:n(()=>[e(m,{modelValue:t(l).comment,"onUpdate:modelValue":o[8]||(o[8]=a=>t(l).comment=a),type:"textarea",autosize:{minRows:5},placeholder:"有无船炉，按键是啥，法武U武插件，等等"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),C("div",T,[e(d,{type:"primary",onClick:c},{default:n(()=>[_(" 生成 ")]),_:1}),e(d,{type:"primary",onClick:V},{default:n(()=>[_(" 重置 ")]),_:1})])]),_:1})])}}});const O=F(j,[["__scopeId","data-v-76d4174e"]]);export{O as default};
