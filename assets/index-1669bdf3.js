import{p as C,s as N}from"./base-368cc041.js";import{E as R}from"./el-card-7d5511d8.js";import{E as T,a as D}from"./el-form-item-36d0d3db.js";import{E as O}from"./el-button-df2ef2e9.js";import{E as P}from"./el-input-1373d167.js";import"./el-tag-2d43f1ce.js";import{a as j,E as z}from"./el-select-16880b75.js";import"./el-scrollbar-5c49334b.js";import"./el-popper-93e0f017.js";import{a as M,E as G}from"./el-col-f795ce9c.js";import{d as H}from"./index-7cababca.js";import{E as J}from"./el-message-1d2bb9d2.js";import{d as K,r as Q,y as W,a3 as X,a as m,c as _,O as e,w as t,f as o,F as k,P as v,j as w,h as $,L as A}from"./index-b8cc9633.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import"./use-form-item-3d666019.js";import"./index-154cd8fa.js";import"./_baseClone-717b0b65.js";import"./_Uint8Array-459b4200.js";import"./_initCloneObject-448d671a.js";import"./index-7c03407d.js";import"./index-f8748455.js";import"./strings-1579d1ef.js";import"./aria-60e0cdc6.js";import"./scroll-a750d4a3.js";import"./isEqual-fc203dc5.js";import"./validator-f683d4b9.js";import"./focus-trap-05b093ee.js";const Z={class:"app-container"},ee={class:"operation-button"},le={class:"operation-button"},te={class:"footer"},ae=K({__name:"index",setup(oe){const L=Q(),h=W({formData:{roleName:"",roleImage:"",element:"",race:"",weapon1:"",weapon2:"",voice:"",chargeAttackName:"",chargeAttackEffect:"",skillList:[{name:"",colddown:"",duration:"",effect:""}],supportSkillList:[{name:"",effect:""}]},elementList:["火","水","土","风","光","暗"],raceList:["星晶兽","人类","兽耳","豆丁","牛族","其他"],weaponList:["剑","短","枪","斧","杖","铳","拳","弓","琴","刀"]}),{formData:a,elementList:q,raceList:I,weaponList:U}=X(h),{copy:x}=H();async function F(){const{roleName:i,roleImage:n,element:s,race:p,weapon1:r,weapon2:c,voice:b,chargeAttackName:V,chargeAttackEffect:f}=a.value;let g=`
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
[td]${s}[/td]
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
  `);l+="[/table][/quote]",g=g+E+l,await x(g),J.success("已复制到剪贴板")}function y(i,n){n==="skill"&&a.value.skillList.splice(i+1,0,{name:"",colddown:"",duration:"",effect:""}),n==="supportSkill"&&a.value.supportSkillList.splice(i+1,0,{name:"",effect:""})}function S(i,n){n==="skill"&&(a.value.skillList.splice(i,1),a.value.skillList.length===0&&(a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}])),n==="supportSkill"&&(a.value.supportSkillList.splice(i,1),a.value.supportSkillList.length===0&&(a.value.supportSkillList=[{name:"",effect:""}]))}function B(){L.value.resetFields(),a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}],a.value.supportSkillList=[{name:"",effect:""}]}return(i,n)=>{const s=P,p=T,r=M,c=G,b=z,V=j,f=O,g=D,E=R;return m(),_("div",Z,[e(E,{class:"box-card",header:"新角色介绍"},{default:t(()=>[e(g,{ref_key:"formEl",ref:L,model:o(a),"label-width":"80px"},{default:t(()=>[e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"角色名",prop:"roleName"},{default:t(()=>[e(s,{modelValue:o(a).roleName,"onUpdate:modelValue":n[0]||(n[0]=l=>o(a).roleName=l),placeholder:"日文/中文"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"声优",prop:"voice"},{default:t(()=>[e(s,{modelValue:o(a).voice,"onUpdate:modelValue":n[1]||(n[1]=l=>o(a).voice=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{label:"角色图片",prop:"roleImage"},{default:t(()=>[e(s,{modelValue:o(a).roleImage,"onUpdate:modelValue":n[2]||(n[2]=l=>o(a).roleImage=l),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"属性",prop:"element"},{default:t(()=>[e(V,{modelValue:o(a).element,"onUpdate:modelValue":n[3]||(n[3]=l=>o(a).element=l)},{default:t(()=>[(m(!0),_(k,null,v(o(q),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"种族",prop:"race"},{default:t(()=>[e(V,{modelValue:o(a).race,"onUpdate:modelValue":n[4]||(n[4]=l=>o(a).race=l)},{default:t(()=>[(m(!0),_(k,null,v(o(I),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器1",prop:"weapon1"},{default:t(()=>[e(V,{modelValue:o(a).weapon1,"onUpdate:modelValue":n[5]||(n[5]=l=>o(a).weapon1=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,v(o(U),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器2",prop:"weapon2"},{default:t(()=>[e(V,{modelValue:o(a).weapon2,"onUpdate:modelValue":n[6]||(n[6]=l=>o(a).weapon2=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,v(o(U),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:"奥义名",prop:"chargeAttackName"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackName,"onUpdate:modelValue":n[7]||(n[7]=l=>o(a).chargeAttackName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:18},{default:t(()=>[e(p,{label:"奥义效果",prop:"chargeAttackEffect"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackEffect,"onUpdate:modelValue":n[8]||(n[8]=l=>o(a).chargeAttackEffect=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),(m(!0),_(k,null,v(o(a).skillList,(l,u)=>(m(),w(c,{key:u},{default:t(()=>[e(r,{span:8},{default:t(()=>[e(p,{label:`技能${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"冷却"},{default:t(()=>[e(s,{modelValue:l.colddown,"onUpdate:modelValue":d=>l.colddown=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"持续时间"},{default:t(()=>[e(s,{modelValue:l.duration,"onUpdate:modelValue":d=>l.duration=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",ee,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"skill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"skill")},null,8,["icon","onClick"])])]),_:2},1024),e(r,{span:24},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d,type:"textarea",autosize:{minRows:2}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(m(!0),_(k,null,v(o(a).supportSkillList,(l,u)=>(m(),w(c,{key:u},{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:`被动${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:14},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",le,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"supportSkill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"supportSkill")},null,8,["icon","onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["model"]),$("div",te,[e(f,{type:"primary",onClick:F},{default:t(()=>[A(" 生成 ")]),_:1}),e(f,{type:"warning",onClick:B},{default:t(()=>[A(" 重置 ")]),_:1})])]),_:1})])}}});const qe=Y(ae,[["__scopeId","data-v-a114b6bc"]]);export{qe as default};