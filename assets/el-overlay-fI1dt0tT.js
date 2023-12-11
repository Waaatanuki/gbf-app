import{aj as j,aO as q,L as F,aY as K,aE as L,aa as M,N as w,a1 as J,aG as Q,aZ as X,aD as R,aP as S,D as B,G as C,d as ee,a as oe,Y as P,aC as te,ax as ne,a_ as ae,a$ as le,g as p,b0 as se,b1 as ue,s as T,as as ce,v as ie,a2 as de,ai as re,b2 as D}from"./index-rX73Wo0J.js";import{P as k}from"./vnode-EgALqNpt.js";import{U as N}from"./event-vOXeFsAk.js";import{c as I}from"./use-form-item-v5HtO5Ci.js";import{g as fe}from"./scroll-Q60dl_M-.js";import{i as ye}from"./focus-trap--1d4DBqN.js";const me=(e,o={})=>{j(e)||q("[useLockscreen]","You need to pass a ref param to this function");const l=o.ns||F("popup"),c=K(()=>l.bm("parent","hidden"));if(!L||M(document.body,c.value))return;let n=0,s=!1,t="0";const d=()=>{setTimeout(()=>{R(document==null?void 0:document.body,c.value),s&&document&&(document.body.style.width=t)},200)};w(e,r=>{if(!r){d();return}s=!M(document.body,c.value),s&&(t=document.body.style.width),n=fe(l.namespace.value);const u=document.documentElement.clientHeight<document.body.scrollHeight,f=J(document.body,"overflowY");n>0&&(u||f==="scroll")&&s&&(document.body.style.width=`calc(100% - ${n}px)`),Q(document.body,c.value)}),X(()=>d())},ve=e=>{if(!e)return{onClick:S,onMousedown:S,onMouseup:S};let o=!1,l=!1;return{onClick:t=>{o&&l&&e(t),o=l=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{l=t.target===t.currentTarget}}},pe=B({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:C([String,Array,Object])},zIndex:{type:C([String,Number])}}),Ce={click:e=>e instanceof MouseEvent},be="overlay";var ge=ee({name:"ElOverlay",props:pe,emits:Ce,setup(e,{slots:o,emit:l}){const c=F(be),n=r=>{l("click",r)},{onClick:s,onMousedown:t,onMouseup:d}=ve(e.customMaskEvent?void 0:n);return()=>e.mask?oe("div",{class:[c.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:t,onMouseup:d},[P(o,"default")],k.STYLE|k.CLASS|k.PROPS,["onClick","onMouseup","onMousedown"]):te("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[P(o,"default")])}});const Oe=ge,he=B({center:Boolean,alignCenter:Boolean,closeIcon:{type:ne},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Me={close:()=>!0},Pe=B({...he,appendToBody:Boolean,appendTo:{type:C(String),default:"body"},beforeClose:{type:C(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Te={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[N]:e=>ae(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},De=(e,o)=>{var l;const n=re().emit,{nextZIndex:s}=le();let t="";const d=I(),r=I(),u=p(!1),f=p(!1),v=p(!1),b=p((l=e.zIndex)!=null?l:s());let y,m;const A=se("namespace",ue),z=T(()=>{const a={},i=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(a[`${i}-margin-top`]=e.top),e.width&&(a[`${i}-width`]=ce(e.width))),a}),Y=T(()=>e.alignCenter?{display:"flex"}:{});function $(){n("opened")}function V(){n("closed"),n(N,!1),e.destroyOnClose&&(v.value=!1)}function _(){n("close")}function E(){m==null||m(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=D(()=>O(),e.openDelay):O()}function g(){y==null||y(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=D(()=>x(),e.closeDelay):x()}function h(){function a(i){i||(f.value=!0,u.value=!1)}e.beforeClose?e.beforeClose(a):g()}function H(){e.closeOnClickModal&&h()}function O(){L&&(u.value=!0)}function x(){u.value=!1}function U(){n("openAutoFocus")}function G(){n("closeAutoFocus")}function W(a){var i;((i=a.detail)==null?void 0:i.focusReason)==="pointer"&&a.preventDefault()}e.lockScroll&&me(u);function Z(){e.closeOnPressEscape&&h()}return w(()=>e.modelValue,a=>{a?(f.value=!1,E(),v.value=!0,b.value=ye(e.zIndex)?s():b.value++,ie(()=>{n("open"),o.value&&(o.value.scrollTop=0)})):u.value&&g()}),w(()=>e.fullscreen,a=>{o.value&&(a?(t=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=t)}),de(()=>{e.modelValue&&(u.value=!0,v.value=!0,E())}),{afterEnter:$,afterLeave:V,beforeLeave:_,handleClose:h,onModalClick:H,close:g,doClose:x,onOpenAutoFocus:U,onCloseAutoFocus:G,onCloseRequested:Z,onFocusoutPrevented:W,titleId:d,bodyId:r,closed:f,style:z,overlayDialogStyle:Y,rendered:v,visible:u,zIndex:b}};export{Oe as E,Me as a,Pe as b,Te as c,he as d,ve as e,De as u};
