import{p as C,o as N}from"./base-d162ef96.js";import{E as R}from"./el-card-c6491a2c.js";import{E as T,a as D}from"./el-form-item-7e6f2d4a.js";import{E as j}from"./el-button-a3f7639e.js";import{E as z}from"./el-input-4552dc9d.js";import"./el-tag-51a09018.js";import{a as M,E as O}from"./el-select-9d5401d4.js";import"./el-scrollbar-528d0670.js";import"./el-popper-4c0fcaf7.js";import{a as P,E as W}from"./el-col-6d42aa75.js";import{b as X}from"./index-33390c92.js";import{E as Y}from"./el-message-89a1a08b.js";import{e as Z,r as G,Y as H,Z as J,g as s,h as _,v as e,p as t,k as o,T as k,W as v,m as w,j as $,X as A}from"./index-e1e4d07d.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import"./constants-4db3609e.js";import"./use-form-item-77ae3ce7.js";import"./index-5725fa7a.js";import"./_baseClone-2e5d4ca7.js";import"./_Uint8Array-6184b0e9.js";import"./_initCloneObject-b176e66b.js";import"./index-927a9af8.js";import"./icon-4d217982.js";import"./index-f8748455.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./strings-d9adb3a2.js";import"./aria-60e0cdc6.js";import"./scroll-49bb2d6e.js";import"./isEqual-9aa6cdf6.js";import"./validator-a8260ea7.js";import"./focus-trap-9c06f385.js";const Q={class:"app-container"},ee={class:"operation-button"},le={class:"operation-button"},te={class:"footer"},ae=Z({__name:"index",setup(oe){const L=G(),h=H({formData:{roleName:"",roleImage:"",element:"",race:"",weapon1:"",weapon2:"",voice:"",chargeAttackName:"",chargeAttackEffect:"",skillList:[{name:"",colddown:"",duration:"",effect:""}],supportSkillList:[{name:"",effect:""}]},elementList:["火","水","土","风","光","暗"],raceList:["星晶兽","人类","兽耳","豆丁","牛族","其他"],weaponList:["剑","短","枪","斧","杖","铳","拳","弓","琴","刀"]}),{formData:a,elementList:q,raceList:I,weaponList:U}=J(h),{copy:x}=X();async function B(){const{roleName:i,roleImage:n,element:m,race:p,weapon1:r,weapon2:c,voice:b,chargeAttackName:V,chargeAttackEffect:f}=a.value;let g=`
[quote][table]
[tr]
[td15][b]姓名[/b][/td]
[td20]
${i.split("/")[0]}
${i.split("/")[1]??""}
[/td]
[td width=65 rowspan=5]${n}[/td]
[/tr]

[tr]
[td][b]属性[/b][/td]
[td]${m}[/td]
[/tr]

[tr]
[td][b]种族[/b][/td]
[td]${p}[/td]
[/tr]

[tr]
[td][b]得意武器[/b][/td]
[td]${r}${c?`/${c}`:""}[/td]
[/tr]

[tr]
[td][b]声优[/b][/td]
[td]${b}[/td]
[/tr]
[/table][/quote]

[quote][table]
[tr]
[td15][b]奥义[/b][/td]
[td][b]效果[/b][/td]
[/tr]

[tr]
[td]${V}[/td]
[td]${f}[/td]
[/tr]
[/table][/quote]
        `,E=a.value.skillList.reduce((u,d)=>`${u}
[tr]
[td]${d.name}[/td]
[td]${d.colddown}[/td]
[td]${d.duration}[/td]
[td]${d.effect}[/td]
[/tr]
`,`
[quote][table]
[tr]
[td15][b]技能[/b][/td]
[td10][b]冷却时间[/b][/td]
[td10][b]持续时间[/b][/td]
[td][b]效果[/b][/td]
[/tr]
  `);E+="[/table][/quote]";let l=a.value.supportSkillList.reduce((u,d)=>`${u}
[tr]
[td]${d.name}[/td]
[td]${d.effect}[/td]
[/tr]
`,`
    
