import{o as l,c as r,a as c,d as V,u as D,e as I,r as w,g as B,x as G,aT as H,O as L,P as o,Q as S,R as A,h as N,t as m,m as E,l as v,p as F,F as b,J as z,I as J,j as P,bG as T,a2 as p,i as C,bH as j,T as K,C as O,bI as R,W as U,aI as W,bJ as X,bK as Y,ac as Z}from"./index-e895cc69.js";import{E as k}from"./EditValueModal-d4fcf3a1.js";const ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=c("path",{fill:"currentColor",d:"M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"},null,-1),ae=[te];function ne(d,a){return l(),r("svg",ee,ae)}const se={name:"material-symbols-add-rounded",render:ne},oe={class:"nav-title"},ie=["onClick"],le=c("md-ripple",null,null,-1),re={class:"nav"},de=["onClick","onContextmenu"],me=V({__name:"TagFilter",props:{type:{type:String,required:!0},selected:{type:String,required:!0}},setup(d){const a=d,{t:n}=D(),x=I(),_=w([]),{refetch:i}=B({handle:(e,t)=>{t?G(n(t),"error"):e&&(_.value=e.tags)},document:H,variables:{type:a.type},appApi:!0});function q(){p(k,{title:n("add_tag"),placeholder:n("name"),mutation:()=>C({document:j,options:{update:()=>{i()}},appApi:!0}),getVariables:e=>({type:a.type,name:e})})}function $(e){const t=K([{name:"tag",op:"",value:T(e.name)}]);O(x,`/${R[a.type]}?q=${U(t)}`)}function M(e,t){e.preventDefault(),W({x:e.x,y:e.y,items:[{label:n("rename"),onClick:()=>{p(k,{title:n("rename"),placeholder:n("name"),value:t.name,mutation:()=>C({document:X,appApi:!0}),getVariables:u=>({id:t.id,name:u}),done:()=>{i()}})}},{label:n("delete"),onClick:()=>{p(Z,{id:t.id,name:t.name,gql:Y,appApi:!0,typeName:"Tag"})}}]})}const h=e=>{e===a.type&&i()},f=e=>{e.type===a.type&&i()},g=e=>{e.item.tags.length&&e.type===a.type&&i()};return L(()=>{o.on("refetch_tags",h),o.on("media_items_deleted",f),o.on("media_item_deleted",g)}),S(()=>{o.off("refetch_tags",h),o.off("media_items_deleted",f),o.off("media_item_deleted",g)}),(e,t)=>{const u=se,Q=A("tooltip");return l(),r(b,null,[c("h2",oe,[N(m(e.$t("tags"))+" ",1),E((l(),r("button",{class:"icon-button",onClick:v(q,["prevent"])},[le,F(u)],8,ie)),[[Q,e.$t("add_tag")]])]),c("ul",re,[(l(!0),r(b,null,z(_.value,s=>(l(),r("li",{onClick:v(y=>$(s),["prevent"]),key:s.id,onContextmenu:y=>M(y,s),class:J({active:d.selected&&P(T)(s.name)===d.selected})},m(s.name)+" ("+m(s.count)+")",43,de))),128))])],64)}}});export{me as _,se as a};
