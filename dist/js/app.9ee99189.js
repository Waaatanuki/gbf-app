(function(){"use strict";var e={4446:function(e,t,a){var n=a(9242),l=a(3396);function o(e,t,a,n,o,i){const s=(0,l.up)("NavigationBar");return(0,l.wg)(),(0,l.j4)(s)}const i=e=>((0,l.dD)("data-v-ae162264"),e=e(),(0,l.Cn)(),e),s={id:"nav"},r=(0,l.Uk)("主页"),c=(0,l.Uk)("贤者素材"),u=(0,l.Uk)("金本统计"),d=(0,l.Uk)("杂项"),p=i((()=>(0,l._)("hr",null,null,-1)));function v(e,t,a,n,o,i){const v=(0,l.up)("router-link"),m=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",s,[(0,l.Wm)(v,{"active-class":"active",to:"/"},{default:(0,l.w5)((()=>[r])),_:1}),(0,l.Wm)(v,{"active-class":"active",to:"/evokerpage"},{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(v,{"active-class":"active",to:"/hihiirosuki"},{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(v,{"active-class":"active",to:"/otherpage"},{default:(0,l.w5)((()=>[d])),_:1})]),p,(0,l.Wm)(m)],64)}var m={name:"NavigationBar"},f=a(89);const g=(0,f.Z)(m,[["render",v],["__scopeId","data-v-ae162264"]]);var k=g,_={name:"App",components:{NavigationBar:k}};const w=(0,f.Z)(_,[["render",o]]);var C=w,b=a(678);const y={class:"otherpage"},h=(0,l.Uk)();function U(e,t,a,n,o,i){const s=(0,l.up)("CritCalc"),r=(0,l.up)("GachaCalc");return(0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(s),h,(0,l.Wm)(r)])}var I=a(7139);const F=e=>((0,l.dD)("data-v-7ca1c97c"),e=e(),(0,l.Cn)(),e),D={class:"critcalc"},L=F((()=>(0,l._)("div",{class:"title"},"暴击计算器",-1))),R={class:"show"},N={class:"input"},O=(0,l.Uk)(" 加护: "),z=(0,l.Uk)("双面神石"),V=(0,l.Uk)("单面神石"),x=(0,l.Uk)("双面方阵"),J=(0,l.Uk)("单面方阵"),j=(0,l.Uk)("无加护"),B=(0,l.Uk)(" 六龙SUB加护: "),T=(0,l.Uk)("20"),H=(0,l.Uk)("10"),q=(0,l.Uk)("无"),K={class:"selectDiv"},M={class:"select"},E={class:"showItem"},S=F((()=>(0,l._)("div",{class:"itemClass"},"神石",-1))),Y={class:"itemClasslist"},G=["onClick"],W={class:"showItem"},Z=F((()=>(0,l._)("div",{class:"itemClassTitle"},"方阵",-1))),P={class:"itemClasslist"},A=["onClick"],$={class:"showItem"},Q=F((()=>(0,l._)("div",{class:"itemClass"},"特殊",-1))),X={class:"itemClasslist"},ee=["onClick"],te={class:"select"},ae={class:"showItem"},ne=F((()=>(0,l._)("div",{class:"itemClass"},"神石",-1))),le={class:"itemClasslist"},oe=["onClick"],ie={class:"showItem"},se=F((()=>(0,l._)("div",{class:"itemClassTitle"},"方阵",-1))),re={class:"itemClasslist"},ce=["onClick"],ue={class:"showItem"},de=F((()=>(0,l._)("div",{class:"itemClass"},"特殊",-1))),pe={class:"itemClasslist"},ve=["onClick"],me={class:"output"},fe={class:"showTotalCrit"},ge=F((()=>(0,l._)("br",null,null,-1)));function ke(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)("div",D,[L,(0,l._)("div",R,[(0,l._)("div",N,[(0,l._)("div",null,[O,(0,l._)("label",{class:(0,I.C_)({goal:300==o.inputInfo[0][0]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"boostType","onUpdate:modelValue":t[0]||(t[0]=e=>o.inputInfo[0]=e),value:[300,0]},null,512),[[n.G2,o.inputInfo[0]]]),z],2),(0,l._)("label",{class:(0,I.C_)({goal:150==o.inputInfo[0][0]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"boostType","onUpdate:modelValue":t[1]||(t[1]=e=>o.inputInfo[0]=e),value:[150,0]},null,512),[[n.G2,o.inputInfo[0]]]),V],2),(0,l._)("label",{class:(0,I.C_)({goal:280==o.inputInfo[0][1]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"boostType","onUpdate:modelValue":t[2]||(t[2]=e=>o.inputInfo[0]=e),value:[0,280]},null,512),[[n.G2,o.inputInfo[0]]]),x],2),(0,l._)("label",{class:(0,I.C_)({goal:140==o.inputInfo[0][1]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"boostType","onUpdate:modelValue":t[3]||(t[3]=e=>o.inputInfo[0]=e),value:[0,140]},null,512),[[n.G2,o.inputInfo[0]]]),J],2),(0,l._)("label",{class:(0,I.C_)({goal:0==o.inputInfo[0][0]&&0==o.inputInfo[0][1]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"boostType","onUpdate:modelValue":t[4]||(t[4]=e=>o.inputInfo[0]=e),value:[0,0]},null,512),[[n.G2,o.inputInfo[0]]]),j],2)]),(0,l._)("div",null,[B,(0,l._)("label",{class:(0,I.C_)({goal:20==o.inputInfo[1]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"dragon","onUpdate:modelValue":t[5]||(t[5]=e=>o.inputInfo[1]=e),value:20},null,512),[[n.G2,o.inputInfo[1]]]),T],2),(0,l._)("label",{class:(0,I.C_)({goal:10==o.inputInfo[1]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"dragon","onUpdate:modelValue":t[6]||(t[6]=e=>o.inputInfo[1]=e),value:10},null,512),[[n.G2,o.inputInfo[1]]]),H],2),(0,l._)("label",{class:(0,I.C_)({goal:0==o.inputInfo[1]})},[(0,l.wy)((0,l._)("input",{type:"radio",name:"dragon","onUpdate:modelValue":t[7]||(t[7]=e=>o.inputInfo[1]=e),value:0},null,512),[[n.G2,o.inputInfo[1]]]),q],2)])]),(0,l._)("div",K,[(0,l._)("div",M,[(0,l._)("div",E,[S,(0,l._)("div",Y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.itemsList,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:(0,I.C_)(["item",{sRate:e.rate<5,mRate:5<e.rate&&e.rate<8,lRate:8<e.rate&&e.rate<=11,xlRate:11<e.rate&&e.rate<40}]),key:t,onClick:t=>o.setCalc(e,0)},(0,I.zw)(e.skillName+" Lv"+e.level),11,G)),[[n.F8,1!=e.magunaOnly&&0!=e.boosted]]))),128))])]),(0,l._)("div",W,[Z,(0,l._)("div",P,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.itemsList,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:(0,I.C_)(["item",{sRate:e.rate<5,mRate:5<e.rate&&e.rate<8,lRate:8<e.rate&&e.rate<=11,xlRate:11<e.rate&&e.rate<40}]),key:t,onClick:t=>o.setCalc(e,1)},(0,I.zw)(e.skillName+" Lv"+e.level),11,A)),[[n.F8,1!=e.kamiOnly&&0!=e.boosted]]))),128))])]),(0,l._)("div",$,[Q,(0,l._)("div",X,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.itemsList,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:(0,I.C_)(["item",{sRate:e.rate<5,mRate:5<e.rate&&e.rate<8,lRate:8<e.rate&&e.rate<=11,xlRate:11<e.rate&&e.rate<40}]),key:t,onClick:t=>o.setCalc(e,2)},(0,I.zw)(e.skillName+" Lv"+e.level),11,ee)),[[n.F8,0==e.boosted]]))),128))])])]),(0,l._)("div",te,[(0,l._)("div",ae,[ne,(0,l._)("div",le,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.calcItems,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:(0,I.C_)(["item",{sRate:e.rate<5,mRate:5<e.rate&&e.rate<8,lRate:8<e.rate&&e.rate<=11,xlRate:11<e.rate&&e.rate<40}]),key:t,onClick:e=>o.calcItems.splice(t,1)},(0,I.zw)(e.skillName+" Lv"+e.level),11,oe)),[[n.F8,1!=e.magunaOnly&&0!=e.boosted&&0==e.type]]))),128))])]),(0,l._)("div",ie,[se,(0,l._)("div",re,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.calcItems,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:(0,I.C_)(["item",{sRate:e.rate<5,mRate:5<e.rate&&e.rate<8,lRate:8<e.rate&&e.rate<=11,xlRate:11<e.rate&&e.rate<40}]),key:t,onClick:e=>o.calcItems.splice(t,1)},(0,I.zw)(e.skillName+" Lv"+e.level),11,ce)),[[n.F8,1!=e.kamiOnly&&0!=e.boosted&&1==e.type]]))),128))])]),(0,l._)("div",ue,[de,(0,l._)("div",pe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.calcItems,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{class:(0,I.C_)(["item",{sRate:e.rate<5,mRate:5<e.rate&&e.rate<8,lRate:8<e.rate&&e.rate<=11,xlRate:11<e.rate&&e.rate<40}]),key:t,onClick:e=>o.calcItems.splice(t,1)},(0,I.zw)(e.skillName+" Lv"+e.level),11,ve)),[[n.F8,0==e.boosted&&2==e.type]]))),128))])])])]),(0,l._)("div",me,[(0,l._)("div",fe,[(0,l._)("label",{class:(0,I.C_)({goal:o.calcResult>=100})},"总暴击率:"+(0,I.zw)(o.calcResult)+"%",3),ge,(0,l._)("button",{class:"clear",onClick:t[8]||(t[8]=(...e)=>o.clearCalc&&o.clearCalc(...e))},"清空")])])])])}var _e=a(4870);const we=[{no:7,name:"教皇",target:!0},{no:1,name:"芙劳",target:!0},{no:0,name:"女帝",target:!0},{no:8,name:"女教皇",target:!0},{no:4,name:"愚者",target:!0},{no:5,name:"魔术师",target:!0},{no:6,name:"皇帝",target:!0},{no:3,name:"节制",target:!0},{no:2,name:"战车",target:!0},{no:9,name:"尼亚",target:!0}],Ce=[{skillName:"技巧(小)",level:15,rate:3},{skillName:"石油锤",level:20,rate:4,kamiOnly:!0,sekiyu:!0},{skillName:"技巧(中)",level:15,rate:6.5},{skillName:"技巧(中)",level:20,rate:7.5},{skillName:"技巧(大)",level:15,rate:10},{skillName:"技巧(大)",level:20,rate:11,kamiOnly:!0},{skillName:"泥鳅枪",level:20,rate:11,waterOnly:!0,magunaOnly:!0},{skillName:"石油弓",level:20,rate:11.5,kamiOnly:!0,sekiyu:!0},{skillName:"技巧II",level:15,rate:12,kamiOnly:!0},{skillName:"水龙枪",level:15,rate:20,waterOnly:!0,boosted:!1},{skillName:"转世武",level:10,rate:20,sandboxOnly:!0,boosted:!1},{skillName:"转世武",level:15,rate:30,sandboxOnly:!0,boosted:!1}];var be={name:"CritCalc",setup(){const e=(0,_e.qj)([[300,0],20]);let t=(0,_e.qj)([]),a={...Ce},n=(0,l.Fl)((()=>{let a=0,n=[e[0][0]+e[1],e[0][1]];for(let e=0;e<t.length;e++)t[e].boostRate=2==t[e].type?t[e].rate:Number(((n[t[e].type]+100)/100*t[e].rate).toFixed(2)),a+=t[e].boostRate;return a.toFixed(1)}));const o=function(e,a){e.type=a,t.push({...e})},i=function(){t.length=0};return(0,l.ic)((()=>{})),{inputInfo:e,itemsList:a,calcItems:t,calcResult:n,clearCalc:i,setCalc:o}}};const ye=(0,f.Z)(be,[["render",ke],["__scopeId","data-v-7ca1c97c"]]);var he=ye;const Ue=e=>((0,l.dD)("data-v-578c71d6"),e=e(),(0,l.Cn)(),e),Ie={class:"gachacalc"},Fe=Ue((()=>(0,l._)("div",{class:"title"},"攒井计算器",-1))),De={class:"show"},Le={class:"setData"},Re=(0,l.Uk)(" 10连券"),Ne=(0,l.Uk)(" 单抽券"),Oe=(0,l.Uk)(" 宝晶石"),ze=(0,l.Uk)("已抽"),Ve=(0,l.Uk)(" 剩余点数"),xe=Ue((()=>(0,l._)("li",null,"==============",-1))),Je=(0,l.Uk)(" 点数价格"),je=(0,l.Uk)(" 对应点数"),Be={class:"result"},Te=Ue((()=>(0,l._)("br",null,null,-1)));function He(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)("div",Ie,[Fe,(0,l._)("div",De,[(0,l._)("div",Le,[(0,l._)("ul",null,[(0,l._)("li",null,[Re,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.tenTicket=t),onfocus:"this.select()"},null,512),[[n.nr,e.tenTicket,void 0,{number:!0}]])]),(0,l._)("li",null,[Ne,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.sigleTicket=t),onfocus:"this.select()"},null,512),[[n.nr,e.sigleTicket,void 0,{number:!0}]])]),(0,l._)("li",null,[Oe,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.crystal=t),onfocus:"this.select()"},null,512),[[n.nr,e.crystal,void 0,{number:!0}]])]),(0,l._)("li",null,[ze,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.drawn=t),onfocus:"this.select()"},null,512),[[n.nr,e.drawn,void 0,{number:!0}]])]),(0,l._)("li",null,[Ve,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.mobacoin=t),onfocus:"this.select()"},null,512),[[n.nr,e.mobacoin,void 0,{number:!0}]])]),xe,(0,l._)("li",null,[Je,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.rmb=t),onfocus:"this.select()"},null,512),[[n.nr,e.rmb,void 0,{number:!0}]])]),(0,l._)("li",null,[je,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.point=t),onfocus:"this.select()"},null,512),[[n.nr,e.point,void 0,{number:!0}]])])])]),(0,l._)("div",Be,[(0,l._)("p",null," 当前"+(0,I.zw)(parseInt(e.totalCrystal/9e4))+"井 , 下一井需要补"+(0,I.zw)(300-e.totalDraw%300)+"抽 , 合计"+(0,I.zw)(9e4-e.totalCrystal%9e4)+"点数 ",1),Te,(0,l.wy)((0,l._)("p",null," 对应RMB : "+(0,I.zw)(parseInt(e.rmb*(9e4-e.totalCrystal%9e4)/e.point))+"元 ",513),[[n.F8,e.rmb&&e.point]])])])])}var qe={name:"GachaCalc",setup(){const e=(0,_e.qj)({sigleTicket:0,tenTicket:0,crystal:0,drawn:0,mobacoin:0});e.totalCrystal=(0,l.Fl)((()=>300*e.sigleTicket+3e3*e.tenTicket+e.crystal+300*e.drawn+e.mobacoin)),e.totalDraw=(0,l.Fl)((()=>parseInt(e.totalCrystal/300)));const t=(0,_e.qj)({rmb:0,point:0});return{...(0,_e.BK)(e),...(0,_e.BK)(t)}}};const Ke=(0,f.Z)(qe,[["render",He],["__scopeId","data-v-578c71d6"]]);var Me=Ke,Ee={name:"OtherPage",components:{CritCalc:he,GachaCalc:Me}};const Se=(0,f.Z)(Ee,[["render",U],["__scopeId","data-v-f1f4806a"]]);var Ye=Se;function Ge(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)("h1",null,"我觉得我是主页")}var We={name:"HomePage"};const Ze=(0,f.Z)(We,[["render",Ge]]);var Pe=Ze;const Ae=e=>((0,l.dD)("data-v-129d77f6"),e=e(),(0,l.Cn)(),e),$e={class:"evokerpage"},Qe={class:"tree"},Xe={class:"leaf"},et=Ae((()=>(0,l._)("div",{class:"footer"},[(0,l._)("span",null,"Created by Waaatanuki"),(0,l._)("br"),(0,l._)("a",{href:"https://bbs.nga.cn/read.php?tid=25257642"},"问题反馈")],-1)));function tt(e,t,a,n,o,i){const s=(0,l.up)("MaterialInfo"),r=(0,l.up)("EvokerInfo"),c=(0,l.up)("MaterialResult");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",$e,[(0,l._)("div",Qe,[(0,l.Wm)(s,{materialInfo:e.materialInfo},null,8,["materialInfo"])]),(0,l._)("div",Xe,[(0,l.Wm)(r,{evokerInfo:e.evokerInfo},null,8,["evokerInfo"]),(0,l.Wm)(c,{class:"showResult",result:e.result,flag:e.flag,percent:e.percent},null,8,["result","flag","percent"])])]),et],64)}const at=e=>((0,l.dD)("data-v-360788f8"),e=e(),(0,l.Cn)(),e),nt={class:"container"},lt=["src"],ot=["onUpdate:modelValue"],it=at((()=>(0,l._)("option",{disabled:"",value:"undefined"},"塔罗牌进度",-1))),st=at((()=>(0,l._)("option",{value:"0",isshow:"1"},"未入手",-1))),rt=(0,l.uE)('<option value="1" data-v-360788f8>塔罗牌0凸</option><option value="2" data-v-360788f8>塔罗牌1凸</option><option value="3" data-v-360788f8>塔罗牌2凸</option><option value="4" data-v-360788f8>塔罗牌3凸</option><option value="5" data-v-360788f8>塔罗牌SSR化</option><option value="6" data-v-360788f8>塔罗牌4凸</option><option value="7" data-v-360788f8>塔罗牌5凸</option>',7),ct=[it,st,rt],ut=at((()=>(0,l._)("br",null,null,-1))),dt=["onUpdate:modelValue"],pt=(0,l.Uk)("交换贤者卡牌"),vt=at((()=>(0,l._)("br",null,null,-1))),mt=["onUpdate:modelValue"],ft=(0,l.uE)('<option disabled value="undefined" data-v-360788f8>贤者进度</option><option value="0" data-v-360788f8>贤者0凸</option><option value="1" data-v-360788f8>贤者1凸</option><option value="2" data-v-360788f8>贤者2凸</option><option value="3" data-v-360788f8>贤者3凸</option><option value="4" data-v-360788f8>贤者4凸</option>',6),gt=[ft],kt=at((()=>(0,l._)("br",null,null,-1))),_t=["onUpdate:modelValue"],wt=(0,l.uE)('<option disabled value="undefined" data-v-360788f8>贤武进度</option><option value="0" data-v-360788f8>未入手</option><option value="1" data-v-360788f8>贤武0凸</option><option value="2" data-v-360788f8>贤武1凸</option><option value="3" data-v-360788f8>贤武2凸</option><option value="4" data-v-360788f8>贤武3凸</option><option value="5" data-v-360788f8>贤武终突</option>',7),Ct=[wt],bt=at((()=>(0,l._)("br",null,null,-1))),yt=["onUpdate:modelValue"],ht=(0,l.uE)('<option disabled value="undefined" data-v-360788f8>领域进度</option><option value="0" data-v-360788f8>未解放</option><option value="1" data-v-360788f8>解放一格</option><option value="2" data-v-360788f8>解放两格</option><option value="3" data-v-360788f8>解放三格</option><option value="4" data-v-360788f8>全部解放</option>',6),Ut=[ht],It=at((()=>(0,l._)("br",null,null,-1))),Ft=["onUpdate:modelValue"],Dt=(0,l.Uk)("目标");function Lt(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)("div",nt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.evokerInfo,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"item",key:e.no},[(0,l._)("img",{src:`./img/npc/304016${e.no}000_01.jpg`},null,8,lt),(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t=>e.tarotLevel=t,class:(0,I.C_)({completed:7==e.tarotLevel})},ct,10,ot),[[n.bM,e.tarotLevel]]),ut,(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":t=>e.getCard=t},null,8,dt),[[n.e8,e.getCard]]),pt]),vt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t=>e.evokerLevel=t,class:(0,I.C_)({completed:4==e.evokerLevel})},gt,10,mt),[[n.bM,e.evokerLevel]]),kt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t=>e.weaponLevel=t,class:(0,I.C_)({completed:5==e.weaponLevel})},Ct,10,_t),[[n.bM,e.weaponLevel]]),bt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t=>e.domainLevel=t,class:(0,I.C_)({completed:4==e.domainLevel})},Ut,10,yt),[[n.bM,e.domainLevel]]),It,(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":t=>e.target=t},null,8,Ft),[[n.e8,e.target]]),Dt])])))),128))])}var Rt={name:"EvokerInfo",props:["evokerInfo"]};const Nt=(0,f.Z)(Rt,[["render",Lt],["__scopeId","data-v-360788f8"]]);var Ot=Nt;const zt=e=>((0,l.dD)("data-v-9d4e9fca"),e=e(),(0,l.Cn)(),e),Vt={class:"itemBox"},xt=zt((()=>(0,l._)("div",{class:"tips"},"素材界面选择上限解放可按顺序输入",-1))),Jt=["src"],jt=zt((()=>(0,l._)("br",null,null,-1))),Bt=["onUpdate:modelValue"];function Tt(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)("div",Vt,[xt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.itemList,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"itemLine",key:t},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:"item",key:t},[(0,l._)("img",{style:{width:"100%"},src:`./img/item/${e}.jpg`},null,8,Jt),jt,(0,l.wy)((0,l._)("input",{class:"itemNum","onUpdate:modelValue":t=>a.materialInfo[e]=t,onfocus:"this.select()"},null,8,Bt),[[n.nr,a.materialInfo[e],void 0,{number:!0,lazy:!0}]])])),[[n.F8,0!=e]]))),128))])))),128))])}var Ht={name:"MaterialInfo",props:["materialInfo"],setup(){const e=[[0,0,0,25e3,25001],[25002,25003,25004,25005,25006],[25007,25008,25009,25010,25011],[25012,25013,25014,25015,25016],[25020,25021,25033,25034,25035],[25036,25023,25024,25025,25026],[25047,25048,25049,25050,25051],[25052,25053,25054,25055,25056],[25070,25071,25072,25073,25074]];return{itemList:e}}};const qt=(0,f.Z)(Ht,[["render",Tt],["__scopeId","data-v-9d4e9fca"]]);var Kt=qt;const Mt=e=>((0,l.dD)("data-v-5f5d48f1"),e=e(),(0,l.Cn)(),e),Et={class:"container"},St={class:"subTitle"},Yt={class:"subTitle"},Gt={class:"subTitle"},Wt={class:"showBox"},Zt=["src"],Pt=Mt((()=>(0,l._)("br",null,null,-1))),At={class:"itemNum"};function $t(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)("div",Et,[(0,l.wy)((0,l._)("div",St,"尚未勾选目标",512),[[n.F8,0==a.flag]]),(0,l.wy)((0,l._)("div",Yt," 完成目标还需以下素材 ",512),[[n.F8,1==a.flag&&0!=Object.keys(a.result).length]]),(0,l.wy)((0,l._)("div",Gt," 目标素材已收集完毕 ",512),[[n.F8,1==a.flag&&0==Object.keys(a.result).length]]),(0,l._)("div",Wt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.result,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"item",key:t},[(0,l._)("img",{style:{width:"100%"},src:`./img/item/${t}.jpg`},null,8,Zt),Pt,(0,l._)("label",At,(0,I.zw)(e),1)])))),128))]),(0,l.wy)((0,l._)("div",{class:"percentClass"},"当前进度为:"+(0,I.zw)(a.percent)+"%",513),[[n.F8,a.flag]])])}var Qt={name:"MaterialResult",props:["result","flag","percent"]};const Xt=(0,f.Z)(Qt,[["render",$t],["__scopeId","data-v-5f5d48f1"]]);var ea=Xt;const ta=[{tarotUncap:[{25e3:2,25002:3,25007:2,25024:6,25021:1},{25e3:5,25002:5,25007:3,25024:16,25021:3},{25e3:10,25002:10,25007:5,25024:30,25021:7},{25e3:15,25002:15,25007:7,25024:50,25021:16},{25e3:30,25002:30,25007:15,25024:80,25021:24},{25e3:45,25002:45,25007:25,25024:120,25021:32,25034:10},{25024:250,25034:20}],tarotCard:{25e3:30,25002:200,25007:20,25036:1},evokerUncap:[{25024:2},{25024:2,25002:1},{25024:6,25002:2,25007:1},{25024:10,25002:3,25007:1,25021:3}],weaponUncap:[{25074:5,25071:5,25047:20},{25074:5,25071:15,25047:70,25024:100,25002:30},{25074:10,25071:30,25047:100,25024:150,25002:50,25007:30},{25074:20,25071:50,25047:130,25024:200,25002:100,25007:70},{25074:20,25071:60,25047:150,25024:250,25002:120,25007:100}],domainUncap:[{25e3:5,25024:120,25021:20},{25e3:10,25002:30,25024:240,25021:30},{25e3:15,25002:40,25007:40,25047:30,25034:10},{25e3:20,25002:40,25007:70,25047:50,25034:20,25071:20}]},{tarotUncap:[{25e3:2,25001:3,25011:2,25023:6,25020:1},{25e3:5,25001:5,25011:3,25023:16,25020:3},{25e3:10,25001:10,25011:5,25023:30,25020:7},{25e3:15,25001:15,25011:7,25023:50,25020:16},{25e3:30,25001:30,25011:15,25023:80,25020:24},{25e3:45,25001:45,25011:25,25023:120,25020:32,25033:10},{25023:250,25033:20}],tarotCard:{25e3:30,25001:200,25011:20,25036:1},evokerUncap:[{25023:2},{25023:2,25001:1},{25023:6,25001:2,25011:1},{25023:10,25001:3,25011:1,25020:3}],weaponUncap:[{25074:5,25070:5,25051:20},{25074:5,25070:15,25051:70,25023:100,25001:30},{25074:10,25070:30,25051:100,25023:150,25001:50,25011:30},{25074:20,25070:50,25051:130,25023:200,25001:100,25011:70},{25074:20,25070:60,25051:150,25023:250,25001:120,25011:100}],domainUncap:[{25e3:5,25023:120,25020:20},{25e3:10,25001:30,25023:240,25020:30},{25e3:15,25001:40,25011:40,25051:30,25033:10},{25e3:20,25001:40,25011:70,25051:50,25033:20,25070:20}]},{tarotUncap:[{25e3:2,25005:3,25013:2,25023:3,25026:3,25020:1},{25e3:5,25005:5,25013:3,25023:8,25026:8,25020:3},{25e3:10,25005:10,25013:5,25023:15,25026:15,25020:7},{25e3:15,25005:15,25013:7,25023:25,25026:25,25020:16},{25e3:30,25005:30,25013:15,25023:40,25026:40,25020:24},{25e3:45,25005:45,25013:25,25023:60,25026:60,25020:32,25035:10},{25023:125,25026:125,25035:20}],tarotCard:{25e3:30,25005:200,25013:20,25036:1},evokerUncap:[{25023:1,25026:1},{25023:1,25026:1,25005:1},{25023:3,25026:3,25005:2,25013:1},{25023:5,25026:5,25005:3,25013:1,25020:3}],weaponUncap:[{25074:5,25070:3,25073:3,25053:20},{25074:5,25070:7,25073:7,25053:70,25023:50,25026:50,25005:30},{25074:10,25070:15,25073:15,25053:100,25023:75,25026:75,25005:50,25013:30},{25074:20,25070:25,25073:25,25053:130,25023:100,25026:100,25005:100,25013:70},{25074:20,25070:30,25073:30,25053:150,25023:125,25026:125,25005:120,25013:100}],domainUncap:[{25e3:5,25023:60,25026:60,25020:20},{25e3:10,25005:30,25023:120,25026:120,25020:30},{25e3:15,25005:40,25013:40,25053:30,25035:10},{25e3:20,25005:40,25013:70,25053:50,25035:20,25070:10,25073:10}]},{tarotUncap:[{25e3:2,25004:3,25010:2,25026:6,25020:1},{25e3:5,25004:5,25010:3,25026:16,25020:3},{25e3:10,25004:10,25010:5,25026:30,25020:7},{25e3:15,25004:15,25010:7,25026:50,25020:16},{25e3:30,25004:30,25010:15,25026:80,25020:24},{25e3:45,25004:45,25010:25,25026:120,25020:32,25035:10},{25026:250,25035:20}],tarotCard:{25e3:30,25004:200,25010:20,25036:1},evokerUncap:[{25026:2},{25026:2,25004:1},{25026:6,25004:2,25010:1},{25026:10,25004:3,25010:1,25020:3}],weaponUncap:[{25074:5,25073:5,25050:20},{25074:5,25073:15,25050:70,25026:100,25004:30},{25074:10,25073:30,25050:100,25026:150,25004:50,25010:30},{25074:20,25073:50,25050:130,25026:200,25004:100,25010:70},{25074:20,25073:60,25050:150,25026:250,25004:120,25010:100}],domainUncap:[{25e3:5,25026:120,25020:20},{25e3:10,25004:30,25026:240,25020:30},{25e3:15,25004:40,25010:40,25050:30,25035:10},{25e3:20,25004:40,25010:70,25050:50,25035:20,25073:20}]},{tarotUncap:[{25e3:2,25003:3,25008:2,25025:6,25021:1},{25e3:5,25003:5,25008:3,25025:16,25021:3},{25e3:10,25003:10,25008:5,25025:30,25021:7},{25e3:15,25003:15,25008:7,25025:50,25021:16},{25e3:30,25003:30,25008:15,25025:80,25021:24},{25e3:45,25003:45,25008:25,25025:120,25021:32,25033:10},{25025:250,25033:20}],tarotCard:{25e3:30,25003:200,25008:20,25036:1},evokerUncap:[{25025:2},{25025:2,25003:1},{25025:6,25003:2,25008:1},{25025:10,25003:3,25008:1,25021:3}],weaponUncap:[{25074:5,25072:5,25048:20},{25074:5,25072:15,25048:70,25025:100,25003:30},{25074:10,25072:30,25048:100,25025:150,25003:50,25008:30},{25074:20,25072:50,25048:130,25025:200,25003:100,25008:70},{25074:20,25072:60,25048:150,25025:250,25003:120,25008:100}],domainUncap:[{25e3:5,25025:120,25021:20},{25e3:10,25003:30,25025:240,25021:30},{25e3:15,25003:40,25008:40,25048:30,25033:10},{25e3:20,25003:40,25008:70,25048:50,25033:20,25072:20}]},{tarotUncap:[{25e3:2,25003:3,25012:2,25025:6,25021:1},{25e3:5,25003:5,25012:3,25025:16,25021:3},{25e3:10,25003:10,25012:5,25025:30,25021:7},{25e3:15,25003:15,25012:7,25025:50,25021:16},{25e3:30,25003:30,25012:15,25025:80,25021:24},{25e3:45,25003:45,25012:25,25025:120,25021:32,25035:10},{25025:250,25035:20}],tarotCard:{25e3:30,25003:200,25012:20,25036:1},evokerUncap:[{25025:2},{25025:2,25003:1},{25025:6,25003:2,25012:1},{25025:10,25003:3,25012:1,25021:3}],weaponUncap:[{25074:5,25072:5,25052:20},{25074:5,25072:15,25052:70,25025:100,25003:30},{25074:10,25072:30,25052:100,25025:150,25003:50,25012:30},{25074:20,25072:50,25052:130,25025:200,25003:100,25012:70},{25074:20,25072:60,25052:150,25025:250,25003:120,25012:100}],domainUncap:[{25e3:5,25025:120,25021:20},{25e3:10,25003:30,25025:240,25021:30},{25e3:15,25003:40,25012:40,25052:30,25035:10},{25e3:20,25003:40,25012:70,25052:50,25035:20,25072:20}]},{tarotUncap:[{25e3:2,25004:3,25016:2,25026:6,25020:1},{25e3:5,25004:5,25016:3,25026:16,25020:3},{25e3:10,25004:10,25016:5,25026:30,25020:7},{25e3:15,25004:15,25016:7,25026:50,25020:16},{25e3:30,25004:30,25016:15,25026:80,25020:24},{25e3:45,25004:45,25016:25,25026:120,25020:32,25034:10},{25026:250,25034:20}],tarotCard:{25e3:30,25004:200,25016:20,25036:1},evokerUncap:[{25026:2},{25026:2,25004:1},{25026:6,25004:2,25016:1},{25026:10,25004:3,25016:1,25020:3}],weaponUncap:[{25074:5,25073:5,25056:20},{25074:5,25073:15,25056:70,25026:100,25004:30},{25074:10,25073:30,25056:100,25026:150,25004:50,25016:30},{25074:20,25073:50,25056:130,25026:200,25004:100,25016:70},{25074:20,25073:60,25056:150,25026:250,25004:120,25016:100}],domainUncap:[{25e3:5,25026:120,25020:20},{25e3:10,25004:30,25026:240,25020:30},{25e3:15,25004:40,25016:40,25056:30,25034:10},{25e3:20,25004:40,25016:70,25056:50,25034:20,25073:20}]},{tarotUncap:[{25e3:2,25001:3,25015:2,25023:6,25020:1},{25e3:5,25001:5,25015:3,25023:16,25020:3},{25e3:10,25001:10,25015:5,25023:30,25020:7},{25e3:15,25001:15,25015:7,25023:50,25020:16},{25e3:30,25001:30,25015:15,25023:80,25020:24},{25e3:45,25001:45,25015:25,25023:120,25020:32,25033:10},{25023:250,25033:20}],tarotCard:{25e3:30,25001:200,25015:20,25036:1},evokerUncap:[{25023:2},{25023:2,25001:1},{25023:6,25001:2,25015:1},{25023:10,25001:3,25015:1,25020:3}],weaponUncap:[{25074:5,25070:5,25055:20},{25074:5,25070:15,25055:70,25023:100,25001:30},{25074:10,25070:30,25055:100,25023:150,25001:50,25015:30},{25074:20,25070:50,25055:130,25023:200,25001:100,25015:70},{25074:20,25070:60,25055:150,25023:250,25001:120,25015:100}],domainUncap:[{25e3:5,25023:120,25020:20},{25e3:10,25001:30,25023:240,25020:30},{25e3:15,25001:40,25015:40,25055:30,25033:10},{25e3:20,25001:40,25015:70,25055:50,25033:20,25070:20}]},{tarotUncap:[{25e3:2,25002:3,25014:2,25024:6,25021:1},{25e3:5,25002:5,25014:3,25024:16,25021:3},{25e3:10,25002:10,25014:5,25024:30,25021:7},{25e3:15,25002:15,25014:7,25024:50,25021:16},{25e3:30,25002:30,25014:15,25024:80,25021:24},{25e3:45,25002:45,25014:25,25024:120,25021:32,25034:10},{25024:250,25034:20}],tarotCard:{25e3:30,25002:200,25014:20,25036:1},evokerUncap:[{25024:2},{25024:2,25002:1},{25024:6,25002:2,25014:1},{25024:10,25002:3,25014:1,25021:3}],weaponUncap:[{25074:5,25071:5,25054:20},{25074:5,25071:15,25054:70,25024:100,25002:30},{25074:10,25071:30,25054:100,25024:150,25002:50,25014:30},{25074:20,25071:50,25054:130,25024:200,25002:100,25014:70},{25074:20,25071:60,25054:150,25024:250,25002:120,25014:100}],domainUncap:[{25e3:5,25024:120,25021:20},{25e3:10,25002:30,25024:240,25021:30},{25e3:15,25002:40,25014:40,25054:30,25034:10},{25e3:20,25002:40,25014:70,25054:50,25034:20,25071:20}]},{tarotUncap:[{25e3:2,25006:3,25009:2,25024:3,25025:3,25021:1},{25e3:5,25006:5,25009:3,25024:8,25025:8,25021:3},{25e3:10,25006:10,25009:5,25024:15,25025:15,25021:7},{25e3:15,25006:15,25009:7,25024:25,25025:25,25021:16},{25e3:30,25006:30,25009:15,25024:40,25025:40,25021:24},{25e3:45,25006:45,25009:25,25024:60,25025:60,25021:32,25035:10},{25024:125,25025:125,25035:20}],tarotCard:{25e3:30,25006:200,25009:20,25036:1},evokerUncap:[{25024:1,25025:1},{25024:1,25025:1,25006:1},{25024:3,25025:3,25006:2,25009:1},{25024:5,25025:5,25006:3,25009:1,25021:3}],weaponUncap:[{25074:5,25071:3,25072:3,25049:20},{25074:5,25071:7,25072:7,25049:70,25024:50,25025:50,25006:30},{25074:10,25071:15,25072:15,25049:100,25024:75,25025:75,25006:50,25009:30},{25074:20,25071:25,25072:25,25049:130,25024:100,25025:100,25006:100,25009:70},{25074:20,25071:30,25072:30,25049:150,25024:125,25025:125,25006:120,25009:100}],domainUncap:[{25e3:5,25024:60,25025:60,25021:20},{25e3:10,25006:30,25024:120,25025:120,25021:30},{25e3:15,25006:40,25009:40,25049:30,25035:10},{25e3:20,25006:40,25009:70,25049:50,25035:20,25071:10,25072:10}]}],aa=function(e,t){let a={},n=["tarotUncap","evokerUncap","weaponUncap","domainUncap"];for(let l=0;l<10;l++)if(e[l].target){let t=e[l].no,o=e[l].tarotLevel||0,i=e[l].evokerLevel||0,s=e[l].weaponLevel||0,r=e[l].domainLevel||0,c=[o,i,s,r];if(!e[l].getCard){let e=ta[t].tarotCard;for(const t in e)isNaN(a[t])&&(a[t]=0),a[t]+=e[t]}for(let e=0;e<4;e++)for(let l=c[e];l<ta[t][n[e]].length;l++){let o=ta[t][n[e]][l];for(const e in o)isNaN(a[e])&&(a[e]=0),a[e]+=o[e]}}for(const l in t)a[l]&&(a[l]-=t[l],a[l]<=0&&delete a[l]);return a},na=function(e,t,a){let n={},l=0,o=["tarotUncap","evokerUncap","weaponUncap","domainUncap"];for(let r=0;r<10;r++)if(e[r].target){let t=e[r].no,a=[0,0,0,0],l=ta[t].tarotCard;for(const e in l)isNaN(n[e])&&(n[e]=0),n[e]+=l[e];for(let e=0;e<4;e++)for(let l=a[e];l<ta[t][o[e]].length;l++){let a=ta[t][o[e]][l];for(const e in a)isNaN(n[e])&&(n[e]=0),n[e]+=a[e]}}for(const r in n)l+=n[r]*a[r];let i=aa(e,t),s=0;for(const r in t)i[r]&&(i[r]-=t[r],i[r]<=0&&delete i[r]);for(const r in i)s+=i[r]*a[r];return(100-s/l*100).toFixed(2)},la=function(e){let t=0;return e.forEach((e=>{e.target&&(t=1)})),t},oa=function(){const e=aa(we,{}),t={};for(const a in e)t[a]=e[a]/e[25074];return t};function ia(e){e.sort((function(e,t){return Object.keys(e)[0]-Object.keys(t)[0]}));const t=["cb","tuyobaha","akx","gurande"],a=[{},{},{},{}];for(let n=0;n<t.length;n++)a[n].count=0,a[n].blueChestCount=0,a[n].redChestFFJ=0,a[n].blueChestFFJ=0,a[n].normalChestFFJ=0,a[n].totalFFJ=0,a[n].whiteRing=0,a[n].blackRing=0,a[n].redRing=0,a[n].lastCount=0,a[n].lastBlueChestCount=0;for(let n=0;n<e.length;n++){const l=e[n],o=Object.keys(l)[0],i=l[o],s=t.indexOf(i.raidName);a[s].count++,i.blueChests&&a[s].blueChestCount++,4==i.goldBrick&&a[s].redChestFFJ++,11==i.goldBrick&&a[s].blueChestFFJ++,3==i.goldBrick&&a[s].normalChestFFJ++,a[s].totalFFJ=a[s].redChestFFJ+a[s].blueChestFFJ+a[s].normalChestFFJ,"73_1"==i.blueChests&&a[s].whiteRing++,"73_2"==i.blueChests&&a[s].blackRing++,"73_3"==i.blueChests&&a[s].redRing++,a[s].lastCount=i.goldBrick?0:a[s].lastCount+1,a[s].lastBlueChestCount="17_20004"==i.blueChests?0:i.blueChests?a[s].lastBlueChestCount+1:a[s].lastBlueChestCount}return a}var sa={name:"EvokerPage",components:{EvokerInfo:Ot,MaterialInfo:Kt,MaterialResult:ea},setup(){const e=JSON.parse(localStorage.getItem("evokerInfo"))||[{no:7,name:"教皇",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:1,name:"芙劳",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:0,name:"女帝",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:8,name:"女教皇",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:4,name:"愚者",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:5,name:"魔术师",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:6,name:"皇帝",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:3,name:"节制",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:2,name:"战车",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4},{no:9,name:"尼亚",target:!0,tarotLevel:7,getCard:!0,evokerLevel:4}],t=JSON.parse(localStorage.getItem("materialInfo"))||{},a=(0,_e.qj)({evokerInfo:e,materialInfo:t});return a.result=(0,l.Fl)((()=>aa(a.evokerInfo,a.materialInfo))),a.flag=(0,l.Fl)((()=>la(a.evokerInfo))),a.percent=(0,l.Fl)((()=>na(a.evokerInfo,a.materialInfo,oa()))),(0,l.ic)((()=>{localStorage.setItem("materialInfo",JSON.stringify(a.materialInfo)),localStorage.setItem("evokerInfo",JSON.stringify(a.evokerInfo))})),{...(0,_e.BK)(a)}}};const ra=(0,f.Z)(sa,[["render",tt],["__scopeId","data-v-129d77f6"]]);var ca=ra;const ua={class:"hihiirrosuki"},da={class:"title"},pa=["src"],va={class:"itemlist"},ma={class:"item"},fa={key:0,class:"item"},ga={key:1,class:"item"},ka={key:2,class:"item"},_a={key:3,class:"item"},wa={key:0,class:"itemlist"},Ca={class:"item"},ba={class:"item"},ya={class:"item"},ha={key:1,class:"itemlist"},Ua={class:"item"},Ia={class:"item"},Fa={class:"item"},Da={class:"itemlist"},La={key:0,class:"item longitem"},Ra={key:1,class:"item longitem"},Na={class:"raid result"};function Oa(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)("div",ua,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.showData,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"raid",key:t},[(0,l._)("div",da,[(0,l._)("img",{src:`./img/raid/${n.RAID_NAME[t]}.jpg`},null,8,pa)]),(0,l._)("div",va,[(0,l._)("div",ma,"总次数："+(0,I.zw)(e.count),1),0!=t?((0,l.wg)(),(0,l.iD)("div",fa," 蓝箱次数："+(0,I.zw)(e.blueChestCount),1)):(0,l.kq)("",!0),0==t?((0,l.wg)(),(0,l.iD)("div",ga,"自发金："+(0,I.zw)(e.redChestFFJ),1)):(0,l.kq)("",!0),0!=t?((0,l.wg)(),(0,l.iD)("div",ka," 蓝箱金："+(0,I.zw)(e.blueChestFFJ),1)):(0,l.kq)("",!0),0==t?((0,l.wg)(),(0,l.iD)("div",_a," 金箱金："+(0,I.zw)(e.normalChestFFJ),1)):(0,l.kq)("",!0)]),0!=t?((0,l.wg)(),(0,l.iD)("div",wa,[(0,l._)("div",Ca," 总金率："+(0,I.zw)((100*(e.blueChestFFJ/e.count||0)).toFixed(2))+"% ",1),(0,l._)("div",ba," 蓝箱率："+(0,I.zw)((100*(e.blueChestCount/e.count||0)).toFixed(2))+"% ",1),(0,l._)("div",ya," 蓝箱金率："+(0,I.zw)((100*(e.blueChestFFJ/e.blueChestCount||0)).toFixed(2))+"% ",1)])):(0,l.kq)("",!0),0!=t?((0,l.wg)(),(0,l.iD)("div",ha,[(0,l._)("div",Ua,"白戒指："+(0,I.zw)(e.whiteRing),1),(0,l._)("div",Ia,"黑戒指："+(0,I.zw)(e.blackRing),1),(0,l._)("div",Fa,"红戒指："+(0,I.zw)(e.redChestFFJ),1)])):(0,l.kq)("",!0),(0,l._)("div",Da,[0!=t?((0,l.wg)(),(0,l.iD)("div",La," 距离上次出金已经过去了"+(0,I.zw)(e.lastCount)+"把"+(0,I.zw)(e.lastBlueChestCount)+"个蓝箱 ",1)):(0,l.kq)("",!0),0==t?((0,l.wg)(),(0,l.iD)("div",Ra," 距离上次出金已经过去了"+(0,I.zw)(e.lastCount)+"把 ",1)):(0,l.kq)("",!0)])])))),128)),(0,l._)("div",Na,"总掉落FFJ："+(0,I.zw)(n.totalFFJ),1)])}var za=a(7165),Va=a.n(za),xa={name:"HihiiroSuki",setup(){Va().config({name:"gbfApp",storeName:"GoldBrick"});const e=(0,_e.qj)([]);Va().iterate((function(t,a){e.push({[a]:t})})).then((function(){console.log("成功读取indexedDB数据")})).catch((function(e){console.log(e)}));const t=(0,l.Fl)((()=>ia(e))),a=(0,l.Fl)((()=>t.value.reduce((function(e,t){return e+t.totalFFJ}),0))),n=["cb","tuyobaha","akx","gurande"];return{showData:t,RAID_NAME:n,totalFFJ:a}}};const Ja=(0,f.Z)(xa,[["render",Oa],["__scopeId","data-v-b1a1c844"]]);var ja=Ja;const Ba=[{path:"/",name:"HomePage",component:Pe},{path:"/evokerpage",name:"EvokerPage",component:ca},{path:"/hihiirosuki",name:"HihiiroSuki",component:ja},{path:"/otherpage",name:"OtherPage",component:Ye}];var Ta=(0,b.p7)({history:(0,b.r5)(),routes:Ba});const Ha=(0,n.ri)(C);Ha.use(Ta),Ha.mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],o=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,l,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,i=n[0],s=n[1],r=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(r)var u=r(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkgbf_app"]=self["webpackChunkgbf_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4446)}));n=a.O(n)})();
//# sourceMappingURL=app.9ee99189.js.map