import{bi as C,bj as A,bk as b,bl as L,bm as z,aL as M,bn as N,bo as v,bp as R}from"./index-df35a132.js";import{h as m,s as k,c as F}from"./stringToArray-a8dcbce9.js";var _="[object RegExp]";function $(e){return C(e)&&A(e)==_}var x=b&&b.isRegExp,p=x?L(x):$;const w=p;var y=z("length");const D=y;var E="\\ud800-\\udfff",G="\\u0300-\\u036f",H="\\ufe20-\\ufe2f",J="\\u20d0-\\u20ff",P=G+H+J,V="\\ufe0e\\ufe0f",q="["+E+"]",d="["+P+"]",c="\\ud83c[\\udffb-\\udfff]",W="(?:"+d+"|"+c+")",S="[^"+E+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",Z="\\u200d",I=W+"?",U="["+V+"]?",B="(?:"+Z+"(?:"+[S,O,T].join("|")+")"+U+I+")*",K=U+I+B,Q="(?:"+[S+d+"?",d,O,T,q].join("|")+")",h=RegExp(c+"(?="+c+")|"+Q+K,"g");function X(e){for(var i=h.lastIndex=0;h.test(e);)++i;return i}function Y(e){return m(e)?X(e):D(e)}var ee=30,re="...",ie=/\w*$/;function ne(e,i){var s=ee,n=re;if(M(i)){var r="separator"in i?i.separator:r;s="length"in i?N(i.length):s,n="omission"in i?v(i.omission):n}e=R(e);var l=e.length;if(m(e)){var u=k(e);l=u.length}if(s>=l)return e;var a=s-Y(n);if(a<1)return n;var f=u?F(u,0,a).join(""):e.slice(0,a);if(r===void 0)return f+n;if(u&&(a+=f.length-a),w(r)){if(e.slice(a).search(r)){var o,j=f;for(r.global||(r=RegExp(r.source,R(ie.exec(r))+"g")),r.lastIndex=0;o=r.exec(j);)var t=o.index;f=f.slice(0,t===void 0?a:t)}}else if(e.indexOf(v(r),a)!=a){var g=f.lastIndexOf(r);g>-1&&(f=f.slice(0,g))}return f+n}export{ne as t};
