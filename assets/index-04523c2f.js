import{d as R,g as T,h as D,t as j,i as z,o as m,c as _,a as e,w as t,e as o,F as k,k as v,l as w,b as $,p as C,m as N,j as A,E as M,_ as O}from"./index-7bbcd225.js";import{E as P,a as G}from"./el-form-item-0280858b.js";import{E as H}from"./el-button-37a8851a.js";import{E as J}from"./el-input-7d9183e4.js";import"./el-tag-b2dc39a0.js";import{E as K,a as Q}from"./el-select-53cb1f22.js";import"./el-popper-2105ed20.js";import{E as W,a as X}from"./el-col-78a24d43.js";import{E as Y}from"./el-message-ec97f52a.js";import"./use-form-item-3f5e4439.js";import"./castArray-b60ae30e.js";import"./_baseClone-22a43802.js";import"./_Uint8Array-be424382.js";import"./_initCloneObject-e7eb077a.js";import"./index-c559b6c6.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./isEqual-d4c2361e.js";import"./strings-4554d025.js";import"./aria-60e0cdc6.js";import"./scroll-e5a9e07f.js";import"./validator-ae3d58a6.js";import"./focus-trap-6387205f.js";const Z={class:"app-container"},ee={class:"operation-button"},le={class:"operation-button"},te={class:"footer"},ae=R({__name:"index",setup(oe){const L=T(),h=D({formData:{roleName:"",roleImage:"",element:"",race:"",weapon1:"",weapon2:"",voice:"",chargeAttackName:"",chargeAttackEffect:"",skillList:[{name:"",colddown:"",duration:"",effect:""}],supportSkillList:[{name:"",effect:""}]},elementList:["火","水","土","风","光","暗"],raceList:["星晶兽","人类","兽耳","豆丁","牛族","其他"],weaponList:["剑","短","枪","斧","杖","铳","拳","弓","琴","刀"]}),{formData:a,elementList:q,raceList:I,weaponList:U}=j(h),{copy:x}=z();async function F(){const{roleName:i,roleImage:n,element:s,race:p,weapon1:r,weapon2:c,voice:b,chargeAttackName:V,chargeAttackEffect:f}=a.value;let g=`
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
  `);l+="[/table][/quote]",g=g+E+l,await x(g),Y.success("已复制到剪贴板")}function y(i,n){n==="skill"&&a.value.skillList.splice(i+1,0,{name:"",colddown:"",duration:"",effect:""}),n==="supportSkill"&&a.value.supportSkillList.splice(i+1,0,{name:"",effect:""})}function S(i,n){n==="skill"&&(a.value.skillList.splice(i,1),a.value.skillList.length===0&&(a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}])),n==="supportSkill"&&(a.value.supportSkillList.splice(i,1),a.value.supportSkillList.length===0&&(a.value.supportSkillList=[{name:"",effect:""}]))}function B(){L.value.resetFields(),a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}],a.value.supportSkillList=[{name:"",effect:""}]}return(i,n)=>{const s=J,p=P,r=W,c=X,b=K,V=Q,f=H,g=G,E=M;return m(),_("div",Z,[e(E,{class:"box-card",header:"新角色介绍"},{default:t(()=>[e(g,{ref_key:"formEl",ref:L,model:o(a),"label-width":"80px"},{default:t(()=>[e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"角色名",prop:"roleName"},{default:t(()=>[e(s,{modelValue:o(a).roleName,"onUpdate:modelValue":n[0]||(n[0]=l=>o(a).roleName=l),placeholder:"日文/中文"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"声优",prop:"voice"},{default:t(()=>[e(s,{modelValue:o(a).voice,"onUpdate:modelValue":n[1]||(n[1]=l=>o(a).voice=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{label:"角色图片",prop:"roleImage"},{default:t(()=>[e(s,{modelValue:o(a).roleImage,"onUpdate:modelValue":n[2]||(n[2]=l=>o(a).roleImage=l),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"属性",prop:"element"},{default:t(()=>[e(V,{modelValue:o(a).element,"onUpdate:modelValue":n[3]||(n[3]=l=>o(a).element=l)},{default:t(()=>[(m(!0),_(k,null,v(o(q),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"种族",prop:"race"},{default:t(()=>[e(V,{modelValue:o(a).race,"onUpdate:modelValue":n[4]||(n[4]=l=>o(a).race=l)},{default:t(()=>[(m(!0),_(k,null,v(o(I),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器1",prop:"weapon1"},{default:t(()=>[e(V,{modelValue:o(a).weapon1,"onUpdate:modelValue":n[5]||(n[5]=l=>o(a).weapon1=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,v(o(U),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器2",prop:"weapon2"},{default:t(()=>[e(V,{modelValue:o(a).weapon2,"onUpdate:modelValue":n[6]||(n[6]=l=>o(a).weapon2=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,v(o(U),(l,u)=>(m(),w(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:"奥义名",prop:"chargeAttackName"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackName,"onUpdate:modelValue":n[7]||(n[7]=l=>o(a).chargeAttackName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:18},{default:t(()=>[e(p,{label:"奥义效果",prop:"chargeAttackEffect"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackEffect,"onUpdate:modelValue":n[8]||(n[8]=l=>o(a).chargeAttackEffect=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),(m(!0),_(k,null,v(o(a).skillList,(l,u)=>(m(),w(c,{key:u},{default:t(()=>[e(r,{span:8},{default:t(()=>[e(p,{label:`技能${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"冷却"},{default:t(()=>[e(s,{modelValue:l.colddown,"onUpdate:modelValue":d=>l.colddown=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"持续时间"},{default:t(()=>[e(s,{modelValue:l.duration,"onUpdate:modelValue":d=>l.duration=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",ee,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"skill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"skill")},null,8,["icon","onClick"])])]),_:2},1024),e(r,{span:24},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d,type:"textarea",autosize:{minRows:2}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(m(!0),_(k,null,v(o(a).supportSkillList,(l,u)=>(m(),w(c,{key:u},{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:`被动${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:14},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",le,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"supportSkill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"supportSkill")},null,8,["icon","onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["model"]),$("div",te,[e(f,{type:"primary",onClick:F},{default:t(()=>[A(" 生成 ")]),_:1}),e(f,{type:"warning",onClick:B},{default:t(()=>[A(" 重置 ")]),_:1})])]),_:1})])}}});const Ce=O(ae,[["__scopeId","data-v-0cc3ec46"]]);export{Ce as default};
