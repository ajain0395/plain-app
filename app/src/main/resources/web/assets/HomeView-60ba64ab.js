import{b as L,o as d,c,a as e,d as M,u as O,e as E,s as B,r as h,f as j,i as A,w as F,g as P,h as p,t as o,j as f,k as m,l,F as w,m as Q,v as Z,n as z,p as D,q as R,x as U,y as J,z as S,A as K,B as W,C as X,_ as Y}from"./index-8658c612.js";function x(i,_){for(var u,r=-1,g=i.length;++r<g;){var v=_(i[r]);v!==void 0&&(u=u===void 0?v:u+v)}return u}function V(i,_){return i&&i.length?x(i,L(_)):0}const ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=e("path",{fill:"currentColor",d:"M12 5q.425 0 .713-.288T13 4q0-.425-.288-.713T12 3q-.425 0-.713.288T11 4q0 .425.288.713T12 5ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.175q.275-.875 1.075-1.438T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5h-2v1q0 .825-.588 1.413T15 8H9q-.825 0-1.413-.588T7 6V5H5v14Z"},null,-1),se=[te];function oe(i,_){return d(),c("svg",ee,se)}const ne={name:"material-symbols-content-paste-rounded",render:oe},le=i=>(K("data-v-2b7c24f3"),i=i(),W(),i),ae={class:"page-container"},ie={class:"main"},re={class:"grid"},de={class:"g-col-lg-6 g-col-md-12"},ce={class:"card"},ue={class:"card-body"},ve={class:"card-title"},pe={key:0,class:"total-bytes"},fe={class:"stats-items"},me={class:"g-col-lg-6 g-col-md-12"},_e={class:"card"},he={class:"card-body"},ge={class:"card-title"},$e={class:"stats-items"},be={class:"g-col-lg-6 g-col-md-12"},ke={class:"card"},Ce={class:"card-body"},ye={class:"card-title"},Te={class:"stats-items"},qe={class:"g-col-lg-6 g-col-md-12"},we={class:"card"},Be={class:"card-body"},Se={class:"card-title"},Ve={class:"stats-items"},Ge={class:"g-col-lg-6 g-col-md-12"},He={class:"card"},Ne={class:"card-body"},Ie={class:"card-title"},Le={class:"form-row"},Me=["label","error","error-text"],Oe=["onClick"],Ee=le(()=>e("md-ripple",null,null,-1)),je=["onClick","disabled"],Ae=M({__name:"HomeView",setup(i){const{t:_}=O(),u=E(),{callNumber:r}=B(u),g=h(!1),{app:v}=B(j()),C=h(-1),y=h(-1),T=h(-1),$=h(-1),k=h(-1);function G(){navigator.clipboard.readText().then(t=>{r.value=t})}const{mutate:H,loading:N}=A({document:R,appApi:!0}),I=()=>{if(!r.value){g.value=!0;return}H({number:r.value})};F(r,()=>{g.value=!1}),P({handle:(t,s)=>{if(s)U(_(s),"error");else if(t){C.value=t.messageCount,y.value=t.contactCount,T.value=t.callCount,$.value=t.storageStats.internal.totalBytes,k.value=t.storageStats.internal.freeBytes;const b=t.storageStats.sdcard;b&&($.value+=b.totalBytes,k.value+=b.freeBytes);const n=t.storageStats.usb;n.length&&($.value+=V(n,q=>q.totalBytes),k.value+=V(n,q=>q.freeBytes))}},document:J,variables:null,appApi:!0});function a(t){X(u,t)}return(t,s)=>{const b=ne;return d(),c("div",ae,[e("div",ie,[e("div",re,[e("div",de,[e("section",ce,[e("div",ue,[e("h5",ve,[p(o(t.$t("storage")),1),$.value>=0?(d(),c("span",pe,o(t.$t("storage_free_total",{free:f(S)(k.value),total:f(S)($.value)})),1)):m("",!0)]),e("p",fe,[e("a",{href:"#",onClick:s[0]||(s[0]=l(n=>a("/images"),["prevent"]))},o(t.$t("images")),1),e("a",{href:"#",onClick:s[1]||(s[1]=l(n=>a("/audios"),["prevent"]))},o(t.$t("audios")),1),e("a",{href:"#",onClick:s[2]||(s[2]=l(n=>a("/videos"),["prevent"]))},o(t.$t("videos")),1),e("a",{href:"#",onClick:s[3]||(s[3]=l(n=>a("/files"),["prevent"]))},o(t.$t("files")),1),f(v).channel!=="GOOGLE"?(d(),c("a",{key:0,href:"#",onClick:s[4]||(s[4]=l(n=>a("/apps"),["prevent"]))},o(t.$t("apps")),1)):m("",!0)])])])]),e("div",me,[e("section",_e,[e("div",he,[e("h5",ge,o(t.$t("work")),1),e("p",$e,[e("a",{href:"#",onClick:s[5]||(s[5]=l(n=>a("/notes"),["prevent"]))},o(t.$t("page_title.notes")),1),e("a",{style:{display:"none"},href:"#",onClick:s[6]||(s[6]=l(n=>a("/books"),["prevent"]))},o(t.$t("page_title.books")),1),e("a",{href:"#",onClick:s[7]||(s[7]=l(n=>a("/feeds"),["prevent"]))},o(t.$t("page_title.feeds")),1)])])])]),e("div",be,[e("section",ke,[e("div",Ce,[e("h5",ye,o(t.$t("social")),1),e("p",Te,[f(v).channel!=="GOOGLE"?(d(),c("a",{key:0,href:"#",onClick:s[8]||(s[8]=l(n=>a("/messages"),["prevent"]))},[p(o(t.$t("messages")),1),C.value>=0?(d(),c(w,{key:0},[p("("+o(C.value)+")",1)],64)):m("",!0)])):m("",!0),f(v).channel!=="GOOGLE"?(d(),c("a",{key:1,href:"#",onClick:s[9]||(s[9]=l(n=>a("/calls"),["prevent"]))},[p(o(t.$t("calls")),1),T.value>=0?(d(),c(w,{key:0},[p("("+o(T.value)+")",1)],64)):m("",!0)])):m("",!0),e("a",{href:"#",onClick:s[10]||(s[10]=l(n=>a("/contacts"),["prevent"]))},[p(o(t.$t("contacts")),1),y.value>=0?(d(),c(w,{key:0},[p("("+o(y.value)+")",1)],64)):m("",!0)])])])])]),e("div",qe,[e("section",we,[e("div",Be,[e("h5",Se,o(t.$t("tools")),1),e("p",Ve,[e("a",{href:"#",onClick:s[11]||(s[11]=l(n=>a("/screen-mirror"),["prevent"]))},o(t.$t("screen_mirror")),1),e("a",{href:"#",onClick:s[12]||(s[12]=l(n=>a("/device-info"),["prevent"]))},o(t.$t("device_info")),1),e("a",{href:"#",onClick:s[13]||(s[13]=l(n=>a("/qrcode-generator"),["prevent"]))},o(t.$t("qrcode_generator")),1),e("a",{href:"#",onClick:s[14]||(s[14]=l(n=>a("/json-viewer"),["prevent"]))},o(t.$t("json_viewer")),1)])])])]),e("div",Ge,[e("section",He,[e("div",Ne,[e("h5",Ie,o(t.$t("call_phone")),1),e("p",Le,[Q(e("md-outlined-text-field",{type:"tel",label:t.$t("phone_number"),class:"form-control flex-3","onUpdate:modelValue":s[15]||(s[15]=n=>z(r)?r.value=n:null),error:g.value,"error-text":t.$t("valid.required")},[e("button",{class:"icon-button",slot:"trailing-icon",onClick:l(G,["prevent"])},[Ee,D(b)],8,Oe)],8,Me),[[Z,f(r)]]),e("md-filled-button",{class:"btn-lg",onClick:l(I,["prevent"]),disabled:f(N)},o(t.$t("call")),9,je)])])])])])])])}}});const Pe=Y(Ae,[["__scopeId","data-v-2b7c24f3"]]);export{Pe as default};
