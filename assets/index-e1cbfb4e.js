import{d as I,as as L,h as z,t as R,N as $,o as r,c as i,a as l,w as c,e as m,b as s,j as k,F as _,k as f,G as x,at as y,_ as j}from"./index-c9f02560.js";import{E as B}from"./el-dialog-cfaf1527.js";import"./el-overlay-662ea7d3.js";import{E as T}from"./el-button-4139e9a4.js";import{E as P,a as F}from"./el-table-column-895d8679.js";import"./el-checkbox-462346ec.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-1518ec15.js";import{E as M}from"./el-input-107a3154.js";import"./el-tag-67a76c46.js";import{e as G,m as W}from"./evoker-1b0d3c03.js";import{d as q}from"./file-fcde9183.js";import"./focus-trap-1c392946.js";import"./aria-60e0cdc6.js";import"./use-form-item-aade2dcf.js";import"./refs-bad57367.js";import"./index-4ccdb1c0.js";import"./vnode-0932a310.js";import"./event-9519ab40.js";import"./scroll-8187b660.js";import"./_Uint8Array-3faccb04.js";import"./_initCloneObject-bd66843e.js";import"./flatten-b4d93909.js";import"./isEqual-a45ec2bc.js";import"./typescript-defaf979.js";const A={"mr-5":"","mt-5":"",flex:"","justify-end":""},H={flex:""},K={"w-300px":""},Q=["src","onClick"],X=["src","onClick"],Y=["onUpdate:modelValue"],Z={flex:""},ee={class:"item"},te=["src","onClick"],ae=["onUpdate:modelValue"],ne=I({__name:"index",setup(oe){const{height:V}=L(),n=z({needItemList:[],tableData:[],dialog:{title:"",visible:!1},currentCell:[],targetRow:{},targetProp:""}),{tableData:w,dialog:u,needItemList:h,currentCell:C}=R(n);function N(a,e){u.value.visible=!0,n.targetRow=a,n.targetProp=e.property,n.currentCell=JSON.parse(a[e.property]),n.needItemList=[]}function b(a){n.needItemList.some(e=>e.id===a)||n.needItemList.push({id:a,count:0})}function O(){const a={};n.needItemList.forEach(e=>{a[e.id]=e.count}),n.currentCell.push(a),n.targetRow[n.targetProp]=JSON.stringify(n.currentCell,null,2),u.value.visible=!1}function E(){const a=JSON.parse(JSON.stringify(n.tableData));a.forEach(e=>{e.tarotUncap=JSON.parse(e.tarotUncapStr),e.evokerUncap=JSON.parse(e.evokerUncapStr),e.weaponUncap=JSON.parse(e.weaponUncapStr),e.domainUncap=JSON.parse(e.domainUncapStr),delete e.tarotUncapStr,delete e.evokerUncapStr,delete e.weaponUncapStr,delete e.domainUncapStr}),q(JSON.stringify(a,null,2),"uncapData")}return $(()=>{n.tableData=G,n.tableData.forEach(a=>{a.tarotUncapStr=JSON.stringify(a.tarotUncap,null,2),a.evokerUncapStr=JSON.stringify(a.evokerUncap,null,2),a.weaponUncapStr=JSON.stringify(a.weaponUncap,null,2),a.domainUncapStr=JSON.stringify(a.domainUncap,null,2)})}),(a,e)=>{const d=P,U=M,J=F,g=T,D=B;return r(),i("div",null,[l(J,{data:m(w),"max-height":m(V)-220,onCellDblclick:N},{default:c(()=>[l(d,{prop:"name",label:"阶段",align:"center",width:"100"}),l(d,{prop:"tarotUncapStr",label:"塔罗牌突破",align:"center"},{default:c(({row:t})=>[l(U,{modelValue:t.tarotUncapStr,"onUpdate:modelValue":o=>t.tarotUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(d,{prop:"evokerUncapStr",label:"贤者突破",align:"center"},{default:c(({row:t})=>[l(U,{modelValue:t.evokerUncapStr,"onUpdate:modelValue":o=>t.evokerUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(d,{prop:"weaponUncapStr",label:"武器突破",align:"center"},{default:c(({row:t})=>[l(U,{modelValue:t.weaponUncapStr,"onUpdate:modelValue":o=>t.weaponUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(d,{prop:"domainUncapStr",label:"领域突破",align:"center"},{default:c(({row:t})=>[l(U,{modelValue:t.domainUncapStr,"onUpdate:modelValue":o=>t.domainUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data","max-height"]),s("div",A,[l(g,{type:"primary",onClick:E},{default:c(()=>[k(" 导出 ")]),_:1})]),l(D,{modelValue:m(u).visible,"onUpdate:modelValue":e[1]||(e[1]=t=>m(u).visible=t),title:m(u).title,width:"800px",top:"5vh"},{footer:c(()=>[l(g,{type:"primary",onClick:O},{default:c(()=>[k(" 确认 ")]),_:1}),l(g,{onClick:e[0]||(e[0]=t=>m(u).visible=!1)},{default:c(()=>[k(" 取消 ")]),_:1})]),default:c(()=>[s("div",H,[s("div",K,[(r(!0),i(_,null,f(m(W),(t,o)=>(r(),i("div",{key:o,flex:""},[(r(!0),i(_,null,f(t,(p,v)=>(r(),i("div",{key:v,class:"item"},[s("img",{src:`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${p}.jpg`,onClick:S=>b(p)},null,8,Q)]))),128))]))),128))]),s("div",null,[(r(!0),i(_,null,f(m(C),(t,o)=>(r(),i("div",{key:o,flex:""},[(r(!0),i(_,null,f(Object.keys(t),(p,v)=>(r(),i("div",{key:v,class:"item"},[s("img",{src:`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${p}.jpg`,onClick:S=>b(p)},null,8,X),x(s("input",{"onUpdate:modelValue":S=>t[p]=S,"w-40px":""},null,8,Y),[[y,t[p],void 0,{number:!0}]])]))),128))]))),128)),s("div",Z,[(r(!0),i(_,null,f(m(h),(t,o)=>(r(),i("div",{key:o},[s("div",ee,[s("img",{src:`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${t.id}.jpg`,onClick:p=>m(h).splice(o,1)},null,8,te),x(s("input",{"onUpdate:modelValue":p=>t.count=p,"w-40px":""},null,8,ae),[[y,t.count,void 0,{number:!0}]])])]))),128))])])])]),_:1},8,["modelValue","title"])])}}});const Ee=j(ne,[["__scopeId","data-v-2c50f7de"]]);export{Ee as default};
