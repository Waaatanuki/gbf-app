import{a2 as W,bn as z,aF as I,aJ as C,ak as D,aE as $,N as T,bM as A,aL as F,aa as x,Q as U,a1 as j,bN as G,bO as J,bP as K,aT as y,G as Q,H as k,d as V,a as _,_ as L,ar as q}from"./index-Bd6qZyaF.js";import{g as Z}from"./scroll-P4EnzFDe.js";import{P as h}from"./vnode-Dml585OL.js";const ce=(e,o,n,s)=>{let l={offsetX:0,offsetY:0};const a=u=>{const m=u.clientX,f=u.clientY,{offsetX:v,offsetY:p}=l,d=e.value.getBoundingClientRect(),b=d.left,g=d.top,O=d.width,S=d.height,Y=document.documentElement.clientWidth,P=document.documentElement.clientHeight,H=-b+v,B=-g+p,X=Y-b-O+v,N=P-g-S+p,M=E=>{let i=v+E.clientX-m,r=p+E.clientY-f;s!=null&&s.value||(i=Math.min(Math.max(i,H),X),r=Math.min(Math.max(r,B),N)),l={offsetX:i,offsetY:r},e.value&&(e.value.style.transform=`translate(${C(i)}, ${C(r)})`)},w=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",w)},t=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",a)},c=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",a)};W(()=>{z(()=>{n.value?t():c()})}),I(()=>{c()})},ue=(e,o={})=>{D(e)||$("[useLockscreen]","You need to pass a ref param to this function");const n=o.ns||T("popup"),s=A(()=>n.bm("parent","hidden"));if(!F||x(document.body,s.value))return;let l=0,a=!1,t="0";const c=()=>{setTimeout(()=>{K(document==null?void 0:document.body,s.value),a&&document&&(document.body.style.width=t)},200)};U(e,u=>{if(!u){c();return}a=!x(document.body,s.value),a&&(t=document.body.style.width),l=Z(n.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,f=j(document.body,"overflowY");l>0&&(m||f==="scroll")&&a&&(document.body.style.width=`calc(100% - ${l}px)`),G(document.body,s.value)}),J(()=>c())},R=e=>{if(!e)return{onClick:y,onMousedown:y,onMouseup:y};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},ee=Q({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:k([String,Array,Object])},zIndex:{type:k([String,Number])}}),te={click:e=>e instanceof MouseEvent},oe="overlay";var ne=V({name:"ElOverlay",props:ee,emits:te,setup(e,{slots:o,emit:n}){const s=T(oe),l=u=>{n("click",u)},{onClick:a,onMousedown:t,onMouseup:c}=R(e.customMaskEvent?void 0:l);return()=>e.mask?_("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:t,onMouseup:c},[L(o,"default")],h.STYLE|h.CLASS|h.PROPS,["onClick","onMouseup","onMousedown"]):q("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[L(o,"default")])}});const de=ne;export{de as E,ue as a,R as b,ce as u};