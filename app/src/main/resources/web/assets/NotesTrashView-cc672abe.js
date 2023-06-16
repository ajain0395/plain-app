import{b as tt,u as et,_ as ot,a as st}from"./list-8da24cd9.js";import{_ as nt}from"./FieldId-1f1b2728.js";import{_ as at}from"./Multiselect-663da569.js";import{_ as lt}from"./Breadcrumb-f423bf18.js";import{d as ct,p as ut,r as p,u as rt,A as dt,D as it,n as pt,B as _t,E as mt,H as ht,I as ft,J as vt,V as bt,o as l,c as u,b as t,e as b,g as a,F as k,w as _,f as n,k as V,v as kt,K as w,N as U,O as gt,y as L,R as yt,aB as $t,z as K,S as z,a2 as Vt,a3 as wt,C as Ct,t as x,az as St,aC as Nt,L as It,M as Tt,x as Dt,Q as E,m as At,_ as Bt}from"./index-474238de.js";import{b as Qt,a as qt}from"./search-c45b9009.js";import{n as Mt}from"./list-6498ebd9.js";import{u as Ut}from"./tags-eb2f0cdf.js";import"./VModal.vuevuetypescriptsetuptruelang-f74ab29e.js";import"./baseIndexOf-70b929c6.js";import"./vee-validate.esm-8e10bc2f.js";const Lt=m=>(Vt("data-v-b4771bad"),m=m(),wt(),m),Kt={class:"v-toolbar"},zt={class:"right-actions"},xt=["onClick"],Et={class:"row mb-3"},Ft={class:"col-md-3 col-form-label"},Gt={class:"col-md-9"},Ot=["onKeyup"],Rt={class:"row mb-3"},Ht={class:"col-md-3 col-form-label"},Jt={class:"col-md-9"},Pt={class:"actions"},jt=["onClick"],Wt={class:"table"},Xt=Lt(()=>t("th",null,"ID",-1)),Yt=["onClick"],Zt=["onUpdate:modelValue"],te=["onClick"],ee={class:"badge"},oe={class:"nowrap"},se={class:"nowrap"},ne={key:0},ae={colspan:"6"},le={class:"no-data-placeholder"},ce={name:"NotesTrash",inheritAttrs:!1,customOptions:{}},ue=ct({...ce,setup(m){var q,M;const C=ut(),c=p([]),{t:S}=rt(),r=dt({text:"",tags:[]}),F=it(()=>c.value.some(e=>e.checked)),N="NOTE",I=pt().query,h=p(parseInt(((q=I.page)==null?void 0:q.toString())??"1")),f=50,v=p(0),d=p(_t(((M=I.q)==null?void 0:M.toString())??"")),T=p(""),{tags:G}=Ut(N,d,r,async e=>{e.push({name:"trash",op:"",value:"true"}),T.value=Qt(e),await Ct(),R()}),{deleteItems:D}=tt($t,()=>{y()},c),{selectAll:g,toggleSelect:A}=et(c),{loading:O,load:R,refetch:y}=mt({handle:(e,s)=>{s?x(S(s),"error"):e&&(c.value=e.notes.map($=>({...$,checked:!1})),v.value=e.noteCount)},document:St,variables:()=>({offset:(h.value-1)*f,limit:f,query:T.value}),appApi:!0});ht(h,e=>{K(C,`/notes/trash?page=${e}&q=${z(d.value)}`)});function B(){d.value=qt(r),Q()}function Q(){K(C,`/notes/trash?q=${z(d.value)}`)}ft(()=>{vt.on("refetch_by_tag_type",e=>{e===N&&y()})});const{mutate:H,onDone:J}=bt({document:Nt,appApi:!0});function P(){const e=c.value.filter(s=>s.checked);if(e.length===0){x(S("select_first"),"error");return}H({ids:e.map(s=>s.id)})}function j(e){At.push(`/notes/${e.id}`)}return J(()=>{y()}),(e,s)=>{const $=lt,W=at,X=ot,Y=nt,Z=st;return l(),u(k,null,[t("div",Kt,[b($,{current:()=>`${e.$t("page_title.trash")} (${v.value})`},null,8,["current"]),t("div",zt,[a(F)?(l(),u(k,{key:0},[t("button",{class:"btn btn-restore",type:"button",onClick:_(P,["prevent"])},n(e.$t("restore")),9,xt),t("button",{class:"btn btn-delete",type:"button",onClick:s[0]||(s[0]=_((...o)=>a(D)&&a(D)(...o),["prevent"]))},n(e.$t("delete")),1)],64)):V("",!0),b(X,{modelValue:d.value,"onUpdate:modelValue":s[3]||(s[3]=o=>d.value=o),search:Q},{filters:kt(()=>[t("div",Et,[t("label",Ft,n(e.$t("keywords")),1),t("div",Gt,[w(t("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>r.text=o),class:"form-control",onKeyup:Tt(B,["enter"])},null,40,Ot),[[It,r.text]])])]),t("div",Rt,[t("label",Ht,n(e.$t("tags")),1),t("div",Jt,[b(W,{modelValue:r.tags,"onUpdate:modelValue":s[2]||(s[2]=o=>r.tags=o),label:"name","track-by":"id",options:a(G)},null,8,["modelValue","options"])])]),t("div",Pt,[t("button",{type:"button",class:"btn",onClick:_(B,["stop"])},n(e.$t("search")),9,jt)])]),_:1},8,["modelValue"])])]),t("table",Wt,[t("thead",null,[t("tr",null,[t("th",null,[w(t("input",{class:"form-check-input",type:"checkbox",onChange:s[4]||(s[4]=(...o)=>a(A)&&a(A)(...o)),"onUpdate:modelValue":s[5]||(s[5]=o=>gt(g)?g.value=o:null)},null,544),[[U,a(g)]])]),Xt,t("th",null,n(e.$t("title")),1),t("th",null,n(e.$t("tags")),1),t("th",null,n(e.$t("updated_at")),1),t("th",null,n(e.$t("created_at")),1)])]),t("tbody",null,[(l(!0),u(k,null,L(c.value,o=>(l(),u("tr",{key:o.id,class:Dt({checked:o.checked}),onClick:_(i=>o.checked=!o.checked,["stop"])},[t("td",null,[w(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":i=>o.checked=i},null,8,Zt),[[U,o.checked]])]),t("td",null,[b(Y,{id:o.id,raw:o},null,8,["id","raw"])]),t("td",null,[t("a",{href:"#",onClick:_(i=>j(o),["stop"])},n(o.title||e.$t("no_content")),9,te)]),t("td",null,[(l(!0),u(k,null,L(o.tags,i=>(l(),u("span",ee,n(i.name),1))),256))]),t("td",oe,n(a(E)(o.updatedAt)),1),t("td",se,n(a(E)(o.createdAt)),1)],10,Yt))),128))]),c.value.length?V("",!0):(l(),u("tfoot",ne,[t("tr",null,[t("td",ae,[t("div",le,n(e.$t(a(Mt)(a(O)))),1)])])]))]),v.value>f?(l(),yt(Z,{key:0,modelValue:h.value,"onUpdate:modelValue":s[6]||(s[6]=o=>h.value=o),total:v.value,limit:f},null,8,["modelValue","total"])):V("",!0)],64)}}});const ye=Bt(ue,[["__scopeId","data-v-b4771bad"]]);export{ye as default};
