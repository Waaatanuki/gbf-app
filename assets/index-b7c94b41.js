import{D as te,ax as I,G as oe,a$ as T,aF as P,al as D,d as M,L as ie,s as d,g as _,as as le,N as A,O as ne,a2 as se,o,c as m,b as B,e as a,T as u,a9 as re,l as c,w as b,W as V,V as g,X as v,q as U,a as E,bt as ce,n as W,U as ue,$ as de,v as ve,bu as j,aP as pe,ai as me,an as fe,ak as he,a4 as q,ad as H,aj as z}from"./index-bba98456.js";import{_ as ye}from"./SelectBullets.vue_vue_type_script_setup_true_lang-20e43b61.js";import{_ as be}from"./ViewResult.vue_vue_type_style_index_0_lang-a25dce59.js";import{i as ge}from"./validator-e9faa339.js";import{U as $,C as F,I as K}from"./event-9519ab40.js";import{u as we,a as Ve,d as Ce,b as Se}from"./use-form-item-902c4c06.js";import{u as ke}from"./index-5c578e30.js";import"./el-button-60cdf9cb.js";import"./el-popper-7c33d311.js";import"./aria-60e0cdc6.js";import"./focus-trap-40a5b9b6.js";import"./el-tab-pane-a38735d3.js";import"./typescript-defaf979.js";import"./strings-58777ac0.js";import"./vnode-693f38db.js";import"./file-70fab348.js";import"./el-message-f3e0e14a.js";import"./castArray-84d94bee.js";import"./refs-6d6a4e9d.js";import"./el-table-column-2b43ad06.js";import"./_Uint8Array-10c14502.js";import"./_initCloneObject-3073b442.js";import"./index-152bfc79.js";import"./isEqual-959370d2.js";import"./el-checkbox-fd6de4a8.js";import"./flatten-326f9b30.js";import"./el-tooltip-4ed993c7.js";/* empty css               */const Ie=te({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:ge},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:I},activeActionIcon:{type:I},activeIcon:{type:I},inactiveIcon:{type:I},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:oe(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),Te={[$]:s=>T(s)||P(s)||D(s),[F]:s=>T(s)||P(s)||D(s),[K]:s=>T(s)||P(s)||D(s)},_e=["onClick"],Be=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Ee=["aria-hidden"],Ne=["aria-hidden"],Pe=["aria-hidden"],O="ElSwitch",De=M({name:O}),Ae=M({...De,props:Ie,emits:Te,setup(s,{expose:f,emit:r}){const t=s,p=me(),{formItem:y}=we(),h=Ve(),i=ie("switch");(e=>{e.forEach(n=>{ke({from:n[0],replacement:n[1],scope:O,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},d(()=>{var k;return!!((k=p.vnode.props)!=null&&k[n[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:X}=Ce(t,{formItemContext:y}),C=Se(d(()=>t.loading)),N=_(t.modelValue!==!1),w=_(),J=_(),Q=d(()=>[i.b(),i.m(h.value),i.is("disabled",C.value),i.is("checked",l.value)]),Y=d(()=>[i.e("label"),i.em("label","left"),i.is("active",!l.value)]),Z=d(()=>[i.e("label"),i.em("label","right"),i.is("active",l.value)]),x=d(()=>({width:le(t.width)}));A(()=>t.modelValue,()=>{N.value=!0}),A(()=>t.value,()=>{N.value=!1});const L=d(()=>N.value?t.modelValue:t.value),l=d(()=>L.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(L.value)||(r($,t.inactiveValue),r(F,t.inactiveValue),r(K,t.inactiveValue)),A(l,e=>{var n;w.value.checked=e,t.validateEvent&&((n=y==null?void 0:y.validate)==null||n.call(y,"change").catch(k=>ne()))});const S=()=>{const e=l.value?t.inactiveValue:t.activeValue;r($,e),r(F,e),r(K,e),ve(()=>{w.value.checked=l.value})},G=()=>{if(C.value)return;const{beforeChange:e}=t;if(!e){S();return}const n=e();[j(n),T(n)].includes(!0)||pe(O,"beforeChange must return type `Promise<boolean>` or `boolean`"),j(n)?n.then(R=>{R&&S()}).catch(R=>{}):n&&S()},ee=d(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),ae=()=>{var e,n;(n=(e=w.value)==null?void 0:e.focus)==null||n.call(e)};return se(()=>{w.value.checked=l.value}),f({focus:ae,checked:l}),(e,n)=>(o(),m("div",{class:u(a(Q)),style:W(a(ee)),onClick:ue(G,["prevent"])},[B("input",{id:a(X),ref_key:"input",ref:w,class:u(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(l),"aria-disabled":a(C),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(C),tabindex:e.tabindex,onChange:S,onKeydown:re(G,["enter"])},null,42,Be),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),m("span",{key:0,class:u(a(Y))},[e.inactiveIcon?(o(),c(a(g),{key:0},{default:b(()=>[(o(),c(V(e.inactiveIcon)))]),_:1})):v("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),m("span",{key:1,"aria-hidden":a(l)},U(e.inactiveText),9,Ee)):v("v-if",!0)],2)):v("v-if",!0),B("span",{ref_key:"core",ref:J,class:u(a(i).e("core")),style:W(a(x))},[e.inlinePrompt?(o(),m("div",{key:0,class:u(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),c(a(g),{key:0,class:u(a(i).is("icon"))},{default:b(()=>[(o(),c(V(a(l)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),m("span",{key:1,class:u(a(i).is("text")),"aria-hidden":!a(l)},U(a(l)?e.activeText:e.inactiveText),11,Ne)):v("v-if",!0)],2)):v("v-if",!0),B("div",{class:u(a(i).e("action"))},[e.loading?(o(),c(a(g),{key:0,class:u(a(i).is("loading"))},{default:b(()=>[E(a(ce))]),_:1},8,["class"])):e.activeActionIcon&&a(l)?(o(),c(a(g),{key:1},{default:b(()=>[(o(),c(V(e.activeActionIcon)))]),_:1})):e.inactiveActionIcon&&!a(l)?(o(),c(a(g),{key:2},{default:b(()=>[(o(),c(V(e.inactiveActionIcon)))]),_:1})):v("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),m("span",{key:1,class:u(a(Z))},[e.activeIcon?(o(),c(a(g),{key:0},{default:b(()=>[(o(),c(V(e.activeIcon)))]),_:1})):v("v-if",!0),!e.activeIcon&&e.activeText?(o(),m("span",{key:1,"aria-hidden":!a(l)},U(e.activeText),9,Pe)):v("v-if",!0)],2)):v("v-if",!0)],14,_e))}});var Ue=de(Ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const ze=fe(Ue);const $e={relative:""},Fe={class:"absolute bottom-1 right-2 z-50"},pa=M({__name:"index",setup(s){const f=_("result"),r=he("selectedBullet",[[],[],[],[],[],[]]);return(t,p)=>{const y=ze;return o(),m("div",$e,[q(E(ye,{modelValue:a(r),"onUpdate:modelValue":p[0]||(p[0]=h=>z(r)?r.value=h:null)},null,8,["modelValue"]),[[H,a(f)==="select"]]),q(E(be,{modelValue:a(r),"onUpdate:modelValue":p[1]||(p[1]=h=>z(r)?r.value=h:null)},null,8,["modelValue"]),[[H,a(f)==="result"]]),B("div",Fe,[E(y,{modelValue:a(f),"onUpdate:modelValue":p[2]||(p[2]=h=>z(f)?f.value=h:null),"inline-prompt":"",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},"active-text":"查看素材","active-value":"select","inactive-text":"选择子弹","inactive-value":"result"},null,8,["modelValue"])])])}}});export{pa as default};