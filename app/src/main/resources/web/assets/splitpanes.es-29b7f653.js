import{br as m,o as u,c,bO as z,bP as x}from"./index-e900249a.js";const M={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((e,i)=>(e[i.id]=i)&&e,{})}},methods:{updatePaneComponents(){this.panes.forEach(e=>{e.update&&e.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[e.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(e,i){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=i},onMouseMove(e){this.touch.mouseDown&&(e.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(e)),this.$emit("resize",this.panes.map(i=>({min:i.min,max:i.max,size:i.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(e,i){"ontouchstart"in window&&(e.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===i?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(e,i),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=i,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[i])},onSplitterDblClick(e,i){let n=0;this.panes=this.panes.map((t,s)=>(t.size=s===i?t.max:t.min,s!==i&&(n+=t.min),t)),this.panes[i].size-=n,this.$emit("pane-maximize",this.panes[i]),this.$emit("resized",this.panes.map(t=>({min:t.min,max:t.max,size:t.size})))},onPaneClick(e,i){this.$emit("pane-click",this.indexedPanes[i])},getCurrentMouseDrag(e){const i=this.container.getBoundingClientRect(),{clientX:n,clientY:t}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:n-i.left,y:t-i.top}},getCurrentDragPercentage(e){e=e[this.horizontal?"y":"x"];const i=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(e=i-e),e*100/i},calculatePanesSize(e){const i=this.touch.activeSplitter;let n={prevPanesSize:this.sumPrevPanesSize(i),nextPanesSize:this.sumNextPanesSize(i),prevReachedMinPanes:0,nextReachedMinPanes:0};const t=0+(this.pushOtherPanes?0:n.prevPanesSize),s=100-(this.pushOtherPanes?0:n.nextPanesSize),a=Math.max(Math.min(this.getCurrentDragPercentage(e),s),t);let o=[i,i+1],h=this.panes[o[0]]||null,r=this.panes[o[1]]||null;const p=h.max<100&&a>=h.max+n.prevPanesSize,d=r.max<100&&a<=100-(r.max+this.sumNextPanesSize(i+1));if(p||d){p?(h.size=h.max,r.size=Math.max(100-h.max-n.prevPanesSize-n.nextPanesSize,0)):(h.size=Math.max(100-r.max-n.prevPanesSize-this.sumNextPanesSize(i+1),0),r.size=r.max);return}if(this.pushOtherPanes){const l=this.doPushOtherPanes(n,a);if(!l)return;({sums:n,panesToResize:o}=l),h=this.panes[o[0]]||null,r=this.panes[o[1]]||null}h!==null&&(h.size=Math.min(Math.max(a-n.prevPanesSize-n.prevReachedMinPanes,h.min),h.max)),r!==null&&(r.size=Math.min(Math.max(100-a-n.nextPanesSize-n.nextReachedMinPanes,r.min),r.max))},doPushOtherPanes(e,i){const n=this.touch.activeSplitter,t=[n,n+1];return i<e.prevPanesSize+this.panes[t[0]].min&&(t[0]=this.findPrevExpandedPane(n).index,e.prevReachedMinPanes=0,t[0]<n&&this.panes.forEach((s,a)=>{a>t[0]&&a<=n&&(s.size=s.min,e.prevReachedMinPanes+=s.min)}),e.prevPanesSize=this.sumPrevPanesSize(t[0]),t[0]===void 0)?(e.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((s,a)=>{a>0&&a<=n&&(s.size=s.min,e.prevReachedMinPanes+=s.min)}),this.panes[t[1]].size=100-e.prevReachedMinPanes-this.panes[0].min-e.prevPanesSize-e.nextPanesSize,null):i>100-e.nextPanesSize-this.panes[t[1]].min&&(t[1]=this.findNextExpandedPane(n).index,e.nextReachedMinPanes=0,t[1]>n+1&&this.panes.forEach((s,a)=>{a>n&&a<t[1]&&(s.size=s.min,e.nextReachedMinPanes+=s.min)}),e.nextPanesSize=this.sumNextPanesSize(t[1]-1),t[1]===void 0)?(e.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((s,a)=>{a<this.panesCount-1&&a>=n+1&&(s.size=s.min,e.nextReachedMinPanes+=s.min)}),this.panes[t[0]].size=100-e.prevPanesSize-e.nextReachedMinPanes-this.panes[this.panesCount-1].min-e.nextPanesSize,null):{sums:e,panesToResize:t}},sumPrevPanesSize(e){return this.panes.reduce((i,n,t)=>i+(t<e?n.size:0),0)},sumNextPanesSize(e){return this.panes.reduce((i,n,t)=>i+(t>e+1?n.size:0),0)},findPrevExpandedPane(e){return[...this.panes].reverse().find(i=>i.index<e&&i.size>i.min)||{}},findNextExpandedPane(e){return this.panes.find(i=>i.index>e+1&&i.size>i.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(e=>{const i=e.classList.contains("splitpanes__pane"),n=e.classList.contains("splitpanes__splitter");!i&&!n&&(e.parentNode.removeChild(e),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},addSplitter(e,i,n=!1){const t=e-1,s=document.createElement("div");s.classList.add("splitpanes__splitter"),n||(s.onmousedown=a=>this.onMouseDown(a,t),typeof window<"u"&&"ontouchstart"in window&&(s.ontouchstart=a=>this.onMouseDown(a,t)),s.onclick=a=>this.onSplitterClick(a,t+1)),this.dblClickSplitter&&(s.ondblclick=a=>this.onSplitterDblClick(a,t+1)),i.parentNode.insertBefore(s,i)},removeSplitter(e){e.onmousedown=void 0,e.onclick=void 0,e.ondblclick=void 0,e.parentNode.removeChild(e)},redoSplitters(){const e=Array.from(this.container.children);e.forEach(n=>{n.className.includes("splitpanes__splitter")&&this.removeSplitter(n)});let i=0;e.forEach(n=>{n.className.includes("splitpanes__pane")&&(!i&&this.firstSplitter?this.addSplitter(i,n,!0):i&&this.addSplitter(i,n),i++)})},requestUpdate({target:e,...i}){const n=this.indexedPanes[e._.uid];Object.entries(i).forEach(([t,s])=>n[t]=s)},onPaneAdd(e){let i=-1;Array.from(e.$el.parentNode.children).some(s=>(s.className.includes("splitpanes__pane")&&i++,s===e.$el));const n=parseFloat(e.minSize),t=parseFloat(e.maxSize);this.panes.splice(i,0,{id:e._.uid,index:i,min:isNaN(n)?0:n,max:isNaN(t)?100:t,size:e.size===null?null:parseFloat(e.size),givenSize:e.size,update:e.update}),this.panes.forEach((s,a)=>s.index=a),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[i]}),this.$emit("pane-add",{index:i,panes:this.panes.map(s=>({min:s.min,max:s.max,size:s.size}))})})},onPaneRemove(e){const i=this.panes.findIndex(t=>t.id===e._.uid),n=this.panes.splice(i,1)[0];this.panes.forEach((t,s)=>t.index=s),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...n,index:i}}),this.$emit("pane-remove",{removed:n,panes:this.panes.map(t=>({min:t.min,max:t.max,size:t.size}))})})},resetPaneSizes(e={}){!e.addedPane&&!e.removedPane?this.initialPanesSizing():this.panes.some(i=>i.givenSize!==null||i.min||i.max<100)?this.equalizeAfterAddOrRemove(e):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(i=>({min:i.min,max:i.max,size:i.size})))},equalize(){const e=100/this.panesCount;let i=0;const n=[],t=[];this.panes.forEach(s=>{s.size=Math.max(Math.min(e,s.max),s.min),i-=s.size,s.size>=s.max&&n.push(s.id),s.size<=s.min&&t.push(s.id)}),i>.1&&this.readjustSizes(i,n,t)},initialPanesSizing(){let e=100;const i=[],n=[];let t=0;this.panes.forEach(a=>{e-=a.size,a.size!==null&&t++,a.size>=a.max&&i.push(a.id),a.size<=a.min&&n.push(a.id)});let s=100;e>.1&&(this.panes.forEach(a=>{a.size===null&&(a.size=Math.max(Math.min(e/(this.panesCount-t),a.max),a.min)),s-=a.size}),s>.1&&this.readjustSizes(e,i,n))},equalizeAfterAddOrRemove({addedPane:e,removedPane:i}={}){let n=100/this.panesCount,t=0;const s=[],a=[];e&&e.givenSize!==null&&(n=(100-e.givenSize)/(this.panesCount-1)),this.panes.forEach(o=>{t-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&a.push(o.id)}),!(Math.abs(t)<.1)&&(this.panes.forEach(o=>{e&&e.givenSize!==null&&e.id===o.id||(o.size=Math.max(Math.min(n,o.max),o.min)),t-=o.size,o.size>=o.max&&s.push(o.id),o.size<=o.min&&a.push(o.id)}),t>.1&&this.readjustSizes(t,s,a))},readjustSizes(e,i,n){let t;e>0?t=e/(this.panesCount-i.length):t=e/(this.panesCount-n.length),this.panes.forEach((s,a)=>{if(e>0&&!i.includes(s.id)){const o=Math.max(Math.min(s.size+t,s.max),s.min),h=o-s.size;e-=h,s.size=o}else if(!n.includes(s.id)){const o=Math.max(Math.min(s.size+t,s.max),s.min),h=o-s.size;e-=h,s.size=o}s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})}),Math.abs(e)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(e){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((i,n)=>{i.ondblclick=e?t=>this.onSplitterDblClick(t,n):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return m("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},P=(e,i)=>{const n=e.__vccOpts||e;for(const[t,s]of i)n[t]=s;return n},v={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(e){this.style=e}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(e){this.requestUpdate({target:this,size:e})},minSizeNumber(e){this.requestUpdate({target:this,min:e})},maxSizeNumber(e){this.requestUpdate({target:this,max:e})}}};function S(e,i,n,t,s,a){return u(),c("div",{class:"splitpanes__pane",onClick:i[0]||(i[0]=o=>a.onPaneClick(o,e._.uid)),style:x(e.style)},[z(e.$slots,"default")],4)}const g=P(v,[["render",S]]);export{M,g};
