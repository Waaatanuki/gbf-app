import{b9 as p,bD as O,bb as y,bR as x}from"./index-c9f02560.js";import{l as v,f as b,m,o as w,U as u}from"./_Uint8Array-3faccb04.js";var i=Object.create,P=function(){function e(){}return function(n){if(!p(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const A=P;function M(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function N(e,n,r,t){var g=!r;r||(r={});for(var a=-1,h=n.length;++a<h;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),g?O(r,o,s):y(r,o,s)}return r}function C(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var U=Object.prototype,I=U.hasOwnProperty;function K(e){if(!p(e))return C(e);var n=v(e),r=[];for(var t in e)t=="constructor"&&(n||!I.call(e,t))||r.push(t);return r}function R(e){return b(e)?m(e,!0):K(e)}var L=w(Object.getPrototypeOf,Object);const T=L;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,B=f&&f.exports===d,l=B?x.Buffer:void 0,c=l?l.allocUnsafe:void 0;function q(e,n){if(n)return e.slice();var r=e.length,t=c?c(r):new e.constructor(r);return e.copy(t),t}function E(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function F(e,n){var r=n?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function G(e){return typeof e.constructor=="function"&&!v(e)?A(T(e)):{}}export{E as a,F as b,N as c,M as d,q as e,T as g,G as i,R as k};
