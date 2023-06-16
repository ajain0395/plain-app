import{_ as Y}from"./TagFilter.vuevuetypescriptsetuptruelang-7ae47be9.js";import{d as A,r as M,bJ as j,K as L,o as f,c as y,b as n,f as d,w as q,F as N,y as I,a6 as R,V as C,bX as J,a4 as U,C as X,a5 as Z,R as H,v as w,O as W,M as ee,g as t,L as te,u as se,p as B,n as O,i as ne,t as E,bY as ae,Y as D,bZ as oe,b_ as ie,b$ as le,c0 as re,j as ce,e as h,x as z,z as V,S as de,c1 as ue,q as pe}from"./index-474238de.js";import{k as T,b as me,p as _e,d as fe}from"./search-c45b9009.js";import{_ as ve}from"./EditValueModal.vuevuetypescriptsetuptruelang-0e2ba8d7.js";import{c as be}from"./index-63207f32.js";import{_ as he}from"./DeleteConfirm.vuevuetypescriptsetuptruelang-b218d91b.js";import{_ as ye}from"./VModal.vuevuetypescriptsetuptruelang-f74ab29e.js";import{u as ke,a as $e}from"./vee-validate.esm-8e10bc2f.js";import{g as G,M as xe}from"./splitpanes.es-03f0d209.js";import"./baseIndexOf-70b929c6.js";const ge={class:"dropdown"},Fe={class:"dropdown-menu"},we=["onClick"],Ce=A({__name:"Dropdown",props:{title:{type:String,required:!0},items:{type:Array,required:!0,default:()=>[]}},setup(r){const e=M(!1);return(v,i)=>{const l=j("click-away");return L((f(),y("div",ge,[n("button",{class:"btn dropdown-toggle",type:"button",onClick:i[0]||(i[0]=q(()=>e.value=!e.value,["prevent"]))},d(r.title),1),L(n("ul",Fe,[(f(!0),y(N,null,I(r.items,(u,p)=>(f(),y("li",{key:p},[n("a",{class:"dropdown-item",href:"#",onClick:q(()=>{e.value=!1,u.click()},["prevent"])},d(u.text),9,we)]))),128))],512),[[R,e.value]])])),[[l,()=>e.value=!1]])}}}),Me={class:"mb-4"},Le=["placeholder"],qe=["disabled"],Ae=A({__name:"FeedModal",props:{data:{type:Object}},setup(r){var k;const e=r,{handleSubmit:v}=ke(),i=M(),{mutate:l,loading:u,onDone:p}=C({document:J,appApi:!0}),{value:c,errorMessage:b}=$e("inputValue",U().required());c.value=((k=e.data)==null?void 0:k.name)??"",(async()=>{var a;await X(),(a=i.value)==null||a.focus()})();const m=v(()=>{var a;l({id:(a=e.data)==null?void 0:a.id,name:c.value})});return p(()=>{Z()}),(a,_)=>{const S=ye;return f(),H(S,{title:a.$t("update_subscription")},{body:w(()=>{var $;return[n("div",Me,d(($=r.data)==null?void 0:$.url),1),n("div",null,[L(n("input",{ref_key:"input",ref:i,type:"text",placeholder:a.$t("name"),class:"form-control","onUpdate:modelValue":_[0]||(_[0]=x=>W(c)?c.value=x:null),onKeyup:_[1]||(_[1]=ee((...x)=>t(m)&&t(m)(...x),["enter"]))},null,40,Le),[[te,t(c)]]),L(n("div",{class:"invalid-feedback"},d(t(b)?a.$t(t(b)):""),513),[[R,t(b)]])])]}),action:w(()=>[n("button",{type:"button",disabled:t(u),class:"btn",onClick:_[2]||(_[2]=(...$)=>t(m)&&t(m)(...$))},d(a.$t("save")),9,qe)]),_:1},8,["title"])}}}),Se={class:"nav-title mt-4"},De={class:"nav"},Ne=["onClick","onContextmenu"],Ve=A({__name:"FeedFilter",props:{selected:{type:String,required:!0}},setup(r){const{t:e}=se(),v=B(),i=M([]),l=M(),u=O(),p=[{text:e("add_subscription"),click:m},{text:e("import_opml_file"),click:$},{text:e("export_opml_file"),click:x}],{refetch:c}=ne({handle:(s,o)=>{o?E(e(o),"error"):s&&(i.value=s.feeds)},document:ae,appApi:!0});function b(s){const o=s.target.files;if(!o)return;const g=new FileReader;g.addEventListener("load",()=>{_({content:g.result})},!1),g.readAsText(o[0])}function m(){D(ve,{title:e("add_subscription"),placeholder:e("rss_url"),mutation:()=>C({document:oe,options:{update:()=>{c()}},appApi:!0}),getVariables:s=>({url:s})})}const{mutate:k,onDone:a}=C({document:ie,appApi:!0});a(s=>{le(s.data.exportFeeds,"application/xml","feeds.xml")});const{mutate:_,onDone:S}=C({document:re,appApi:!0});S(()=>{E(e("imported")),c()});function $(){l.value.value="",l.value.click()}function x(){k()}function K(s){const o=me([{name:"feed",op:"",value:T(s.name)}]);V(v,`/feeds?q=${de(o)}`)}function P(s,o){s.preventDefault(),be({x:s.x,y:s.y,items:[{label:e("edit"),onClick:()=>{D(Ae,{data:o})}},{label:e("delete"),onClick:()=>{D(he,{id:o.id,name:o.name,gql:ue,appApi:!0,typeName:"Feed",done:()=>{V(v,"/feeds")}})}}]})}return(s,o)=>{const g=Ce;return f(),y(N,null,[n("h2",Se,[ce(d(s.$t("subscriptions"))+" ",1),h(g,{class:"dropdown-sm",title:s.$t("add"),items:p},null,8,["title"])]),n("ul",De,[(f(!0),y(N,null,I(i.value,F=>(f(),y("li",{onClick:q(Q=>K(F),["prevent"]),onContextmenu:Q=>P(Q,F),class:z({active:t(u).params.feedId===F.id||r.selected&&t(T)(F.name)===r.selected})},d(F.name),43,Ne))),256))]),n("input",{ref_key:"fileInput",ref:l,style:{display:"none"},accept:".xml",type:"file",onChange:b},null,544)],64)}}}),Qe={class:"page-container container-fluid"},Ee={class:"sidebar"},Te={class:"nav-title"},Ge={class:"nav"},Ie=["onClick"],Re={class:"main"},Be={name:"FeedsRoot",inheritAttrs:!1,customOptions:{}},He=A({...Be,setup(r){const e=O(),v=B(),i=_e(e.query),l=fe(e.query);function u(){V(v,"/feeds")}return(p,c)=>{const b=Ve,m=Y,k=pe("router-view");return f(),y("div",Qe,[h(t(xe),null,{default:w(()=>[h(t(G),{size:"20"},{default:w(()=>[n("div",Ee,[n("h2",Te,d(p.$t("page_title.feeds")),1),n("ul",Ge,[n("li",{onClick:q(u,["prevent"]),class:z({active:t(e).path==="/feeds"&&!t(i)&&!t(l)})},d(p.$t("all")),11,Ie)]),h(b,{selected:t(l)},null,8,["selected"]),h(m,{"tag-type":"FEED_ENTRY",selected:t(i)},null,8,["selected"])])]),_:1}),h(t(G),null,{default:w(()=>[n("div",Re,[h(k)])]),_:1})]),_:1})])}}});export{He as default};
