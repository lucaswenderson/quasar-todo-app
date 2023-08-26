import{c as Q,a as f,h as S,d as ne,r as L,i as Ve,o as X,e as U,n as qe,f as ee,g as F,l as ye,j as Se,k as P,m as oe,w as C,p as ot,P as it,q as rt,s as I,t as lt,u as G,v as fe,x as xe,y as ve,z as be,A as he,B as ut,C as st,D as ct,E as dt,F as ft,G as vt,H as ht,I as mt,J as gt,K as _e,L as pt,M as Ae,N as yt,O as bt,Q as wt,R as Ct,S as me,T as J,U as qt,V as St,W as He,_ as Fe,X as j,Y as te,Z as _,$ as x,a0 as kt,a1 as Lt,a2 as ae,a3 as Be,a4 as Ee,a5 as Tt,a6 as zt,a7 as $t,a8 as xt,a9 as _t}from"./index.2e49c86f.js";import{Q as Oe,a as we,b as Bt,c as Et}from"./QItem.b3a88bc1.js";var Ot=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:i.value},ne(o.default))}}),Pt=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:i.value,role:"toolbar"},ne(o.default))}});function Mt(){const e=L(!Ve.value);return e.value===!1&&X(()=>{e.value=!0}),e}const We=typeof ResizeObserver!="undefined",Pe=We===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ce=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:c,offsetHeight:l}=u;(c!==t.width||l!==t.height)&&(t={width:c,height:l},o("resize",t))}}const{proxy:h}=F();if(We===!0){let c;const l=r=>{u=h.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):r!==!0&&ee(()=>{l(!0)})};return X(()=>{l()}),U(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),qe}else{let r=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",a,ye.passive),l=void 0)},w=function(){r(),u&&u.contentDocument&&(l=u.contentDocument.defaultView,l.addEventListener("resize",a,ye.passive),s())};const c=Mt();let l;return X(()=>{ee(()=>{u=h.$el,u&&w()})}),U(r),h.trigger=a,()=>{if(c.value===!0)return S("object",{style:Pe.style,tabindex:-1,type:"text/html",data:Pe.url,"aria-hidden":"true",onLoad:w})}}}}),Dt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=F(),t=Se(oe,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=L(parseInt(e.heightHint,10)),s=L(!0),h=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),l=f(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),r=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),w=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=f(()=>{const d=t.rows.value.top,T={};return d[0]==="l"&&t.left.space===!0&&(T[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(T[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function v(d,T){t.update("header",d,T)}function m(d,T){d.value!==T&&(d.value=T)}function B({height:d}){m(a,d),v("size",d)}function k(d){r.value===!0&&m(s,!0),i("focusin",d)}C(()=>e.modelValue,d=>{v("space",d),m(s,!0),t.animate()}),C(c,d=>{v("offset",d)}),C(()=>e.reveal,d=>{d===!1&&m(s,e.modelValue)}),C(s,d=>{t.animate(),i("reveal",d)}),C(t.scroll,d=>{e.reveal===!0&&m(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",c.value),U(()=>{t.instances.header===y&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const d=ot(o.default,[]);return e.elevated===!0&&d.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(S(Ce,{debounce:0,onResize:B})),S("header",{class:w.value,style:b.value,onFocusin:k},d)}}});const ke={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Qt=Object.keys(ke);ke.all=!0;function Me(e){const o={};for(const i of Qt)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?ke:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Rt=["INPUT","TEXTAREA"];function De(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Rt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Vt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),it.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ge(e,o,i){const u=be(e);let t,a=u.left-o.event.x,s=u.top-o.event.y,h=Math.abs(a),c=Math.abs(s);const l=o.direction;l.horizontal===!0&&l.vertical!==!0?t=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=s<0?"up":"down":l.up===!0&&s<0?(t="up",h>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.down===!0&&s>0?(t="down",h>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.left===!0&&a<0?(t="left",h<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down"))):l.right===!0&&a>0&&(t="right",h<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=a,h=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:u,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:h,y:c},offset:{x:a,y:s},delta:{x:u.left-o.event.lastX,y:u.top-o.event.lastY}}}}let At=0;var pe=rt({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&I.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?ut(a):(i.stop===!0&&ve(a),i.prevent===!0&&xe(a))}const t={uid:"qvtp_"+At++,handler:o,modifiers:i,direction:Me(i),noop:qe,mouseStart(a){De(a,t)&&lt(a)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(De(a,t)){const s=a.target;G(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(I.is.firefox===!0&&fe(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&xe(l),a.cancelBubble===!0&&ve(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:l}}ve(a)}const{left:h,top:c}=be(a);t.event={x:h,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:c}},move(a){if(t.event===void 0)return;const s=be(a),h=s.left-t.event.x,c=s.top-t.event.y;if(h===0&&c===0)return;t.lastEvt=a;const l=t.event.mouse===!0,r=()=>{u(a,l);let v;i.preserveCursor!==!0&&i.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Vt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),l===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{B(),m()},50):B()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:v,synthetic:m}=ge(a,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=m===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const w=Math.abs(h),b=Math.abs(c);w!==b&&(t.direction.horizontal===!0&&w>b||t.direction.vertical===!0&&w<b||t.direction.up===!0&&w<b&&c<0||t.direction.down===!0&&w<b&&c>0||t.direction.left===!0&&w>b&&h<0||t.direction.right===!0&&w>b&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(he(t,"temp"),I.is.firefox===!0&&fe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ge(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=ge(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}I.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Me(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),he(o,"main"),he(o,"temp"),I.is.firefox===!0&&fe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function Z(e,o,i){return i<=o?o:Math.min(i,Math.max(o,e))}const Qe=150;var Ht=Q({name:"QDrawer",inheritAttrs:!1,props:{...st,...ct,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...dt,"onLayout","miniState"],setup(e,{slots:o,emit:i,attrs:u}){const t=F(),{proxy:{$q:a}}=t,s=ft(e,a),{preventBodyScroll:h}=pt(),{registerTimeout:c,removeTimeout:l}=vt(),r=Se(oe,P);if(r===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,b=null,v;const m=L(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&m.value!==!0),k=f(()=>B.value===!0?e.miniWidth:e.width),y=L(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),d=f(()=>e.persistent!==!0&&(m.value===!0||Ne.value===!0));function T(n,g){if(R(),n!==!1&&r.animate(),E(0),m.value===!0){const z=r.instances[Y.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),M(1),r.isContainer.value!==!0&&h(!0)}else M(0),n!==!1&&se(!1);c(()=>{n!==!1&&se(!0),g!==!0&&i("show",n)},Qe)}function p(n,g){W(),n!==!1&&r.animate(),M(0),E(A.value*k.value),ce(),g!==!0?c(()=>{i("hide",n)},Qe):l()}const{show:q,hide:$}=ht({showing:y,hideOnRouteChange:d,handleShow:T,handleHide:p}),{addToHistory:R,removeFromHistory:W}=mt(y,$,d),V={belowBreakpoint:m,hide:$},O=f(()=>e.side==="right"),A=f(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),Le=L(0),H=L(!1),ie=L(!1),Te=L(k.value*A.value),Y=f(()=>O.value===!0?"left":"right"),re=f(()=>y.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),le=f(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")>-1||a.platform.is.ios===!0&&r.isContainer.value===!0),N=f(()=>e.overlay===!1&&y.value===!0&&m.value===!1),Ne=f(()=>e.overlay===!0&&y.value===!0&&m.value===!1),Ie=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&H.value===!1?" hidden":"")),je=f(()=>({backgroundColor:`rgba(0,0,0,${Le.value*.4})`})),ze=f(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Xe=f(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ue=f(()=>{const n={};return r.header.space===!0&&ze.value===!1&&(le.value===!0?n.top=`${r.header.offset}px`:r.header.space===!0&&(n.top=`${r.header.size}px`)),r.footer.space===!0&&Xe.value===!1&&(le.value===!0?n.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(n.bottom=`${r.footer.size}px`)),n}),Ye=f(()=>{const n={width:`${k.value}px`,transform:`translateX(${Te.value}px)`};return m.value===!0?n:Object.assign(n,Ue.value)}),Ke=f(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=f(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(le.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ze.value===!0?" q-drawer--top-padding":""))),Je=f(()=>{const n=a.lang.rtl===!0?e.side:Y.value;return[[pe,at,void 0,{[n]:!0,mouse:!0}]]}),Ze=f(()=>{const n=a.lang.rtl===!0?Y.value:e.side;return[[pe,$e,void 0,{[n]:!0,mouse:!0}]]}),et=f(()=>{const n=a.lang.rtl===!0?Y.value:e.side;return[[pe,$e,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){nt(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}C(m,n=>{n===!0?(w=y.value,y.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(E(0),M(0),ce()):q(!1))}),C(()=>e.side,(n,g)=>{r.instances[g]===V&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[n]=V,r[n].size=k.value,r[n].space=N.value,r[n].offset=re.value}),C(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),C(()=>e.behavior+e.breakpoint,ue),C(r.isContainer,n=>{y.value===!0&&h(n!==!0),n===!0&&ue()}),C(r.scrollbarWidth,()=>{E(y.value===!0?0:void 0)}),C(re,n=>{D("offset",n)}),C(N,n=>{i("onLayout",n),D("space",n)}),C(O,()=>{E()}),C(k,n=>{E(),de(e.miniToOverlay,n)}),C(()=>e.miniToOverlay,n=>{de(n,k.value)}),C(()=>a.lang.rtl,()=>{E()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(tt(),r.animate())}),C(B,n=>{i("miniState",n)});function E(n){n===void 0?ee(()=>{n=y.value===!0?0:k.value,E(A.value*n)}):(r.isContainer.value===!0&&O.value===!0&&(m.value===!0||Math.abs(n)===k.value)&&(n+=A.value*r.scrollbarWidth.value),Te.value=n)}function M(n){Le.value=n}function se(n){const g=n===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function tt(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,b=setTimeout(()=>{b=null,ie.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(n){if(y.value!==!1)return;const g=k.value,z=Z(n.distance.x,0,g);if(n.isFinal===!0){z>=Math.min(75,g)===!0?q():(r.animate(),M(0),E(A.value*g)),H.value=!1;return}E((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(g-z,0):Math.min(0,z-g)),M(Z(z/g,0,1)),n.isFirst===!0&&(H.value=!0)}function $e(n){if(y.value!==!0)return;const g=k.value,z=n.direction===e.side,K=(a.lang.rtl===!0?z!==!0:z)?Z(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(K)<Math.min(75,g)===!0?(r.animate(),M(1),E(0)):$(),H.value=!1;return}E(A.value*K),M(Z(1-K/g,0,1)),n.isFirst===!0&&(H.value=!0)}function ce(){h(!1),se(!0)}function D(n,g){r.update(e.side,n,g)}function nt(n,g){n.value!==g&&(n.value=g)}function de(n,g){D("size",n===!0?e.miniWidth:g)}return r.instances[e.side]=V,de(e.miniToOverlay,k.value),D("space",N.value),D("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),X(()=>{i("onLayout",N.value),i("miniState",B.value),w=e.showIfAbove===!0;const n=()=>{(y.value===!0?T:p)(!1,!0)};if(r.totalWidth.value!==0){ee(n);return}v=C(r.totalWidth,()=>{v(),v=void 0,y.value===!1&&e.showIfAbove===!0&&m.value===!1?q(!1):n()})}),U(()=>{v!==void 0&&v(),b!==null&&(clearTimeout(b),b=null),y.value===!0&&ce(),r.instances[e.side]===V&&(r.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const n=[];m.value===!0&&(e.noSwipeOpen===!1&&n.push(gt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),n.push(_e("div",{ref:"backdrop",class:Ie.value,style:je.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>et.value)));const g=B.value===!0&&o.mini!==void 0,z=[S("div",{...u,key:""+g,class:[Ke.value,u.class]},g===!0?o.mini():ne(o.default))];return e.elevated===!0&&y.value===!0&&z.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(_e("aside",{ref:"content",class:Ge.value,style:Ye.value},z,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ze.value)),S("div",{class:"q-drawer-container"},n)}}}),Ft=Q({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=F(),u=Se(oe,P);if(u===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ae(yt,!0);const t=f(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},ne(o.default))}});const{passive:Re}=ye,Wt=["both","horizontal","vertical"];var Nt=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Wt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;C(()=>e.scrollTarget,()=>{c(),h()});function s(){u!==null&&u();const w=Math.max(0,wt(t)),b=Ct(t),v={top:w-i.position.top,left:b-i.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";i.position={top:w,left:b},i.directionChanged=i.direction!==m,i.delta=v,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),o("scroll",{...i})}function h(){t=bt(a,e.scrollTarget),t.addEventListener("scroll",l,Re),l(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",l,Re),t=void 0)}function l(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[b,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{v(b),u=null}}}const{proxy:r}=F();return C(()=>r.$q.lang.rtl,s),X(()=>{a=r.$el.parentNode,h()}),U(()=>{u!==null&&u(),c()}),Object.assign(r,{trigger:l,getPosition:()=>i}),qe}}),It=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=F(),t=L(null),a=L(u.screen.height),s=L(e.container===!0?0:u.screen.width),h=L({position:0,direction:"down",inflectionPoint:0}),c=L(0),l=L(Ve.value===!0?0:me()),r=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),b=f(()=>l.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),v=f(()=>l.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function m(p){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};h.value=q,e.onScroll!==void 0&&i("scroll",q)}}function B(p){const{height:q,width:$}=p;let R=!1;a.value!==q&&(R=!0,a.value=q,e.onScrollHeight!==void 0&&i("scrollHeight",q),y()),s.value!==$&&(R=!0,s.value=$),R===!0&&e.onResize!==void 0&&i("resize",p)}function k({height:p}){c.value!==p&&(c.value=p,y())}function y(){if(e.container===!0){const p=a.value>c.value?me():0;l.value!==p&&(l.value=p)}}let d=null;const T={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:l,totalWidth:f(()=>s.value+l.value),rows:f(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:h,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,q,$){T[p][q]=$}};if(Ae(oe,T),me()>0){let $=function(){p=null,q.classList.remove("hide-scrollbar")},R=function(){if(p===null){if(q.scrollHeight>u.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout($,300)},W=function(V){p!==null&&V==="remove"&&(clearTimeout(p),$()),window[`${V}EventListener`]("resize",R)},p=null;const q=document.body;C(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),qt(()=>{W("remove")})}return()=>{const p=St(o.default,[S(Nt,{onScroll:m}),S(Ce,{onResize:B})]),q=S("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Ce,{onResize:k}),S("div",{class:"absolute-full",style:b.value},[S("div",{class:"scroll",style:v.value},[q])])]):q}}});const jt=He({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Xt(e,o,i,u,t,a){return j(),te(Bt,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:_(()=>[e.icon?(j(),te(Oe,{key:0,avatar:""},{default:_(()=>[x(kt,{name:e.icon},null,8,["name"])]),_:1})):Lt("",!0),x(Oe,null,{default:_(()=>[x(we,null,{default:_(()=>[ae(Be(e.title),1)]),_:1}),x(we,{caption:""},{default:_(()=>[ae(Be(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Ut=Fe(jt,[["render",Xt]]);const Yt=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Kt=He({name:"MainLayout",components:{EssentialLink:Ut},setup(){const e=L(!1);return{essentialLinks:Yt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Gt(e,o,i,u,t,a){const s=Ee("EssentialLink"),h=Ee("router-view");return j(),te(It,{view:"lHh Lpr lFf"},{default:_(()=>[x(Dt,{elevated:"",class:"bg-deep-purple"},{default:_(()=>[x(Pt,null,{default:_(()=>[x(Tt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),x(Ot,null,{default:_(()=>[ae(" Lista de Tarefas ")]),_:1})]),_:1})]),_:1}),x(Ht,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:_(()=>[x(Et,null,{default:_(()=>[x(we,{header:""},{default:_(()=>[ae(" Pages ")]),_:1}),(j(!0),zt(xt,null,$t(e.essentialLinks,c=>(j(),te(s,_t({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),x(Ft,null,{default:_(()=>[x(h)]),_:1})]),_:1})}var ta=Fe(Kt,[["render",Gt]]);export{ta as default};
