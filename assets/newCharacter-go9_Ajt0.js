import"./chunk-CilyBKbf.js";import{I as e,Q as t,R as n,_ as r,d as i,g as a,ht as o,i as s,lt as c,p as l,st as u,u as d,v as f,vt as p}from"./runtime-core.esm-bundler-8Br1IfNb.js";import"./css-DxNnJ1GY.js";import{n as m,t as h}from"./css-C0k-mNQc.js";import{t as g}from"./css-ClqSAfjz.js";import{b as _,x as v}from"./icon-D8rblXpj.js";import{n as y,t as b}from"./css-SsIxu3ba.js";import{t as x}from"./css-DKikPFs32.js";import{t as S}from"./css-B5t-OEht.js";import{t as C}from"./css-QqzDFjmx.js";import{t as w}from"./css-BWHZg5J4.js";import{l as T,n as E}from"./index-5UX4THt4.js";import{t as D}from"./_plugin-vue_export-helper-DjoU_TXQ.js";var O={class:`app-container`},k={class:`operation-button`},A={class:`operation-button`},j={class:`footer`},M=D(f({__name:`index`,setup(f){let D=c(),{formData:M,elementList:N,raceList:P,weaponList:F}=o(u({formData:{roleName:``,roleImage:``,element:``,race:``,weapon1:``,weapon2:``,voice:``,chargeAttackName:``,chargeAttackEffect:``,skillList:[{name:``,colddown:``,duration:``,effect:``}],supportSkillList:[{name:``,effect:``}]},elementList:[`火`,`水`,`土`,`风`,`光`,`暗`],raceList:[`星晶兽`,`人类`,`兽耳`,`豆丁`,`牛族`,`其他`],weaponList:[`剑`,`短`,`枪`,`斧`,`杖`,`铳`,`拳`,`弓`,`琴`,`刀`]})),{copy:I}=E();async function L(){let{roleName:e,roleImage:t,element:n,race:r,weapon1:i,weapon2:a,voice:o,chargeAttackName:s,chargeAttackEffect:c}=M.value,l=`
[quote][table]
[tr]
[td15][b]姓名[/b][/td]
[td20]
${e.split(`/`)[0]}
${e.split(`/`)[1]??``}
[/td]
[td width=65 rowspan=5]${t}[/td]
[/tr]

[tr]
[td][b]属性[/b][/td]
[td]${n}[/td]
[/tr]

[tr]
[td][b]种族[/b][/td]
[td]${r}[/td]
[/tr]

[tr]
[td][b]得意武器[/b][/td]
[td]${i}${a?`/${a}`:``}[/td]
[/tr]

[tr]
[td][b]声优[/b][/td]
[td]${o}[/td]
[/tr]
[/table][/quote]

[quote][table]
[tr]
[td15][b]奥义[/b][/td]
[td][b]效果[/b][/td]
[/tr]

[tr]
[td]${s}[/td]
[td]${c}[/td]
[/tr]
[/table][/quote]
        `,u=M.value.skillList.reduce((e,t)=>`${e}
[tr]
[td]${t.name}[/td]
[td]${t.colddown}[/td]
[td]${t.duration}[/td]
[td]${t.effect}[/td]
[/tr]
`,`
[quote][table]
[tr]
[td15][b]技能[/b][/td]
[td10][b]冷却时间[/b][/td]
[td10][b]持续时间[/b][/td]
[td][b]效果[/b][/td]
[/tr]
  `);u+=`[/table][/quote]`;let d=M.value.supportSkillList.reduce((e,t)=>`${e}
[tr]
[td]${t.name}[/td]
[td]${t.effect}[/td]
[/tr]
`,`
    
[quote][table]
[tr]
[td15][b]被动[/b][/td]
[td][b]效果[/b][/td]
[/tr]
  `);d+=`[/table][/quote]`,l=l+u+d,await I(l),w.success(`已复制到剪贴板`)}function R(e,t){t===`skill`&&M.value.skillList.splice(e+1,0,{name:``,colddown:``,duration:``,effect:``}),t===`supportSkill`&&M.value.supportSkillList.splice(e+1,0,{name:``,effect:``})}function z(e,t){t===`skill`&&(M.value.skillList.splice(e,1),M.value.skillList.length===0&&(M.value.skillList=[{name:``,colddown:``,duration:``,effect:``}])),t===`supportSkill`&&(M.value.supportSkillList.splice(e,1),M.value.supportSkillList.length===0&&(M.value.supportSkillList=[{name:``,effect:``}]))}function B(){D.value.resetFields(),M.value.skillList=[{name:``,colddown:``,duration:``,effect:``}],M.value.supportSkillList=[{name:``,effect:``}]}return(o,c)=>{let u=g,f=y,w=S,E=C,I=h,V=m,H=x,U=b,W=T;return e(),l(`div`,O,[r(W,{class:`box-card`,header:`新角色介绍`},{default:t(()=>[r(U,{ref_key:`formEl`,ref:D,model:p(M),"label-width":`80px`},{default:t(()=>[r(E,null,{default:t(()=>[r(w,{span:12},{default:t(()=>[r(f,{label:`角色名`,prop:`roleName`},{default:t(()=>[r(u,{modelValue:p(M).roleName,"onUpdate:modelValue":c[0]||=e=>p(M).roleName=e,placeholder:`日文/中文`},null,8,[`modelValue`])]),_:1})]),_:1}),r(w,{span:12},{default:t(()=>[r(f,{label:`声优`,prop:`voice`},{default:t(()=>[r(u,{modelValue:p(M).voice,"onUpdate:modelValue":c[1]||=e=>p(M).voice=e},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1}),r(f,{label:`角色图片`,prop:`roleImage`},{default:t(()=>[r(u,{modelValue:p(M).roleImage,"onUpdate:modelValue":c[2]||=e=>p(M).roleImage=e,placeholder:`[img]xxx[/img]`},null,8,[`modelValue`])]),_:1}),r(E,null,{default:t(()=>[r(w,{span:12},{default:t(()=>[r(f,{label:`属性`,prop:`element`},{default:t(()=>[r(V,{modelValue:p(M).element,"onUpdate:modelValue":c[3]||=e=>p(M).element=e},{default:t(()=>[(e(!0),l(s,null,n(p(N),(t,n)=>(e(),i(I,{key:n,label:t,value:t},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),_:1})]),_:1}),r(w,{span:12},{default:t(()=>[r(f,{label:`种族`,prop:`race`},{default:t(()=>[r(V,{modelValue:p(M).race,"onUpdate:modelValue":c[4]||=e=>p(M).race=e},{default:t(()=>[(e(!0),l(s,null,n(p(P),(t,n)=>(e(),i(I,{key:n,label:t,value:t},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),_:1})]),_:1})]),_:1}),r(E,null,{default:t(()=>[r(w,{span:12},{default:t(()=>[r(f,{label:`得意武器1`,prop:`weapon1`},{default:t(()=>[r(V,{modelValue:p(M).weapon1,"onUpdate:modelValue":c[5]||=e=>p(M).weapon1=e,clearable:``},{default:t(()=>[(e(!0),l(s,null,n(p(F),(t,n)=>(e(),i(I,{key:n,label:t,value:t},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),_:1})]),_:1}),r(w,{span:12},{default:t(()=>[r(f,{label:`得意武器2`,prop:`weapon2`},{default:t(()=>[r(V,{modelValue:p(M).weapon2,"onUpdate:modelValue":c[6]||=e=>p(M).weapon2=e,clearable:``},{default:t(()=>[(e(!0),l(s,null,n(p(F),(t,n)=>(e(),i(I,{key:n,label:t,value:t},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),_:1})]),_:1})]),_:1}),r(E,null,{default:t(()=>[r(w,{span:6},{default:t(()=>[r(f,{label:`奥义名`,prop:`chargeAttackName`},{default:t(()=>[r(u,{modelValue:p(M).chargeAttackName,"onUpdate:modelValue":c[7]||=e=>p(M).chargeAttackName=e},null,8,[`modelValue`])]),_:1})]),_:1}),r(w,{span:18},{default:t(()=>[r(f,{label:`奥义效果`,prop:`chargeAttackEffect`},{default:t(()=>[r(u,{modelValue:p(M).chargeAttackEffect,"onUpdate:modelValue":c[8]||=e=>p(M).chargeAttackEffect=e},null,8,[`modelValue`])]),_:1})]),_:1})]),_:1}),(e(!0),l(s,null,n(p(M).skillList,(n,a)=>(e(),i(E,{key:a},{default:t(()=>[r(w,{span:8},{default:t(()=>[r(f,{label:`技能${a+1}`},{default:t(()=>[r(u,{modelValue:n.name,"onUpdate:modelValue":e=>n.name=e},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:2},1032,[`label`])]),_:2},1024),r(w,{span:6},{default:t(()=>[r(f,{label:`冷却`},{default:t(()=>[r(u,{modelValue:n.colddown,"onUpdate:modelValue":e=>n.colddown=e},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:2},1024)]),_:2},1024),r(w,{span:6},{default:t(()=>[r(f,{label:`持续时间`},{default:t(()=>[r(u,{modelValue:n.duration,"onUpdate:modelValue":e=>n.duration=e},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:2},1024)]),_:2},1024),r(w,{span:4},{default:t(()=>[d(`div`,k,[r(H,{type:`success`,icon:p(v),circle:``,onClick:e=>R(a,`skill`)},null,8,[`icon`,`onClick`]),r(H,{type:`danger`,icon:p(_),circle:``,onClick:e=>z(a,`skill`)},null,8,[`icon`,`onClick`])])]),_:2},1024),r(w,{span:24},{default:t(()=>[r(f,{label:`效果`},{default:t(()=>[r(u,{modelValue:n.effect,"onUpdate:modelValue":e=>n.effect=e,type:`textarea`,autosize:{minRows:2}},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(e(!0),l(s,null,n(p(M).supportSkillList,(n,a)=>(e(),i(E,{key:a},{default:t(()=>[r(w,{span:6},{default:t(()=>[r(f,{label:`被动${a+1}`},{default:t(()=>[r(u,{modelValue:n.name,"onUpdate:modelValue":e=>n.name=e},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:2},1032,[`label`])]),_:2},1024),r(w,{span:14},{default:t(()=>[r(f,{label:`效果`},{default:t(()=>[r(u,{modelValue:n.effect,"onUpdate:modelValue":e=>n.effect=e},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:2},1024)]),_:2},1024),r(w,{span:4},{default:t(()=>[d(`div`,A,[r(H,{type:`success`,icon:p(v),circle:``,onClick:e=>R(a,`supportSkill`)},null,8,[`icon`,`onClick`]),r(H,{type:`danger`,icon:p(_),circle:``,onClick:e=>z(a,`supportSkill`)},null,8,[`icon`,`onClick`])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,[`model`]),d(`div`,j,[r(H,{type:`primary`,onClick:L},{default:t(()=>[...c[9]||=[a(` 生成 `,-1)]]),_:1}),r(H,{type:`warning`,onClick:B},{default:t(()=>[...c[10]||=[a(` 重置 `,-1)]]),_:1})])]),_:1})])}}}),[[`__scopeId`,`data-v-de7c07ea`]]);export{M as default};