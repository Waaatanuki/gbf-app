import{_ as f,r as $,x as U,B as C,a as r,o as V,e as k,w as a,b as e,f as _,p as N,i as B,j as v,A as I,c as A}from"./index.2459223f.js";const E=d=>(N("data-v-407212e2"),d=d(),B(),d),T=E(()=>_("div",{class:"card-header"},[_("span",null,"\u6253\u725B\u8D34\u751F\u6210\u5668")],-1)),j={class:"footer"},z=v("\u751F\u6210"),G=v("\u91CD\u7F6E"),S={__name:"Cow",setup(d){const u=$(),l=U({title:"",team:"",weapon:"",summon:"",trial:"",ring1:"",ring2:"",ring3:"",comment:""}),{copy:b}=C();async function g(){const{title:c,team:o,weapon:n,summon:s,trial:m,ring1:p,ring2:i,ring3:t,comment:x}=l,w=`
[size=150%][b]${c}[/b][/size]   
[list]
[*]\u9635\u5BB9\uFF1A
${o}
[*]\u6B66\u5668\u76D8\uFF1A
[collapse]
${n}
[/collapse]
[*]\u53EC\u5524\uFF1A
[collapse]
${s}
[/collapse]
[*]\u6728\u6869\u56FE\uFF1A
[collapse]
${m}
[/collapse]
[*]\u6212\u6307\u53CA\u8033\u73AF\u60C5\u51B5\uFF1A
[list]
[*]${p}
[*]${i}
[*]${t}
[/list]
[*]\u5907\u6CE8\uFF1A
${x}
[/list]
        `;await b(w),I.success("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}function y(){u.value.resetFields()}return(c,o)=>{const n=r("el-input"),s=r("el-form-item"),m=r("el-form"),p=r("el-button"),i=r("el-card");return V(),k(i,{class:"box-card"},{header:a(()=>[T]),default:a(()=>[e(m,{model:l,"label-width":"120px",ref_key:"formEl",ref:u},{default:a(()=>[e(s,{label:"\u6807\u9898",prop:"title"},{default:a(()=>[e(n,{modelValue:l.title,"onUpdate:modelValue":o[0]||(o[0]=t=>l.title=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u9635\u5BB9",prop:"team"},{default:a(()=>[e(n,{modelValue:l.team,"onUpdate:modelValue":o[1]||(o[1]=t=>l.team=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u6B66\u5668\u76D8",prop:"weapon"},{default:a(()=>[e(n,{modelValue:l.weapon,"onUpdate:modelValue":o[2]||(o[2]=t=>l.weapon=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u53EC\u5524",prop:"summon"},{default:a(()=>[e(n,{modelValue:l.summon,"onUpdate:modelValue":o[3]||(o[3]=t=>l.summon=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u6728\u6869",prop:"trial"},{default:a(()=>[e(n,{modelValue:l.trial,"onUpdate:modelValue":o[4]||(o[4]=t=>l.trial=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u6212\u6307\u53CA\u8033\u73AF\u60C5\u51B51",prop:"ring1"},{default:a(()=>[e(n,{modelValue:l.ring1,"onUpdate:modelValue":o[5]||(o[5]=t=>l.ring1=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u6212\u6307\u53CA\u8033\u73AF\u60C5\u51B52",prop:"ring2"},{default:a(()=>[e(n,{modelValue:l.ring2,"onUpdate:modelValue":o[6]||(o[6]=t=>l.ring2=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u6212\u6307\u53CA\u8033\u73AF\u60C5\u51B53",prop:"ring3"},{default:a(()=>[e(n,{modelValue:l.ring3,"onUpdate:modelValue":o[7]||(o[7]=t=>l.ring3=t)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u5907\u6CE8",prop:"comment"},{default:a(()=>[e(n,{modelValue:l.comment,"onUpdate:modelValue":o[8]||(o[8]=t=>l.comment=t),type:"textarea",autosize:{minRows:5}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),_("div",j,[e(p,{type:"primary",onClick:g},{default:a(()=>[z]),_:1}),e(p,{type:"primary",onClick:y},{default:a(()=>[G]),_:1})])]),_:1})}}};var F=f(S,[["__scopeId","data-v-407212e2"]]);const M={class:"tool-list"},R={__name:"NGATools",setup(d){return(u,l)=>(V(),A("div",M,[e(F)]))}};var D=f(R,[["__scopeId","data-v-1d76e7cd"]]);export{D as default};
