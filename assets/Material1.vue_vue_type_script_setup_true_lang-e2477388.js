import{d as O,g as x,h as D,ak as q,t as z,a2 as T,r as X,o as n,c as d,b,F as _,k as y,e as o,a as t,w as a,j as h,n as H,l as E,q as w,X as U}from"./index-136b82f0.js";import{E as A}from"./el-dialog-db6278ba.js";import"./el-overlay-0c65a51e.js";import{E as G,a as J}from"./el-form-item-ca9db0ec.js";import{E as K}from"./el-row-028cb423.js";import{E as P}from"./el-col-52df1840.js";import{E as Q}from"./el-input-c37192b3.js";import{E as Y}from"./el-progress-e2b12870.js";import{E as Z}from"./el-button-0ea163af.js";import{h as ee}from"./html2canvas.esm-85f1a6b6.js";const oe={"m-1":"",fc:"","flex-wrap":""},te=["src"],ae={key:1},le={"ml-18":""},he=O({__name:"Material1",setup(re){const g=x(),W=x(),c=D({}),k=[{name:"weapon",label:"武器盘",cropWidth:250,cropHeight:270,imgData:""},{name:"summon",label:"召唤",cropWidth:250,cropHeight:85,imgData:""},{name:"subSummon",label:"sub召唤",cropWidth:250,cropHeight:65,imgData:""}],R=D({dialog:{width:200,visible:!1,type:""},uploaderConfig:q("uploaderConfig_Material1",k),formData:{}}),{uploaderConfig:p,dialog:r,formData:I}=z(R);function M(s,l){s.raw&&(c.url=URL.createObjectURL(s.raw),c.cropHeight=l.cropHeight,c.cropWidth=l.cropWidth,c.name=l.name,r.value.visible=!0,r.value.width=l.cropWidth+100,r.value.type="cropper")}function B(s,l){r.value.visible=!1,p.value.find(i=>i.name===l).imgData=s}function $(){r.value.visible=!0,r.value.width=300,r.value.type="edit"}function L(){g.value&&ee(g.value).then(s=>{const l=s.toDataURL("image/png"),i=document.createElement("a"),v=new MouseEvent("click");i.download="配置图",i.href=l,i.dispatchEvent(v)})}return T(()=>{p.value.forEach(s=>{s.imgData=""})}),(s,l)=>{const i=Z,v=Y,f=G,C=Q,V=P,N=K,S=J,F=X("ImgCropper"),j=A;return n(),d(_,null,[b("div",oe,[(n(!0),d(_,null,y(o(p),(e,u)=>(n(),E(v,{key:u,ref_for:!0,ref_key:"uploadRef",ref:W,"m-1":"",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":m=>M(m,e)},{trigger:a(()=>[t(i,null,{default:a(()=>[h(w(e.label),1)]),_:2},1024)]),_:2},1032,["on-change"]))),128)),t(i,{"m-1":"",type:"primary",onClick:L},{default:a(()=>[h(" 生成 ")]),_:1}),t(i,{"m-1":"",type:"info",onClick:$},{default:a(()=>[h(" 自定义尺寸 ")]),_:1})]),b("div",{ref_key:"divEl",ref:g,style:H({width:`${o(p)[0].cropWidth}px`,height:`${o(p)[0].cropHeight+o(p)[1].cropHeight+o(p)[2].cropHeight}px`}),"m-auto":"",flex:"","flex-col":"","bg-slate":""},[(n(!0),d(_,null,y(o(p),(e,u)=>(n(),d("div",{key:u,style:H({width:`${e.cropWidth}px`,height:`${e.cropHeight}px`}),fc:"","hover:bg-slate-600":""},[e.imgData?(n(),d("img",{key:0,src:e.imgData},null,8,te)):(n(),d("div",ae,w(e.label),1))],4))),128))],4),t(j,{modelValue:o(r).visible,"onUpdate:modelValue":l[1]||(l[1]=e=>o(r).visible=e),width:o(r).width,top:"5vh","destroy-on-close":""},{default:a(()=>[o(r).type==="edit"?(n(),E(S,{key:0,model:o(I),"label-width":"50px"},{default:a(()=>[(n(!0),d(_,null,y(o(p),(e,u)=>(n(),d("div",{key:u},[t(f,null,{default:a(()=>[b("span",le,w(e.label),1)]),_:2},1024),t(N,null,{default:a(()=>[t(V,{span:12},{default:a(()=>[t(f,{label:"宽"},{default:a(()=>[t(C,{modelValue:e.cropWidth,"onUpdate:modelValue":m=>e.cropWidth=m,modelModifiers:{number:!0}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),t(V,{span:12},{default:a(()=>[t(f,{label:"高"},{default:a(()=>[t(C,{modelValue:e.cropHeight,"onUpdate:modelValue":m=>e.cropHeight=m,modelModifiers:{number:!0}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128)),t(f,null,{default:a(()=>[t(i,{type:"primary",onClick:l[0]||(l[0]=e=>p.value=k)},{default:a(()=>[h(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])):U("",!0),o(r).type==="cropper"?(n(),E(F,{key:1,"cropper-option":o(c),onCropperCb:B},null,8,["cropper-option"])):U("",!0)]),_:1},8,["modelValue","width"])],64)}}});export{he as _};
