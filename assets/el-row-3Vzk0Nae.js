import{D as c,d as n,L as p,s as o,S as m,o as f,k as g,w as y,Y as d,T as w,e as a,q as _,W as v,$ as S,an as b}from"./index-rX73Wo0J.js";const C=Symbol("rowContextKey"),R=["start","center","end","space-around","space-between","space-evenly"],h=["top","middle","bottom"],k=c({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:R,default:"start"},align:{type:String,values:h}}),x=n({name:"ElRow"}),$=n({...x,props:k,setup(r){const t=r,s=p("row"),l=o(()=>t.gutter);m(C,{gutter:l});const u=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),i=o(()=>[s.b(),s.is(`justify-${t.justify}`,t.justify!=="start"),s.is(`align-${t.align}`,!!t.align)]);return(e,E)=>(f(),g(v(e.tag),{class:w(a(i)),style:_(a(u))},{default:y(()=>[d(e.$slots,"default")]),_:3},8,["class","style"]))}});var j=S($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const z=b(j);export{z as E,C as r};
