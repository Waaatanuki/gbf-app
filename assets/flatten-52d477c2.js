import{j as l,a as r}from"./_Uint8Array-4daa8cc8.js";import{b7 as t,ba as h}from"./index-7496bda0.js";var e=t?t.isConcatSpreadable:void 0;function x(n){return h(n)||l(n)||!!(e&&n&&n[e])}function m(n,o,a,b,f){var s=-1,g=n.length;for(a||(a=x),f||(f=[]);++s<g;){var i=n[s];o>0&&a(i)?o>1?m(i,o-1,a,b,f):r(f,i):b||(f[f.length]=i)}return f}function S(n){var o=n==null?0:n.length;return o?m(n,1):[]}export{m as b,S as f};