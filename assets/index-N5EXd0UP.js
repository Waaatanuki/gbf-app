import{d as I,ap as L,j as z,l as R,a2 as $,o as r,c as i,a as l,w as m,e as c,b as p,h,F as _,n as f,a4 as x,aq as y}from"./index-DGVJY3sE.js";import{E as j}from"./el-dialog-D3bY6RhP.js";import"./el-overlay-C6uXQS5N.js";import{E as B}from"./el-button-QcooIq4r.js";import{E as T,a as P}from"./el-table-column-CUbd3amw.js";import"./el-checkbox-DIlYYVmJ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-Cvm7aUhr.js";import{E as F}from"./el-input-DZJqV61D.js";/* empty css               */import{e as M,m as q}from"./evoker-CECH8F0J.js";import{d as W}from"./file-CSe8c71d.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./focus-trap-DBXUt-qA.js";import"./aria-BUADUvnR.js";import"./refs-D8_BBQ9D.js";import"./event-BB_Ol6Sd.js";import"./constants-CGDfyvcO.js";import"./index-C3IT7SGo.js";import"./scroll-BLkrq8__.js";import"./vnode-Alh-IJZt.js";import"./use-form-item-DrPzztX4.js";import"./flatten-M37tWZt4.js";import"./_Uint8Array-CuUNCmTr.js";import"./index-DsijmTlE.js";import"./isEqual-ikpparqF.js";import"./debounce-BGjrDh4P.js";import"./_initCloneObject-TFD3gmFx.js";import"./typescript-Bp3YSIOJ.js";const G={"mr-5":"","mt-5":"",flex:"","justify-end":""},H={flex:""},K={"w-300px":""},Q=["src","onClick"],X=["src","onClick"],Y=["onUpdate:modelValue"],Z={flex:""},ee={class:"item"},te=["src","onClick"],ae=["onUpdate:modelValue"],ne=I({__name:"index",setup(oe){const{height:V}=L(),n=z({needItemList:[],tableData:[],dialog:{title:"",visible:!1},currentCell:[],targetRow:{},targetProp:""}),{tableData:w,dialog:u,needItemList:k,currentCell:C}=R(n);function N(a,e){u.value.visible=!0,n.targetRow=a,n.targetProp=e.property,n.currentCell=JSON.parse(a[e.property]),n.needItemList=[]}function b(a){n.needItemList.some(e=>e.id===a)||n.needItemList.push({id:a,count:0})}function O(){const a={};n.needItemList.forEach(e=>{a[e.id]=e.count}),n.currentCell.push(a),n.targetRow[n.targetProp]=JSON.stringify(n.currentCell,null,2),u.value.visible=!1}function E(){const a=JSON.parse(JSON.stringify(n.tableData));a.forEach(e=>{e.tarotUncap=JSON.parse(e.tarotUncapStr),e.evokerUncap=JSON.parse(e.evokerUncapStr),e.weaponUncap=JSON.parse(e.weaponUncapStr),e.domainUncap=JSON.parse(e.domainUncapStr),delete e.tarotUncapStr,delete e.evokerUncapStr,delete e.weaponUncapStr,delete e.domainUncapStr}),W(JSON.stringify(a,null,2),"uncapData")}return $(()=>{n.tableData=M,n.tableData.forEach(a=>{a.tarotUncapStr=JSON.stringify(a.tarotUncap,null,2),a.evokerUncapStr=JSON.stringify(a.evokerUncap,null,2),a.weaponUncapStr=JSON.stringify(a.weaponUncap,null,2),a.domainUncapStr=JSON.stringify(a.domainUncap,null,2)})}),(a,e)=>{const d=T,U=F,J=P,g=B,D=j;return r(),i("div",null,[l(J,{data:c(w),"max-height":c(V)-220,onCellDblclick:N},{default:m(()=>[l(d,{prop:"name",label:"阶段",align:"center",width:"100"}),l(d,{prop:"tarotUncapStr",label:"塔罗牌突破",align:"center"},{default:m(({row:t})=>[l(U,{modelValue:t.tarotUncapStr,"onUpdate:modelValue":o=>t.tarotUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(d,{prop:"evokerUncapStr",label:"贤者突破",align:"center"},{default:m(({row:t})=>[l(U,{modelValue:t.evokerUncapStr,"onUpdate:modelValue":o=>t.evokerUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(d,{prop:"weaponUncapStr",label:"武器突破",align:"center"},{default:m(({row:t})=>[l(U,{modelValue:t.weaponUncapStr,"onUpdate:modelValue":o=>t.weaponUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(d,{prop:"domainUncapStr",label:"领域突破",align:"center"},{default:m(({row:t})=>[l(U,{modelValue:t.domainUncapStr,"onUpdate:modelValue":o=>t.domainUncapStr=o,type:"textarea",autosize:{maxRows:10}},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data","max-height"]),p("div",G,[l(g,{type:"primary",onClick:E},{default:m(()=>[h(" 导出 ")]),_:1})]),l(D,{modelValue:c(u).visible,"onUpdate:modelValue":e[1]||(e[1]=t=>c(u).visible=t),title:c(u).title,width:"800px",top:"5vh"},{footer:m(()=>[l(g,{type:"primary",onClick:O},{default:m(()=>[h(" 确认 ")]),_:1}),l(g,{onClick:e[0]||(e[0]=t=>c(u).visible=!1)},{default:m(()=>[h(" 取消 ")]),_:1})]),default:m(()=>[p("div",H,[p("div",K,[(r(!0),i(_,null,f(c(q),(t,o)=>(r(),i("div",{key:o,flex:""},[(r(!0),i(_,null,f(t,(s,v)=>(r(),i("div",{key:v,class:"item"},[p("img",{src:`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${s}.jpg`,onClick:S=>b(s)},null,8,Q)]))),128))]))),128))]),p("div",null,[(r(!0),i(_,null,f(c(C),(t,o)=>(r(),i("div",{key:o,flex:""},[(r(!0),i(_,null,f(Object.keys(t),(s,v)=>(r(),i("div",{key:v,class:"item"},[p("img",{src:`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${s}.jpg`,onClick:S=>b(s)},null,8,X),x(p("input",{"onUpdate:modelValue":S=>t[s]=S,"w-40px":""},null,8,Y),[[y,t[s],void 0,{number:!0}]])]))),128))]))),128)),p("div",Z,[(r(!0),i(_,null,f(c(k),(t,o)=>(r(),i("div",{key:o},[p("div",ee,[p("img",{src:`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${t.id}.jpg`,onClick:s=>c(k).splice(o,1)},null,8,te),x(p("input",{"onUpdate:modelValue":s=>t.count=s,"w-40px":""},null,8,ae),[[y,t.count,void 0,{number:!0}]])])]))),128))])])])]),_:1},8,["modelValue","title"])])}}}),Le=A(ne,[["__scopeId","data-v-2c50f7de"]]);export{Le as default};
