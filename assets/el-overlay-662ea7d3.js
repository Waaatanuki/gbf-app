import{I as K,aK as j,D,aU as q,aV as L,ai as E,P as B,ab as G,aW as X,aX as J,aY as Q,aL as h,x as S,$ as w,d as R,a as ee,L as M,aZ as oe,aB as te,B as ne,a_ as le,g as v,a$ as ae,s as P,aw as se,v as ue,N as ce,ap as ie,b0 as de,b1 as I}from"./index-c9f02560.js";import{P as x}from"./vnode-0932a310.js";import{U as F}from"./event-9519ab40.js";import{b as T}from"./use-form-item-aade2dcf.js";import{g as re}from"./scroll-8187b660.js";const fe=(e,o={})=>{K(e)||j("[useLockscreen]","You need to pass a ref param to this function");const u=o.ns||D("popup"),t=q(()=>u.bm("parent","hidden"));if(!L||E(document.body,t.value))return;let c=0,s=!1,n="0";const d=()=>{setTimeout(()=>{Q(document==null?void 0:document.body,t.value),s&&document&&(document.body.style.width=n)},200)};B(e,a=>{if(!a){d();return}s=!E(document.body,t.value),s&&(n=document.body.style.width),c=re(u.namespace.value);const f=document.documentElement.clientHeight<document.body.scrollHeight,r=G(document.body,"overflowY");c>0&&(f||r==="scroll")&&s&&(document.body.style.width=`calc(100% - ${c}px)`),X(document.body,t.value)}),J(()=>d())},ye=e=>{if(!e)return{onClick:h,onMousedown:h,onMouseup:h};let o=!1,u=!1;return{onClick:n=>{o&&u&&e(n),o=u=!1},onMousedown:n=>{o=n.target===n.currentTarget},onMouseup:n=>{u=n.target===n.currentTarget}}},me=S({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:w([String,Array,Object])},zIndex:{type:w([String,Number])}}),ve={click:e=>e instanceof MouseEvent},pe="overlay";var Ce=R({name:"ElOverlay",props:me,emits:ve,setup(e,{slots:o,emit:u}){const t=D(pe),c=a=>{u("click",a)},{onClick:s,onMousedown:n,onMouseup:d}=ye(e.customMaskEvent?void 0:c);return()=>e.mask?ee("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:n,onMouseup:d},[M(o,"default")],x.STYLE|x.CLASS|x.PROPS,["onClick","onMouseup","onMousedown"]):oe("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[M(o,"default")])}});const Se=Ce,be=S({center:Boolean,alignCenter:Boolean,closeIcon:{type:te},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ke={close:()=>!0},Oe=S({...be,appendToBody:Boolean,beforeClose:{type:w(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ee={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[F]:e=>ne(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Me=(e,o)=>{const t=ie().emit,{nextZIndex:c}=le();let s="";const n=T(),d=T(),a=v(!1),f=v(!1),r=v(!1),p=v(e.zIndex||c());let y,m;const N=ae("namespace",de),A=P(()=>{const l={},i=`--${N.value}-dialog`;return e.fullscreen||(e.top&&(l[`${i}-margin-top`]=e.top),e.width&&(l[`${i}-width`]=se(e.width))),l}),z=P(()=>e.alignCenter?{display:"flex"}:{});function $(){t("opened")}function V(){t("closed"),t(F,!1),e.destroyOnClose&&(r.value=!1)}function Y(){t("close")}function k(){m==null||m(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=I(()=>O(),e.openDelay):O()}function C(){y==null||y(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=I(()=>g(),e.closeDelay):g()}function b(){function l(i){i||(f.value=!0,a.value=!1)}e.beforeClose?e.beforeClose(l):C()}function H(){e.closeOnClickModal&&b()}function O(){L&&(a.value=!0)}function g(){a.value=!1}function U(){t("openAutoFocus")}function W(){t("closeAutoFocus")}function _(l){var i;((i=l.detail)==null?void 0:i.focusReason)==="pointer"&&l.preventDefault()}e.lockScroll&&fe(a);function Z(){e.closeOnPressEscape&&b()}return B(()=>e.modelValue,l=>{l?(f.value=!1,k(),r.value=!0,p.value=e.zIndex?p.value++:c(),ue(()=>{t("open"),o.value&&(o.value.scrollTop=0)})):a.value&&C()}),B(()=>e.fullscreen,l=>{o.value&&(l?(s=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=s)}),ce(()=>{e.modelValue&&(a.value=!0,r.value=!0,k())}),{afterEnter:$,afterLeave:V,beforeLeave:Y,handleClose:b,onModalClick:H,close:C,doClose:g,onOpenAutoFocus:U,onCloseAutoFocus:W,onCloseRequested:Z,onFocusoutPrevented:_,titleId:n,bodyId:d,closed:f,style:A,overlayDialogStyle:z,rendered:r,visible:a,zIndex:p}};export{Se as E,ke as a,Oe as b,Ee as c,be as d,ye as e,Me as u};