[quote][table]
[tr]
[td15][b]被动[/b][/td]
[td][b]效果[/b][/td]
[/tr]
  `);l+="[/table][/quote]",g=g+E+l,await x(g),Y.success("已复制到剪贴板")}function y(i,n){n==="skill"&&a.value.skillList.splice(i+1,0,{name:"",colddown:"",duration:"",effect:""}),n==="supportSkill"&&a.value.supportSkillList.splice(i+1,0,{name:"",effect:""})}function S(i,n){n==="skill"&&(a.value.skillList.splice(i,1),a.value.skillList.length===0&&(a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}])),n==="supportSkill"&&(a.value.supportSkillList.splice(i,1),a.value.supportSkillList.length===0&&(a.value.supportSkillList=[{name:"",effect:""}]))}function F(){L.value.resetFields(),a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}],a.value.supportSkillList=[{name:"",effect:""}]}return(i,n)=>{const m=z,p=T,r=P,c=W,b=O,V=M,f=j,g=D,E=R;return s(),_("div",Q,[e(E,{class:"box-card",header:"新角色介绍"},{default:t(()=>[e(g,{ref_key:"formEl",ref:L,model:o(a),"label-width":"80px"},{default:t(()=>[e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"角色名",prop:"roleName"},{default:t(()=>[e(m,{modelValue:o(a).roleName,"onUpdate:modelValue":n[0]||(n[0]=l=>o(a).roleName=l),placeholder:"日文/中文"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"声优",prop:"voice"},{default:t(()=>[e(m,{modelValue:o(a).voice,"onUpdate:modelValue":n[1]||(n[1]=l=>o(a).voice=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{label:"角色图片",prop:"roleImage"},{default:t(()=>[e(m,{modelValue:o(a).roleImage,"onUpdate:modelValue":n[2]||(n[2]=l=>o(a).roleImage=l),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"属性",prop:"element"},{default:t(()=>[e(V,{modelValue:o(a).element,"onUpdate:modelValue":n[3]||(n[3]=l=>o(a).element=l)},{default:t(()=>[(s(!0),_(k,null,v(o(q),(l,u)=>(s(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"种族",prop:"race"},{default:t(()=>[e(V,{modelValue:o(a).race,"onUpdate:modelValue":n[4]||(n[4]=l=>o(a).race=l)},{default:t(()=>[(s(!0),_(k,null,v(o(I),(l,u)=>(s(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器1",prop:"weapon1"},{default:t(()=>[e(V,{modelValue:o(a).weapon1,"onUpdate:modelValue":n[5]||(n[5]=l=>o(a).weapon1=l),clearable:""},{default:t(()=>[(s(!0),_(k,null,v(o(U),(l,u)=>(s(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器2",prop:"weapon2"},{default:t(()=>[e(V,{modelValue:o(a).weapon2,"onUpdate:modelValue":n[6]||(n[6]=l=>o(a).weapon2=l),clearable:""},{default:t(()=>[(s(!0),_(k,null,v(o(U),(l,u)=>(s(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:"奥义名",prop:"chargeAttackName"},{default:t(()=>[e(m,{modelValue:o(a).chargeAttackName,"onUpdate:modelValue":n[7]||(n[7]=l=>o(a).chargeAttackName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:18},{default:t(()=>[e(p,{label:"奥义效果",prop:"chargeAttackEffect"},{default:t(()=>[e(m,{modelValue:o(a).chargeAttackEffect,"onUpdate:modelValue":n[8]||(n[8]=l=>o(a).chargeAttackEffect=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),(s(!0),_(k,null,v(o(a).skillList,(l,u)=>(s(),w(c,{key:u},{default:t(()=>[e(r,{span:8},{default:t(()=>[e(p,{label:`技能${u+1}`},{default:t(()=>[e(m,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"冷却"},{default:t(()=>[e(m,{modelValue:l.colddown,"onUpdate:modelValue":d=>l.colddown=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"持续时间"},{default:t(()=>[e(m,{modelValue:l.duration,"onUpdate:modelValue":d=>l.duration=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",ee,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"skill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"skill")},null,8,["icon","onClick"])])]),_:2},1024),e(r,{span:24},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(m,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d,type:"textarea",autosize:{minRows:2}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(s(!0),_(k,null,v(o(a).supportSkillList,(l,u)=>(s(),w(c,{key:u},{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:`被动${u+1}`},{default:t(()=>[e(m,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:14},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(m,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",le,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"supportSkill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"supportSkill")},null,8,["icon","onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["model"]),$("div",te,[e(f,{type:"primary",onClick:B},{default:t(()=>[A(" 生成 ")]),_:1}),e(f,{type:"warning",onClick:F},{default:t(()=>[A(" 重置 ")]),_:1})])]),_:1})])}}});const Fe=K(ae,[["__scopeId","data-v-a114b6bc"]]);export{Fe as default};
