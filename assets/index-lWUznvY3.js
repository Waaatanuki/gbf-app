import{d as b,j as y,f as T,o as c,n as k,w as r,e as t,F as V,t as x,h as g,a as m,p as E,c as w,E as L}from"./index-rp-Zyp_U.js";/* empty css               */import{E as F,a as M}from"./el-form-item-mx7akE4y.js";import{E as S}from"./el-input-tDrbIVzO.js";import{E as U,a as C}from"./el-radio-group-BCsqOQ2w.js";import{E as I}from"./index-6Wg4CKU9.js";import"./constants-_CcUSMJG.js";import"./castArray-4oKoAHbL.js";import"./use-form-item-Xi-S8h92.js";import"./_baseClone-hMuSbk13.js";import"./_Uint8Array-B8VKmca-.js";import"./_initCloneObject-KBH-_v-z.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";const Q=b({__name:"index",setup(h){const B=[{name:"古战场",type:0,boxToken:[[1600,1],[2400,3],[2e3,41],[1e4,35]],last:15e3},{name:"月末剧情",type:1,boxToken:[[1200,1],[1580,1],[1980,1],[2112,17]],last:2104},{name:"公会战",type:2,boxToken:[[1600,1],[2400,3],[2e3,16],[1e4,20]],last:15e3}],e=y({type:0,currentToken:0,drawnBox:0,targetBox:0}),p=T(()=>{const f=B.find(l=>l.type===e.type),o=f.boxToken.reduce((l,d)=>{for(let _=0;_<d[1];_++)l.push(d[0]);return l},[]);let u=e.currentToken,i=e.drawnBox,n=e.drawnBox,s=0;for(let l=0;l<o.length;l++){if(e.drawnBox>l)continue;const d=o[l];if(u>=d)i++,n++,u-=d;else{if(n>=e.targetBox)break;n++,s+=d}}return i>=o.length&&(i+=Math.floor(u/f.last)),n>=o.length&&n<e.targetBox&&(s+=(e.targetBox-n)*f.last),{totalBox:i,needToken:s-u}});return(f,o)=>{const u=U,i=C,n=F,s=S,l=M,d=I,_=L;return c(),k(_,{"m-auto":"","w-500px":"",header:"战货计算"},{default:r(()=>[m(l,{model:t(e),"label-width":"120px"},{default:r(()=>[m(n,{label:"类型"},{default:r(()=>[m(i,{modelValue:t(e).type,"onUpdate:modelValue":o[0]||(o[0]=a=>t(e).type=a)},{default:r(()=>[(c(),w(V,null,E(B,a=>m(u,{key:a.type,label:a.type},{default:r(()=>[g(x(a.name),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),m(n,{label:"当前战货数量"},{default:r(()=>[m(s,{modelValue:t(e).currentToken,"onUpdate:modelValue":o[1]||(o[1]=a=>t(e).currentToken=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),m(n,{label:"已抽箱数"},{default:r(()=>[m(s,{modelValue:t(e).drawnBox,"onUpdate:modelValue":o[2]||(o[2]=a=>t(e).drawnBox=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),m(n,{label:"目标箱数"},{default:r(()=>[m(s,{modelValue:t(e).targetBox,"onUpdate:modelValue":o[3]||(o[3]=a=>t(e).targetBox=a),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(p).needToken<=0?(c(),k(d,{key:0,type:"success",size:"large"},{default:r(()=>[g(" 目前一共【 "+x(t(p).totalBox.toLocaleString())+" 】箱,目标已达成！ ",1)]),_:1})):(c(),k(d,{key:1,type:"warning",size:"large"},{default:r(()=>[g(" 目前一共【 "+x(t(p).totalBox.toLocaleString())+" 】箱,距离目标还差【 "+x(t(p).needToken.toLocaleString())+" 】战货 ",1)]),_:1}))]),_:1})}}});export{Q as default};
