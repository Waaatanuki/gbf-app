import{G as h,H as o,d as m,N,f as r,M as _,ak as f,al as $,o as g,n as j,w as v,Y as x,U as C,e as p,v as O,X as E,_ as w,am as k}from"./index-qm5sgKFt.js";import{m as u}from"./typescript-WBLZcIum.js";import{r as S}from"./el-row-v1tK0K4E.js";const B=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>u({})},sm:{type:o([Number,Object]),default:()=>u({})},md:{type:o([Number,Object]),default:()=>u({})},lg:{type:o([Number,Object]),default:()=>u({})},xl:{type:o([Number,Object]),default:()=>u({})}}),K=m({name:"ElCol"}),P=m({...K,props:B,setup(d){const t=d,{gutter:n}=N(S,{gutter:r(()=>0)}),a=_("col"),i=r(()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=`${n.value/2}px`),e}),b=r(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];f(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{f(t[s])?e.push(a.b(`${s}-${t[s]}`)):$(t[s])&&Object.entries(t[s]).forEach(([l,c])=>{e.push(l!=="span"?a.b(`${s}-${l}-${c}`):a.b(`${s}-${c}`))})}),n.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(g(),j(E(e.tag),{class:C(p(b)),style:O(p(i))},{default:v(()=>[x(e.$slots,"default")]),_:3},8,["class","style"]))}});var D=w(P,[["__file","col.vue"]]);const M=k(D);export{M as E};