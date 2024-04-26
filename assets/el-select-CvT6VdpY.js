import{O as me,f as i,an as Q,bl as lt,bm as G,Q as j,aj as Ve,a0 as ge,d as se,N as ne,e as Oe,j as he,l as nt,aJ as Jt,x as H,a4 as le,ad as Ee,o as b,c as I,_ as k,b as M,t as z,W as d,X as B,i as O,a2 as Te,aK as U,g as $,v as ve,ai as J,M as Xt,P as Yt,D as L,aQ as Zt,R as xt,aO as _t,a7 as el,am as tl,bn as ll,bo as Ie,au as nl,G as sl,J as ol,H as fe,aE as Ze,I as al,a6 as il,K as rl,a3 as ul,Y as dl,V as st,r as K,bp as cl,a as A,w as R,F as xe,n as _e,p as N,a9 as te,aq as pl,Z as we,bq as fl,ao as vl,aG as ot}from"./index-DGVJY3sE.js";import{i as ml,u as bl,E as gl}from"./el-input-DZJqV61D.js";import{u as hl,a as yl,E as Sl}from"./el-popper-Cvm7aUhr.js";import{t as Cl,E as Ol}from"./index-B2KpOWFt.js";import{e as Il}from"./strings-B4DucRNU.js";import{i as be}from"./isEqual-ikpparqF.js";import{u as at}from"./constants-CGDfyvcO.js";import{u as wl,c as Vl,a as El}from"./use-form-item-DrPzztX4.js";import{U as W,C as it}from"./event-BB_Ol6Sd.js";import{E as Tl}from"./aria-BUADUvnR.js";import{s as $l}from"./scroll-BLkrq8__.js";import{t as Ml,d as Rl}from"./debounce-BGjrDh4P.js";import{b as kl,C as Dl}from"./index-DsijmTlE.js";var et=1/0,Bl=17976931348623157e292;function Ll(e){if(!e)return e===0?e:0;if(e=Ml(e),e===et||e===-et){var n=e<0?-1:1;return n*Bl}return e===e?e:0}function Fl(e){var n=Ll(e),o=n%1;return n===n?o?n-o:n:0}function Nl(e,n,o,f){for(var r=e.length,v=o+(f?1:-1);f?v--:++v<r;)if(n(e[v],v,e))return v;return-1}var Wl=Math.max,zl=Math.min;function Pl(e,n,o){var f=e==null?0:e.length;if(!f)return-1;var r=f-1;return o!==void 0&&(r=Fl(o),r=o<0?Wl(f+r,0):zl(r,f-1)),Nl(e,kl(n),r,!0)}const rt=Symbol("ElSelectGroup"),ye=Symbol("ElSelect");function Kl(e,n){const o=me(ye),f=me(rt,{disabled:!1}),r=i(()=>o.props.multiple?u(o.props.modelValue,e.value):u([o.props.modelValue],e.value)),v=i(()=>{if(o.props.multiple){const m=o.props.modelValue||[];return!r.value&&m.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),l=i(()=>e.label||(Q(e.value)?"":e.value)),h=i(()=>e.value||e.label||""),c=i(()=>e.disabled||n.groupDisabled||v.value),y=Ve(),u=(m=[],g)=>{if(Q(e.value)){const a=o.props.valueKey;return m&&m.some(E=>lt(G(E,a))===G(g,a))}else return m&&m.includes(g)},V=()=>{!e.disabled&&!f.disabled&&(o.states.hoveringIndex=o.optionsArray.indexOf(y.proxy))},w=m=>{const g=new RegExp(Il(m),"i");n.visible=g.test(l.value)||e.created};return j(()=>l.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),j(()=>e.value,(m,g)=>{const{remote:a,valueKey:E}=o.props;if(be(m,g)||(o.onOptionDestroy(g,y.proxy),o.onOptionCreate(y.proxy)),!e.created&&!a){if(E&&Q(m)&&Q(g)&&m[E]===g[E])return;o.setSelected()}}),j(()=>f.disabled,()=>{n.groupDisabled=f.disabled},{immediate:!0}),{select:o,currentLabel:l,currentValue:h,itemSelected:r,isDisabled:c,hoverItem:V,updateOption:w}}const Al=se({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=ne("select"),o=at(),f=i(()=>[n.be("dropdown","item"),n.is("disabled",Oe(h)),n.is("selected",Oe(l)),n.is("hovering",Oe(w))]),r=he({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:v,itemSelected:l,isDisabled:h,select:c,hoverItem:y,updateOption:u}=Kl(e,r),{visible:V,hover:w}=nt(r),m=Ve().proxy;c.onOptionCreate(m),Jt(()=>{const a=m.value,{selected:E}=c.states,oe=(c.props.multiple?E:[E]).some(ae=>ae.value===m.value);H(()=>{c.states.cachedOptions.get(a)===m&&!oe&&c.states.cachedOptions.delete(a)}),c.onOptionDestroy(a,m)});function g(){e.disabled!==!0&&r.groupDisabled!==!0&&c.handleOptionSelect(m)}return{ns:n,id:o,containerKls:f,currentLabel:v,itemSelected:l,isDisabled:h,select:c,hoverItem:y,updateOption:u,visible:V,hover:w,selectOptionClick:g,states:r}}}),Hl=["id","aria-disabled","aria-selected"];function Ul(e,n,o,f,r,v){return le((b(),I("li",{id:e.id,class:d(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:n[1]||(n[1]=B((...l)=>e.selectOptionClick&&e.selectOptionClick(...l),["stop"]))},[k(e.$slots,"default",{},()=>[M("span",null,z(e.currentLabel),1)])],42,Hl)),[[Ee,e.visible]])}var $e=ge(Al,[["render",Ul],["__file","option.vue"]]);const Gl=se({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=me(ye),n=ne("select"),o=i(()=>e.props.popperClass),f=i(()=>e.props.multiple),r=i(()=>e.props.fitInputWidth),v=O("");function l(){var h;v.value=`${(h=e.selectRef)==null?void 0:h.offsetWidth}px`}return Te(()=>{l(),U(e.selectRef,l)}),{ns:n,minWidth:v,popperClass:o,isMultiple:f,isFitInputWidth:r}}});function jl(e,n,o,f,r,v){return b(),I("div",{class:d([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ve({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(b(),I("div",{key:0,class:d(e.ns.be("dropdown","header"))},[k(e.$slots,"header")],2)):$("v-if",!0),k(e.$slots,"default"),e.$slots.footer?(b(),I("div",{key:1,class:d(e.ns.be("dropdown","footer"))},[k(e.$slots,"footer")],2)):$("v-if",!0)],6)}var ql=ge(Gl,[["render",jl],["__file","select-dropdown.vue"]]);function Ql(e){const n=O(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:v=>{const l=v.target.value,h=l[l.length-1]||"";n.value=!ml(h)},handleCompositionEnd:v=>{n.value&&(n.value=!1,J(e)&&e(v))}}}const Jl=11,Xl=(e,n)=>{const{t:o}=Xt(),f=at(),r=ne("select"),v=ne("input"),l=he({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),h=O(null),c=O(null),y=O(null),u=O(null),V=O(null),w=O(null),m=O(null),g=O(null),a=O(null),E=O(null),X=O(null),oe=O(null),{wrapperRef:ae,isFocused:Me,handleFocus:dt,handleBlur:Re}=bl(V,{afterFocus(){e.automaticDropdown&&!C.value&&(C.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(t){var s,p;return((s=y.value)==null?void 0:s.isFocusInsideContent(t))||((p=u.value)==null?void 0:p.isFocusInsideContent(t))},afterBlur(){C.value=!1,l.menuVisibleOnFocus=!1}}),C=O(!1),Y=O(),{form:ke,formItem:Z}=wl(),{inputId:ct}=Vl(e,{formItemContext:Z}),{valueOnClear:pt,isEmptyValue:ft}=Yt(e),ie=i(()=>e.disabled||(ke==null?void 0:ke.disabled)),Se=i(()=>e.multiple?L(e.modelValue)&&e.modelValue.length>0:!ft(e.modelValue)),vt=i(()=>e.clearable&&!ie.value&&l.inputHovering&&Se.value),De=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),mt=i(()=>r.is("reverse",De.value&&C.value)),Be=i(()=>(Z==null?void 0:Z.validateState)||""),bt=i(()=>Zt[Be.value]),gt=i(()=>e.remote?300:0),Le=i(()=>e.loading?e.loadingText||o("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&x.value===0?e.noMatchText||o("el.select.noMatch"):l.options.size===0?e.noDataText||o("el.select.noData"):null),x=i(()=>T.value.filter(t=>t.visible).length),T=i(()=>{const t=Array.from(l.options.values()),s=[];return l.optionValues.forEach(p=>{const S=t.findIndex(F=>F.value===p);S>-1&&s.push(t[S])}),s.length>=t.length?s:t}),ht=i(()=>Array.from(l.cachedOptions.values())),yt=i(()=>{const t=T.value.filter(s=>!s.created).some(s=>s.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!t}),Fe=()=>{e.filterable&&J(e.filterMethod)||e.filterable&&e.remote&&J(e.remoteMethod)||T.value.forEach(t=>{var s;(s=t.updateOption)==null||s.call(t,l.inputValue)})},Ne=El(),St=i(()=>["small"].includes(Ne.value)?"small":"default"),Ct=i({get(){return C.value&&Le.value!==!1},set(t){C.value=t}}),Ot=i(()=>L(e.modelValue)?e.modelValue.length===0&&!l.inputValue:e.filterable?!l.inputValue:!0),It=i(()=>{var t;const s=(t=e.placeholder)!=null?t:o("el.select.placeholder");return e.multiple||!Se.value?s:l.selectedLabel});j(()=>e.modelValue,(t,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",re("")),ue(),!be(t,s)&&e.validateEvent&&(Z==null||Z.validate("change").catch(p=>xt()))},{flush:"post",deep:!0}),j(()=>C.value,t=>{t?re(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),n("visible-change",t)}),j(()=>l.options.entries(),()=>{var t;if(!_t)return;const s=((t=h.value)==null?void 0:t.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!el(e.modelValue)||!Array.from(s).includes(document.activeElement))&&ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value&&We()},{flush:"post"}),j(()=>l.hoveringIndex,t=>{tl(t)&&t>-1?Y.value=T.value[t]||{}:Y.value={},T.value.forEach(s=>{s.hover=Y.value===s})}),ll(()=>{l.isBeforeHide||Fe()});const re=t=>{l.previousQuery!==t&&(l.previousQuery=t,e.filterable&&J(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&J(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value?H(We):H(wt))},We=()=>{const t=T.value.filter(S=>S.visible&&!S.disabled&&!S.states.groupDisabled),s=t.find(S=>S.created),p=t[0];l.hoveringIndex=qe(T.value,s||p)},ue=()=>{if(e.multiple)l.selectedLabel="";else{const s=ze(e.modelValue);l.selectedLabel=s.currentLabel,l.selected=s;return}const t=[];L(e.modelValue)&&e.modelValue.forEach(s=>{t.push(ze(s))}),l.selected=t},ze=t=>{let s;const p=Ie(t).toLowerCase()==="object",S=Ie(t).toLowerCase()==="null",F=Ie(t).toLowerCase()==="undefined";for(let P=l.cachedOptions.size-1;P>=0;P--){const D=ht.value[P];if(p?G(D.value,e.valueKey)===G(t,e.valueKey):D.value===t){s={value:t,currentLabel:D.currentLabel,isDisabled:D.isDisabled};break}}if(s)return s;const q=p?t.label:!S&&!F?t:"";return{value:t,currentLabel:q}},wt=()=>{e.multiple?l.hoveringIndex=T.value.findIndex(t=>l.selected.some(s=>ee(s)===ee(t))):l.hoveringIndex=T.value.findIndex(t=>ee(t)===ee(l.selected))},Vt=()=>{l.selectionWidth=c.value.getBoundingClientRect().width},Pe=()=>{l.calculatorWidth=w.value.getBoundingClientRect().width},Et=()=>{l.collapseItemWidth=X.value.getBoundingClientRect().width},Ce=()=>{var t,s;(s=(t=y.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ke=()=>{var t,s;(s=(t=u.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ae=()=>{l.inputValue.length>0&&!C.value&&(C.value=!0),re(l.inputValue)},He=t=>{if(l.inputValue=t.target.value,e.remote)Ue();else return Ae()},Ue=Rl(()=>{Ae()},gt.value),_=t=>{be(e.modelValue,t)||n(it,t)},Tt=t=>Pl(t,s=>!l.disabledOptions.has(s)),$t=t=>{if(e.multiple&&t.code!==Tl.delete&&t.target.value.length<=0){const s=e.modelValue.slice(),p=Tt(s);if(p<0)return;s.splice(p,1),n(W,s),_(s)}},Mt=(t,s)=>{const p=l.selected.indexOf(s);if(p>-1&&!ie.value){const S=e.modelValue.slice();S.splice(p,1),n(W,S),_(S),n("remove-tag",s.value)}t.stopPropagation(),ce()},Ge=t=>{t.stopPropagation();const s=e.multiple?[]:pt.value;if(e.multiple)for(const p of l.selected)p.isDisabled&&s.push(p.value);n(W,s),_(s),l.hoveringIndex=-1,C.value=!1,n("clear"),ce()},je=t=>{if(e.multiple){const s=(e.modelValue||[]).slice(),p=qe(s,t.value);p>-1?s.splice(p,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(t.value),n(W,s),_(s),t.created&&re(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else n(W,t.value),_(t.value),C.value=!1;ce(),!C.value&&H(()=>{de(t)})},qe=(t=[],s)=>{if(!Q(s))return t.indexOf(s);const p=e.valueKey;let S=-1;return t.some((F,q)=>lt(G(F,p))===G(s,p)?(S=q,!0):!1),S},de=t=>{var s,p,S,F,q;const pe=L(t)?t[0]:t;let P=null;if(pe!=null&&pe.value){const D=T.value.filter(Ye=>Ye.value===pe.value);D.length>0&&(P=D[0].$el)}if(y.value&&P){const D=(F=(S=(p=(s=y.value)==null?void 0:s.popperRef)==null?void 0:p.contentRef)==null?void 0:S.querySelector)==null?void 0:F.call(S,`.${r.be("dropdown","wrap")}`);D&&$l(D,P)}(q=oe.value)==null||q.handleScroll()},Rt=t=>{l.options.set(t.value,t),l.cachedOptions.set(t.value,t),t.disabled&&l.disabledOptions.set(t.value,t)},kt=(t,s)=>{l.options.get(t)===s&&l.options.delete(t)},{handleCompositionStart:Dt,handleCompositionUpdate:Bt,handleCompositionEnd:Lt}=Ql(t=>He(t)),Ft=i(()=>{var t,s;return(s=(t=y.value)==null?void 0:t.popperRef)==null?void 0:s.contentRef}),Nt=()=>{l.isBeforeHide=!1,H(()=>de(l.selected))},ce=()=>{var t;(t=V.value)==null||t.focus()},Wt=()=>{Qe()},zt=t=>{Ge(t)},Qe=t=>{if(C.value=!1,Me.value){const s=new FocusEvent("focus",t);H(()=>Re(s))}},Pt=()=>{l.inputValue.length>0?l.inputValue="":C.value=!1},Je=()=>{ie.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:C.value=!C.value)},Kt=()=>{C.value?T.value[l.hoveringIndex]&&je(T.value[l.hoveringIndex]):Je()},ee=t=>Q(t.value)?G(t.value,e.valueKey):t.value,At=i(()=>T.value.filter(t=>t.visible).every(t=>t.disabled)),Ht=i(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),Ut=i(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),Xe=t=>{if(!C.value){C.value=!0;return}if(!(l.options.size===0||x.value===0)&&!At.value){t==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):t==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const s=T.value[l.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&Xe(t),H(()=>de(Y.value))}},Gt=()=>{if(!c.value)return 0;const t=window.getComputedStyle(c.value);return Number.parseFloat(t.gap||"6px")},jt=i(()=>{const t=Gt();return{maxWidth:`${X.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-t:l.selectionWidth}px`}}),qt=i(()=>({maxWidth:`${l.selectionWidth}px`})),Qt=i(()=>({width:`${Math.max(l.calculatorWidth,Jl)}px`}));return e.multiple&&!L(e.modelValue)&&n(W,[]),!e.multiple&&L(e.modelValue)&&n(W,""),U(c,Vt),U(w,Pe),U(a,Ce),U(ae,Ce),U(E,Ke),U(X,Et),Te(()=>{ue()}),{inputId:ct,contentId:f,nsSelect:r,nsInput:v,states:l,isFocused:Me,expanded:C,optionsArray:T,hoverOption:Y,selectSize:Ne,filteredOptionsCount:x,resetCalculatorWidth:Pe,updateTooltip:Ce,updateTagTooltip:Ke,debouncedOnInputChange:Ue,onInput:He,deletePrevTag:$t,deleteTag:Mt,deleteSelected:Ge,handleOptionSelect:je,scrollToOption:de,hasModelValue:Se,shouldShowPlaceholder:Ot,currentPlaceholder:It,showClose:vt,iconComponent:De,iconReverse:mt,validateState:Be,validateIcon:bt,showNewOption:yt,updateOptions:Fe,collapseTagSize:St,setSelected:ue,selectDisabled:ie,emptyText:Le,handleCompositionStart:Dt,handleCompositionUpdate:Bt,handleCompositionEnd:Lt,onOptionCreate:Rt,onOptionDestroy:kt,handleMenuEnter:Nt,handleFocus:dt,focus:ce,blur:Wt,handleBlur:Re,handleClearClick:zt,handleClickOutside:Qe,handleEsc:Pt,toggleMenu:Je,selectOption:Kt,getValueKey:ee,navigateOptions:Xe,dropdownMenuVisible:Ct,showTagList:Ht,collapseTagList:Ut,tagStyle:jt,collapseTagStyle:qt,inputStyle:Qt,popperRef:Ft,inputRef:V,tooltipRef:y,tagTooltipRef:u,calculatorRef:w,prefixRef:m,suffixRef:g,selectRef:h,wrapperRef:ae,selectionRef:c,scrollbarRef:oe,menuRef:a,tagMenuRef:E,collapseItemRef:X}};var Yl=se({name:"ElOptions",setup(e,{slots:n}){const o=me(ye);let f=[];return()=>{var r,v;const l=(r=n.default)==null?void 0:r.call(n),h=[];function c(y){L(y)&&y.forEach(u=>{var V,w,m,g;const a=(V=(u==null?void 0:u.type)||{})==null?void 0:V.name;a==="ElOptionGroup"?c(!nl(u.children)&&!L(u.children)&&J((w=u.children)==null?void 0:w.default)?(m=u.children)==null?void 0:m.default():u.children):a==="ElOption"?h.push((g=u.props)==null?void 0:g.value):L(u.children)&&c(u.children)})}return l.length&&c((v=l[0])==null?void 0:v.children),be(h,f)||(f=h,o&&(o.states.optionValues=h)),l}}});const Zl=sl({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:ol,effect:{type:fe(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:fe(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:hl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Ze,default:al},fitInputWidth:Boolean,suffixIcon:{type:Ze,default:il},tagType:{...Cl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:fe(String),values:yl,default:"bottom-start"},fallbackPlacements:{type:fe(Array),default:["bottom-start","top-start","right","left"]},ariaLabel:{type:String,default:void 0},...rl}),tt="ElSelect",xl=se({name:tt,componentName:tt,components:{ElInput:gl,ElSelectMenu:ql,ElOption:$e,ElOptions:Yl,ElTag:Ol,ElScrollbar:ul,ElTooltip:Sl,ElIcon:dl},directives:{ClickOutside:Dl},props:Zl,emits:[W,it,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const o=Xl(e,n);return st(ye,he({props:e,states:o.states,optionsArray:o.optionsArray,handleOptionSelect:o.handleOptionSelect,onOptionCreate:o.onOptionCreate,onOptionDestroy:o.onOptionDestroy,selectRef:o.selectRef,setSelected:o.setSelected})),{...o}}}),_l=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],en=["textContent"];function tn(e,n,o,f,r,v){const l=K("el-tag"),h=K("el-tooltip"),c=K("el-icon"),y=K("el-option"),u=K("el-options"),V=K("el-scrollbar"),w=K("el-select-menu"),m=cl("click-outside");return le((b(),I("div",{ref:"selectRef",class:d([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:n[16]||(n[16]=g=>e.states.inputHovering=!0),onMouseleave:n[17]||(n[17]=g=>e.states.inputHovering=!1),onClick:n[18]||(n[18]=B((...g)=>e.toggleMenu&&e.toggleMenu(...g),["prevent","stop"]))},[A(h,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[15]||(n[15]=g=>e.states.isBeforeHide=!1)},{default:R(()=>{var g;return[M("div",{ref:"wrapperRef",class:d([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(b(),I("div",{key:0,ref:"prefixRef",class:d(e.nsSelect.e("prefix"))},[k(e.$slots,"prefix")],2)):$("v-if",!0),M("div",{ref:"selectionRef",class:d([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?k(e.$slots,"tag",{key:0},()=>[(b(!0),I(xe,null,_e(e.showTagList,a=>(b(),I("div",{key:e.getValueKey(a),class:d(e.nsSelect.e("selected-item"))},[A(l,{closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.tagStyle),onClose:E=>e.deleteTag(E,a)},{default:R(()=>[M("span",{class:d(e.nsSelect.e("tags-text"))},z(a.currentLabel),3)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(b(),N(h,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:R(()=>[M("div",{ref:"collapseItemRef",class:d(e.nsSelect.e("selected-item"))},[A(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.collapseTagStyle)},{default:R(()=>[M("span",{class:d(e.nsSelect.e("tags-text"))}," + "+z(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:R(()=>[M("div",{ref:"tagMenuRef",class:d(e.nsSelect.e("selection"))},[(b(!0),I(xe,null,_e(e.collapseTagList,a=>(b(),I("div",{key:e.getValueKey(a),class:d(e.nsSelect.e("selected-item"))},[A(l,{class:"in-tooltip",closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:E=>e.deleteTag(E,a)},{default:R(()=>[M("span",{class:d(e.nsSelect.e("tags-text"))},z(a.currentLabel),3)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):$("v-if",!0)]):$("v-if",!0),e.selectDisabled?$("v-if",!0):(b(),I("div",{key:1,class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[le(M("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=a=>e.states.inputValue=a),type:"text",class:d([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ve(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((g=e.hoverOption)==null?void 0:g.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[2]||(n[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onKeydown:[n[3]||(n[3]=te(B(a=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=te(B(a=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=te(B((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),n[6]||(n[6]=te(B((...a)=>e.selectOption&&e.selectOption(...a),["stop","prevent"]),["enter"])),n[7]||(n[7]=te(B((...a)=>e.deletePrevTag&&e.deletePrevTag(...a),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:n[9]||(n[9]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:n[10]||(n[10]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onInput:n[11]||(n[11]=(...a)=>e.onInput&&e.onInput(...a)),onClick:n[12]||(n[12]=B((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"]))},null,46,_l),[[pl,e.states.inputValue]]),e.filterable?(b(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:d(e.nsSelect.e("input-calculator")),textContent:z(e.states.inputValue)},null,10,en)):$("v-if",!0)],2)),e.shouldShowPlaceholder?(b(),I("div",{key:2,class:d([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[M("span",null,z(e.currentPlaceholder),1)],2)):$("v-if",!0)],2),M("div",{ref:"suffixRef",class:d(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(b(),N(c,{key:0,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:R(()=>[(b(),N(we(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.showClose&&e.clearIcon?(b(),N(c,{key:1,class:d([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:R(()=>[(b(),N(we(e.clearIcon)))]),_:1},8,["class","onClick"])):$("v-if",!0),e.validateState&&e.validateIcon?(b(),N(c,{key:2,class:d([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:R(()=>[(b(),N(we(e.validateIcon)))]),_:1},8,["class"])):$("v-if",!0)],2)],2)]}),content:R(()=>[A(w,{ref:"menuRef"},{default:R(()=>[e.$slots.header?(b(),I("div",{key:0,class:d(e.nsSelect.be("dropdown","header")),onClick:n[13]||(n[13]=B(()=>{},["stop"]))},[k(e.$slots,"header")],2)):$("v-if",!0),le(A(V,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:d([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:R(()=>[e.showNewOption?(b(),N(y,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):$("v-if",!0),A(u,null,{default:R(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ee,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(b(),I("div",{key:1,class:d(e.nsSelect.be("dropdown","loading"))},[k(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(b(),I("div",{key:2,class:d(e.nsSelect.be("dropdown","empty"))},[k(e.$slots,"empty",{},()=>[M("span",null,z(e.emptyText),1)])],2)):$("v-if",!0),e.$slots.footer?(b(),I("div",{key:3,class:d(e.nsSelect.be("dropdown","footer")),onClick:n[14]||(n[14]=B(()=>{},["stop"]))},[k(e.$slots,"footer")],2)):$("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[m,e.handleClickOutside,e.popperRef]])}var ln=ge(xl,[["render",tn],["__file","select.vue"]]);const nn=se({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=ne("select"),o=O(null),f=Ve(),r=O([]);st(rt,he({...nt(e)}));const v=i(()=>r.value.some(c=>c.visible===!0)),l=c=>{const y=[];return L(c.children)&&c.children.forEach(u=>{var V,w;u.type&&u.type.name==="ElOption"&&u.component&&u.component.proxy?y.push(u.component.proxy):(V=u.children)!=null&&V.length?y.push(...l(u)):(w=u.component)!=null&&w.subTree&&y.push(...l(u.component.subTree))}),y},h=()=>{r.value=l(f.subTree)};return Te(()=>{h()}),fl(o,h,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:v,ns:n}}});function sn(e,n,o,f,r,v){return le((b(),I("ul",{ref:"groupRef",class:d(e.ns.be("group","wrap"))},[M("li",{class:d(e.ns.be("group","title"))},z(e.label),3),M("li",null,[M("ul",{class:d(e.ns.b("group"))},[k(e.$slots,"default")],2)])],2)),[[Ee,e.visible]])}var ut=ge(nn,[["render",sn],["__file","option-group.vue"]]);const yn=vl(ln,{Option:$e,OptionGroup:ut}),Sn=ot($e);ot(ut);export{Sn as E,yn as a};
