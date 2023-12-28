import{d as R,i as T,j as D,l as j,k as z,o as m,c as _,a as e,w as t,e as o,F as k,n as v,p as w,q as C,s as N,b as g,h as A,E as M}from"./index-qm5sgKFt.js";import{E as O,a as P}from"./el-form-item-KmO_wj7R.js";import{E as G}from"./el-button-t7GxRU4b.js";import{E as H}from"./el-input--TMPNHPt.js";/* empty css               */import{E as J,a as K}from"./el-select-zDWtQrOp.js";import"./el-popper-1dtYOvEj.js";import{E as Q}from"./el-row-v1tK0K4E.js";import{E as W}from"./el-col-1FbBnRjs.js";import"./el-badge-Kl9s7Uy2.js";import{E as X}from"./el-message-P1QOa-gm.js";import{_ as Y}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./constants-pUH9CycZ.js";import"./castArray-jOLpw900.js";import"./use-form-item-p29bA2P-.js";import"./_baseClone-zNFGa3uL.js";import"./_Uint8Array-saCCVjvC.js";import"./_initCloneObject-T09yN_mQ.js";import"./index-gZhJRQl0.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./index-TMnmZ1kv.js";import"./strings-XHJP_Xze.js";import"./aria-ClGo7ZJR.js";import"./scroll-GwdawD4s.js";import"./isEqual-TU1KZSOK.js";import"./index-mU_010UD.js";import"./validator-9e1BgpJj.js";import"./focus-trap-vhdOcNky.js";const Z={class:"app-container"},ee={class:"operation-button"},le={class:"operation-button"},te={class:"footer"},ae=R({__name:"index",setup(oe){const L=T(),q=D({formData:{roleName:"",roleImage:"",element:"",race:"",weapon1:"",weapon2:"",voice:"",chargeAttackName:"",chargeAttackEffect:"",skillList:[{name:"",colddown:"",duration:"",effect:""}],supportSkillList:[{name:"",effect:""}]},elementList:["火","水","土","风","光","暗"],raceList:["星晶兽","人类","兽耳","豆丁","牛族","其他"],weaponList:["剑","短","枪","斧","杖","铳","拳","弓","琴","刀"]}),{formData:a,elementList:h,raceList:I,weaponList:U}=j(q),{copy:F}=z();async function x(){const{roleName:i,roleImage:n,element:s,race:p,weapon1:r,weapon2:c,voice:b,chargeAttackName:V,chargeAttackEffect:f}=a.value;let E=`
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
        `,$=a.value.skillList.reduce((u,d)=>`${u}
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
  `);$+="[/table][/quote]";let l=a.value.supportSkillList.reduce((u,d)=>`${u}
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
  `);l+="[/table][/quote]",E=E+$+l,await F(E),X.success("已复制到剪贴板")}function y(i,n){n==="skill"&&a.value.skillList.splice(i+1,0,{name:"",colddown:"",duration:"",effect:""}),n==="supportSkill"&&a.value.supportSkillList.splice(i+1,0,{name:"",effect:""})}function S(i,n){n==="skill"&&(a.value.skillList.splice(i,1),a.value.skillList.length===0&&(a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}])),n==="supportSkill"&&(a.value.supportSkillList.splice(i,1),a.value.supportSkillList.length===0&&(a.value.supportSkillList=[{name:"",effect:""}]))}function B(){L.value.resetFields(),a.value.skillList=[{name:"",colddown:"",duration:"",effect:""}],a.value.supportSkillList=[{name:"",effect:""}]}return(i,n)=>{const s=H,p=O,r=W,c=Q,b=J,V=K,f=G,E=P,$=M;return m(),_("div",Z,[e($,{class:"box-card",header:"新角色介绍"},{default:t(()=>[e(E,{ref_key:"formEl",ref:L,model:o(a),"label-width":"80px"},{default:t(()=>[e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"角色名",prop:"roleName"},{default:t(()=>[e(s,{modelValue:o(a).roleName,"onUpdate:modelValue":n[0]||(n[0]=l=>o(a).roleName=l),placeholder:"日文/中文"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"声优",prop:"voice"},{default:t(()=>[e(s,{modelValue:o(a).voice,"onUpdate:modelValue":n[1]||(n[1]=l=>o(a).voice=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{label:"角色图片",prop:"roleImage"},{default:t(()=>[e(s,{modelValue:o(a).roleImage,"onUpdate:modelValue":n[2]||(n[2]=l=>o(a).roleImage=l),placeholder:"[img]xxx[/img]"},null,8,["modelValue"])]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"属性",prop:"element"},{default:t(()=>[e(V,{modelValue:o(a).element,"onUpdate:modelValue":n[3]||(n[3]=l=>o(a).element=l)},{default:t(()=>[(m(!0),_(k,null,w(o(h),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"种族",prop:"race"},{default:t(()=>[e(V,{modelValue:o(a).race,"onUpdate:modelValue":n[4]||(n[4]=l=>o(a).race=l)},{default:t(()=>[(m(!0),_(k,null,w(o(I),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器1",prop:"weapon1"},{default:t(()=>[e(V,{modelValue:o(a).weapon1,"onUpdate:modelValue":n[5]||(n[5]=l=>o(a).weapon1=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,w(o(U),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(p,{label:"得意武器2",prop:"weapon2"},{default:t(()=>[e(V,{modelValue:o(a).weapon2,"onUpdate:modelValue":n[6]||(n[6]=l=>o(a).weapon2=l),clearable:""},{default:t(()=>[(m(!0),_(k,null,w(o(U),(l,u)=>(m(),v(b,{key:u,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:"奥义名",prop:"chargeAttackName"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackName,"onUpdate:modelValue":n[7]||(n[7]=l=>o(a).chargeAttackName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:18},{default:t(()=>[e(p,{label:"奥义效果",prop:"chargeAttackEffect"},{default:t(()=>[e(s,{modelValue:o(a).chargeAttackEffect,"onUpdate:modelValue":n[8]||(n[8]=l=>o(a).chargeAttackEffect=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),(m(!0),_(k,null,w(o(a).skillList,(l,u)=>(m(),v(c,{key:u},{default:t(()=>[e(r,{span:8},{default:t(()=>[e(p,{label:`技能${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"冷却"},{default:t(()=>[e(s,{modelValue:l.colddown,"onUpdate:modelValue":d=>l.colddown=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:6},{default:t(()=>[e(p,{label:"持续时间"},{default:t(()=>[e(s,{modelValue:l.duration,"onUpdate:modelValue":d=>l.duration=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[g("div",ee,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"skill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"skill")},null,8,["icon","onClick"])])]),_:2},1024),e(r,{span:24},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d,type:"textarea",autosize:{minRows:2}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(m(!0),_(k,null,w(o(a).supportSkillList,(l,u)=>(m(),v(c,{key:u},{default:t(()=>[e(r,{span:6},{default:t(()=>[e(p,{label:`被动${u+1}`},{default:t(()=>[e(s,{modelValue:l.name,"onUpdate:modelValue":d=>l.name=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024),e(r,{span:14},{default:t(()=>[e(p,{label:"效果"},{default:t(()=>[e(s,{modelValue:l.effect,"onUpdate:modelValue":d=>l.effect=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(r,{span:4},{default:t(()=>[g("div",le,[e(f,{type:"success",icon:o(C),circle:"",onClick:d=>y(u,"supportSkill")},null,8,["icon","onClick"]),e(f,{type:"danger",icon:o(N),circle:"",onClick:d=>S(u,"supportSkill")},null,8,["icon","onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["model"]),g("div",te,[e(f,{type:"primary",onClick:x},{default:t(()=>[A(" 生成 ")]),_:1}),e(f,{type:"warning",onClick:B},{default:t(()=>[A(" 重置 ")]),_:1})])]),_:1})])}}}),Fe=Y(ae,[["__scopeId","data-v-de7c07ea"]]);export{Fe as default};
