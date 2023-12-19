import{d as R,g as T,h as D,t as j,i as z,o as m,c as _,a as e,w as t,e as o,F as k,k as v,l as w,p as C,m as N,b as $,j as A,E as M,_ as O}from"./index-6rCXMITY.js";import{E as P,a as G}from"./el-form-item-aUWspVov.js";import{E as H}from"./el-button-9RGvqNH0.js";import{E as J}from"./el-input-rCHnSy-t.js";/* empty css               */import{E as K,a as Q}from"./el-select-m2niA7FQ.js";import"./el-popper-hOjRtUK6.js";import{E as W}from"./el-row-EHibzIQe.js";import{E as X}from"./el-col-dRxtNxjq.js";import{E as Y}from"./el-message-UecujO-x.js";import"./use-form-item-6_9aYkhr.js";import"./castArray-R-R1Nr3W.js";import"./_baseClone-XB5-y6rF.js";import"./_Uint8Array-u0CoAtte.js";import"./_initCloneObject-Zkp0K2zR.js";import"./index-76Bq49iP.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./index-CEATfKWF.js";import"./strings-_qGrU2zW.js";import"./aria-ClGo7ZJR.js";import"./scroll-5AeRcvPk.js";import"./isEqual-c72f0CP7.js";import"./index-WiWdWaak.js";import"./validator-OM1u6mwq.js";import"./focus-trap-7bWY8q6_.js";const Z={class:"app-container"},ee={class:"operation-button"},le={class:"operation-button"},te={class:"footer"},ae=R({__name:"index",setup(oe){const L=T(),h=D({formData:{roleName:"",roleImage:"",element:"",race:"",weapon1:"",weapon2:"",voice:"",chargeAttackName:"",chargeAttackEffect:"",skillList:[{name:"",colddown:"",duration:"",effect:""}],supportSkillList:[{name:"",effect:""}]},elementList:["火","水","土","风","光","暗"],raceList:["星晶兽","人类","兽耳","豆丁","牛族","其他"],weaponList:["剑","短","枪","斧","杖","铳","拳","弓","琴","刀"]}),{formData:a,elementList:q,raceList:I,weaponList:U}=j(h),{copy:F}=z();async function x(){const{roleName:i,roleImage:n,element:s,race:p,weapon1:r,weapon2:c,voice:b,chargeAttackName:V,chargeAttackEffect:f}=a.value;let E=`
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
        `,g=a.value.skillList.reduce((u,d)=>`${u}
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
  `);g+="[/table][/quote]";let l=a.value.supportSkillList.reduce((u,d)=>`${u}
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
  `);l+="[/table][/quote]",E=E+g+l,await F(E),Y.success("已复制到剪贴板")}function y(i,n){n==="skill"&&a.value.skillList.splice(i+1,0,{name:"",colddown:"",duration:"",effect:""}),n==="supportSkill"&&a.value.supportSkillList.splice(i+1,0,{name:"",effect:""})}function S(i,n){n==="skill"&&(a.value.skillList.splice(i,1),a.value.skillList.length===0&&(a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}])),n==="supportSkill"&&(a.value.supportSkillList.splice(i,1),a.value.supportSkillList.length===0&&(a.value.supportSkillList=[{name:"",effect:""}]))}function B(){L.value.resetFields(),a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}],a.value.supportSkillList=[{name:"",effect:""}]}return(i,n)=>{const s=J,p=P,r=X,c=W,b=K,V=Q,f=H,E=G,g=M;return m(),_("div",Z,[e(g,{class:"box-card",header:"新角色介绍"},{default:t(()=>[e(E,{ref_key:"formEl",ref:L,model:o(a),"label-width":"80px"},{default:t(()=>[e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"角色名",prop:"roleName"},{default:t(()=>[e(s,{modelValue:o(a).roleName,"onUpdate:modelValue":n[0]||(n[0]=l=>o(a).roleName=l),placeholder:"日文/中文"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"声优",prop:"voice"},{default:t(()=>[e(s,{modelValue:o(a).voice,"onUpdate:modelValue":n[1]||(n[1]=l=>o(a).voice=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{label:"角色图片",prop:"roleImage"},{default:t(()=>[e(s,{modelValue:o(a).roleImage,"onUpdate:modelValue":n[2]||(n[2]=l=>o(a).roleImage=l),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"属性",prop:"element"},{default:t(()=>[e(V,{modelValue:o(a).element,"onUpdate:modelValue":n[3]||(n[3]=l=>o(a).element=l)},{default:t(()=>[(m(!0),_(k,null,w(o(q),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"种族",prop:"race"},{default:t(()=>[e(V,{modelValue:o(a).race,"onUpdate:modelValue":n[4]||(n[4]=l=>o(a).race=l)},{default:t(()=>[(m(!0),_(k,null,w(o(I),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器1",prop:"weapon1"},{default:t(()=>[e(V,{modelValue:o(a).weapon1,"onUpdate:modelValue":n[5]||(n[5]=l=>o(a).weapon1=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,w(o(U),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器2",prop:"weapon2"},{default:t(()=>[e(V,{modelValue:o(a).weapon2,"onUpdate:modelValue":n[6]||(n[6]=l=>o(a).weapon2=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,w(o(U),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:"奥义名",prop:"chargeAttackName"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackName,"onUpdate:modelValue":n[7]||(n[7]=l=>o(a).chargeAttackName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:18},{default:t(()=>[e(p,{label:"奥义效果",prop:"chargeAttackEffect"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackEffect,"onUpdate:modelValue":n[8]||(n[8]=l=>o(a).chargeAttackEffect=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),(m(!0),_(k,null,w(o(a).skillList,(l,u)=>(m(),v(c,{key:u},{default:t(()=>[e(r,{span:8},{default:t(()=>[e(p,{label:`技能${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"冷却"},{default:t(()=>[e(s,{modelValue:l.colddown,"onUpdate:modelValue":d=>l.colddown=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"持续时间"},{default:t(()=>[e(s,{modelValue:l.duration,"onUpdate:modelValue":d=>l.duration=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",ee,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"skill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"skill")},null,8,["icon","onClick"])])]),_:2},1024),e(r,{span:24},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d,type:"textarea",autosize:{minRows:2}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(m(!0),_(k,null,w(o(a).supportSkillList,(l,u)=>(m(),v(c,{key:u},{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:`被动${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:14},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[$("div",le,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"supportSkill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"supportSkill")},null,8,["icon","onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["model"]),$("div",te,[e(f,{type:"primary",onClick:x},{default:t(()=>[A(" 生成 ")]),_:1}),e(f,{type:"warning",onClick:B},{default:t(()=>[A(" 重置 ")]),_:1})])]),_:1})])}}}),he=O(ae,[["__scopeId","data-v-de7c07ea"]]);export{he as default};
