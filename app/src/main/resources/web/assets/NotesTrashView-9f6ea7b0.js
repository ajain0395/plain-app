import{c as ue,u as _e,_ as pe,a as he,b as me}from"./list-9e76297f.js";import{o as n,e as a,f as e,d as ve,a as fe,r as m,u as ke,B as ge,D as be,p as $e,C as ye,E as qe,G as Ce,a1 as Te,K as we,x as r,h as s,F as b,L as v,w as d,j as C,y as Ve,t as c,A as Z,M as De,N as Ne,O as Se,aV as Ae,k as z,aS as Ie,n as E,Q as F,aW as Be,R as Me,z as Qe,U as j,V as Le,W as Re,aU as Ue,X as Ge,a7 as Ze,a8 as ze,a9 as Ee,$ as Fe}from"./index-eee88ba0.js";import{_ as je}from"./Breadcrumb-7edea612.js";import{n as He}from"./list-6498ebd9.js";import{u as Ke}from"./tags-1e132765.js";import"./vee-validate.esm-47465a3b.js";const Oe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},We=e("path",{fill:"currentColor",d:"M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM7 6v13h10V6H7Zm0 0v13V6Zm4 5.85V15q0 .425.288.713T12 16q.425 0 .713-.288T13 15v-3.15l.9.875q.3.275.713.263t.687-.288q.275-.275.275-.7t-.275-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.275.275-.275.7t.275.7q.275.275.688.288t.712-.263l.9-.875Z"},null,-1),xe=[We];function Pe(H,$){return n(),a("svg",Oe,xe)}const Xe={name:"material-symbols-restore-from-trash-outline-rounded",render:Pe},Je={class:"v-toolbar"},Ye=e("md-ripple",null,null,-1),et=["onClick"],tt=e("md-ripple",null,null,-1),ot={class:"filters"},st=["label"],lt={class:"form-label"},nt={type:"filter"},at=["label","selected","onClick"],ct={class:"buttons"},it=["onClick"],rt={class:"table-responsive"},dt={class:"table"},ut=["checked","indeterminate"],_t=e("th",null,"ID",-1),pt=e("th",null,null,-1),ht=["onClick"],mt=["checked"],vt=["onClick"],ft={class:"nowrap"},kt={class:"action-btns"},gt=["onClick"],bt=e("md-ripple",null,null,-1),$t=["onClick"],yt=e("md-ripple",null,null,-1),qt={class:"nowrap"},Ct={class:"nowrap"},Tt={key:0},wt={colspan:"6"},Vt={class:"no-data-placeholder"},f=50,Qt=ve({__name:"NotesTrashView",setup(H){var L,R;const $=fe(),u=m([]),T=m(),{t:w}=ke(),i=ge({text:"",tags:[]}),K=be.NOTE,V=$e().query,k=m(parseInt(((L=V.page)==null?void 0:L.toString())??"1")),_=m(ye(((R=V.q)==null?void 0:R.toString())??"")),y=m(""),{tags:O}=Ke(K,_,i,async t=>{t.push({name:"trash",op:"",value:"true"}),y.value=Ne(t),await Se(),ee()}),{deleteItems:W}=ue(Ae,()=>{B()},u),{allChecked:D,realAllChecked:N,selectRealAll:x,allCheckedAlertVisible:P,clearSelection:X,toggleAllChecked:S,toggleItemChecked:A,toggleRow:J,total:p,checked:I}=_e(u),{loading:Y,load:ee,refetch:B}=qe({handle:(t,l)=>{l?z(w(l),"error"):t&&(u.value=t.notes.map(q=>({...q,checked:!1})),p.value=t.noteCount)},document:Ie,variables:()=>({offset:(k.value-1)*f,limit:f,query:y.value}),appApi:!0});Ce(k,t=>{E($,`/notes/trash?page=${t}&q=${F(_.value)}`)});function te(t){i.tags.includes(t)?Le(i.tags,l=>l.id===t.id):i.tags.push(t)}function oe(){_.value=Re(i),M(),T.value.dismiss()}function M(){E($,`/notes/trash?q=${F(_.value)}`)}const{mutate:Q,onDone:se}=Te({document:Be,appApi:!0});function le(){const t=u.value.filter(l=>l.checked);if(t.length===0){z(w("select_first"),"error");return}Q({query:`ids:${t.map(l=>l.id).join(",")}`})}function ne(t){Ue.push(`/notes/${t.id}`)}se(()=>{B()});function ae(t){Ge(ze,{id:t.id,name:t.id,gql:Ze`
      mutation DeleteNote($query: String!) {
        deleteNotes(query: $query)
      }
    `,variables:()=>({query:`ids:${t.id}`}),done:()=>{p.value--},appApi:!0,typeName:"Note"})}return(t,l)=>{const q=je,U=Ee,G=Xe,ce=pe,ie=he,re=Fe,de=me,g=we("tooltip");return n(),a(b,null,[e("div",Je,[r(q,{current:()=>`${t.$t("page_title.trash")} (${s(p)})`},null,8,["current"]),s(I)?(n(),a(b,{key:0},[v((n(),a("button",{class:"icon-button",onClick:l[0]||(l[0]=d(o=>s(W)(s(N),y.value),["stop"]))},[Ye,r(U)])),[[g,t.$t("delete")]]),v((n(),a("button",{class:"icon-button",onClick:d(le,["stop"])},[tt,r(G)],8,et)),[[g,t.$t("restore")]])],64)):C("",!0),r(ce,{ref_key:"searchInputRef",ref:T,modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=o=>_.value=o),search:M},{filters:Ve(()=>[e("div",ot,[v(e("md-outlined-text-field",{label:t.$t("keywords"),"onUpdate:modelValue":l[1]||(l[1]=o=>i.text=o),"keyup.enter":"applyAndDoSearch"},null,8,st),[[Me,i.text]]),e("label",lt,c(t.$t("tags")),1),e("md-chip-set",nt,[(n(!0),a(b,null,Z(s(O),o=>(n(),a("md-filter-chip",{key:o.id,label:o.name,selected:i.tags.includes(o),onClick:h=>te(o)},null,8,at))),128))]),e("div",ct,[e("md-filled-button",{onClick:d(oe,["stop"])},c(t.$t("search")),9,it)])])]),_:1},8,["modelValue"])]),r(ie,{limit:f,total:s(p),"all-checked-alert-visible":s(P),"real-all-checked":s(N),"select-real-all":s(x),"clear-selection":s(X)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),e("div",rt,[e("table",dt,[e("thead",null,[e("tr",null,[e("th",null,[e("md-checkbox",{"touch-target":"wrapper",onChange:l[3]||(l[3]=(...o)=>s(S)&&s(S)(...o)),checked:s(D),indeterminate:!s(D)&&s(I)},null,40,ut)]),_t,e("th",null,c(t.$t("title")),1),pt,e("th",null,c(t.$t("updated_at")),1),e("th",null,c(t.$t("created_at")),1)])]),e("tbody",null,[(n(!0),a(b,null,Z(u.value,o=>(n(),a("tr",{key:o.id,class:Qe({selected:o.checked}),onClick:d(h=>s(J)(o),["stop"])},[e("td",null,[e("md-checkbox",{"touch-target":"wrapper",onChange:l[4]||(l[4]=(...h)=>s(A)&&s(A)(...h)),checked:o.checked},null,40,mt)]),e("td",null,[r(re,{id:o.id,raw:o},null,8,["id","raw"])]),e("td",null,[e("a",{href:"#",onClick:d(h=>ne(o),["stop","prevent"])},c(o.title||t.$t("no_content")),9,vt)]),e("td",ft,[e("div",kt,[v((n(),a("button",{class:"icon-button",onClick:d(h=>ae(o),["stop"])},[bt,r(U)],8,gt)),[[g,t.$t("delete")]]),v((n(),a("button",{class:"icon-button",onClick:d(h=>s(Q)({query:`ids:${o.id}`}),["stop"])},[yt,r(G)],8,$t)),[[g,t.$t("restore")]])])]),e("td",qt,c(s(j)(o.updatedAt)),1),e("td",Ct,c(s(j)(o.createdAt)),1)],10,ht))),128))]),u.value.length?C("",!0):(n(),a("tfoot",Tt,[e("tr",null,[e("td",wt,[e("div",Vt,c(t.$t(s(He)(s(Y)))),1)])])]))])]),s(p)>f?(n(),De(de,{key:0,modelValue:k.value,"onUpdate:modelValue":l[5]||(l[5]=o=>k.value=o),total:s(p),limit:f},null,8,["modelValue","total"])):C("",!0)],64)}}});export{Qt as default};