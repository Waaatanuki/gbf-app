import{vt as e,w as t,y as n}from"./runtime-core.esm-bundler-8Br1IfNb.js";import{a as r,ft as i,pt as a,s as o}from"./css-DxNnJ1GY.js";var s={prefix:Math.floor(Math.random()*1e4),current:0},c=Symbol(`elIdInjection`),l=()=>n()?t(c,s):s,u=t=>{let n=l();!a&&n===s&&o(`IdInjection`,`Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);let c=r();return i(()=>e(t)||`${c.value}-id-${n.prefix}-${n.current++}`)},d=Symbol(`formContextKey`),f=Symbol(`formItemContextKey`);export{l as i,f as n,u as r,d as t};