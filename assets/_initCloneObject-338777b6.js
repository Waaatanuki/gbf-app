import{c2 as p,cj as O,c6 as y,cI as v,ca as x,cJ as w,cK as P,ct as m,cL as u}from"./index-eec80e3a.js";var i=Object.create,b=function(){function e(){}return function(n){if(!p(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const A=b;function J(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function M(e,n,r,t){var g=!r;r||(r={});for(var a=-1,h=n.length;++a<h;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),g?O(r,o,s):y(r,o,s)}return r}function C(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var I=Object.prototype,K=I.hasOwnProperty;function L(e){if(!p(e))return C(e);var n=v(e),r=[];for(var t in e)t=="constructor"&&(n||!K.call(e,t))||r.push(t);return r}function N(e){return x(e)?w(e,!0):L(e)}var T=P(Object.getPrototypeOf,Object);const U=T;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,B=f&&f.exports===d,c=B?m.Buffer:void 0,l=c?c.allocUnsafe:void 0;function q(e,n){if(n)return e.slice();var r=e.length,t=l?l(r):new e.constructor(r);return e.copy(t),t}function E(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function D(e,n){var r=n?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function F(e){return typeof e.constructor=="function"&&!v(e)?A(U(e)):{}}export{E as a,D as b,M as c,J as d,q as e,U as g,F as i,N as k};
