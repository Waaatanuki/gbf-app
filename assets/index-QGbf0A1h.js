import{G as W,au as X,d as $,M as Y,f as C,o as i,c as p,n as V,w as t,X as q,e as r,W as A,g,U as x,Y as S,_ as H,am as J,j as O,i as Q,a as l,F as T,t as m,h as f,p as D,b as u,E as Z}from"./index-rp-Zyp_U.js";import{E as ee,a as le}from"./el-table-column-1tiB5StT.js";import"./el-checkbox-T2RpiLCp.js";import"./el-tooltip-w40geAFS.js";import"./el-popper-hVsu43Ar.js";/* empty css               */import{E as te,a as ae}from"./el-form-item-mx7akE4y.js";import{b as oe,a as ne}from"./el-radio-group-BCsqOQ2w.js";import"./el-badge-mWl2WXN1.js";import{E as se}from"./el-message-955AtgMd.js";import{E as ie}from"./index-6Wg4CKU9.js";import"./_Uint8Array-B8VKmca-.js";import"./_initCloneObject-KBH-_v-z.js";import"./index-B4_Xvl43.js";import"./isEqual-eduz8JIl.js";import"./flatten-kqU91lhu.js";import"./use-form-item-Xi-S8h92.js";import"./constants-_CcUSMJG.js";import"./event-vOXeFsAk.js";import"./aria-ClGo7ZJR.js";import"./focus-trap--hVIPlAJ.js";import"./castArray-4oKoAHbL.js";import"./_baseClone-hMuSbk13.js";import"./typescript-WBLZcIum.js";const re=W({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:X}}),pe={click:_=>_ instanceof MouseEvent},ce=["href"],ue=$({name:"ElLink"}),de=$({...ue,props:re,emits:pe,setup(_,{emit:d}){const n=_,c=Y("link"),N=C(()=>[c.b(),c.m(n.type),c.is("disabled",n.disabled),c.is("underline",n.underline&&!n.disabled)]);function v(a){n.disabled||d("click",a)}return(a,I)=>(i(),p("a",{class:x(r(N)),href:a.disabled||!a.href?void 0:a.href,onClick:v},[a.icon?(i(),V(r(A),{key:0},{default:t(()=>[(i(),V(q(a.icon)))]),_:1})):g("v-if",!0),a.$slots.default?(i(),p("span",{key:1,class:x(r(c).e("inner"))},[S(a.$slots,"default")],2)):g("v-if",!0),a.$slots.icon?S(a.$slots,"icon",{key:2}):g("v-if",!0)],10,ce))}});var fe=H(de,[["__file","link.vue"]]);const me=J(fe),_e=[{skillName:"技巧(小)",level:10,rate:2},{skillName:"技巧(小)",level:15,rate:3},{skillName:"技巧(小)",level:20,rate:4},{skillName:"技巧(中)",level:10,rate:5},{skillName:"技巧(中)",level:15,rate:6.5},{skillName:"技巧(中)",level:20,rate:7.5},{skillName:"技巧(大)",level:10,rate:8},{skillName:"技巧(大)",level:15,rate:10},{skillName:"技巧(大)",level:20,rate:11},{skillName:"技巧(大II)",level:10,rate:9},{skillName:"技巧(大II)",level:15,rate:12},{skillName:"石油弓",level:20,rate:11.5},{skillName:"水龙枪",level:15,rate:20,noEffect:!0},{skillName:"转世武",level:10,rate:20,noEffect:!0},{skillName:"转世武",level:15,rate:30,noEffect:!0}],E=[{label:"零面",list:[{value:0,tip:"10"},{value:10,tip:"10"},{value:20,tip:"20"},{value:30,tip:"10+20"},{value:40,tip:"40"},{value:60,tip:"20+40)"}]},{label:"单面",list:[{value:140,tip:"140"},{value:150,tip:"150"},{value:160,tip:"150+10"},{value:170,tip:"150+20"},{value:180,tip:"150+10+20"},{value:190,tip:"150+40"},{value:210,tip:"150+20+40"}]},{label:"双面",list:[{value:280,tip:"280"},{value:300,tip:"300"},{value:310,tip:"300+10"},{value:320,tip:"300+20"},{value:330,tip:"300+10+20"},{value:340,tip:"300+40"},{value:360,tip:"300+20+40"}]}],ve={flex:"","flex-wrap":"","items-start":"","justify-center":"","gap-5":""},ke={fc:"","flex-wrap":"","gap-2":""},be={fc:""},he={fc:"","flex-wrap":"","gap-2":""},ye={key:0,"h-20":"",fc:""},Ee=["onClick"],ge={fc:"","flex-col":"","cursor-pointer":"","select-none":"","gap-2":"","text-base":""},Ne={key:0},we={key:1},F=0,He=$({__name:"index",setup(_){const d=O({weapon:0}),n=Q([]),c=C(()=>n.value.reduce((e,s)=>(s.noEffect?e.noEffect+=s.rate:e.effect+=s.rate,e),{effect:0,noEffect:0})),N=C(()=>{const e=[];return E.forEach(s=>{s.list.forEach(k=>{e.push({cat:s.label,boost:k.value+d.weapon,total:c.value.effect*(k.value+d.weapon+100)/100+c.value.noEffect})})}),e}),v=E.find(e=>e.label==="零面").list.length,a=E.find(e=>e.label==="单面").list.length,I=E.find(e=>e.label==="双面").list.length,L=F+v,M=L+a;function j({rowIndex:e,columnIndex:s}){if(s===0)return e===F?{rowspan:v,colspan:1}:e===L?{rowspan:a,colspan:1}:e===M?{rowspan:I,colspan:1}:{rowspan:0,colspan:0}}function P(e){n.value.length>=21?se.info("哥们你玩的几几年的gbf，能放这么多武器"):n.value.push(e)}return(e,s)=>{const k=me,b=Z,h=oe,G=ne,B=te,R=ae,w=ee,U=ie,z=le;return i(),p("div",ve,[l(b,{"h-140":"","w-40":""},{default:t(()=>[u("div",ke,[(i(!0),p(T,null,D(r(_e),(o,y)=>(i(),p("div",{key:y},[l(k,{"select-none":"",onClick:K=>P(o)},{default:t(()=>[f(m(`${o.skillName} Lv${o.level}`),1)]),_:2},1032,["onClick"])]))),128))])]),_:1}),u("div",null,[l(R,{model:r(d),"label-width":"90"},{default:t(()=>[u("div",be,[l(B,{label:"武器加护区"},{default:t(()=>[l(G,{modelValue:r(d).weapon,"onUpdate:modelValue":s[0]||(s[0]=o=>r(d).weapon=o)},{default:t(()=>[l(h,{label:0},{default:t(()=>[f(" 0把 ")]),_:1}),l(h,{label:30},{default:t(()=>[f(" 1把 ")]),_:1}),l(h,{label:60},{default:t(()=>[f(" 2把 ")]),_:1}),l(h,{label:90},{default:t(()=>[f(" 3把 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(B,null,{default:t(()=>[u("div",{btn:"",onClick:s[1]||(s[1]=o=>n.value=[])}," 清空 ")]),_:1})])]),_:1},8,["model"]),l(b,{"w-115":"","body-style":{padding:"5px"}},{default:t(()=>[u("div",he,[r(n).length===0?(i(),p("div",ye," 点击左侧选择武器技能 ")):g("",!0),(i(!0),p(T,null,D(r(n),(o,y)=>(i(),p("div",{key:y,onClick:K=>r(n).splice(y,1)},[l(b,{"body-style":{padding:"2px"},"w-35":"",shadow:"hover"},{default:t(()=>[u("div",ge,[u("div",null,m(`${o.skillName} Lv${o.level}`),1),u("div",null,m(`效果量: ${o.rate}`),1)])]),_:2},1024)],8,Ee))),128))])]),_:1})]),l(b,null,{default:t(()=>[l(z,{data:r(N),"span-method":j,height:"517",border:""},{default:t(()=>[l(w,{prop:"cat",label:"类型",align:"center",width:"60"}),l(w,{prop:"boost",label:"加护",align:"center"}),l(w,{prop:"total",label:"总计",align:"center"},{default:t(({row:o})=>[o.total>=100?(i(),p("div",Ne,[l(U,{type:"danger"},{default:t(()=>[f(m(o.total),1)]),_:2},1024)])):(i(),p("div",we,m(o.total),1))]),_:1})]),_:1},8,["data"])]),_:1})])}}});export{He as default};
