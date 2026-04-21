import"./chunk-CilyBKbf.js";import{I as e,Q as t,_ as n,g as r,lt as i,p as a,st as o,u as s,v as c,vt as l}from"./runtime-core.esm-bundler-8Br1IfNb.js";import"./css-DxNnJ1GY.js";import{t as u}from"./css-D43tjSss.js";import{n as d,t as f}from"./css-SsIxu3ba.js";import{t as p}from"./css-B8jpQFgD2.js";import{t as m}from"./css-CMqAm8Eu.js";import{l as h,n as g}from"./index-ytFxdyNK.js";import{t as _}from"./_plugin-vue_export-helper-DjoU_TXQ.js";var v={class:`app-container`},y={fc:``},b=_(c({__name:`index`,setup(c){let _=i(),b=o({title:``,team:``,weapon:``,summon:``,trial:``,ring1:``,ring2:``,ring3:``,comment:``}),{copy:x}=g();async function S(){let{title:e,team:t,weapon:n,summon:r,trial:i,ring1:a,ring2:o,ring3:s,comment:c}=b;await x(`
[size=150%][b]${e}[/b][/size]   
[list]
[*]阵容：
${t}
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
[*]${a}
[*]${o}
[*]${s}
[/list]
[*]备注：
${c}
[/list]
        `),m.success(`已复制到剪贴板`)}function C(){_.value.resetFields()}return(i,o)=>{let c=u,m=d,g=f,x=p,w=h;return e(),a(`div`,v,[n(w,{class:`box-card`,header:`打牛贴生成器`},{default:t(()=>[n(g,{ref_key:`formEl`,ref:_,model:l(b),"label-width":`100px`},{default:t(()=>[n(m,{label:`标题`,prop:`title`},{default:t(()=>[n(c,{modelValue:l(b).title,"onUpdate:modelValue":o[0]||=e=>l(b).title=e,placeholder:`平时/副团/AT 老王/方阵 职业 (FA)键数 奥义连携数`},null,8,[`modelValue`])]),_:1}),n(m,{label:`阵容`,prop:`team`},{default:t(()=>[n(c,{modelValue:l(b).team,"onUpdate:modelValue":o[1]||=e=>l(b).team=e,placeholder:`[img]xxx[/img]`},null,8,[`modelValue`])]),_:1}),n(m,{label:`武器盘`,prop:`weapon`},{default:t(()=>[n(c,{modelValue:l(b).weapon,"onUpdate:modelValue":o[2]||=e=>l(b).weapon=e,placeholder:`[img]xxx[/img]`},null,8,[`modelValue`])]),_:1}),n(m,{label:`召唤`,prop:`summon`},{default:t(()=>[n(c,{modelValue:l(b).summon,"onUpdate:modelValue":o[3]||=e=>l(b).summon=e,placeholder:`[img]xxx[/img]`},null,8,[`modelValue`])]),_:1}),n(m,{label:`木桩`,prop:`trial`},{default:t(()=>[n(c,{modelValue:l(b).trial,"onUpdate:modelValue":o[4]||=e=>l(b).trial=e,placeholder:`[img]xxx[/img]`},null,8,[`modelValue`])]),_:1}),n(m,{label:`角色属性1`,prop:`ring1`},{default:t(()=>[n(c,{modelValue:l(b).ring1,"onUpdate:modelValue":o[5]||=e=>l(b).ring1=e,placeholder:`1508：婚戒、戒指15奥上、耳环10浑身、攻击觉醒Lv8`},null,8,[`modelValue`])]),_:1}),n(m,{label:`角色属性2`,prop:`ring2`},{default:t(()=>[n(c,{modelValue:l(b).ring2,"onUpdate:modelValue":o[6]||=e=>l(b).ring2=e},null,8,[`modelValue`])]),_:1}),n(m,{label:`角色属性3`,prop:`ring3`},{default:t(()=>[n(c,{modelValue:l(b).ring3,"onUpdate:modelValue":o[7]||=e=>l(b).ring3=e},null,8,[`modelValue`])]),_:1}),n(m,{label:`备注`,prop:`comment`},{default:t(()=>[n(c,{modelValue:l(b).comment,"onUpdate:modelValue":o[8]||=e=>l(b).comment=e,type:`textarea`,autosize:{minRows:5},placeholder:`有无船炉，按键是啥，法武U武插件，等等`},null,8,[`modelValue`])]),_:1})]),_:1},8,[`model`]),s(`div`,y,[n(x,{type:`primary`,onClick:S},{default:t(()=>[...o[9]||=[r(` 生成 `,-1)]]),_:1}),n(x,{type:`primary`,onClick:C},{default:t(()=>[...o[10]||=[r(` 重置 `,-1)]]),_:1})])]),_:1})])}}}),[[`__scopeId`,`data-v-de3961f9`]]);export{b as default};