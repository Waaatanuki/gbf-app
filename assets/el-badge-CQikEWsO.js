import{G as h,H as r,d as y,N as _,f as o,am as c,aH as m,o as C,c as B,_ as w,a as D,w as N,a5 as $,b as E,W as f,e as a,v as k,t as x,ae as z,a9 as A,a0 as P,ao as T}from"./index-B1oQUUvY.js";import{u as g}from"./constants-DrWjQvGm.js";const U=h({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,dotStyle:{type:r([String,Object,Array])},badgeStyle:{type:r([String,Object,Array])},offset:{type:r(Array),default:[0,0]},dotClass:{type:String},badgeClass:{type:String}}),j=["textContent"],H=y({name:"ElBadge"}),O=y({...H,props:U,setup(b,{expose:v}){const e=b,s=_("badge"),n=o(()=>e.isDot?"":c(e.value)&&c(e.max)?e.max<e.value?`${e.max}+`:e.value===0&&!e.showZero?"":`${e.value}`:`${e.value}`),S=o(()=>{var t,l,d,i,u,p;return[{backgroundColor:e.color,marginRight:m(-((l=(t=e.offset)==null?void 0:t[0])!=null?l:0)),marginTop:m((i=(d=e.offset)==null?void 0:d[1])!=null?i:0)},(u=e.dotStyle)!=null?u:{},(p=e.badgeStyle)!=null?p:{}]});return g({from:"dot-style",replacement:"badge-style",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},o(()=>!!e.dotStyle)),g({from:"dot-class",replacement:"badge-class",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},o(()=>!!e.dotClass)),v({content:n}),(t,l)=>(C(),B("div",{class:f(a(s).b())},[w(t.$slots,"default"),D(A,{name:`${a(s).namespace.value}-zoom-in-center`,persisted:""},{default:N(()=>[$(E("sup",{class:f([a(s).e("content"),a(s).em("content",t.type),a(s).is("fixed",!!t.$slots.default),a(s).is("dot",t.isDot),t.dotClass,t.badgeClass]),style:k(a(S)),textContent:x(a(n))},null,14,j),[[z,!t.hidden&&(a(n)||t.isDot)]])]),_:1},8,["name"])],2))}});var V=P(O,[["__file","badge.vue"]]);const I=T(V);export{I as E};
