import"./base-d162ef96.js";import{E as A}from"./el-progress-fce0f48f.js";import{E as L}from"./el-button-a3f7639e.js";import{e as V,r,f as B,g as z,h as S,v as p,p as f,j as b,T,z as U,X as E}from"./index-e1e4d07d.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./constants-4db3609e.js";import"./typescript-defaf979.js";import"./use-form-item-77ae3ce7.js";import"./_baseClone-2e5d4ca7.js";import"./_Uint8Array-6184b0e9.js";import"./_initCloneObject-b176e66b.js";import"./isEqual-9aa6cdf6.js";import"./index-5725fa7a.js";import"./index-927a9af8.js";import"./icon-4d217982.js";import"./index-f8748455.js";const v=350,m=350,I=V({__name:"AudioVisualizers",setup(P){const _=r(),n=r(),a=B(()=>_.value.getContext("2d")),i=r(),u=r(!1),t=r(),y=r();let c,d;function h(){const e=new AudioContext,l=e.createMediaElementSource(n.value);t.value=e.createAnalyser(),l.connect(t.value),t.value.connect(e.destination),t.value.fftSize=2048,c=t.value.frequencyBinCount,d=new Uint8Array(c),n.value.addEventListener("pause",()=>{u.value=!1}),n.value.addEventListener("play",()=>{u.value=!0,x()}),g()}function g(e){t.value||h(),n.value.src=e?URL.createObjectURL(e.raw):new URL("/gbf-app/assets/ParadiseLost-edd1ef75.mp3",self.location),y.value=Math.random()*360,n.value.load(),U(()=>n.value.play())}function C(e){i.value.clearFiles();const l=e[0];i.value.handleStart(l)}function x(){u.value&&(a.value.clearRect(0,0,v,m),t.value.getByteFrequencyData(d),k(c,d),requestAnimationFrame(x))}function k(e,l){for(let o=0;o<e;o++){const s=l[o]*1.5;a.value.save(),a.value.translate(v/2,m/2),a.value.rotate(o*4.184);const w=y.value+o*.05;a.value.fillStyle=`hsl(${w},100%,50%)`,a.value.beginPath(),a.value.arc(0,s/4,s/4,0,Math.PI/4),a.value.fill(),a.value.stroke(),a.value.restore()}}return(e,l)=>{const o=L,s=A;return z(),S(T,null,[p(o,{type:"danger",disabled:typeof t.value=="object",onClick:h},{default:f(()=>[E(" 帕拉戴斯罗斯特 ")]),_:1},8,["disabled"]),b("canvas",{ref_key:"canvas",ref:_,width:v,height:m},null,512),b("audio",{ref_key:"audio1",ref:n,controls:""},null,512),p(s,{ref_key:"upload",ref:i,limit:1,"on-exceed":C,"on-change":g,"show-file-list":!1,"auto-upload":!1},{trigger:f(()=>[p(o,{type:"primary"},{default:f(()=>[E(" 选择本地音乐 ")]),_:1})]),_:1},512)],64)}}});const Z=H(I,[["__scopeId","data-v-057163c7"]]);export{Z as default};
