(self.webpackChunkdelivery_admin=self.webpackChunkdelivery_admin||[]).push([[376],{1095:function(e,t,n){"use strict";n.d(t,{Z:function(){return he}});var r=n(1940),o=n(4942),a=n(7462),l=n(3433),i=n(1694),c=n.n(i),u=n(5207),s=n(2791),f=n(1929),d=n(9464),p=n(9439);function m(e){var t=s.useState(e),n=(0,p.Z)(t,2),r=n[0],o=n[1];return s.useEffect((function(){var t=setTimeout((function(){o(e)}),e.length?0:10);return function(){clearTimeout(t)}}),[e]),r}var v=[];function g(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{key:"string"===typeof e?e:"".concat(n,"-").concat(r),error:e,errorStatus:t}}function h(e){var t=e.help,n=e.helpStatus,i=e.errors,p=void 0===i?v:i,h=e.warnings,y=void 0===h?v:h,b=e.className,Z=e.fieldId,E=e.onVisibleChanged,w=s.useContext(r.Rk).prefixCls,x=s.useContext(f.E_).getPrefixCls,C="".concat(w,"-item-explain"),O=x(),S=m(p),k=m(y),R=s.useMemo((function(){return void 0!==t&&null!==t?[g(t,n,"help")]:[].concat((0,l.Z)(S.map((function(e,t){return g(e,"error","error",t)}))),(0,l.Z)(k.map((function(e,t){return g(e,"warning","warning",t)}))))}),[t,n,S,k]),P={};return Z&&(P.id="".concat(Z,"_help")),s.createElement(u.default,{motionDeadline:d.ZP.motionDeadline,motionName:"".concat(O,"-show-help"),visible:!!R.length,onVisibleChanged:E},(function(e){var t=e.className,n=e.style;return s.createElement("div",(0,a.Z)({},P,{className:c()(C,t,b),style:n,role:"alert"}),s.createElement(u.CSSMotionList,(0,a.Z)({keys:R},d.ZP,{motionName:"".concat(O,"-show-help-item"),component:!1}),(function(e){var t=e.key,n=e.error,r=e.errorStatus,a=e.className,l=e.style;return s.createElement("div",{key:t,className:c()(a,(0,o.Z)({},"".concat(C,"-").concat(r),r)),style:l},n)})))}))}var y=n(1002),b=n(3023),Z=n(9125),E=n(1815);function w(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function x(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function C(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return x(n.overflowY,t)||x(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function O(e,t,n,r,o,a,l,i){return a<e&&l>t||a>e&&l<t?0:a<=e&&i<=n||l>=t&&i>=n?a-e-r:l>t&&i<n||a<e&&i>n?l-t+o:0}function S(e,t){var n=window,r=t.scrollMode,o=t.block,a=t.inline,l=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!w(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,s=[],f=e;w(f)&&c(f);){if((f=f.parentElement)===u){s.push(f);break}null!=f&&f===document.body&&C(f)&&!C(document.documentElement)||null!=f&&C(f,i)&&s.push(f)}for(var d=n.visualViewport?n.visualViewport.width:innerWidth,p=n.visualViewport?n.visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,g=e.getBoundingClientRect(),h=g.height,y=g.width,b=g.top,Z=g.right,E=g.bottom,x=g.left,S="start"===o||"nearest"===o?b:"end"===o?E:b+h/2,k="center"===a?x+y/2:"end"===a?Z:x,R=[],P=0;P<s.length;P++){var N=s[P],M=N.getBoundingClientRect(),j=M.height,I=M.width,_=M.top,q=M.right,F=M.bottom,T=M.left;if("if-needed"===r&&b>=0&&x>=0&&E<=p&&Z<=d&&b>=_&&E<=F&&x>=T&&Z<=q)return R;var D=getComputedStyle(N),H=parseInt(D.borderLeftWidth,10),L=parseInt(D.borderTopWidth,10),V=parseInt(D.borderRightWidth,10),z=parseInt(D.borderBottomWidth,10),A=0,W=0,B="offsetWidth"in N?N.offsetWidth-N.clientWidth-H-V:0,K="offsetHeight"in N?N.offsetHeight-N.clientHeight-L-z:0;if(u===N)A="start"===o?S:"end"===o?S-p:"nearest"===o?O(v,v+p,p,L,z,v+S,v+S+h,h):S-p/2,W="start"===a?k:"center"===a?k-d/2:"end"===a?k-d:O(m,m+d,d,H,V,m+k,m+k+y,y),A=Math.max(0,A+v),W=Math.max(0,W+m);else{A="start"===o?S-_-L:"end"===o?S-F+z+K:"nearest"===o?O(_,F,j,L,z+K,S,S+h,h):S-(_+j/2)+K/2,W="start"===a?k-T-H:"center"===a?k-(T+I/2)+B/2:"end"===a?k-q+V+B:O(T,q,I,H,V+B,k,k+y,y);var U=N.scrollLeft,Q=N.scrollTop;S+=Q-(A=Math.max(0,Math.min(Q+A,N.scrollHeight-j+K))),k+=U-(W=Math.max(0,Math.min(U+W,N.scrollWidth-I+B)))}R.push({el:N,top:A,left:W})}return R}function k(e){return e===Object(e)&&0!==Object.keys(e).length}var R=function(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(k(t)&&"function"===typeof t.behavior)return t.behavior(n?S(e,t):[]);if(n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:k(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,o=e.top,a=e.left;r.scroll&&n?r.scroll({top:o,left:a,behavior:t}):(r.scrollTop=o,r.scrollLeft=a)}))}(S(e,r),r.behavior)}},P=["parentNode"];function N(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function M(e,t){if(e.length){var n=e.join("_");return t?"".concat(t,"_").concat(n):P.indexOf(n)>=0?"".concat("form_item","_").concat(n):n}}function j(e){return N(e).join("_")}function I(e){var t=(0,b.useForm)(),n=(0,p.Z)(t,1)[0],r=s.useRef({}),o=s.useMemo((function(){return null!==e&&void 0!==e?e:(0,a.Z)((0,a.Z)({},n),{__INTERNAL__:{itemRef:function(e){return function(t){var n=j(e);t?r.current[n]=t:delete r.current[n]}}},scrollToField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=N(e),r=M(n,o.__INTERNAL__.name),l=r?document.getElementById(r):null;l&&R(l,(0,a.Z)({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:function(e){var t=j(e);return r.current[t]}})}),[e,n]);return[o]}var _=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},q=function(e,t){var n,l=s.useContext(E.Z),i=s.useContext(Z.Z),u=s.useContext(f.E_),d=u.getPrefixCls,m=u.direction,v=u.form,g=e.prefixCls,h=e.className,w=void 0===h?"":h,x=e.size,C=void 0===x?l:x,O=e.disabled,S=void 0===O?i:O,k=e.form,R=e.colon,P=e.labelAlign,N=e.labelWrap,M=e.labelCol,j=e.wrapperCol,q=e.hideRequiredMark,F=e.layout,T=void 0===F?"horizontal":F,D=e.scrollToFirstError,H=e.requiredMark,L=e.onFinishFailed,V=e.name,z=_(e,["prefixCls","className","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),A=(0,s.useMemo)((function(){return void 0!==H?H:v&&void 0!==v.requiredMark?v.requiredMark:!q}),[q,H,v]),W=null!==R&&void 0!==R?R:null===v||void 0===v?void 0:v.colon,B=d("form",g),K=c()(B,(n={},(0,o.Z)(n,"".concat(B,"-").concat(T),!0),(0,o.Z)(n,"".concat(B,"-hide-required-mark"),!1===A),(0,o.Z)(n,"".concat(B,"-rtl"),"rtl"===m),(0,o.Z)(n,"".concat(B,"-").concat(C),C),n),w),U=I(k),Q=(0,p.Z)(U,1)[0],X=Q.__INTERNAL__;X.name=V;var Y=(0,s.useMemo)((function(){return{name:V,labelAlign:P,labelCol:M,labelWrap:N,wrapperCol:j,vertical:"vertical"===T,colon:W,requiredMark:A,itemRef:X.itemRef,form:Q}}),[V,P,M,j,T,W,A,Q]);s.useImperativeHandle(t,(function(){return Q}));return s.createElement(Z.n,{disabled:S},s.createElement(E.q,{size:C},s.createElement(r.q3.Provider,{value:Y},s.createElement(b.default,(0,a.Z)({id:V},z,{name:V,onFinishFailed:function(e){null===L||void 0===L||L(e);var t={block:"nearest"};D&&e.errorFields.length&&("object"===(0,y.Z)(D)&&(t=D),Q.scrollToField(e.errorFields[0].name,t))},form:Q,className:K})))))},F=s.forwardRef(q),T=n(8368),D=n(8834),H=function(){return{status:(0,s.useContext)(r.aM).status}},L=n(1113),V=n(9393),z=n(5314);var A=n(7557),W=n(2621),B=n(187),K=n(317),U=n(1605),Q=n(1818),X=n(590),Y=n(1413),G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},$=n(4291),J=function(e,t){return s.createElement($.Z,(0,Y.Z)((0,Y.Z)({},e),{},{ref:t,icon:G}))};J.displayName="QuestionCircleOutlined";var ee=s.forwardRef(J),te=n(9752),ne=n(3486),re=n(3578),oe=n(6573),ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var le=function(e){var t=e.prefixCls,n=e.label,l=e.htmlFor,i=e.labelCol,u=e.labelAlign,f=e.colon,d=e.required,m=e.requiredMark,v=e.tooltip,g=(0,ne.E)("Form"),h=(0,p.Z)(g,1)[0];return n?s.createElement(r.q3.Consumer,{key:"label"},(function(e){var r,p,g=e.vertical,b=e.labelAlign,Z=e.labelCol,E=e.labelWrap,w=e.colon,x=i||Z||{},C=u||b,O="".concat(t,"-item-label"),S=c()(O,"left"===C&&"".concat(O,"-left"),x.className,(0,o.Z)({},"".concat(O,"-wrap"),!!E)),k=n,R=!0===f||!1!==w&&!1!==f;R&&!g&&"string"===typeof n&&""!==n.trim()&&(k=n.replace(/[:|\uff1a]\s*$/,""));var P=function(e){return e?"object"!==(0,y.Z)(e)||s.isValidElement(e)?{title:e}:e:null}(v);if(P){var N=P.icon,M=void 0===N?s.createElement(ee,null):N,j=ae(P,["icon"]),I=s.createElement(oe.Z,(0,a.Z)({},j),s.cloneElement(M,{className:"".concat(t,"-item-tooltip"),title:""}));k=s.createElement(s.Fragment,null,k,I)}"optional"!==m||d||(k=s.createElement(s.Fragment,null,k,s.createElement("span",{className:"".concat(t,"-item-optional"),title:""},(null===h||void 0===h?void 0:h.optional)||(null===(p=re.Z.Form)||void 0===p?void 0:p.optional))));var _=c()((r={},(0,o.Z)(r,"".concat(t,"-item-required"),d),(0,o.Z)(r,"".concat(t,"-item-required-mark-optional"),"optional"===m),(0,o.Z)(r,"".concat(t,"-item-no-colon"),!R),r));return s.createElement(te.Z,(0,a.Z)({},x,{className:S}),s.createElement("label",{htmlFor:l,className:_,title:"string"===typeof n?n:""},k))})):null},ie=function(e){var t=e.prefixCls,n=e.status,o=e.wrapperCol,l=e.children,i=e.errors,u=e.warnings,f=e._internalItemRender,d=e.extra,p=e.help,m=e.fieldId,v=e.marginBottom,g=e.onErrorVisibleChanged,y="".concat(t,"-item"),b=s.useContext(r.q3),Z=o||b.wrapperCol||{},E=c()("".concat(y,"-control"),Z.className),w=s.useMemo((function(){return(0,a.Z)({},b)}),[b]);delete w.labelCol,delete w.wrapperCol;var x=s.createElement("div",{className:"".concat(y,"-control-input")},s.createElement("div",{className:"".concat(y,"-control-input-content")},l)),C=s.useMemo((function(){return{prefixCls:t,status:n}}),[t,n]),O=null!==v||i.length||u.length?s.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},s.createElement(r.Rk.Provider,{value:C},s.createElement(h,{fieldId:m,errors:i,warnings:u,help:p,helpStatus:n,className:"".concat(y,"-explain-connected"),onVisibleChanged:g})),!!v&&s.createElement("div",{style:{width:0,height:v}})):null,S={};m&&(S.id="".concat(m,"_extra"));var k=d?s.createElement("div",(0,a.Z)({},S,{className:"".concat(y,"-extra")}),d):null,R=f&&"pro_table_render"===f.mark&&f.render?f.render(e,{input:x,errorList:O,extra:k}):s.createElement(s.Fragment,null,x,O,k);return s.createElement(r.q3.Provider,{value:w},s.createElement(te.Z,(0,a.Z)({},Z,{className:E}),R))},ce=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ue={success:A.Z,warning:B.Z,error:W.Z,validating:K.Z};function se(e){var t,n=e.prefixCls,l=e.className,i=e.style,u=e.help,f=e.errors,d=e.warnings,v=e.validateStatus,g=e.meta,h=e.hasFeedback,y=e.hidden,b=e.children,Z=e.fieldId,E=e.isRequired,w=e.onSubItemMetaChange,x=ce(e,["prefixCls","className","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","isRequired","onSubItemMetaChange"]),C="".concat(n,"-item"),O=s.useContext(r.q3).requiredMark,S=s.useRef(null),k=m(f),R=m(d),P=void 0!==u&&null!==u,N=!!(P||f.length||d.length),M=s.useState(null),j=(0,p.Z)(M,2),I=j[0],_=j[1];(0,U.Z)((function(){if(N&&S.current){var e=getComputedStyle(S.current);_(parseInt(e.marginBottom,10))}}),[N]);var q="";void 0!==v?q=v:g.validating?q="validating":k.length?q="error":R.length?q="warning":g.touched&&(q="success");var F=s.useMemo((function(){var e;if(h){var t=q&&ue[q];e=t?s.createElement("span",{className:c()("".concat(C,"-feedback-icon"),"".concat(C,"-feedback-icon-").concat(q))},s.createElement(t,null)):null}return{status:q,hasFeedback:h,feedbackIcon:e,isFormItemInput:!0}}),[q,h]),T=(t={},(0,o.Z)(t,C,!0),(0,o.Z)(t,"".concat(C,"-with-help"),P||k.length||R.length),(0,o.Z)(t,"".concat(l),!!l),(0,o.Z)(t,"".concat(C,"-has-feedback"),q&&h),(0,o.Z)(t,"".concat(C,"-has-success"),"success"===q),(0,o.Z)(t,"".concat(C,"-has-warning"),"warning"===q),(0,o.Z)(t,"".concat(C,"-has-error"),"error"===q),(0,o.Z)(t,"".concat(C,"-is-validating"),"validating"===q),(0,o.Z)(t,"".concat(C,"-hidden"),y),t);return s.createElement("div",{className:c()(T),style:i,ref:S},s.createElement(X.Z,(0,a.Z)({className:"".concat(C,"-row")},(0,Q.Z)(x,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","required","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),s.createElement(le,(0,a.Z)({htmlFor:Z,required:E,requiredMark:O},e,{prefixCls:n})),s.createElement(ie,(0,a.Z)({},e,g,{errors:k,warnings:R,prefixCls:n,status:q,help:u,marginBottom:I,onErrorVisibleChanged:function(e){e||_(null)}}),s.createElement(r.qI.Provider,{value:w},s.createElement(r.aM.Provider,{value:F},b)))),!!I&&s.createElement("div",{className:"".concat(C,"-margin-offset"),style:{marginBottom:-I}}))}(0,V.b)("success","warning","error","validating","");var fe=s.memo((function(e){return e.children}),(function(e,t){return e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((function(e,n){return e===t.childProps[n]}))}));var de=function(e){var t=e.name,n=e.noStyle,o=e.dependencies,i=e.prefixCls,c=e.shouldUpdate,u=e.rules,d=e.children,m=e.required,v=e.label,g=e.messageVariables,h=e.trigger,Z=void 0===h?"onChange":h,E=e.validateTrigger,w=e.hidden,x=(0,s.useContext)(f.E_).getPrefixCls,C=(0,s.useContext)(r.q3).name,O="function"===typeof d,S=(0,s.useContext)(r.qI),k=(0,s.useContext)(b.FieldContext).validateTrigger,R=void 0!==E?E:k,P=function(e){return!(void 0===e||null===e)}(t),j=x("form",i),I=s.useContext(b.ListContext),_=s.useRef(),q=function(e){var t=s.useState(e),n=(0,p.Z)(t,2),r=n[0],o=n[1],a=(0,s.useRef)(null),l=(0,s.useRef)([]),i=(0,s.useRef)(!1);return s.useEffect((function(){return i.current=!1,function(){i.current=!0,z.Z.cancel(a.current),a.current=null}}),[]),[r,function(e){i.current||(null===a.current&&(l.current=[],a.current=(0,z.Z)((function(){a.current=null,o((function(e){var t=e;return l.current.forEach((function(e){t=e(t)})),t}))}))),l.current.push(e))}]}({}),F=(0,p.Z)(q,2),H=F[0],V=F[1],A=(0,T.Z)((function(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}})),W=(0,p.Z)(A,2),B=W[0],K=W[1],U=function(e,t){V((function(n){var r=(0,a.Z)({},n),o=[].concat((0,l.Z)(e.name.slice(0,-1)),(0,l.Z)(t)).join("__SPLIT__");return e.destroy?delete r[o]:r[o]=e,r}))},Q=s.useMemo((function(){var e=(0,l.Z)(B.errors),t=(0,l.Z)(B.warnings);return Object.values(H).forEach((function(n){e.push.apply(e,(0,l.Z)(n.errors||[])),t.push.apply(t,(0,l.Z)(n.warnings||[]))})),[e,t]}),[H,B.errors,B.warnings]),X=(0,p.Z)(Q,2),Y=X[0],G=X[1],$=function(){var e=s.useContext(r.q3).itemRef,t=s.useRef({});return function(n,r){var o=r&&"object"===(0,y.Z)(r)&&r.ref,a=n.join("_");return t.current.name===a&&t.current.originRef===o||(t.current.name=a,t.current.originRef=o,t.current.ref=(0,D.sQ)(e(n),o)),t.current.ref}}();function J(t,r,o){return n&&!w?t:s.createElement(se,(0,a.Z)({key:"row"},e,{prefixCls:j,fieldId:r,isRequired:o,errors:Y,warnings:G,meta:B,onSubItemMetaChange:U}),t)}if(!P&&!O&&!o)return J(d);var ee={};return"string"===typeof v?ee.label=v:t&&(ee.label=String(t)),g&&(ee=(0,a.Z)((0,a.Z)({},ee),g)),s.createElement(b.Field,(0,a.Z)({},e,{messageVariables:ee,trigger:Z,validateTrigger:R,onMetaChange:function(e){var t=null===I||void 0===I?void 0:I.getKey(e.name);if(K(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[]}:e,!0),n&&S){var r=e.name;if(e.destroy)r=_.current||r;else if(void 0!==t){var o=(0,p.Z)(t,2),a=o[0],i=o[1];r=[a].concat((0,l.Z)(i)),_.current=r}S(e,r)}}}),(function(n,r,i){var f=N(t).length&&r?r.name:[],p=M(f,C),v=void 0!==m?m:!(!u||!u.some((function(e){if(e&&"object"===(0,y.Z)(e)&&e.required&&!e.warningOnly)return!0;if("function"===typeof e){var t=e(i);return t&&t.required&&!t.warningOnly}return!1}))),g=(0,a.Z)({},n),h=null;if(Array.isArray(d)&&P)h=d;else if(O&&(!c&&!o||P));else if(!o||O||P)if((0,L.l$)(d)){var b=(0,a.Z)((0,a.Z)({},d.props),g);if(b.id||(b.id=p),e.help||Y.length>0||G.length>0||e.extra){var E=[];(e.help||Y.length>0)&&E.push("".concat(p,"_help")),e.extra&&E.push("".concat(p,"_extra")),b["aria-describedby"]=E.join(" ")}Y.length>0&&(b["aria-invalid"]="true"),v&&(b["aria-required"]="true"),(0,D.Yr)(d)&&(b.ref=$(f,d)),new Set([].concat((0,l.Z)(N(Z)),(0,l.Z)(N(R)))).forEach((function(e){b[e]=function(){for(var t,n,r,o,a,l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];null===(r=g[e])||void 0===r||(t=r).call.apply(t,[g].concat(i)),null===(a=(o=d.props)[e])||void 0===a||(n=a).call.apply(n,[o].concat(i))}}));var w=[b["aria-required"],b["aria-invalid"],b["aria-describedby"]];h=s.createElement(fe,{value:g[e.valuePropName||"value"],update:d,childProps:w},(0,L.Tm)(d,b))}else h=O&&(c||o)&&!P?d(i):d;else;return J(h,p,v)}))};de.useStatus=H;var pe=de,me=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ve=function(e){var t=e.prefixCls,n=e.children,o=me(e,["prefixCls","children"]),l=(0,s.useContext(f.E_).getPrefixCls)("form",t),i=s.useMemo((function(){return{prefixCls:l,status:"error"}}),[l]);return s.createElement(b.List,(0,a.Z)({},o),(function(e,t,o){return s.createElement(r.Rk.Provider,{value:i},n(e.map((function(e){return(0,a.Z)((0,a.Z)({},e),{fieldKey:e.key})})),t,{errors:o.errors,warnings:o.warnings}))}))};var ge=F;ge.Item=pe,ge.List=ve,ge.ErrorList=h,ge.useForm=I,ge.useFormInstance=function(){return(0,s.useContext)(r.q3).form},ge.useWatch=b.useWatch,ge.Provider=r.RV,ge.create=function(){};var he=ge},5485:function(e,t,n){"use strict";n.d(t,{Z:function(){return me}});var r=n(7462),o=n(2791),a=n(4942),l=n(1002),i=n(9439),c=n(7575),u=n(1413),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},f=n(4291),d=function(e,t){return o.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:s}))};d.displayName="CopyOutlined";var p=o.forwardRef(d),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},v=function(e,t){return o.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:m}))};v.displayName="EditOutlined";var g=o.forwardRef(v),h=n(1694),y=n.n(h),b=n(6998),Z=n.n(b),E=n(8829),w=n(5501),x=n(1605),C=n(5179),O=n(1818),S=n(8834),k=n(1929),R=n(3486),P=n(1354),N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},M={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},j=o.forwardRef((function(e,t){var n=e.style,a=e.noStyle,l=e.disabled,i=N(e,["style","noStyle","disabled"]),c={};return a||(c=(0,r.Z)({},M)),l&&(c.pointerEvents="none"),c=(0,r.Z)((0,r.Z)({},c),n),o.createElement("div",(0,r.Z)({role:"button",tabIndex:0,ref:t},i,{onKeyDown:function(e){e.keyCode===P.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===P.Z.ENTER&&r&&r()},style:c}))})),I=n(2748),_=n(6573),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},F=function(e,t){return o.createElement(f.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:q}))};F.displayName="EnterOutlined";var T=o.forwardRef(F),D=n(9355),H=n(1113),L=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,l=e.style,c=e.direction,u=e.maxLength,s=e.autoSize,f=void 0===s||s,d=e.value,p=e.onSave,m=e.onCancel,v=e.onEnd,g=e.component,h=e.enterIcon,b=void 0===h?o.createElement(T,null):h,Z=o.useRef(),E=o.useRef(!1),w=o.useRef(),x=o.useState(d),C=(0,i.Z)(x,2),O=C[0],S=C[1];o.useEffect((function(){S(d)}),[d]),o.useEffect((function(){if(Z.current&&Z.current.resizableTextArea){var e=Z.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var k=function(){p(O.trim())},R=g?"".concat(t,"-").concat(g):"",N=y()(t,"".concat(t,"-edit-content"),(0,a.Z)({},"".concat(t,"-rtl"),"rtl"===c),r,R);return o.createElement("div",{className:N,style:l},o.createElement(D.Z,{ref:Z,maxLength:u,value:O,onChange:function(e){var t=e.target;S(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;E.current||(w.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,o=e.metaKey,a=e.shiftKey;w.current!==t||E.current||n||r||o||a||(t===P.Z.ENTER?(k(),null===v||void 0===v||v()):t===P.Z.ESC&&m())},onCompositionStart:function(){E.current=!0},onCompositionEnd:function(){E.current=!1},onBlur:function(){k()},"aria-label":n,rows:1,autoSize:f}),null!==b?(0,H.Tm)(b,{className:"".concat(t,"-edit-content-confirm")}):null)};function V(e,t){return o.useMemo((function(){var n=!!e;return[n,(0,r.Z)((0,r.Z)({},t),n&&"object"===(0,l.Z)(e)?e:null)]}),[e])}var z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},A=function(e,t){var n=e.prefixCls,l=e.component,i=void 0===l?"article":l,c=e.className,u=e["aria-label"],s=e.setContentRef,f=e.children,d=z(e,["prefixCls","component","className","aria-label","setContentRef","children"]),p=o.useContext(k.E_),m=p.getPrefixCls,v=p.direction,g=t;s&&(g=(0,S.sQ)(t,s));var h=i,b=m("typography",n),Z=y()(b,(0,a.Z)({},"".concat(b,"-rtl"),"rtl"===v),c);return o.createElement(h,(0,r.Z)({className:Z,"aria-label":u,ref:g},d),f)};var W=o.forwardRef(A);function B(e){var t=(0,l.Z)(e);return"string"===t||"number"===t}function K(e,t){for(var n=0,r=[],o=0;o<e.length;o+=1){if(n===t)return r;var a=e[o],l=n+(B(a)?String(a).length:1);if(l>t){var i=t-n;return r.push(String(a).slice(0,i)),r}r.push(a),n=l}return e}var U=function(e){var t=e.enabledMeasure,n=e.children,a=e.text,l=e.width,c=e.rows,u=e.onEllipsis,s=o.useState([0,0,0]),f=(0,i.Z)(s,2),d=f[0],p=f[1],m=o.useState(0),v=(0,i.Z)(m,2),g=v[0],h=v[1],y=(0,i.Z)(d,3),b=y[0],Z=y[1],E=y[2],C=o.useState(0),O=(0,i.Z)(C,2),S=O[0],k=O[1],R=o.useRef(null),P=o.useRef(null),N=o.useMemo((function(){return(0,w.Z)(a)}),[a]),M=o.useMemo((function(){return function(e){var t=0;return e.forEach((function(e){B(e)?t+=String(e).length:t+=1})),t}(N)}),[N]),j=o.useMemo((function(){return t&&3===g?n(K(N,Z),Z<M):n(N,!1)}),[t,g,n,N,Z,M]);(0,x.Z)((function(){t&&l&&M&&(h(1),p([0,Math.ceil(M/2),M]))}),[t,l,a,M,c]),(0,x.Z)((function(){var e;1===g&&k((null===(e=R.current)||void 0===e?void 0:e.offsetHeight)||0)}),[g]),(0,x.Z)((function(){var e,t;if(S)if(1===g)((null===(e=P.current)||void 0===e?void 0:e.offsetHeight)||0)<=c*S?(h(4),u(!1)):h(2);else if(2===g)if(b!==E){var n=(null===(t=P.current)||void 0===t?void 0:t.offsetHeight)||0,r=b,o=E;b===E-1?o=b:n<=c*S?r=Z:o=Z;var a=Math.ceil((r+o)/2);p([r,a,o])}else h(3),u(!0)}),[g,b,E,c,S]);var I={width:l,whiteSpace:"normal",margin:0,padding:0},_=function(e,t,n){return o.createElement("span",{"aria-hidden":!0,ref:t,style:(0,r.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},n)},e)};return o.createElement(o.Fragment,null,j,t&&3!==g&&4!==g&&o.createElement(o.Fragment,null,_("lg",R,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===g?_(n(N,!1),P,I):function(e,t){var r=K(N,e);return _(n(r,!0),t,I)}(Z,P)))};var Q=function(e){var t=e.enabledEllipsis,n=e.isEllipsis,a=e.children,l=e.tooltipProps;return(null===l||void 0===l?void 0:l.title)&&t?o.createElement(_.Z,(0,r.Z)({open:!!n&&void 0},l),a):a},X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function Y(e,t,n){return!0===e||void 0===e?t:e||n&&t}function G(e){return Array.isArray(e)?e:[e]}var $=o.forwardRef((function(e,t){var n=e.prefixCls,u=e.className,s=e.style,f=e.type,d=e.disabled,m=e.children,v=e.ellipsis,h=e.editable,b=e.copyable,P=e.component,N=e.title,M=X(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),q=o.useContext(k.E_),F=q.getPrefixCls,T=q.direction,D=(0,R.E)("Text")[0],H=o.useRef(null),z=o.useRef(null),A=F("typography",n),B=(0,O.Z)(M,["mark","code","delete","underline","strong","keyboard","italic"]),K=V(h),$=(0,i.Z)(K,2),J=$[0],ee=$[1],te=(0,C.Z)(!1,{value:ee.editing}),ne=(0,i.Z)(te,2),re=ne[0],oe=ne[1],ae=ee.triggerType,le=void 0===ae?["icon"]:ae,ie=function(e){var t;e&&(null===(t=ee.onStart)||void 0===t||t.call(ee)),oe(e)};!function(e,t){var n=o.useRef(!1);o.useEffect((function(){n.current?e():n.current=!0}),t)}((function(){var e;re||null===(e=z.current)||void 0===e||e.focus()}),[re]);var ce=function(e){null===e||void 0===e||e.preventDefault(),ie(!0)},ue=V(b),se=(0,i.Z)(ue,2),fe=se[0],de=se[1],pe=o.useState(!1),me=(0,i.Z)(pe,2),ve=me[0],ge=me[1],he=o.useRef(),ye={};de.format&&(ye.format=de.format);var be=function(){clearTimeout(he.current)},Ze=function(e){var t;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),Z()(de.text||String(m)||"",ye),ge(!0),be(),he.current=setTimeout((function(){ge(!1)}),3e3),null===(t=de.onCopy)||void 0===t||t.call(de,e)};o.useEffect((function(){return be}),[]);var Ee=o.useState(!1),we=(0,i.Z)(Ee,2),xe=we[0],Ce=we[1],Oe=o.useState(!1),Se=(0,i.Z)(Oe,2),ke=Se[0],Re=Se[1],Pe=o.useState(!1),Ne=(0,i.Z)(Pe,2),Me=Ne[0],je=Ne[1],Ie=o.useState(!1),_e=(0,i.Z)(Ie,2),qe=_e[0],Fe=_e[1],Te=o.useState(!1),De=(0,i.Z)(Te,2),He=De[0],Le=De[1],Ve=o.useState(!0),ze=(0,i.Z)(Ve,2),Ae=ze[0],We=ze[1],Be=V(v,{expandable:!1}),Ke=(0,i.Z)(Be,2),Ue=Ke[0],Qe=Ke[1],Xe=Ue&&!Me,Ye=Qe.rows,Ge=void 0===Ye?1:Ye,$e=o.useMemo((function(){return!Xe||void 0!==Qe.suffix||Qe.onEllipsis||Qe.expandable||J||fe}),[Xe,Qe,J,fe]);(0,x.Z)((function(){Ue&&!$e&&(Ce((0,I.G)("webkitLineClamp")),Re((0,I.G)("textOverflow")))}),[$e,Ue]);var Je=o.useMemo((function(){return!$e&&(1===Ge?ke:xe)}),[$e,ke,xe]),et=Xe&&(Je?He:qe),tt=Xe&&1===Ge&&Je,nt=Xe&&Ge>1&&Je,rt=function(e){var t;je(!0),null===(t=Qe.onExpand)||void 0===t||t.call(Qe,e)},ot=o.useState(0),at=(0,i.Z)(ot,2),lt=at[0],it=at[1],ct=function(e){var t;Fe(e),qe!==e&&(null===(t=Qe.onEllipsis)||void 0===t||t.call(Qe,e))};o.useEffect((function(){var e=H.current;if(Ue&&Je&&e){var t=nt?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;He!==t&&Le(t)}}),[Ue,Je,m,nt,Ae]),o.useEffect((function(){var e=H.current;if("undefined"!==typeof IntersectionObserver&&e&&Je&&Xe){var t=new IntersectionObserver((function(){We(!!e.offsetParent)}));return t.observe(e),function(){t.disconnect()}}}),[Je,Xe]);var ut={};ut=!0===Qe.tooltip?{title:m}:o.isValidElement(Qe.tooltip)?{title:Qe.tooltip}:"object"===(0,l.Z)(Qe.tooltip)?(0,r.Z)({title:m},Qe.tooltip):{title:Qe.tooltip};var st=o.useMemo((function(){var e=function(e){return["string","number"].includes((0,l.Z)(e))};if(Ue&&!Je)return e(m)?m:e(N)?N:e(ut.title)?ut.title:void 0}),[Ue,Je,N,ut.title,et]);if(re)return o.createElement(L,{value:"string"===typeof m?m:"",onSave:function(e){var t;null===(t=ee.onChange)||void 0===t||t.call(ee,e),ie(!1)},onCancel:function(){var e;null===(e=ee.onCancel)||void 0===e||e.call(ee),ie(!1)},onEnd:ee.onEnd,prefixCls:A,className:u,style:s,direction:T,component:P,maxLength:ee.maxLength,autoSize:ee.autoSize,enterIcon:ee.enterIcon});var ft=function(){var e,t=Qe.expandable,n=Qe.symbol;return t?(e=n||D.expand,o.createElement("a",{key:"expand",className:"".concat(A,"-expand"),onClick:rt,"aria-label":D.expand},e)):null},dt=function(){if(J){var e=ee.icon,t=ee.tooltip,n=(0,w.Z)(t)[0]||D.edit,r="string"===typeof n?n:"";return le.includes("icon")?o.createElement(_.Z,{key:"edit",title:!1===t?"":n},o.createElement(j,{ref:z,className:"".concat(A,"-edit"),onClick:ce,"aria-label":r},e||o.createElement(g,{role:"button"}))):null}},pt=function(){if(fe){var e=de.tooltips,t=de.icon,n=G(e),r=G(t),a=ve?Y(n[1],D.copied):Y(n[0],D.copy),l=ve?D.copied:D.copy,i="string"===typeof a?a:l;return o.createElement(_.Z,{key:"copy",title:a},o.createElement(j,{className:y()("".concat(A,"-copy"),ve&&"".concat(A,"-copy-success")),onClick:Ze,"aria-label":i},ve?Y(r[1],o.createElement(c.Z,null),!0):Y(r[0],o.createElement(p,null),!0)))}};return o.createElement(E.Z,{onResize:function(e){var t=e.offsetWidth;it(t)},disabled:!Xe||Je},(function(n){var l;return o.createElement(Q,{tooltipProps:ut,enabledEllipsis:Xe,isEllipsis:et},o.createElement(W,(0,r.Z)({className:y()((l={},(0,a.Z)(l,"".concat(A,"-").concat(f),f),(0,a.Z)(l,"".concat(A,"-disabled"),d),(0,a.Z)(l,"".concat(A,"-ellipsis"),Ue),(0,a.Z)(l,"".concat(A,"-single-line"),Xe&&1===Ge),(0,a.Z)(l,"".concat(A,"-ellipsis-single-line"),tt),(0,a.Z)(l,"".concat(A,"-ellipsis-multiple-line"),nt),l),u),style:(0,r.Z)((0,r.Z)({},s),{WebkitLineClamp:nt?Ge:void 0}),component:P,ref:(0,S.sQ)(n,H,t),direction:T,onClick:le.includes("text")?ce:null,"aria-label":st,title:N},B),o.createElement(U,{enabledMeasure:Xe&&!Je,text:m,rows:Ge,width:lt,onEllipsis:ct},(function(t,n){var r=t;t.length&&n&&st&&(r=o.createElement("span",{key:"show-content","aria-hidden":!0},r));var a=function(e,t){var n=e.mark,r=e.code,a=e.underline,l=e.delete,i=e.strong,c=e.keyboard,u=e.italic,s=t;function f(e,t){e&&(s=o.createElement(t,{},s))}return f(i,"strong"),f(a,"u"),f(l,"del"),f(r,"code"),f(n,"mark"),f(c,"kbd"),f(u,"i"),s}(e,o.createElement(o.Fragment,null,r,function(e){return[e&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),Qe.suffix,(t=e,[t&&ft(),dt(),pt()])];var t}(n)));return a}))))}))})),J=$,ee=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},te=function(e,t){var n=e.ellipsis,a=e.rel,l=ee(e,["ellipsis","rel"]),i=o.useRef(null);o.useImperativeHandle(t,(function(){return i.current}));var c=(0,r.Z)((0,r.Z)({},l),{rel:void 0===a&&"_blank"===l.target?"noopener noreferrer":a});return delete c.navigate,o.createElement(J,(0,r.Z)({},c,{ref:i,ellipsis:!!n,component:"a"}))},ne=o.forwardRef(te),re=function(e,t){return o.createElement(J,(0,r.Z)({ref:t},e,{component:"div"}))},oe=o.forwardRef(re),ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},le=function(e,t){var n=e.ellipsis,a=ae(e,["ellipsis"]),i=o.useMemo((function(){return n&&"object"===(0,l.Z)(n)?(0,O.Z)(n,["expandable","rows"]):n}),[n]);return o.createElement(J,(0,r.Z)({ref:t},a,{ellipsis:i,component:"span"}))},ie=o.forwardRef(le),ce=n(9393),ue=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},se=(0,ce.a)(1,2,3,4,5),fe=function(e,t){var n,a=e.level,l=void 0===a?1:a,i=ue(e,["level"]);return n=-1!==se.indexOf(l)?"h".concat(l):"h1",o.createElement(J,(0,r.Z)({ref:t},i,{component:n}))},de=o.forwardRef(fe),pe=W;pe.Text=ie,pe.Link=ne,pe.Title=de,pe.Paragraph=oe;var me=pe},6998:function(e,t,n){"use strict";var r=n(2458),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,i,c,u,s=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),i=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),u&&document.body.removeChild(u),l()}return s}},2458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=376.123c0888.chunk.js.map