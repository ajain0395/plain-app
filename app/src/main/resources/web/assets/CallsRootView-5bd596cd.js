import{_ as $}from"./TagFilter.vuevuetypescriptsetuptruelang-a5457e61.js";import{d as w,n as B,p as z,q as N,v as L,o as p,c as m,x as a,y as l,j as e,e as s,g as i,w as d,z as u,F as M,A as S,B as f}from"./index-df35a132.js";import{g as v,M as T}from"./splitpanes.es-c959884b.js";import"./index-4e369b28.js";import"./EditValueModal-46b4c4bb.js";import"./vee-validate.esm-aa1410cb.js";const V={class:"page-container"},q={class:"sidebar"},A={class:"nav-title"},F={class:"nav"},R=["onClick"],b=["onClick"],j={class:"main"},O=w({__name:"CallsRootView",setup(x){const n=B(),c=z(),r=n.params.type,_=r?"":N(n.query);function g(t){f(c,`/calls/${t}`)}const h=["incoming","outgoing","missed"];function y(){f(c,"/calls")}return(t,D)=>{const C=$,k=L("router-view");return p(),m("div",V,[a(e(T),null,{default:l(()=>[a(e(v),{size:"20","min-size":"10"},{default:l(()=>[s("div",q,[s("h2",A,i(t.$t("page_title.calls")),1),s("ul",F,[s("li",{onClick:d(y,["prevent"]),class:u({active:e(n).path==="/calls"&&!e(_)})},i(t.$t("all")),11,R),(p(),m(M,null,S(h,o=>s("li",{key:o,onClick:d(E=>g(o),["prevent"]),class:u({active:o===e(r)})},i(t.$t(`call_type.${o}`)),11,b)),64))]),a(C,{"tag-type":"CALL",selected:e(_)},null,8,["selected"])])]),_:1}),a(e(v),null,{default:l(()=>[s("div",j,[a(k)])]),_:1})]),_:1})])}}});export{O as default};
