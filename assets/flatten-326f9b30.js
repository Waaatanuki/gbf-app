import{j as l,a as r}from"./_Uint8Array-10c14502.js";import{bk as t,bn as h}from"./index-bba98456.js";var e=t?t.isConcatSpreadable:void 0;function x(n){return h(n)||l(n)||!!(e&&n&&n[e])}function m(n,o,i,b,f){var s=-1,g=n.length;for(i||(i=x),f||(f=[]);++s<g;){var a=n[s];o>0&&i(a)?o>1?m(a,o-1,i,b,f):r(f,a):b||(f[f.length]=a)}return f}function S(n){var o=n==null?0:n.length;return o?m(n,1):[]}export{m as b,S as f};