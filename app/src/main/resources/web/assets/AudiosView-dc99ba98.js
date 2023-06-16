import{u as gt,_ as kt,a as $t}from"./list-8da24cd9.js";import{o as u,c as _,b as t,V as Y,ao as Ct,u as tt,J as g,t as D,r as v,ap as Tt,d as wt,p as qt,s as Vt,a as It,A as At,D as A,n as St,B as Mt,C as Dt,ah as Lt,E as Bt,aq as Qt,H as Rt,I as Ft,e as i,g as n,F as w,w as d,k as S,f as a,v as Nt,K as M,L as Pt,M as Ut,N as O,O as Zt,y as X,x as zt,j as Et,ar as Gt,R as j,X as Kt,l as xt,z as J,S as W,aa as Ht,Y as Ot,as as Xt,a2 as jt,a3 as Jt,_ as Wt}from"./index-474238de.js";import{_ as Yt}from"./FieldId-1f1b2728.js";import{_ as to}from"./Multiselect-663da569.js";import{_ as oo,a as eo}from"./label-outline-rounded-01b9695a.js";import{_ as so}from"./download-rounded-9a7f7213.js";import{_ as no}from"./delete-outline-rounded-aa1a928b.js";import{_ as ao}from"./Breadcrumb-f423bf18.js";import{b as lo,a as io}from"./search-c45b9009.js";import{n as uo}from"./list-6498ebd9.js";import{u as co,a as ro,b as po}from"./tags-eb2f0cdf.js";import{u as _o,_ as mo}from"./ConfirmModal.vuevuetypescriptsetuptruelang-00f79a2c.js";import{a as ho,b as bo}from"./files-2e4c4e6b.js";import{_ as fo}from"./DeleteConfirm.vuevuetypescriptsetuptruelang-b218d91b.js";import"./VModal.vuevuetypescriptsetuptruelang-f74ab29e.js";import"./baseIndexOf-70b929c6.js";import"./vee-validate.esm-8e10bc2f.js";import"./toInteger-7eb45424.js";const yo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},vo=t("path",{fill:"currentColor",d:"M9.5 9.325v5.35q0 .6.525.875t1.025-.05l4.15-2.65q.475-.275.475-.85t-.475-.85L11.05 8.5q-.5-.325-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z"},null,-1),go=[vo];function ko(c,m){return u(),_("svg",yo,go)}const $o={name:"material-symbols-play-circle-outline-rounded",render:ko},Co={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},To=t("path",{fill:"currentColor",d:"M3 16v-2h7v2H3Zm0-4v-2h11v2H3Zm0-4V6h11v2H3Zm13 12v-4h-4v-2h4v-4h2v4h4v2h-4v4h-2Z"},null,-1),wo=[To];function qo(c,m){return u(),_("svg",Co,wo)}const Vo={name:"material-symbols-playlist-add",render:qo},Io=c=>{const{mutate:m,loading:l,onDone:f}=Y({document:Ct,appApi:!0}),{t:p}=tt();return f(()=>{g.emit("refetch_app"),D(p("added_to_playlist"))}),{loading:l,addItemsToPlaylist:()=>{const r=c.value.filter(k=>k.checked);if(r.length===0){D(p("select_first"),"error");return}m({paths:r.map(k=>k.path)})},addToPlaylist:r=>{m({paths:[r.path]})}}},Ao=()=>{const c=v(""),{mutate:m,loading:l,onDone:f}=Y({document:Tt,appApi:!0});return f(()=>{g.emit("refetch_app"),g.emit("play_audio")}),{loading:l,playing:c,play:p=>{c.value=p.path,m({path:p.path})}}},So=c=>(jt("data-v-f69d94e8"),c=c(),Jt(),c),Mo={class:"v-toolbar"},Do={class:"right-actions"},Lo=["title"],Bo=["title"],Qo=["title"],Ro=["title"],Fo=["title"],No=["onClick"],Po={class:"row mb-3"},Uo={class:"col-md-3 col-form-label"},Zo={class:"col-md-9"},zo=["onKeyup"],Eo={class:"row mb-3"},Go={class:"col-md-3 col-form-label"},Ko={class:"col-md-9"},xo={class:"actions"},Ho=["onClick"],Oo={class:"table"},Xo=So(()=>t("th",null,"ID",-1)),jo=["onClick"],Jo=["onUpdate:modelValue"],Wo={class:"audio-btns"},Yo={key:0,class:"spinner spinner-sm"},te={class:"badge"},oe={key:0},ee={colspan:"7"},se={class:"no-data-placeholder"},ne=wt({__name:"AudiosView",setup(c){var E,G;const m=qt(),l=v([]),{t:f}=tt(),{app:p}=Vt(It()),r=At({text:"",tags:[]}),k=A(()=>p.value.audios??[]);A(()=>{const e=p.value.audioCurrent;return k.value.find(s=>s.path==e)});const ot=A(()=>l.value.some(e=>e.checked)),b="AUDIO",L=St().query,$=v(parseInt(((E=L.page)==null?void 0:E.toString())??"1")),C=50,T=v(0),y=v(Mt(((G=L.q)==null?void 0:G.toString())??"")),B=v(""),{tags:q}=co(b,y,r,async e=>{B.value=lo(e),await Dt(),ut()}),{addItemsToPlaylist:Q,addToPlaylist:et}=Io(l),{addToTags:R}=ro(b,l,q),{removeFromTags:F}=po(b,l,q),{deleteItems:N}=_o(b,l),{downloadItems:P}=ho(l,"audios.zip"),{downloadFile:st}=bo(p),nt=Lt(),{play:at,playing:lt,loading:it}=Ao(),{selectAll:V,toggleSelect:U}=gt(l),{loading:dt,load:ut,refetch:ct}=Bt({handle:(e,s)=>{s?D(f(s),"error"):e&&(l.value=e.audios.map(I=>({...I,checked:!1})),T.value=e.audioCount)},document:Qt,variables:()=>({offset:($.value-1)*C,limit:C,query:B.value}),appApi:!0});Rt($,e=>{J(m,`/audios?page=${e}&q=${W(y.value)}`)});function rt(){nt.push("/files"),Ht(mo,{message:f("upload_audios")})}function Z(){y.value=io(r),z()}function z(){J(m,`/audios?q=${W(y.value)}`)}Ft(()=>{g.on("refetch_by_tag_type",e=>{e===b&&ct()})});function pt(e){Ot(fo,{id:e.id,name:e.title,gql:Xt,variables:()=>({tagType:b,id:e.id}),appApi:!0,typeName:"Audio",done:()=>{g.emit("refetch_app"),g.emit("refetch_by_tag_type",b)}})}return(e,s)=>{const I=ao,K=no,x=so,H=Vo,_t=oo,mt=eo,ht=to,bt=kt,ft=Yt,yt=$o,vt=$t;return u(),_(w,null,[t("div",Mo,[i(I,{current:()=>`${e.$t("page_title.audios")} (${T.value})`},null,8,["current"]),t("div",Do,[n(ot)?(u(),_(w,{key:0},[t("button",{type:"button",class:"btn btn-action",onClick:s[0]||(s[0]=d((...o)=>n(N)&&n(N)(...o),["stop"])),title:e.$t("delete")},[i(K,{class:"bi"})],8,Lo),t("button",{type:"button",class:"btn btn-action",onClick:s[1]||(s[1]=d((...o)=>n(P)&&n(P)(...o),["stop"])),title:e.$t("download")},[i(x,{class:"bi"})],8,Bo),t("button",{type:"button",class:"btn btn-action",onClick:s[2]||(s[2]=d((...o)=>n(Q)&&n(Q)(...o),["stop"])),title:e.$t("add_to_playlist")},[i(H,{class:"bi"})],8,Qo),t("button",{type:"button",class:"btn btn-action",onClick:s[3]||(s[3]=d((...o)=>n(R)&&n(R)(...o),["stop"])),title:e.$t("add_to_tags")},[i(_t,{class:"bi"})],8,Ro),t("button",{type:"button",class:"btn btn-action",onClick:s[4]||(s[4]=d((...o)=>n(F)&&n(F)(...o),["stop"])),title:e.$t("remove_from_tags")},[i(mt,{class:"bi"})],8,Fo)],64)):S("",!0),t("button",{type:"button",class:"btn btn-action",onClick:d(rt,["stop"])},a(e.$t("upload")),9,No),i(bt,{modelValue:y.value,"onUpdate:modelValue":s[7]||(s[7]=o=>y.value=o),search:z},{filters:Nt(()=>[t("div",Po,[t("label",Uo,a(e.$t("keywords")),1),t("div",Zo,[M(t("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=o=>r.text=o),class:"form-control",onKeyup:Ut(Z,["enter"])},null,40,zo),[[Pt,r.text]])])]),t("div",Eo,[t("label",Go,a(e.$t("tags")),1),t("div",Ko,[i(ht,{modelValue:r.tags,"onUpdate:modelValue":s[6]||(s[6]=o=>r.tags=o),label:"name","track-by":"id",options:n(q)},null,8,["modelValue","options"])])]),t("div",xo,[t("button",{type:"button",class:"btn",onClick:d(Z,["stop"])},a(e.$t("search")),9,Ho)])]),_:1},8,["modelValue"])])]),t("table",Oo,[t("thead",null,[t("tr",null,[t("th",null,[M(t("input",{class:"form-check-input",type:"checkbox",onChange:s[8]||(s[8]=(...o)=>n(U)&&n(U)(...o)),"onUpdate:modelValue":s[9]||(s[9]=o=>Zt(V)?V.value=o:null)},null,544),[[O,n(V)]])]),Xo,t("th",null,a(e.$t("name")),1),t("th",null,a(e.$t("artist")),1),t("th",null,a(e.$t("tags")),1),t("th",null,a(e.$t("duration")),1),t("th",null,a(e.$t("file_size")),1)])]),t("tbody",null,[(u(!0),_(w,null,X(l.value,o=>(u(),_("tr",{key:o.id,class:zt({checked:o.checked}),onClick:d(h=>o.checked=!o.checked,["stop"])},[t("td",null,[M(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":h=>o.checked=h},null,8,Jo),[[O,o.checked]])]),t("td",null,[i(ft,{id:o.id,raw:o},null,8,["id","raw"])]),t("td",null,[Et(a(o.title)+" ",1),t("span",Wo,[i(K,{class:"bi bi-btn",onClick:d(h=>pt(o),["stop"])},null,8,["onClick"]),i(x,{class:"bi bi-btn",onClick:d(h=>n(st)(o.path,n(Gt)(o.path).replace(" ","-")),["stop"])},null,8,["onClick"]),i(H,{class:"bi bi-btn",onClick:d(h=>n(et)(o),["stop"])},null,8,["onClick"]),n(it)&&o.path===n(lt)?(u(),_("i",Yo)):(u(),j(yt,{key:1,class:"bi bi-btn",onClick:d(h=>n(at)(o),["stop"])},null,8,["onClick"]))])]),t("td",null,a(o.artist),1),t("td",null,[(u(!0),_(w,null,X(o.tags,h=>(u(),_("span",te,a(h.name),1))),256))]),t("td",null,a(n(Kt)(o.duration)),1),t("td",null,a(n(xt)(o.size)),1)],10,jo))),128))]),l.value.length?S("",!0):(u(),_("tfoot",oe,[t("tr",null,[t("td",ee,[t("div",se,a(e.$t(n(uo)(n(dt),n(p).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))]),T.value>C?(u(),j(vt,{key:0,modelValue:$.value,"onUpdate:modelValue":s[10]||(s[10]=o=>$.value=o),total:T.value,limit:C},null,8,["modelValue","total"])):S("",!0)],64)}}});const Te=Wt(ne,[["__scopeId","data-v-f69d94e8"]]);export{Te as default};
