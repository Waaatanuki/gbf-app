import{d as _,i as n,a1 as v,o,c as l,b as p,F as $,p as M,U as L,v as S}from"./index-qm5sgKFt.js";import{_ as x}from"./_plugin-vue_export-helper-x3n3nnut.js";const I={class:"gacha_bg"},R=["src"],k=_({__name:"GachaAnimation",props:["resultList"],emits:["close"],setup(c,{emit:h}){const s=c,d=h,r=n(),i=n(0),u=n([]);function f(){for(let t=0;t<s.resultList.length;t++){const m=375-Math.cos(t*36*Math.PI/180)*100,a=250+Math.sin(t*36*Math.PI/180)*100,e=375-Math.cos(t*36*Math.PI/180)*500,g=250+Math.sin(t*36*Math.PI/180)*500;u.value.push(document.styleSheets[0].cssRules.length),document.styleSheets[0].insertRule(`@keyframes move${t}{0% {top: 50%;left: 50%;}90% {top: ${m}px;left: ${a}px;opacity: 1;}100% {top: ${e}px;left: ${g}px;opacity: 0;}}`,document.styleSheets[0].cssRules.length),u.value.push(document.styleSheets[0].cssRules.length);const y=s.resultList.length>10?`animation: move${t} 0.5s ${.1*t}s;`:`animation: move${t} 2s ${.5*t}s;`;document.styleSheets[0].insertRule(`.result${t}{${y} animation-fill-mode: forwards;}`,document.styleSheets[0].cssRules.length)}}return v(()=>{r.value.addEventListener("animationend",()=>{i.value++,i.value===s.resultList.length&&d("close")}),f()}),(t,m)=>(o(),l("div",{ref_key:"playground",ref:r,class:"playground"},[p("div",null,[p("div",I,[(o(!0),l($,null,M(c.resultList,(a,e)=>(o(),l("img",{key:e,class:L(["list",`result${e}`]),src:`./images/gacha/${a.type}.png`,style:S(`transform:translate(-50%, -150%) rotateZ(${36*e}deg );opacity: 0;`)},null,14,R))),128))])])],512))}}),B=x(k,[["__scopeId","data-v-9e3b71a6"]]);export{B as default};