import{d as I,i as _,j as v,l as R,r as V,o as i,c as a,b as p,F as b,n as B,p as U,w as h,a as g,h as y,t as d,e as t,v as s}from"./index-DGVJY3sE.js";import{E as L}from"./el-dialog-D3bY6RhP.js";import"./el-overlay-C6uXQS5N.js";import{E as N}from"./el-upload-CFaboXI5.js";import"./el-progress-CZQObFbZ.js";import{E as j}from"./el-button-QcooIq4r.js";import{h as O}from"./html2canvas.esm-Chigv41t.js";import"./focus-trap-DBXUt-qA.js";import"./aria-BUADUvnR.js";import"./refs-D8_BBQ9D.js";import"./event-BB_Ol6Sd.js";import"./constants-CGDfyvcO.js";import"./index-C3IT7SGo.js";import"./scroll-BLkrq8__.js";import"./vnode-Alh-IJZt.js";import"./typescript-Bp3YSIOJ.js";import"./use-form-item-DrPzztX4.js";import"./_baseClone-k1rvMLBj.js";import"./_Uint8Array-CuUNCmTr.js";import"./_initCloneObject-TFD3gmFx.js";import"./isEqual-ikpparqF.js";const S={"m-2":"",fc:""},z=["src"],F={key:1},M=["src"],T={key:1},q=["src"],A={key:1},G=["src"],J={key:1},ft=I({__name:"Cropper",setup(K){const u=_(),w=_(),n=v({}),x=v({dialog:{width:"",visible:!1},uploaderInit:[{name:"result",label:"结算",cropWidth:200,cropHeight:400,imgData:""},{name:"team",label:"队伍",cropWidth:400,cropHeight:180,imgData:""},{name:"weapon",label:"武器盘",cropWidth:200,cropHeight:220,imgData:""},{name:"summon",label:"召唤",cropWidth:200,cropHeight:220,imgData:""}]}),{uploaderInit:e,dialog:c}=R(x);function k(l,o){l.raw&&(n.url=URL.createObjectURL(l.raw),n.cropHeight=o.cropHeight,n.cropWidth=o.cropWidth,n.name=o.name,c.value.visible=!0,c.value.width=o.cropWidth+100)}function D(l,o){c.value.visible=!1,e.value.find(r=>r.name===o).imgData=l}function W(){u.value&&O(u.value).then(l=>{const o=l.toDataURL("image/png"),r=document.createElement("a"),f=new MouseEvent("click");r.download="配置图",r.href=o,r.dispatchEvent(f)})}return(l,o)=>{const r=j,f=N,$=V("ImgCropper"),H=L;return i(),a(b,null,[p("div",S,[(i(!0),a(b,null,B(t(e),(m,E)=>(i(),U(f,{key:E,ref_for:!0,ref_key:"uploadRef",ref:w,"m-2":"",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":C=>k(C,m)},{trigger:h(()=>[g(r,null,{default:h(()=>[y(d(m.label),1)]),_:2},1024)]),_:2},1032,["on-change"]))),128)),g(r,{"m-2":"",type:"primary",onClick:W},{default:h(()=>[y(" 生成 ")]),_:1})]),p("div",{ref_key:"divEl",ref:u,style:s({width:`${t(e)[0].cropWidth+t(e)[1].cropWidth}px`,height:`${t(e)[0].cropHeight}px`}),flex:"","bg-slate":""},[p("div",{style:s({width:`${t(e)[0].cropWidth}px`,height:`${t(e)[0].cropHeight}px`}),fc:"","bg-slate-300":""},[t(e)[0].imgData?(i(),a("img",{key:0,src:t(e)[0].imgData},null,8,z)):(i(),a("div",F,d(t(e)[0].label),1))],4),p("div",{style:s({width:`${t(e)[1].cropWidth}px`,height:`${t(e)[0].cropHeight}px`}),"flex-col":""},[p("div",{style:s({width:`${t(e)[1].cropWidth}px`,height:`${t(e)[1].cropHeight}px`}),fc:"","bg-slate-400":""},[t(e)[1].imgData?(i(),a("img",{key:0,src:t(e)[1].imgData},null,8,M)):(i(),a("div",T,d(t(e)[1].label),1))],4),p("div",{style:s({width:`${t(e)[1].cropWidth}px`,height:`${t(e)[2].cropHeight}px`}),fc:""},[p("div",{style:s({width:`${t(e)[2].cropWidth}px`,height:`${t(e)[2].cropHeight}px`}),fc:"","bg-slate-500":""},[t(e)[2].imgData?(i(),a("img",{key:0,src:t(e)[2].imgData},null,8,q)):(i(),a("div",A,d(t(e)[2].label),1))],4),p("div",{style:s({width:`${t(e)[3].cropWidth}px`,height:`${t(e)[3].cropHeight}px`}),fc:"","bg-slate-600":""},[t(e)[3].imgData?(i(),a("img",{key:0,src:t(e)[3].imgData},null,8,G)):(i(),a("div",J,d(t(e)[3].label),1))],4)],4)],4)],4),g(H,{modelValue:t(c).visible,"onUpdate:modelValue":o[0]||(o[0]=m=>t(c).visible=m),width:t(c).width,top:"5vh","destroy-on-close":""},{default:h(()=>[g($,{"cropper-option":t(n),onCropperCb:D},null,8,["cropper-option"])]),_:1},8,["modelValue","width"])],64)}}});export{ft as default};
