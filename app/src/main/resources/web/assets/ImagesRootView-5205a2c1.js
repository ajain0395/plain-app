import{_ as v}from"./TagFilter.vuevuetypescriptsetuptruelang-a5457e61.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-64fad65a.js";import{d as y,n as C,p as w,ax as B,v as M,o as b,c as z,x as s,y as o,j as e,e as a,g as m,w as I,z as $,B as x}from"./index-df35a132.js";import{g as d,M as A}from"./splitpanes.es-c959884b.js";import"./index-4e369b28.js";import"./EditValueModal-46b4c4bb.js";import"./vee-validate.esm-aa1410cb.js";const E={class:"page-container"},N={class:"sidebar"},S={class:"nav-title"},G={class:"nav"},R=["onClick"],V={class:"main"},j={name:"ImagesRoot",inheritAttrs:!1,customOptions:{}},J=y({...j,setup(q){var r,_;const n=C(),u=w(),i=B(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){x(u,"/images")}return(t,D)=>{const f=k,g=v,h=M("router-view");return b(),z("div",E,[s(e(A),null,{default:o(()=>[s(e(d),{size:"20","min-size":"10"},{default:o(()=>[a("div",N,[a("h2",S,m(t.$t("page_title.images")),1),a("ul",G,[a("li",{onClick:I(p,["prevent"]),class:$({active:e(n).path==="/images"&&!e(c)&&!e(l)})},m(t.$t("all")),11,R),s(f,{"bucket-type":"IMAGE",selected:e(l)},null,8,["selected"])]),s(g,{"tag-type":"IMAGE",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:o(()=>[a("div",V,[s(h)])]),_:1})]),_:1})])}}});export{J as default};
