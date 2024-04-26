import{G as K,aw as Q,H as x,aK as V,aT as J,d as R,aU as ee,i as E,f as p,aV as L,a3 as se,Q as ne,aN as oe,aF as te,o as f,p as h,w as S,a5 as ae,b as O,W as g,e as a,v as le,g as T,Y as _,Z as re,_ as ie,c as F,t as ue,F as ce,X as de,a as U,ae as pe,a9 as fe,a0 as me,aW as ge,aX as ye,am as ve,aY as H,aA as $,aZ as A,a1 as M,a_ as D,a$ as Ce,b0 as he}from"./index-B1oQUUvY.js";import{E as be}from"./el-badge-CQikEWsO.js";import{m as Te}from"./typescript-Bp3YSIOJ.js";import{E as Ne}from"./aria-BUADUvnR.js";const P=["success","info","warning","error"],r=Te({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:V?document.body:void 0}),we=K({customClass:{type:String,default:r.customClass},center:{type:Boolean,default:r.center},dangerouslyUseHTMLString:{type:Boolean,default:r.dangerouslyUseHTMLString},duration:{type:Number,default:r.duration},icon:{type:Q,default:r.icon},id:{type:String,default:r.id},message:{type:x([String,Object,Function]),default:r.message},onClose:{type:x(Function),default:r.onClose},showClose:{type:Boolean,default:r.showClose},type:{type:String,values:P,default:r.type},plain:{type:Boolean,default:r.plain},offset:{type:Number,default:r.offset},zIndex:{type:Number,default:r.zIndex},grouping:{type:Boolean,default:r.grouping},repeatNum:{type:Number,default:r.repeatNum}}),Ee={destroy:()=>!0},u=J([]),Se=s=>{const n=u.findIndex(o=>o.id===s),e=u[n];let l;return n>0&&(l=u[n-1]),{current:e,prev:l}},Me=s=>{const{prev:n}=Se(s);return n?n.vm.exposed.bottom.value:0},Be=(s,n)=>u.findIndex(l=>l.id===s)>0?16:n,ke=["id"],ze=["innerHTML"],Ie=R({name:"ElMessage"}),xe=R({...Ie,props:we,emits:Ee,setup(s,{expose:n}){const e=s,{Close:l}=ge,{ns:o,zIndex:c}=ee("message"),{currentZIndex:i,nextZIndex:d}=c,m=E(),v=E(!1),C=E(0);let N;const G=p(()=>e.type?e.type==="error"?"danger":e.type:"info"),W=p(()=>{const t=e.type;return{[o.bm("icon",t)]:t&&L[t]}}),B=p(()=>e.icon||L[e.type]||""),X=p(()=>Me(e.id)),k=p(()=>Be(e.id,e.offset)+X.value),Y=p(()=>C.value+k.value),j=p(()=>({top:`${k.value}px`,zIndex:i.value}));function w(){e.duration!==0&&({stop:N}=ye(()=>{b()},e.duration))}function z(){N==null||N()}function b(){v.value=!1}function q({code:t}){t===Ne.esc&&b()}return se(()=>{w(),d(),v.value=!0}),ne(()=>e.repeatNum,()=>{z(),w()}),oe(document,"keydown",q),te(m,()=>{C.value=m.value.getBoundingClientRect().height}),n({visible:v,bottom:Y,close:b}),(t,I)=>(f(),h(fe,{name:a(o).b("fade"),onBeforeLeave:t.onClose,onAfterLeave:I[0]||(I[0]=$e=>t.$emit("destroy")),persisted:""},{default:S(()=>[ae(O("div",{id:t.id,ref_key:"messageRef",ref:m,class:g([a(o).b(),{[a(o).m(t.type)]:t.type},a(o).is("center",t.center),a(o).is("closable",t.showClose),a(o).is("plain",t.plain),t.customClass]),style:le(a(j)),role:"alert",onMouseenter:z,onMouseleave:w},[t.repeatNum>1?(f(),h(a(be),{key:0,value:t.repeatNum,type:a(G),class:g(a(o).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),a(B)?(f(),h(a(_),{key:1,class:g([a(o).e("icon"),a(W)])},{default:S(()=>[(f(),h(re(a(B))))]),_:1},8,["class"])):T("v-if",!0),ie(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(f(),F(ce,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),O("p",{class:g(a(o).e("content")),innerHTML:t.message},null,10,ze)],2112)):(f(),F("p",{key:0,class:g(a(o).e("content"))},ue(t.message),3))]),t.showClose?(f(),h(a(_),{key:2,class:g(a(o).e("closeBtn")),onClick:de(b,["stop"])},{default:S(()=>[U(a(l))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,ke),[[pe,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Le=me(xe,[["__file","message.vue"]]);let Oe=1;const Z=s=>{const n=!s||$(s)||A(s)||M(s)?{message:s}:s,e={...r,...n};if(!e.appendTo)e.appendTo=document.body;else if($(e.appendTo)){let l=document.querySelector(e.appendTo);Ce(l)||(l=document.body),e.appendTo=l}return e},_e=s=>{const n=u.indexOf(s);if(n===-1)return;u.splice(n,1);const{handler:e}=s;e.close()},Fe=({appendTo:s,...n},e)=>{const l=`message_${Oe++}`,o=n.onClose,c=document.createElement("div"),i={...n,id:l,onClose:()=>{o==null||o(),_e(C)},onDestroy:()=>{D(null,c)}},d=U(Le,i,M(i.message)||A(i.message)?{default:M(i.message)?i.message:()=>i.message}:null);d.appContext=e||y._context,D(d,c),s.appendChild(c.firstElementChild);const m=d.component,C={id:l,vnode:d,vm:m,handler:{close:()=>{m.exposed.visible.value=!1}},props:d.component.props};return C},y=(s={},n)=>{if(!V)return{close:()=>{}};if(ve(H.max)&&u.length>=H.max)return{close:()=>{}};const e=Z(s);if(e.grouping&&u.length){const o=u.find(({vnode:c})=>{var i;return((i=c.props)==null?void 0:i.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const l=Fe(e,n);return u.push(l),l.handler};P.forEach(s=>{y[s]=(n={},e)=>{const l=Z(n);return y({...l,type:s},e)}});function He(s){for(const n of u)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=He;y._context=null;const Ae=he(y,"$message");export{Ae as E};
