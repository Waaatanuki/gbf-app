import{D as i,d as a,L as p,s as o,S as m,o as f,l as g,w as y,Y as w,T as d,e as n,n as _,W as v,$ as R,an as S}from"./index-2f6a894d.js";const b=Symbol("rowContextKey"),C=["start","center","end","space-around","space-between","space-evenly"],h=["top","middle","bottom"],x=i({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:C,default:"start"},align:{type:String,values:h}}),$=a({name:"ElRow"}),j=a({...$,props:x,setup(r){const t=r,s=p("row"),l=o(()=>t.gutter);m(b,{gutter:l});const u=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),c=o(()=>[s.b(),s.is(`justify-${t.justify}`,t.justify!=="start"),s.is(`align-${t.align}`,!!t.align)]);return(e,E)=>(f(),g(v(e.tag),{class:d(n(c)),style:_(n(u))},{default:y(()=>[w(e.$slots,"default")]),_:3},8,["class","style"]))}});var k=R(j,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const z=S(k);export{z as E,b as r};