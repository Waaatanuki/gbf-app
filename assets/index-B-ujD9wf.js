import{ai as r}from"./index-DGVJY3sE.js";const u=100,v=600,m={beforeMount(i,l){const e=l.value,{interval:s=u,delay:c=v}=r(e)?{}:e;let t,n;const o=()=>r(e)?e():e.handler(),a=()=>{n&&(clearTimeout(n),n=void 0),t&&(clearInterval(t),t=void 0)};i.addEventListener("mousedown",d=>{d.button===0&&(a(),o(),document.addEventListener("mouseup",()=>a(),{once:!0}),n=setTimeout(()=>{t=setInterval(()=>{o()},s)},c))})}};export{m as v};
