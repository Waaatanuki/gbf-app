import{bh as y,aT as c,as as L,ak as _,al as d,bi as K,aq as U,ai as R,bj as w,bk as l,b0 as W,bl as u}from"./index-e1e4d07d.js";var q=y(c,"WeakMap");const j=q;var N=9007199254740991;function z(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=N}function H(t){return t!=null&&z(t.length)&&!L(t)}var X=Object.prototype;function Y(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||X;return t===e}function Z(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}var J="[object Arguments]";function $(t){return _(t)&&d(t)==J}var V=Object.prototype,Q=V.hasOwnProperty,tt=V.propertyIsEnumerable,et=$(function(){return arguments}())?$:function(t){return _(t)&&Q.call(t,"callee")&&!tt.call(t,"callee")};const rt=et;function at(){return!1}var D=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=D&&typeof module=="object"&&module&&!module.nodeType&&module,nt=x&&x.exports===D,S=nt?c.Buffer:void 0,ot=S?S.isBuffer:void 0,st=ot||at;const it=st;var ct="[object Arguments]",ut="[object Array]",pt="[object Boolean]",ft="[object Date]",gt="[object Error]",bt="[object Function]",lt="[object Map]",yt="[object Number]",dt="[object Object]",ht="[object RegExp]",Tt="[object Set]",jt="[object String]",vt="[object WeakMap]",mt="[object ArrayBuffer]",At="[object DataView]",_t="[object Float32Array]",wt="[object Float64Array]",$t="[object Int8Array]",xt="[object Int16Array]",St="[object Int32Array]",Ot="[object Uint8Array]",Pt="[object Uint8ClampedArray]",It="[object Uint16Array]",Et="[object Uint32Array]",a={};a[_t]=a[wt]=a[$t]=a[xt]=a[St]=a[Ot]=a[Pt]=a[It]=a[Et]=!0;a[ct]=a[ut]=a[mt]=a[pt]=a[At]=a[ft]=a[gt]=a[bt]=a[lt]=a[yt]=a[dt]=a[ht]=a[Tt]=a[jt]=a[vt]=!1;function Mt(t){return _(t)&&z(t.length)&&!!a[d(t)]}function kt(t){return function(r){return t(r)}}var F=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=F&&typeof module=="object"&&module&&!module.nodeType&&module,Ct=g&&g.exports===F,T=Ct&&K.process,Bt=function(){try{var t=g&&g.require&&g.require("util").types;return t||T&&T.binding&&T.binding("util")}catch{}}();const O=Bt;var P=O&&O.isTypedArray,Ut=P?kt(P):Mt;const zt=Ut;var Vt=Object.prototype,Dt=Vt.hasOwnProperty;function Ft(t,r){var e=U(t),n=!e&&rt(t),s=!e&&!n&&it(t),p=!e&&!n&&!s&&zt(t),f=e||n||s||p,h=f?Z(t.length,String):[],G=h.length;for(var o in t)(r||Dt.call(t,o))&&!(f&&(o=="length"||s&&(o=="offset"||o=="parent")||p&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||R(o,G)))&&h.push(o);return h}function Gt(t,r){return function(e){return t(r(e))}}var Lt=Gt(Object.keys,Object);const Kt=Lt;var Rt=Object.prototype,Wt=Rt.hasOwnProperty;function qt(t){if(!Y(t))return Kt(t);var r=[];for(var e in Object(t))Wt.call(t,e)&&e!="constructor"&&r.push(e);return r}function Nt(t){return H(t)?Ft(t):qt(t)}function Ht(t,r){for(var e=-1,n=r.length,s=t.length;++e<n;)t[s+e]=r[e];return t}function Xt(){this.__data__=new w,this.size=0}function Yt(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function Zt(t){return this.__data__.get(t)}function Jt(t){return this.__data__.has(t)}var Qt=200;function te(t,r){var e=this.__data__;if(e instanceof w){var n=e.__data__;if(!l||n.length<Qt-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new W(n)}return e.set(t,r),this.size=e.size,this}function b(t){var r=this.__data__=new w(t);this.size=r.size}b.prototype.clear=Xt;b.prototype.delete=Yt;b.prototype.get=Zt;b.prototype.has=Jt;b.prototype.set=te;function ee(t,r){for(var e=-1,n=t==null?0:t.length,s=0,p=[];++e<n;){var f=t[e];r(f,e,t)&&(p[s++]=f)}return p}function re(){return[]}var ae=Object.prototype,ne=ae.propertyIsEnumerable,I=Object.getOwnPropertySymbols,oe=I?function(t){return t==null?[]:(t=Object(t),ee(I(t),function(r){return ne.call(t,r)}))}:re;const se=oe;function ie(t,r,e){var n=r(t);return U(t)?n:Ht(n,e(t))}function je(t){return ie(t,Nt,se)}var ce=y(c,"DataView");const v=ce;var ue=y(c,"Promise");const m=ue;var pe=y(c,"Set");const A=pe;var E="[object Map]",fe="[object Object]",M="[object Promise]",k="[object Set]",C="[object WeakMap]",B="[object DataView]",ge=u(v),be=u(l),le=u(m),ye=u(A),de=u(j),i=d;(v&&i(new v(new ArrayBuffer(1)))!=B||l&&i(new l)!=E||m&&i(m.resolve())!=M||A&&i(new A)!=k||j&&i(new j)!=C)&&(i=function(t){var r=d(t),e=r==fe?t.constructor:void 0,n=e?u(e):"";if(n)switch(n){case ge:return B;case be:return E;case le:return M;case ye:return k;case de:return C}return r});const ve=i;var he=c.Uint8Array;const me=he;export{b as S,me as U,it as a,zt as b,rt as c,z as d,Ht as e,ve as f,je as g,Y as h,H as i,Ft as j,Nt as k,se as l,ie as m,O as n,Gt as o,kt as p,re as s};
