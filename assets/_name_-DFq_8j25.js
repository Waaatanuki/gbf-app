import{c8 as u,i as r,f as c,d as m,bn as l,o as f,c as i,t as p}from"./index-Diu-x6FV.js";const d=u("user",()=>{const e=r(""),a=r(new Set),s=c(()=>Array.from(a.value)),t=c(()=>s.value.filter(n=>n!==e.value));function o(n){e.value&&a.value.add(e.value),e.value=n}return{setNewName:o,otherNames:t,savedName:e}}),N=m({__name:"[name]",props:{name:{}},setup(e){const a=e,s=d();return l(()=>{s.setNewName(a.name)}),(t,o)=>(f(),i("div",null,p(t.name),1))}});export{N as default};