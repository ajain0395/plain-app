import{d as j,u as J,r as v,s as K,a as P,bg as Q,ap as Y,Y as q,b0 as Z,G as ee,o as n,c as a,b as i,e as k,g as s,w as te,k as c,M as C,P as D,f as d,F as b,z as se,y as oe,b1 as T,b2 as F,am as ne,j as f,S as ae,l as ie,a8 as le,b3 as ce,at as de,b6 as ue,b7 as re,_ as _e}from"./index-66bea2e9.js";import{_ as me}from"./download-rounded-19708eb3.js";import{_ as pe}from"./Breadcrumb-731a6814.js";import{c as he}from"./index-64929f64.js";import{n as ve}from"./list-6498ebd9.js";const ke={class:"v-toolbar"},be={class:"right-actions"},fe=["onClick","title"],we={class:"form-check mt-2 me-3 ms-3"},ye={class:"form-check-label",for:"select-mode"},Ve={class:"panel-container"},ge={key:0,class:"file-items"},Ie=["onClick","onDblclick","onContextmenu"],xe=["onUpdate:modelValue"],Ce=["src"],De={class:"title"},Te={style:{"font-size":"0.75rem"}},Fe={key:1,class:"no-data-placeholder"},Re={key:0,class:"file-item-info"},Ee=j({__name:"FilesRecentVIew",setup(Se){const{t:h}=J(),w=v([]),u=v(!1),{app:m}=K(P()),{loading:R,files:r}=Q(m),{visible:E,index:S,view:A,hide:M}=Y(),{downloadFile:y,downloadDir:N,downloadFiles:$}=le(m),{view:V}=ue(w,A),p=v(null),{mutate:U,onDone:z}=q({document:Z,appApi:!0});z(e=>{$(e.data.setTempValue.key)});const g=()=>{const e=[];return r.value.forEach(o=>{o.checked&&e.push({path:o.path})}),e},G=()=>{U({key:ce(),value:JSON.stringify(g())})},L=ee(()=>g().length>0);function B(e){if(u.value){e.checked=!e.checked;return}p.value=e}function I(e){return T(e.name)||F(e.name)||re(e.name)}function H(e){I(e)?V(r.value,e):y(e.path)}function O(e,o){e.preventDefault();let l;o.isDir?l=[{label:h("download"),onClick:()=>{N(o.path)}}]:(l=[],I(o)&&l.push({label:h("open"),onClick:()=>{V(r.value,o)}}),l.push({label:h("download"),onClick:()=>{y(o.path)}})),he({x:e.x,y:e.y,items:l})}return(e,o)=>{const l=pe,W=me,X=de;return n(),a(b,null,[i("div",ke,[k(l,{current:e.$t("recent_files")},null,8,["current"]),i("div",be,[u.value&&s(L)?(n(),a("button",{key:0,type:"button",class:"btn btn-action",onClick:te(G,["stop"]),title:e.$t("download")},[k(W,{class:"bi"})],8,fe)):c("",!0),i("div",we,[C(i("input",{class:"form-check-input","onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t),id:"select-mode",type:"checkbox"},null,512),[[D,u.value]]),i("label",ye,d(e.$t("select_mode")),1)])])]),i("div",Ve,[s(m).permissions.includes("WRITE_EXTERNAL_STORAGE")?(n(),a("div",ge,[(n(!0),a(b,null,se(s(r),t=>{var x;return n(),a("div",{key:t.path,class:oe(["file-item",{active:((x=p.value)==null?void 0:x.path)===t.path}]),onClick:_=>B(t),onDblclick:_=>H(t),onContextmenu:_=>O(_,t)},[u.value?C((n(),a("input",{key:0,class:"form-check-input","onUpdate:modelValue":_=>t.checked=_,type:"checkbox"},null,8,xe)),[[D,t.checked]]):c("",!0),s(T)(t.name)||s(F)(t.name)?(n(),a("img",{key:1,src:s(ne)(t.fileId)+"&w=50&h=50",width:"50",height:"50"},null,8,Ce)):c("",!0),i("div",De,[f(d(t.name)+" ",1),i("div",Te,[f(d(s(ae)(t.updatedAt)),1),t.isDir?c("",!0):(n(),a(b,{key:0},[f(", "+d(s(ie)(t.size)),1)],64))])])],42,Ie)}),128))])):c("",!0),s(r).length===0?(n(),a("div",Fe,d(e.$t(s(ve)(s(R),s(m).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):c("",!0)]),p.value?(n(),a("div",Re,d(e.$t("path"))+": "+d(p.value.path),1)):c("",!0),k(X,{visible:s(E),index:s(S),sources:w.value,onHide:s(M)},null,8,["visible","index","sources","onHide"])],64)}}});const ze=_e(Ee,[["__scopeId","data-v-b89da663"]]);export{ze as default};