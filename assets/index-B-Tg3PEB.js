import{d as y,i as _,f as k,o as i,c as n,a as c,w as f,b as e,F as h,n as N,e as s,h as C,t as m,g as b,ak as $,W as V,E as L}from"./index-DsZzvjSZ.js";import{a as I,E as B}from"./el-input-number-CqjiC6hG.js";import"./el-input-BGZnFTdm.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DIMDiW7v.js";import"./el-badge-C5yJivmi.js";import{E as j}from"./el-message-DshgZE1c.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-B_byVlHC.js";import"./constants-CzqTvIJz.js";import"./index-D5NGTXR9.js";import"./aria-BUADUvnR.js";import"./debounce-C_UkNFIr.js";import"./typescript-Bp3YSIOJ.js";import"./focus-trap-D60RL_dI.js";import"./index-BFOUcwSl.js";const D=[{skillName:"技巧(小)",level:10,rate:2},{skillName:"技巧(小)",level:15,rate:3},{skillName:"技巧(小)",level:20,rate:4},{skillName:"技巧(中)",level:10,rate:5},{skillName:"技巧(中)",level:15,rate:6.5},{skillName:"技巧(中)",level:20,rate:7.5},{skillName:"技巧(大)",level:10,rate:8},{skillName:"技巧(大)",level:15,rate:10},{skillName:"技巧(大)",level:20,rate:11},{skillName:"技巧(大II)",level:10,rate:9},{skillName:"技巧(大II)",level:15,rate:12},{skillName:"石油弓",level:20,rate:11.5},{skillName:"水龙枪",level:15,rate:20,noEffect:!0},{skillName:"转世武",level:10,rate:20,noEffect:!0},{skillName:"转世武",level:15,rate:30,noEffect:!0}],F={flex:"","flex-wrap":"","items-start":"","justify-center":"","gap-5":""},S={fc:"","flex-wrap":"","gap-2":""},z={"space-y-4":""},M={flex:"","items-center":"","justify-between":""},R=e("div",null," 已选武器： ",-1),T={fc:"","flex-wrap":"","gap-2":""},U={key:0,"h-20":"",fc:""},W=["onClick"],q={fc:"","flex-col":"","cursor-pointer":"","select-none":"","gap-2":"","text-base":""},A={"w-500px":"",fc:""},G=e("span",{"w-60px":"","text-start":""},"加护",-1),H={"ml-4":"","w-50px":""},J={"w-500px":"",fc:""},me=y({__name:"index",setup(K){const o=_([]),r=_(0),v=k(()=>o.value.reduce((a,l)=>(l.noEffect?a.noEffect+=l.rate:a.effect+=l.rate,a),{effect:0,noEffect:0})),u=k(()=>v.value.effect*(r.value+100)/100+v.value.noEffect);function x(a){o.value.length>=13?j.info("已达上限"):o.value.push(a)}return(a,l)=>{const w=I,p=L,E=B;return i(),n("div",F,[c(p,{"h-140":"","w-40":""},{default:f(()=>[e("div",S,[(i(!0),n(h,null,N(s(D),(t,d)=>(i(),n("div",{key:d},[c(w,{"select-none":"",onClick:g=>x(t)},{default:f(()=>[C(m(`${t.skillName} Lv${t.level}`),1)]),_:2},1032,["onClick"])]))),128))])]),_:1}),e("div",z,[e("div",M,[R,e("div",{btn:"",onClick:l[0]||(l[0]=t=>o.value=[])}," 清空 ")]),c(p,{"w-500px":"","body-style":{padding:"5px"}},{default:f(()=>[e("div",T,[s(o).length===0?(i(),n("div",U," 点击左侧选择武器技能 ")):b("",!0),(i(!0),n(h,null,N(s(o),(t,d)=>(i(),n("div",{key:d,onClick:g=>s(o).splice(d,1)},[c(p,{"body-style":{padding:"2px"},"w-35":"",shadow:"hover"},{default:f(()=>[e("div",q,[e("div",null,m(`${t.skillName} Lv${t.level}`),1),e("div",null,m(`效果量: ${t.rate}`),1)])]),_:2},1024)],8,W))),128))])]),_:1}),e("div",A,[G,c(E,{modelValue:s(r),"onUpdate:modelValue":l[1]||(l[1]=t=>$(r)?r.value=t:null),step:10,max:500,"show-tooltip":!1},null,8,["modelValue"]),e("div",H,m(s(r)),1)]),e("div",J,[e("span",{class:V({"text-rose":s(u)>=100})},"暴击率： "+m(s(u)),3)])])])}}});export{me as default};