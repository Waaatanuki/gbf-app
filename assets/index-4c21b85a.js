import{S as N,k as W,l as k,j as G}from"./_Uint8Array-e085a768.js";import{b as _}from"./isEqual-49dbe6e4.js";import{bZ as U,bl as x,bX as K,b_ as y,bD as X,bm as D,b$ as F,b8 as q,bV as Z,c0 as J,aE as Q,bL as Y}from"./index-2f6a894d.js";var z=/\s/;function V(n){for(var e=n.length;e--&&z.test(n.charAt(e)););return e}var j=/^\s+/;function nn(n){return n&&n.slice(0,V(n)+1).replace(j,"")}var R=0/0,en=/^[-+]0x[0-9a-f]+$/i,rn=/^0b[01]+$/i,tn=/^0o[0-7]+$/i,sn=parseInt;function M(n){if(typeof n=="number")return n;if(U(n))return R;if(x(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=x(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=nn(n);var r=rn.test(n);return r||tn.test(n)?sn(n.slice(2),r?2:8):en.test(n)?R:+n}function an(n){return n}var un=1,fn=2;function on(n,e,r,t){var i=r.length,f=i,a=!t;if(n==null)return!f;for(n=Object(n);i--;){var s=r[i];if(a&&s[2]?s[1]!==n[s[0]]:!(s[0]in n))return!1}for(;++i<f;){s=r[i];var o=s[0],c=n[o],h=s[1];if(a&&s[2]){if(c===void 0&&!(o in n))return!1}else{var d=new N;if(t)var l=t(c,h,o,n,e,d);if(!(l===void 0?_(h,c,un|fn,t,d):l))return!1}}return!0}function H(n){return n===n&&!x(n)}function cn(n){for(var e=W(n),r=e.length;r--;){var t=e[r],i=n[t];e[r]=[t,i,H(i)]}return e}function $(n,e){return function(r){return r==null?!1:r[n]===e&&(e!==void 0||n in Object(r))}}function dn(n){var e=cn(n);return e.length==1&&e[0][2]?$(e[0][0],e[0][1]):function(r){return r===n||on(r,n,e)}}function ln(n,e){return n!=null&&e in Object(n)}function mn(n,e,r){e=K(e,n);for(var t=-1,i=e.length,f=!1;++t<i;){var a=y(e[t]);if(!(f=n!=null&&r(n,a)))break;n=n[a]}return f||++t!=i?f:(i=n==null?0:n.length,!!i&&k(i)&&X(a,i)&&(D(n)||G(n)))}function gn(n,e){return n!=null&&mn(n,e,ln)}var hn=1,pn=2;function En(n,e){return F(n)&&H(e)?$(y(n),e):function(r){var t=q(r,n);return t===void 0&&t===e?gn(r,n):_(e,t,hn|pn)}}function In(n){return function(e){return e==null?void 0:e[n]}}function vn(n){return function(e){return Z(e,n)}}function xn(n){return F(n)?In(y(n)):vn(n)}function Mn(n){return typeof n=="function"?n:n==null?an:typeof n=="object"?D(n)?En(n[0],n[1]):dn(n):xn(n)}var An=function(){return J.Date.now()};const T=An;var Tn="Expected a function",yn=Math.max,Cn=Math.min;function Pn(n,e,r){var t,i,f,a,s,o,c=0,h=!1,d=!1,l=!0;if(typeof n!="function")throw new TypeError(Tn);e=M(e)||0,x(r)&&(h=!!r.leading,d="maxWait"in r,f=d?yn(M(r.maxWait)||0,e):f,l="trailing"in r?!!r.trailing:l);function p(u){var m=t,E=i;return t=i=void 0,c=u,a=n.apply(E,m),a}function I(u){return c=u,s=setTimeout(v,e),h?p(u):a}function b(u){var m=u-o,E=u-c,O=e-m;return d?Cn(O,f-E):O}function C(u){var m=u-o,E=u-c;return o===void 0||m>=e||m<0||d&&E>=f}function v(){var u=T();if(C(u))return L(u);s=setTimeout(v,b(u))}function L(u){return s=void 0,l&&t?p(u):(t=i=void 0,a)}function w(){s!==void 0&&clearTimeout(s),c=0,t=o=i=s=void 0}function B(){return s===void 0?a:L(T())}function A(){var u=T(),m=C(u);if(t=arguments,i=this,o=u,m){if(s===void 0)return I(o);if(d)return clearTimeout(s),s=setTimeout(v,e),p(o)}return s===void 0&&(s=setTimeout(v,e)),a}return A.cancel=w,A.flush=B,A}const g=new Map;let P;Q&&(document.addEventListener("mousedown",n=>P=n),document.addEventListener("mouseup",n=>{for(const e of g.values())for(const{documentHandler:r}of e)r(n,P)}));function S(n,e){let r=[];return Array.isArray(e.arg)?r=e.arg:Y(e.arg)&&r.push(e.arg),function(t,i){const f=e.instance.popperRef,a=t.target,s=i==null?void 0:i.target,o=!e||!e.instance,c=!a||!s,h=n.contains(a)||n.contains(s),d=n===a,l=r.length&&r.some(I=>I==null?void 0:I.contains(a))||r.length&&r.includes(s),p=f&&(f.contains(a)||f.contains(s));o||c||h||d||l||p||e.value(t,i)}}const Sn={beforeMount(n,e){g.has(n)||g.set(n,[]),g.get(n).push({documentHandler:S(n,e),bindingFn:e.value})},updated(n,e){g.has(n)||g.set(n,[]);const r=g.get(n),t=r.findIndex(f=>f.bindingFn===e.oldValue),i={documentHandler:S(n,e),bindingFn:e.value};t>=0?r.splice(t,1,i):r.push(i)},unmounted(n){g.delete(n)}};export{Sn as C,Mn as b,Pn as d,gn as h,an as i,M as t};