import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-92433806.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-70b78c56.js";import{d as w,p as y,a as C,az as z,v as B,e as $,x as s,y as o,h as e,o as b,f as a,t as d,w as A,z as D,n as I}from"./index-e23e99bf.js";import{g as u,M}from"./splitpanes.es-951888f8.js";import"./EditValueModal-b22371ac.js";import"./vee-validate.esm-36997df0.js";const N={class:"page-container"},S={class:"sidebar"},V={class:"nav-title"},x={class:"nav"},O=["onClick"],R={class:"main"},F=w({__name:"AudiosRootView",setup(U){var r,_;const n=y(),m=C(),i=z(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){I(m,"/audios")}return(t,q)=>{const f=k,h=g,v=B("router-view");return b(),$("div",N,[s(e(M),null,{default:o(()=>[s(e(u),{size:"20","min-size":"10"},{default:o(()=>[a("aside",S,[a("h2",V,d(t.$t("page_title.audios")),1),a("ul",x,[a("li",{onClick:A(p,["prevent"]),class:D({active:e(n).path==="/audios"&&!e(c)&&!e(l)})},d(t.$t("all")),11,O),s(f,{type:"AUDIO",selected:e(l)},null,8,["selected"])]),s(h,{type:"AUDIO",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(u),null,{default:o(()=>[a("main",R,[s(v)])]),_:1})]),_:1})])}}});export{F as default};