import{u as oe,_ as ae,a as ne}from"./list-3f4b71c4.js";import{d as le,p as ce,s as de,a as ie,r,u as ue,C as re,n as _e,D as pe,E as me,G as he,H as ge,t as fe,I as ve,J as ye,K as ke,L as F,M as $e,N as be,o as l,c,e,x as _,j as a,O as k,w as $,l as w,y as Te,P as Se,g as n,F as V,A as H,z as Ce,Q as we,R as Ve,f as De,S as Me,T as qe,B as b,U as T,V as Be,W as Le,X as Ae,Y as Ie,Z as Re,$ as Qe,a0 as Ue}from"./index-df35a132.js";import{_ as Ne}from"./Breadcrumb-120bdd32.js";import{n as ze}from"./list-6498ebd9.js";import{u as Fe,a as He}from"./tags-ecacebdb.js";import"./vee-validate.esm-aa1410cb.js";const Ee={class:"v-toolbar"},xe={class:"filters"},Ge=["label"],Ke={class:"form-label"},Pe={type:"filter"},je=["label","selected","onClick"],Je={class:"buttons"},Oe=["onClick"],We={class:"table-responsive"},Xe={class:"table"},Ye=["checked"],Ze=e("th",null,"ID",-1),et=e("th",null,null,-1),tt=["onClick"],st=["checked"],ot=["innerHTML"],at={class:"nowrap"},nt={class:"action-btns"},lt=["onClick"],ct={class:"nowrap"},dt={class:"nowrap"},it={key:0},ut={colspan:"8"},rt={class:"no-data-placeholder"},h="SMS",S=50,yt=le({__name:"MessagesView",setup(_t){var Q,U;const g=ce(),{app:E}=de(ie()),p=r([]),D=r(),{t:x}=ue(),d=re({text:"",tags:[]}),M=_e(),q=M.query,f=r(parseInt(((Q=q.page)==null?void 0:Q.toString())??"1")),v=r(0),i=r(pe(((U=q.q)==null?void 0:U.toString())??"")),B=r(""),{tags:y}=Fe(h,i,d,async t=>{u&&t.push({name:"type",op:"",value:O[u].toString()}),B.value=me(t),await he(),j()}),{addToTags:L}=He(h,p,y),{selectAll:G,toggleSelect:A,checked:K}=oe(p),{loading:P,load:j,refetch:J}=ge({handle:(t,o)=>{o?fe(x(o),"error"):t&&(p.value=t.messages.map(m=>({...m,checked:!1})),v.value=t.messageCount)},document:ve,variables:()=>({offset:(f.value-1)*S,limit:S,query:B.value}),appApi:!0}),u=M.params.type,O={inbox:1,sent:2,drafts:3,outbox:4};ye(f,t=>{u?b(g,`/messages/${u}?page=${t}&q=${T(i.value)}`):b(g,`/messages?page=${t}&q=${T(i.value)}`)});function W(t){d.tags.includes(t)?Be(d.tags,o=>o.id===t.id):d.tags.push(t)}function X(){i.value=Le(d),I(),D.value.dismiss()}function Y(t){Ae(Ie,{tagType:h,tags:y.value,item:{key:t.id,title:"",size:0},selected:y.value.filter(o=>t.tags.some(m=>m.id===o.id))})}function I(){u?b(g,`/messages/${u}?q=${T(i.value)}`):b(g,`/messages?q=${T(i.value)}`)}const R=t=>{t===h&&J()};return ke(()=>{F.on("refetch_by_tag_type",R)}),$e(()=>{F.off("refetch_by_tag_type",R)}),(t,o)=>{const m=Ne,N=Re,Z=ae,ee=Qe,te=Ue,se=ne,C=be("tooltip");return l(),c(V,null,[e("div",Ee,[_(m,{current:()=>`${t.$t("page_title.messages")} (${v.value})`},null,8,["current"]),a(K)?k((l(),c("md-icon-button",{key:0,onClick:o[0]||(o[0]=$((...s)=>a(L)&&a(L)(...s),["stop"]))},[_(N)])),[[C,t.$t("add_to_tags")]]):w("",!0),_(Z,{ref_key:"searchInputRef",ref:D,modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=s=>i.value=s),search:I},{filters:Te(()=>[e("div",xe,[k(e("md-outlined-text-field",{label:t.$t("keywords"),"onUpdate:modelValue":o[1]||(o[1]=s=>d.text=s),"keyup.enter":"applyAndDoSearch"},null,8,Ge),[[Se,d.text]]),e("label",Ke,n(t.$t("tags")),1),e("md-chip-set",Pe,[(l(!0),c(V,null,H(a(y),s=>(l(),c("md-filter-chip",{key:s.id,label:s.name,selected:d.tags.includes(s),onClick:z=>W(s)},null,8,je))),128))]),e("div",Je,[e("md-filled-button",{onClick:$(X,["stop"])},n(t.$t("search")),9,Oe)])])]),_:1},8,["modelValue"])]),e("div",We,[e("table",Xe,[e("thead",null,[e("tr",null,[e("th",null,[e("md-checkbox",{"touch-target":"wrapper",onChange:o[3]||(o[3]=(...s)=>a(A)&&a(A)(...s)),checked:a(G)},null,40,Ye)]),Ze,e("th",null,n(t.$t("content")),1),et,e("th",null,n(t.$t("sms_address")),1),e("th",null,n(t.$t("type")),1),e("th",null,n(t.$t("tags")),1),e("th",null,n(t.$t("time")),1)])]),e("tbody",null,[(l(!0),c(V,null,H(p.value,s=>(l(),c("tr",{key:s.id,class:Ce({selected:s.checked}),onClick:$(z=>s.checked=!s.checked,["stop"])},[e("td",null,[e("md-checkbox",{"touch-target":"wrapper",checked:s.checked},null,8,st)]),e("td",null,[_(ee,{id:s.id,raw:s},null,8,["id","raw"])]),e("td",{innerHTML:a(we)(s.body)},null,8,ot),e("td",at,[e("div",nt,[k((l(),c("md-icon-button",{onClick:$(z=>Y(s),["stop"])},[_(N)],8,lt)),[[C,t.$t("add_to_tags")]])])]),e("td",null,n(s.address),1),e("td",ct,n(t.$t(`message_type.${s.type}`)),1),e("td",null,[_(te,{tags:s.tags,tagType:h},null,8,["tags"])]),e("td",dt,[k((l(),c("span",null,[De(n(a(Me)(s.date)),1)])),[[C,a(Ve)(s.date)]])])],10,tt))),128))]),p.value.length?w("",!0):(l(),c("tfoot",it,[e("tr",null,[e("td",ut,[e("div",rt,n(t.$t(a(ze)(a(P),a(E).permissions,"READ_SMS"))),1)])])]))])]),v.value>S?(l(),qe(se,{key:0,modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=s=>f.value=s),total:v.value,limit:S},null,8,["modelValue","total"])):w("",!0)],64)}}});export{yt as default};
