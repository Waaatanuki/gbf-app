import{D as q,$ as V,d as R,V as ne,aw as pe,s as D,g as Q,L as U,K as se,as as ae,r as M,o as i,l as B,a as c,w as u,a4 as fe,b as p,Z as oe,U as me,T as g,c as _,Y as z,q as k,X as $,ad as ye,a8 as ve,av as he,al as K,ax as ge,ay as be,e as o,n as re,W as le,j as w,G as Z,a0 as _e,am as we,az as Ce,h as Se,t as ke,a2 as Be,F as j,k as Fe,aj as Ee,aA as $e,A as G,aB as Te,E as Ae,_ as De}from"./index-9911e23c.js";import{b as ze,c as Ie,E as Re,u as Je}from"./el-overlay-3c6a3a2d.js";import{E as Pe}from"./el-progress-88dc8242.js";import{u as x,E as ie}from"./el-popper-137a8185.js";import{b as ee,E as W}from"./el-button-34644661.js";import"./el-tooltip-4ed993c7.js";import{g as Le}from"./file-70fab348.js";import{_ as Ne}from"./Drawer.vue_vue_type_script_setup_true_lang-b4d53282.js";import{d as Me}from"./file-fcde9183.js";import{E as O}from"./el-message-4053989d.js";import{E as je}from"./focus-trap-9f7dd421.js";import{u as te}from"./index-c2641986.js";import{a as Oe}from"./use-form-item-e792babe.js";import"./vnode-80833410.js";import"./event-9519ab40.js";import"./scroll-1ed9d126.js";import"./typescript-defaf979.js";import"./_baseClone-e3d62307.js";import"./_Uint8Array-e9c6ac82.js";import"./_initCloneObject-8af3a743.js";import"./isEqual-f9d830fd.js";import"./aria-60e0cdc6.js";import"./el-input-38a50eef.js";/* empty css               */import"./el-select-c5cda829.js";import"./index-c198d65a.js";import"./strings-02f09926.js";import"./index-f830b42d.js";import"./validator-418999a2.js";import"./BarChart.vue_vue_type_script_setup_true_lang-2984a3f4.js";import"./DetailTable.vue_vue_type_script_setup_true_lang-deea7a99.js";import"./el-table-column-6b915d29.js";import"./el-checkbox-a39baeca.js";import"./flatten-d015c406.js";const qe=q({...ze,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),Ve=Ie,Ue=R({name:"ElDrawer",components:{ElOverlay:Re,ElFocusTrap:je,ElIcon:ne,Close:pe},inheritAttrs:!1,props:qe,emits:Ve,setup(e,{slots:t}){te({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},D(()=>!!t.title)),te({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},D(()=>!!e.customClass));const n=Q(),s=Q(),f=U("drawer"),{t:a}=se(),h=D(()=>e.direction==="rtl"||e.direction==="ltr"),S=D(()=>ae(e.size));return{...Je(e,n),drawerRef:n,focusStartRef:s,isHorizontal:h,drawerSize:S,ns:f,t:a}}}),Ke=["aria-label","aria-labelledby","aria-describedby"],Ge=["id","aria-level"],Ye=["aria-label"],He=["id"];function Qe(e,t,n,s,f,a){const h=M("close"),S=M("el-icon"),J=M("el-focus-trap"),P=M("el-overlay");return i(),B(he,{to:"body",disabled:!e.appendToBody},[c(ve,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:u(()=>[fe(c(P,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:u(()=>[c(J,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:u(()=>[p("div",oe({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:t[1]||(t[1]=me(()=>{},["stop"]))}),[p("span",{ref:"focusStartRef",class:g(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(i(),_("header",{key:0,class:g(e.ns.e("header"))},[e.$slots.title?z(e.$slots,"title",{key:1},()=>[$(" DEPRECATED SLOT ")]):z(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?$("v-if",!0):(i(),_("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:g(e.ns.e("title"))},k(e.title),11,Ge))]),e.showClose?(i(),_("button",{key:2,"aria-label":e.t("el.drawer.close"),class:g(e.ns.e("close-btn")),type:"button",onClick:t[0]||(t[0]=(...A)=>e.handleClose&&e.handleClose(...A))},[c(S,{class:g(e.ns.e("close"))},{default:u(()=>[c(h)]),_:1},8,["class"])],10,Ye)):$("v-if",!0)],2)):$("v-if",!0),e.rendered?(i(),_("div",{key:1,id:e.bodyId,class:g(e.ns.e("body"))},[z(e.$slots,"default")],10,He)):$("v-if",!0),e.$slots.footer?(i(),_("div",{key:2,class:g(e.ns.e("footer"))},[z(e.$slots,"footer")],2)):$("v-if",!0)],16,Ke)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[ye,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var We=V(Ue,[["render",Qe],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const Xe=K(We),Ze=q({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:ee,default:"primary"},cancelButtonType:{type:String,values:ee,default:"text"},icon:{type:ge,default:()=>be},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:x.teleported,persistent:x.persistent,width:{type:[String,Number],default:150}}),xe={confirm:e=>e instanceof MouseEvent,cancel:e=>e instanceof MouseEvent},et=R({name:"ElPopconfirm"}),tt=R({...et,props:Ze,emits:xe,setup(e,{emit:t}){const n=e,{t:s}=se(),f=U("popconfirm"),a=Q(),h=()=>{var l,y;(y=(l=a.value)==null?void 0:l.onClose)==null||y.call(l)},S=D(()=>({width:ae(n.width)})),J=l=>{t("confirm",l),h()},P=l=>{t("cancel",l),h()},A=D(()=>n.confirmButtonText||s("el.popconfirm.confirmButtonText")),I=D(()=>n.cancelButtonText||s("el.popconfirm.cancelButtonText"));return(l,y)=>(i(),B(o(ie),oe({ref_key:"tooltipRef",ref:a,trigger:"click",effect:"light"},l.$attrs,{"popper-class":`${o(f).namespace.value}-popover`,"popper-style":o(S),teleported:l.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":l.hideAfter,persistent:l.persistent}),{content:u(()=>[p("div",{class:g(o(f).b())},[p("div",{class:g(o(f).e("main"))},[!l.hideIcon&&l.icon?(i(),B(o(ne),{key:0,class:g(o(f).e("icon")),style:re({color:l.iconColor})},{default:u(()=>[(i(),B(le(l.icon)))]),_:1},8,["class","style"])):$("v-if",!0),w(" "+k(l.title),1)],2),p("div",{class:g(o(f).e("action"))},[c(o(W),{size:"small",type:l.cancelButtonType==="text"?"":l.cancelButtonType,text:l.cancelButtonType==="text",onClick:P},{default:u(()=>[w(k(o(I)),1)]),_:1},8,["type","text"]),c(o(W),{size:"small",type:l.confirmButtonType==="text"?"":l.confirmButtonType,text:l.confirmButtonType==="text",onClick:J},{default:u(()=>[w(k(o(A)),1)]),_:1},8,["type","text"])],2)],2)]),default:u(()=>[l.$slots.reference?z(l.$slots,"reference",{key:0}):$("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var nt=V(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const st=K(nt),at=q({decimalSeparator:{type:String,default:"."},groupSeparator:{type:String,default:","},precision:{type:Number,default:0},formatter:Function,value:{type:Z([Number,Object]),default:0},prefix:String,suffix:String,title:String,valueStyle:{type:Z([String,Object,Array])}}),ot=R({name:"ElStatistic"}),rt=R({...ot,props:at,setup(e,{expose:t}){const n=e,s=U("statistic"),f=D(()=>{const{value:a,formatter:h,precision:S,decimalSeparator:J,groupSeparator:P}=n;if(_e(h))return h(a);if(!we(a))return a;let[A,I=""]=String(a).split(".");return I=I.padEnd(S,"0").slice(0,S>0?S:0),A=A.replace(/\B(?=(\d{3})+(?!\d))/g,P),[A,I].join(I?J:"")});return t({displayValue:f}),(a,h)=>(i(),_("div",{class:g(o(s).b())},[a.$slots.title||a.title?(i(),_("div",{key:0,class:g(o(s).e("head"))},[z(a.$slots,"title",{},()=>[w(k(a.title),1)])],2)):$("v-if",!0),p("div",{class:g(o(s).e("content"))},[a.$slots.prefix||a.prefix?(i(),_("div",{key:0,class:g(o(s).e("prefix"))},[z(a.$slots,"prefix",{},()=>[p("span",null,k(a.prefix),1)])],2)):$("v-if",!0),p("span",{class:g(o(s).e("number")),style:re(a.valueStyle)},k(o(f)),7),a.$slots.suffix||a.suffix?(i(),_("div",{key:1,class:g(o(s).e("suffix"))},[z(a.$slots,"suffix",{},()=>[p("span",null,k(a.suffix),1)])],2)):$("v-if",!0)],2)],2))}});var lt=V(rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/statistic/src/statistic.vue"]]);const it=K(lt),ut=q({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:Ce,default:""},truncated:{type:Boolean},tag:{type:String,default:"span"}}),dt=R({name:"ElText"}),ct=R({...dt,props:ut,setup(e){const t=e,n=Oe(),s=U("text"),f=D(()=>[s.b(),s.m(t.type),s.m(n.value),s.is("truncated",t.truncated)]);return(a,h)=>(i(),B(le(a.tag),{class:g(o(f))},{default:u(()=>[z(a.$slots,"default")]),_:3},8,["class"]))}});var pt=V(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const ft=K(pt);function C(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function ue(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const s=C(n);return(f,a)=>s.then(h=>a(h.transaction(t,f).objectStore(t)))}let Y;function T(){return Y||(Y=ue("keyval-store","keyval")),Y}function mt(e,t=T()){return t("readonly",n=>C(n.get(e)))}function yt(e,t,n=T()){return n("readwrite",s=>(s.put(t,e),C(s.transaction)))}function vt(e,t=T()){return t("readwrite",n=>(e.forEach(s=>n.put(s[1],s[0])),C(n.transaction)))}function ht(e,t=T()){return t("readonly",n=>Promise.all(e.map(s=>C(n.get(s)))))}function gt(e,t,n=T()){return n("readwrite",s=>new Promise((f,a)=>{s.get(e).onsuccess=function(){try{s.put(t(this.result),e),f(C(s.transaction))}catch(h){a(h)}}}))}function bt(e,t=T()){return t("readwrite",n=>(n.delete(e),C(n.transaction)))}function _t(e,t=T()){return t("readwrite",n=>(e.forEach(s=>n.delete(s)),C(n.transaction)))}function wt(e=T()){return e("readwrite",t=>(t.clear(),C(t.transaction)))}function X(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},C(e.transaction)}function Ct(e=T()){return e("readonly",t=>{if(t.getAllKeys)return C(t.getAllKeys());const n=[];return X(t,s=>n.push(s.key)).then(()=>n)})}function St(e=T()){return e("readonly",t=>{if(t.getAll)return C(t.getAll());const n=[];return X(t,s=>n.push(s.value)).then(()=>n)})}function kt(e=T()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([C(t.getAllKeys()),C(t.getAll())]).then(([s,f])=>s.map((a,h)=>[a,f[h]]));const n=[];return e("readonly",s=>X(s,f=>n.push([f.key,f.value])).then(()=>n))})}const E=ue("gbfApp","GoldBrick"),H={get(e){return mt(e,E)},getMany(e){return ht(e,E)},set(e,t){return yt(e,t,E)},setMany(e){return vt(e,E)},update(e,t){return gt(e,t,E)},del(e){return bt(e,E)},delMany(e){return _t(e,E)},clear(){return wt(E)},entries(){return kt(E)},keys(){return Ct(E)},values(){return St(E)}},Bt={"mx-auto":"","max-w-1100px":""},Ft={flex:"","gap-5":""},Et={"w-180px":"",fc:"","shrink-0":""},$t=["src"],Tt={"w-full":"",fc:"","flex-col":"","gap-4":""},At={flex:"","flex-wrap":"","justify-evenly":"","gap-10":""},Dt={"w-100px":""},zt={"w-120px":""},It={"w-100px":""},Rt={key:1,"w-100px":""},Jt={"w-100px":""},Pt={"w-100px":""},Lt={"w-100px":""},Nt={"w-100px":""},Mt={class:"uploader"},jt=R({__name:"index",setup(e){const t=Se({dataSet:[],filesList:[],uploadBtnLoading:!1,baseInfo:[],drawer:{title:"",visible:!1,key:"",dataSet:[],tableData:[]}}),{filesList:n,baseInfo:s,uploadBtnLoading:f,drawer:a}=ke(t);function h(y){if(y.raidName==="cb")return O.warning("超巴没有详细图表");t.drawer.visible=!0,t.drawer.title=`${y.quest_name_jp} 详细图表`,t.drawer.key=y.quest_id,t.drawer.dataSet=t.dataSet.filter(m=>{const b=Object.values(m)[0];return y.raidName===b.raidName}),t.drawer.tableData=t.baseInfo.find(m=>y.quest_id===m.quest_id).monthlyTableData}async function S(){t.dataSet=[],(await H.entries()).forEach(m=>{t.dataSet.push({[m[0]]:m[1]})}),t.baseInfo=J(t.dataSet)}function J(y){const m=JSON.parse(JSON.stringify($e));return y.forEach(b=>{const d=Object.values(b)[0],v=m.find(N=>N.raidName===d.raidName);if(!v)return;const L=G(d.timestamp).format("YYYY-MM");let F=v.monthlyTableData.find(N=>N.date===L);F||(F={date:L,total:0,blueChest:0,blueChestFFJ:0,ring3:0},v.monthlyTableData.unshift(F)),v.total++,F.total++,d.goldBrick&&(d.goldBrick==="3"&&v.normalChestFFJ++,d.goldBrick==="4"&&v.redChestFFJ++,d.goldBrick==="11"&&v.blueChestFFJ++,d.goldBrick==="11"&&F.blueChestFFJ++,v.lastFFJTime=d.timestamp),d.blueChests&&(v.blueChest++,v.lastBlueChestCount++,F.blueChest++,d.blueChests==="73_1"&&v.ring1++,d.blueChests==="73_2"&&v.ring2++,d.blueChests==="73_3"&&v.ring3++,d.blueChests==="73_3"&&F.ring3++,d.blueChests==="17_20004"&&(v.lastBlueChestCount=0))}),m}function P(y){const m=y.raw;if(m.type!=="application/json")return O.error("文件格式不对");const b=new FileReader;b.readAsText(m),b.onload=function(){t.uploadBtnLoading=!0,t.dataSet=JSON.parse(b.result);const d=[];t.dataSet.forEach(v=>{const L=Object.keys(v)[0];d.push([L,Te(v[L])])}),H.setMany(d).then(()=>{O.success("上传成功"),S()}).finally(()=>{t.uploadBtnLoading=!1})}}function A(){if(t.dataSet.length===0)return O.info("没有数据可以导出");const m=`金本数据 ${new Date().toLocaleDateString()}`;Me(JSON.stringify(t.dataSet),m)}async function I(){await H.clear(),S()}function l(y=0,m=0){return m===0?0:(y/m*100).toFixed(2)}return Be(()=>{S()}),(y,m)=>{const b=it,d=ft,v=ie,L=Ae,F=W,N=st,de=Pe,ce=Xe;return i(),_("div",Bt,[(i(!0),_(j,null,Fe(o(s),r=>(i(),B(L,{key:r.quest_id,"mb-2":"","cursor-pointer":"",shadow:"hover",onClick:Ot=>h(r)},{default:u(()=>[p("div",Ft,[p("div",Et,[p("img",{"w-full":"",src:("getQuestImg"in y?y.getQuestImg:o(Le))(r.quest_id)},null,8,$t)]),p("div",Tt,[p("div",At,[p("div",Dt,[c(b,{value:r.total,title:"总次数"},null,8,["value"])]),r.is_blue_treasure?(i(),_(j,{key:0},[p("div",zt,[c(b,{value:r.blueChest,title:"蓝箱"},null,8,["value"]),p("div",null,[c(d,{size:"small"},{default:u(()=>[w(" 蓝箱率： "+k(l(r.blueChest,r.total))+"% ",1)]),_:2},1024)])]),r.quest_id==="301061"?(i(),B(v,{key:0,content:"蓝箱金+自发金"},{default:u(()=>[p("div",It,[c(b,{value:r.blueChestFFJ,title:"菲菲金",suffix:`+ ${r.redChestFFJ}`},null,8,["value","suffix"]),p("div",null,[c(d,{size:"small"},{default:u(()=>[w(" 蓝箱金率： "+k(l(r.blueChestFFJ,r.blueChest))+"% ",1)]),_:2},1024)])])]),_:2},1024)):(i(),_("div",Rt,[c(b,{value:r.blueChestFFJ,title:"菲菲金"},null,8,["value"]),p("div",null,[c(d,{size:"small"},{default:u(()=>[w(" 蓝箱金率： "+k(l(r.blueChestFFJ,r.blueChest))+"% ",1)]),_:2},1024)])])),p("div",Jt,[c(b,{value:r.ring3,title:"红戒指"},null,8,["value"])]),p("div",Pt,[c(b,{value:r.ring2,title:"黑戒指"},null,8,["value"])]),p("div",Lt,[c(b,{value:r.ring1,title:"白戒指"},null,8,["value"])])],64)):(i(),B(v,{key:1,content:"自发金+金箱金"},{default:u(()=>[p("div",Nt,[c(b,{value:r.redChestFFJ,title:"菲菲金",suffix:`+ ${r.normalChestFFJ}`},null,8,["value","suffix"])])]),_:2},1024))]),r.is_blue_treasure?(i(),_(j,{key:0},[r.blueChestFFJ===0?(i(),B(d,{key:0,type:"warning"},{default:u(()=>[w(" 还未出过金 ")]),_:1})):(i(),B(d,{key:1,type:"info"},{default:u(()=>[w(" 距离上次出金已经打了"+k(r.lastBlueChestCount)+"个蓝箱 ",1)]),_:2},1024))],64)):(i(),_(j,{key:1},[r.redChestFFJ===0?(i(),B(d,{key:0,type:"warning"},{default:u(()=>[w(" 还未出过金 ")]),_:1})):(i(),B(d,{key:1,type:"info"},{default:u(()=>[w(" 距离上次出金已经过去了"+k(o(G)().diff(o(G)(r.lastFFJTime),"day"))+"天 ",1)]),_:2},1024))],64))])])]),_:2},1032,["onClick"]))),128)),p("div",Mt,[c(N,{title:"清空操作无法恢复，确认清空吗?",width:"300",onConfirm:I},{reference:u(()=>[c(F,{type:"danger"},{default:u(()=>[w(" 清空数据 ")]),_:1})]),_:1}),c(F,{type:"info",onClick:A},{default:u(()=>[w(" 导出 ")]),_:1}),c(de,{"file-list":o(n),"onUpdate:fileList":m[1]||(m[1]=r=>Ee(n)?n.value=r:null),"on-change":P,"show-file-list":!1,limit:1,"auto-upload":!1,accept:".json"},{trigger:u(()=>[c(F,{type:"primary",loading:o(f),onClick:m[0]||(m[0]=r=>n.value=[])},{default:u(()=>[w(" 上传 ")]),_:1},8,["loading"])]),_:1},8,["file-list"])]),c(ce,{modelValue:o(a).visible,"onUpdate:modelValue":m[2]||(m[2]=r=>o(a).visible=r),title:o(a).title,size:600,"destroy-on-close":""},{default:u(()=>[c(Ne,{id:o(a).key,data:o(a).dataSet,"table-data":o(a).tableData},null,8,["id","data","table-data"])]),_:1},8,["modelValue","title"])])}}});const Sn=De(jt,[["__scopeId","data-v-2562e695"]]);export{Sn as default};
