import{d as g,o as a,n as b,w as l,e as c,b as t,t as u,a as _,c as n,g as C,E as k,bY as w,bZ as F,i as y,a1 as x,F as L,p as $}from"./index-rp-Zyp_U.js";import"./el-tooltip-w40geAFS.js";import{E as B}from"./el-popper-hVsu43Ar.js";import{E}from"./el-badge-mWl2WXN1.js";import{g as N,a as m}from"./file-y1DC4Gf7.js";import{_ as J}from"./_plugin-vue_export-helper-x3n3nnut.js";const h=i=>(w("data-v-2ce015e0"),i=i(),F(),i),S={relative:"","h-100px":"",fc:"","gap-10px":"","text-sm":""},q={"shrink-0":""},T=["src"],V={"mt-2px":"",fc:"","gap-2px":""},Q=h(()=>t("div",{"i-game-icons:crossed-swords":""},null,-1)),R={"text-orange":"","font-black":""},G=h(()=>t("div",{"i-game-icons:crossed-swords":""},null,-1)),j={fc:"","flex-col":""},D={"w-230px":"",flex:"","items-center":"","justify-around":""},M={key:0,class:"desc-item"},P=["src"],Y={"text-xs":""},Z={key:1,class:"desc-item"},z=["src"],A={class:"desc-item"},H=["src"],K={key:0,"text-xs":""},O=g({__name:"RaidCard",props:{raidInfo:{}},setup(i){function r(e=0,o=0){return o===0?"0.00":(e/o*100).toFixed(2)}function s(e){switch(e.quest_id){case"303141":return`${e.redChestFFJ}+${e.normalChestFFJ}`;case"301061":return`${e.blueChestFFJ}+${e.redChestFFJ}`;default:return e.blueChestFFJ}}function d(e){switch(e.quest_id){case"303141":return"自发金+金箱金";case"301061":return"蓝箱金+自发金";default:return"蓝箱金"}}return(e,o)=>{const p=E,I=B,v=k;return a(),b(v,{"body-style":{padding:"5px"},class:"dark"},{default:l(()=>{var f;return[t("div",S,[t("div",q,[t("img",{"w-100px":"",src:("getQuestImg"in e?e.getQuestImg:c(N))(e.raidInfo.quest_id)},null,8,T),t("div",V,[Q,t("div",R,u((f=e.raidInfo.total)==null?void 0:f.toLocaleString()),1),G])]),t("div",j,[t("div",D,[e.raidInfo.is_blue_treasure?(a(),n("div",M,[_(p,{value:e.raidInfo.blueChest,type:"danger",max:999999},{default:l(()=>[t("img",{"w-40px":"",src:("getLocalImg"in e?e.getLocalImg:c(m))("blueChest")},null,8,P)]),_:1},8,["value"]),t("div",Y,u(r(e.raidInfo.blueChest,e.raidInfo.total))+"% ",1)])):(a(),n("div",Z,[t("img",{"w-40px":"","brightness-40":"",src:("getLocalImg"in e?e.getLocalImg:c(m))("blueChest")},null,8,z)])),t("div",A,[_(I,{content:d(e.raidInfo)},{default:l(()=>[_(p,{value:s(e.raidInfo),type:"danger",max:999999},{default:l(()=>[t("img",{"w-50px":"",src:("getLocalImg"in e?e.getLocalImg:c(m))("goldBrick","item")},null,8,H)]),_:1},8,["value"])]),_:1},8,["content"]),e.raidInfo.quest_id!=="303141"?(a(),n("div",K,u(r(e.raidInfo.blueChestFFJ,e.raidInfo.blueChest))+"% ",1)):C("",!0)])])])])]}),_:1})}}}),U=J(O,[["__scopeId","data-v-2ce015e0"]]),W={class:"summary-template-wrapper"},X=t("div",{"mb-10px":"","text-end":"","text-xl":""}," 2023猎金成就 ",-1),ie=g({__name:"Page8",props:{userName:{},baseInfo:{}},emits:["setName"],setup(i){const r=y();return x(()=>{var s;(s=r.value)==null||s.classList.add("animate__animated","animate__rotateIn","animate__slower")}),(s,d)=>{const e=U;return a(),n("div",W,[t("div",{ref_key:"elTitle",ref:r},[t("div",{"cursor-pointer":"","text-end":"","text-base":"",onClick:d[0]||(d[0]=o=>s.$emit("setName"))},u(`@${s.userName}`),1),X,(a(!0),n(L,null,$(s.baseInfo,o=>(a(),n("div",{key:o.quest_id},[_(e,{"raid-info":o},null,8,["raid-info"])]))),128))],512)])}}});export{ie as _};
