import{E as D,_ as I}from"./base-d162ef96.js";import{E as N}from"./el-scrollbar-528d0670.js";import{E as $}from"./el-card-c6491a2c.js";import{d as s}from"./dayjs.min-34a2093e.js";import{s as S}from"./index-b7a986ea.js";import{e as E,u as z,H as R,a2 as L,G as w,b as M,f as x,g as a,h as m,j as f,n as r,k as n,x as A,m as h,p as d,q as P,s as u,t as v,C as V,U as j,r as k,o as q,z as U,J as F,a3 as G,a4 as J,v as T,W as K,T as W}from"./index-e1e4d07d.js";import{i as O}from"./icon-4d217982.js";const Q=E({name:"ElTimeline",setup(c,{slots:o}){const e=z("timeline");return R("timeline",o),()=>L("ul",{class:[e.b()]},[w(o,"default")])}}),X=M({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:O},hollow:{type:Boolean,default:!1}}),Y=E({name:"ElTimelineItem"}),Z=E({...Y,props:X,setup(c){const o=c,e=z("timeline-item"),i=x(()=>[e.e("node"),e.em("node",o.size||""),e.em("node",o.type||""),e.is("hollow",o.hollow)]);return(t,p)=>(a(),m("li",{class:r([n(e).b(),{[n(e).e("center")]:t.center}])},[f("div",{class:r(n(e).e("tail"))},null,2),t.$slots.dot?u("v-if",!0):(a(),m("div",{key:0,class:r(n(i)),style:A({backgroundColor:t.color})},[t.icon?(a(),h(n(D),{key:0,class:r(n(e).e("icon"))},{default:d(()=>[(a(),h(P(t.icon)))]),_:1},8,["class"])):u("v-if",!0)],6)),t.$slots.dot?(a(),m("div",{key:1,class:r(n(e).e("dot"))},[w(t.$slots,"dot")],2)):u("v-if",!0),f("div",{class:r(n(e).e("wrapper"))},[!t.hideTimestamp&&t.placement==="top"?(a(),m("div",{key:0,class:r([n(e).e("timestamp"),n(e).is("top")])},v(t.timestamp),3)):u("v-if",!0),f("div",{class:r(n(e).e("content"))},[w(t.$slots,"default")],2),!t.hideTimestamp&&t.placement==="bottom"?(a(),m("div",{key:1,class:r([n(e).e("timestamp"),n(e).is("bottom")])},v(t.timestamp),3)):u("v-if",!0)],2)],2))}});var B=I(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);const ee=V(Q,{TimelineItem:B}),te=j(B);function ne(){const c=k(200),o=k(),e=k(),i=()=>{const l=document.documentElement.offsetHeight,b=50,C=15*2,H=l-b-C-(e.value?e.value.offsetHeight:0);c.value=H>300?H:300},t=l=>{l.propertyName==="width"&&i()},p=()=>{window.addEventListener("resize",i,{passive:!0})},y=()=>{window.removeEventListener("resize",i)},_=()=>{e.value=document.querySelector(".app-container-header"),o.value=document.getElementsByClassName("sidebar-container")[0],o.value&&o.value.addEventListener("transitionend",t,{passive:!0})},g=()=>{o.value&&o.value.removeEventListener("transitionend",t)};return q(()=>{p(),_(),U(()=>{i()})}),F(()=>{y(),g()}),G(()=>{p(),_()}),J(()=>{y(),g()}),{dynamicHeight:c}}const se={"text-center":""},oe={style:{margin:"0px"}},ae={key:0,style:{margin:"14px 0 0 0"}},ie={key:1},fe=E({__name:"Schedule",setup(c){const{dynamicHeight:o}=ne(),e=function(i,t){if(s().isBefore(s(i))&&s(i).diff(s(),"h")<24)return"orange";if(s().isAfter(s(i))&&s(t).isAfter(s())&&s(t).diff(s(),"h")<24)return"red";if(s().isAfter(s(i))&&s().isBefore(s(t)))return"green"};return(i,t)=>{const p=$,y=te,_=ee,g=N;return a(),h(p,{"min-w-300px":"","body-style":{padding:"20px 20px 0px 20px",height:`${n(o)-64}px`}},{header:d(()=>[f("div",se,[f("span",null,v(n(s)().month()+1)+"月日程表",1)])]),default:d(()=>[T(g,{height:n(o)-62},{default:d(()=>[n(s)().isSame(n(s)(n(S)[0].end),"month")?(a(),h(_,{key:0,style:{padding:"0 15px 0 0"}},{default:d(()=>[(a(!0),m(W,null,K(n(S),(l,b)=>(a(),h(y,{key:b,placement:"top",timestamp:`${n(s)(l.start).format("MM/DD HH:mm")} - ${n(s)(l.end).format("MM/DD HH:mm")}`,color:e(l.start,l.end)},{default:d(()=>[T(p,{"body-style":{padding:"10px"},shadow:"hover"},{default:d(()=>[f("h4",oe,v(l.title),1),l.comment?(a(),m("p",ae,v(l.comment),1)):u("",!0)]),_:2},1024)]),_:2},1032,["timestamp","color"]))),128))]),_:1})):(a(),m("label",ie,"暂未更新"))]),_:1},8,["height"])]),_:1},8,["body-style"])}}});export{fe as _};
