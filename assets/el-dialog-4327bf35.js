import{a2 as _,aq as J,ar as Z,as as U,d as I,K as G,M as O,s as $,o as k,c as N,b as R,Y as h,T as m,e,q as Q,a as T,w as b,l as z,W as x,V as ee,X as K,n as W,$ as j,at as oe,ab as se,L as te,g as q,S as ae,a4 as le,Z as ne,au as re,ad as ie,a8 as de,av as ce,al as ue}from"./index-9911e23c.js";import{d as me,a as fe,b as pe,c as ge,u as ve,E as be,e as he}from"./el-overlay-3c6a3a2d.js";import{F as ye,E as Ce}from"./focus-trap-9f7dd421.js";import{c as Ee}from"./refs-0de27b33.js";import{u as V}from"./index-c2641986.js";const ke=(i,a,d)=>{let y={offsetX:0,offsetY:0};const l=s=>{const p=s.clientX,E=s.clientY,{offsetX:c,offsetY:g}=y,u=i.value.getBoundingClientRect(),t=u.left,v=u.top,L=u.width,S=u.height,F=document.documentElement.clientWidth,D=document.documentElement.clientHeight,B=-t+c,Y=-v+g,X=F-t-L+c,P=D-v-S+g,M=A=>{const o=Math.min(Math.max(c+A.clientX-p,B),X),r=Math.min(Math.max(g+A.clientY-E,Y),P);y={offsetX:o,offsetY:r},i.value.style.transform=`translate(${U(o)}, ${U(r)})`},n=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",n)},f=()=>{a.value&&i.value&&a.value.addEventListener("mousedown",l)},C=()=>{a.value&&i.value&&a.value.removeEventListener("mousedown",l)};_(()=>{J(()=>{d.value?f():C()})}),Z(()=>{C()})},H=Symbol("dialogInjectionKey"),we=["aria-level"],$e=["aria-label"],Le=["id"],De=I({name:"ElDialogContent"}),Me=I({...De,props:me,emits:fe,setup(i){const a=i,{t:d}=G(),{Close:y}=oe,{dialogRef:l,headerRef:f,bodyId:C,ns:s,style:p}=O(H),{focusTrapRef:E}=O(ye),c=$(()=>[s.b(),s.is("fullscreen",a.fullscreen),s.is("draggable",a.draggable),s.is("align-center",a.alignCenter),{[s.m("center")]:a.center},a.customClass]),g=Ee(E,l),u=$(()=>a.draggable);return ke(l,f,u),(t,v)=>(k(),N("div",{ref:e(g),class:m(e(c)),style:W(e(p)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:f,class:m(e(s).e("header"))},[h(t.$slots,"header",{},()=>[R("span",{role:"heading","aria-level":t.ariaLevel,class:m(e(s).e("title"))},Q(t.title),11,we)]),t.showClose?(k(),N("button",{key:0,"aria-label":e(d)("el.dialog.close"),class:m(e(s).e("headerbtn")),type:"button",onClick:v[0]||(v[0]=L=>t.$emit("close"))},[T(e(ee),{class:m(e(s).e("close"))},{default:b(()=>[(k(),z(x(t.closeIcon||e(y))))]),_:1},8,["class"])],10,$e)):K("v-if",!0)],2),R("div",{id:e(C),class:m(e(s).e("body"))},[h(t.$slots,"default")],10,Le),t.$slots.footer?(k(),N("footer",{key:0,class:m(e(s).e("footer"))},[h(t.$slots,"footer")],2)):K("v-if",!0)],6))}});var Ae=j(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Re=["aria-label","aria-labelledby","aria-describedby"],Te=I({name:"ElDialog",inheritAttrs:!1}),Ie=I({...Te,props:pe,emits:ge,setup(i,{expose:a}){const d=i,y=se();V({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},$(()=>!!y.title)),V({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},$(()=>!!d.customClass));const l=te("dialog"),f=q(),C=q(),s=q(),{visible:p,titleId:E,bodyId:c,style:g,overlayDialogStyle:u,rendered:t,zIndex:v,afterEnter:L,afterLeave:S,beforeLeave:F,handleClose:D,onModalClick:B,onOpenAutoFocus:Y,onCloseAutoFocus:X,onCloseRequested:P,onFocusoutPrevented:M}=ve(d,f);ae(H,{dialogRef:f,headerRef:C,bodyId:c,ns:l,rendered:t,style:g});const n=he(B),A=$(()=>d.draggable&&!d.fullscreen);return a({visible:p,dialogContentRef:s}),(o,r)=>(k(),z(ce,{to:"body",disabled:!o.appendToBody},[T(de,{name:"dialog-fade",onAfterEnter:e(L),onAfterLeave:e(S),onBeforeLeave:e(F),persisted:""},{default:b(()=>[le(T(e(be),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e(v)},{default:b(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(E),"aria-describedby":e(c),class:m(`${e(l).namespace.value}-overlay-dialog`),style:W(e(u)),onClick:r[0]||(r[0]=(...w)=>e(n).onClick&&e(n).onClick(...w)),onMousedown:r[1]||(r[1]=(...w)=>e(n).onMousedown&&e(n).onMousedown(...w)),onMouseup:r[2]||(r[2]=(...w)=>e(n).onMouseup&&e(n).onMouseup(...w))},[T(e(Ce),{loop:"",trapped:e(p),"focus-start-el":"container",onFocusAfterTrapped:e(Y),onFocusAfterReleased:e(X),onFocusoutPrevented:e(M),onReleaseRequested:e(P)},{default:b(()=>[e(t)?(k(),z(Ae,ne({key:0,ref_key:"dialogContentRef",ref:s},o.$attrs,{"custom-class":o.customClass,center:o.center,"align-center":o.alignCenter,"close-icon":o.closeIcon,draggable:e(A),fullscreen:o.fullscreen,"show-close":o.showClose,title:o.title,"aria-level":o.headerAriaLevel,onClose:e(D)}),re({header:b(()=>[o.$slots.title?h(o.$slots,"title",{key:1}):h(o.$slots,"header",{key:0,close:e(D),titleId:e(E),titleClass:e(l).e("title")})]),default:b(()=>[h(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:b(()=>[h(o.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Re)]),_:3},8,["mask","overlay-class","z-index"]),[[ie,e(p)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Se=j(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Ne=ue(Se);export{Ne as E};
