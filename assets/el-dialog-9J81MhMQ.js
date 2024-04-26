import{G as Y,aw as ae,d as N,M as se,O as q,f as D,o as T,c as U,b as O,_ as E,W as y,e,t as te,a as M,w,p as _,Z as ne,Y as re,g as j,v as Q,a0 as W,bI as ie,H as Z,aB as de,bw as ue,i as k,au as ce,bJ as fe,aH as ve,Q as G,x as pe,a3 as me,aj as ye,aX as H,aK as ge,ac as be,N as Ce,V as he,a5 as we,$ as Ee,bK as ke,ae as De,a9 as Ie,bx as Be,ao as Te}from"./index-B1oQUUvY.js";import{u as Fe,a as Ae,E as Se,b as $e}from"./el-overlay-Cx92dAJM.js";import{F as Pe,i as Le,E as Re}from"./focus-trap-TRmdyXUw.js";import{c as Oe}from"./refs-Cn1FYRyE.js";import{U as X}from"./event-BB_Ol6Sd.js";import{b as J,u as Me}from"./constants-DrWjQvGm.js";const x=Symbol("dialogInjectionKey"),ee=Y({center:Boolean,alignCenter:Boolean,closeIcon:{type:ae},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Ne={close:()=>!0},ze=["aria-level"],Ve=["aria-label"],Ke=["id"],Ue=N({name:"ElDialogContent"}),_e=N({...Ue,props:ee,emits:Ne,setup(o){const t=o,{t:u}=se(),{Close:S}=ie,{dialogRef:n,headerRef:c,bodyId:I,ns:s,style:g}=q(x),{focusTrapRef:r}=q(Pe),f=D(()=>[s.b(),s.is("fullscreen",t.fullscreen),s.is("draggable",t.draggable),s.is("align-center",t.alignCenter),{[s.m("center")]:t.center}]),v=Oe(r,n),b=D(()=>t.draggable),d=D(()=>t.overflow);return Fe(n,c,b,d),(a,B)=>(T(),U("div",{ref:e(v),class:y(e(f)),style:Q(e(g)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:c,class:y([e(s).e("header"),{"show-close":a.showClose}])},[E(a.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":a.ariaLevel,class:y(e(s).e("title"))},te(a.title),11,ze)]),a.showClose?(T(),U("button",{key:0,"aria-label":e(u)("el.dialog.close"),class:y(e(s).e("headerbtn")),type:"button",onClick:B[0]||(B[0]=$=>a.$emit("close"))},[M(e(re),{class:y(e(s).e("close"))},{default:w(()=>[(T(),_(ne(a.closeIcon||e(S))))]),_:1},8,["class"])],10,Ve)):j("v-if",!0)],2),O("div",{id:e(I),class:y(e(s).e("body"))},[E(a.$slots,"default")],10,Ke),a.$slots.footer?(T(),U("footer",{key:0,class:y(e(s).e("footer"))},[E(a.$slots,"footer")],2)):j("v-if",!0)],6))}});var je=W(_e,[["__file","dialog-content.vue"]]);const qe=Y({...ee,appendToBody:Boolean,appendTo:{type:Z(String),default:"body"},beforeClose:{type:Z(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ze={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>de(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ge=(o,t)=>{var u;const n=ye().emit,{nextZIndex:c}=ue();let I="";const s=J(),g=J(),r=k(!1),f=k(!1),v=k(!1),b=k((u=o.zIndex)!=null?u:c());let d,a;const B=ce("namespace",fe),$=D(()=>{const i={},h=`--${B.value}-dialog`;return o.fullscreen||(o.top&&(i[`${h}-margin-top`]=o.top),o.width&&(i[`${h}-width`]=ve(o.width))),i}),z=D(()=>o.alignCenter?{display:"flex"}:{});function P(){n("opened")}function V(){n("closed"),n(X,!1),o.destroyOnClose&&(v.value=!1)}function K(){n("close")}function L(){a==null||a(),d==null||d(),o.openDelay&&o.openDelay>0?{stop:d}=H(()=>R(),o.openDelay):R()}function F(){d==null||d(),a==null||a(),o.closeDelay&&o.closeDelay>0?{stop:a}=H(()=>l(),o.closeDelay):l()}function A(){function i(h){h||(f.value=!0,r.value=!1)}o.beforeClose?o.beforeClose(i):F()}function p(){o.closeOnClickModal&&A()}function R(){ge&&(r.value=!0)}function l(){r.value=!1}function m(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function oe(i){var h;((h=i.detail)==null?void 0:h.focusReason)==="pointer"&&i.preventDefault()}o.lockScroll&&Ae(r);function le(){o.closeOnPressEscape&&A()}return G(()=>o.modelValue,i=>{i?(f.value=!1,L(),v.value=!0,b.value=Le(o.zIndex)?c():b.value++,pe(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):r.value&&F()}),G(()=>o.fullscreen,i=>{t.value&&(i?(I=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=I)}),me(()=>{o.modelValue&&(r.value=!0,v.value=!0,L())}),{afterEnter:P,afterLeave:V,beforeLeave:K,handleClose:A,onModalClick:p,close:F,doClose:l,onOpenAutoFocus:m,onCloseAutoFocus:C,onCloseRequested:le,onFocusoutPrevented:oe,titleId:s,bodyId:g,closed:f,style:$,overlayDialogStyle:z,rendered:v,visible:r,zIndex:b}},He=["aria-label","aria-labelledby","aria-describedby"],Je=N({name:"ElDialog",inheritAttrs:!1}),Ye=N({...Je,props:qe,emits:Ze,setup(o,{expose:t}){const u=o,S=be();Me({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},D(()=>!!S.title));const n=Ce("dialog"),c=k(),I=k(),s=k(),{visible:g,titleId:r,bodyId:f,style:v,overlayDialogStyle:b,rendered:d,zIndex:a,afterEnter:B,afterLeave:$,beforeLeave:z,handleClose:P,onModalClick:V,onOpenAutoFocus:K,onCloseAutoFocus:L,onCloseRequested:F,onFocusoutPrevented:A}=Ge(u,c);he(x,{dialogRef:c,headerRef:I,bodyId:f,ns:n,rendered:d,style:v});const p=$e(V),R=D(()=>u.draggable&&!u.fullscreen);return t({visible:g,dialogContentRef:s}),(l,m)=>(T(),_(Be,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[M(Ie,{name:"dialog-fade",onAfterEnter:e(B),onAfterLeave:e($),onBeforeLeave:e(z),persisted:""},{default:w(()=>[we(M(e(Se),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(a)},{default:w(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(r),"aria-describedby":e(f),class:y(`${e(n).namespace.value}-overlay-dialog`),style:Q(e(b)),onClick:m[0]||(m[0]=(...C)=>e(p).onClick&&e(p).onClick(...C)),onMousedown:m[1]||(m[1]=(...C)=>e(p).onMousedown&&e(p).onMousedown(...C)),onMouseup:m[2]||(m[2]=(...C)=>e(p).onMouseup&&e(p).onMouseup(...C))},[M(e(Re),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(K),onFocusAfterReleased:e(L),onFocusoutPrevented:e(A),onReleaseRequested:e(F)},{default:w(()=>[e(d)?(T(),_(je,Ee({key:0,ref_key:"dialogContentRef",ref:s},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(R),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(P)}),ke({header:w(()=>[l.$slots.title?E(l.$slots,"title",{key:1}):E(l.$slots,"header",{key:0,close:e(P),titleId:e(r),titleClass:e(n).e("title")})]),default:w(()=>[E(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:w(()=>[E(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):j("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,He)]),_:3},8,["mask","overlay-class","z-index"]),[[De,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Qe=W(Ye,[["__file","dialog.vue"]]);const ao=Te(Qe);export{ao as E,Ze as a,qe as d,Ge as u};