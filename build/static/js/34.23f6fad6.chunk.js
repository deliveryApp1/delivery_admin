"use strict";(self.webpackChunkdelivery_admin=self.webpackChunkdelivery_admin||[]).push([[34],{4034:function(e,a,n){n.r(a),n.d(a,{default:function(){return W}});var i=n(1413),t=n(9439),o=n(2791),r=n(3695),d=n(3099),l=n(6755),s=n(7462),c=n(4942),A=n(7106),u=n(1694),g=n.n(u),E=n(4925),h=n(5179),Q=n(1354),p=o.forwardRef((function(e,a){var n,i=e.prefixCls,r=void 0===i?"rc-switch":i,d=e.className,l=e.checked,s=e.defaultChecked,A=e.disabled,u=e.loadingIcon,p=e.checkedChildren,m=e.unCheckedChildren,f=e.onClick,v=e.onChange,C=e.onKeyDown,Z=(0,E.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),y=(0,h.Z)(!1,{value:l,defaultValue:s}),B=(0,t.Z)(y,2),I=B[0],k=B[1];function j(e,a){var n=I;return A||(k(n=e),null===v||void 0===v||v(n,a)),n}var x=g()(r,d,(n={},(0,c.Z)(n,"".concat(r,"-checked"),I),(0,c.Z)(n,"".concat(r,"-disabled"),A),n));return o.createElement("button",Object.assign({},Z,{type:"button",role:"switch","aria-checked":I,disabled:A,className:x,ref:a,onKeyDown:function(e){e.which===Q.Z.LEFT?j(!1,e):e.which===Q.Z.RIGHT&&j(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var a=j(!I,e);null===f||void 0===f||f(a,e)}}),u,o.createElement("span",{className:"".concat(r,"-inner")},I?p:m))}));p.displayName="Switch";var m=p,f=n(1929),v=n(9125),C=n(1815),Z=n(2833),y=function(e,a){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&a.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(i=Object.getOwnPropertySymbols(e);t<i.length;t++)a.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(e,i[t])&&(n[i[t]]=e[i[t]])}return n},B=o.forwardRef((function(e,a){var n,i=e.prefixCls,t=e.size,r=e.disabled,d=e.loading,l=e.className,u=void 0===l?"":l,E=y(e,["prefixCls","size","disabled","loading","className"]),h=o.useContext(f.E_),Q=h.getPrefixCls,p=h.direction,B=o.useContext(C.Z),I=o.useContext(v.Z),k=r||I||d,j=Q("switch",i),x=o.createElement("div",{className:"".concat(j,"-handle")},d&&o.createElement(A.Z,{className:"".concat(j,"-loading-icon")})),N=g()((n={},(0,c.Z)(n,"".concat(j,"-small"),"small"===(t||B)),(0,c.Z)(n,"".concat(j,"-loading"),d),(0,c.Z)(n,"".concat(j,"-rtl"),"rtl"===p),n),u);return o.createElement(Z.Z,{insertExtraNode:!0},o.createElement(m,(0,s.Z)({},E,{prefixCls:j,className:N,disabled:k,ref:a,loadingIcon:x})))}));B.__ANT_SWITCH=!0;var I=B,k=n(6106),j=n(914),x=n(7309),N=n(1520),S=n(5485),b=n(1756),w=n(3168),J=n(2972),M=n(9389),z=n(3734),K=n(1095),R=n(2862),T=n(9553),F=n(3344),H=n(9286),P=n(5010),U=n(2201),D=n(184),Y=["updateData","t","categoryData","modalType"],q=M.Z.TextArea,L=z.Z.Option,G={labelCol:{span:8},wrapperCol:{span:14}},X=function(e){var a="image/jpeg"===e.type||"image/png"===e.type;a||r.ZP.error("Siz faqat JPG/PNG turdagi fayllarni yuklay olasiz!");var n=e.size/1024/1024<2;return n||r.ZP.error("Surat hajmi 2MB dan kichik bo'lishi kerak!"),a&&n},O=function(e){var a=e.updateData,n=e.t,d=e.categoryData,l=e.modalType,s=(0,E.Z)(e,Y),c=(0,P.I0)(),u=(0,o.useState)(!1),g=(0,t.Z)(u,2),h=g[0],Q=g[1],p=(0,o.useState)(),m=(0,t.Z)(p,2),f=m[0],v=m[1],C=(0,o.useState)(),Z=(0,t.Z)(C,2),y=Z[0],B=Z[1],k=K.Z.useForm(),j=(0,t.Z)(k,1)[0],x=(0,J.qt)(),N=(0,t.Z)(x,2),S=N[0],b=N[1],w=(0,J.zp)(),O=(0,t.Z)(w,2),W=O[0],V=O[1],_=function(){v(""),j.resetFields()};(0,o.useEffect)((function(){return a&&"update"===l&&(console.log("updateData: ",a),v("http://147.182.130.242:3000/".concat(null===a||void 0===a?void 0:a.image)),j.setFieldsValue({image:null===a||void 0===a?void 0:a.image,name:null===a||void 0===a?void 0:a.name,categoryId:null===a||void 0===a?void 0:a.categoryId,description:null===a||void 0===a?void 0:a.description,price:null===a||void 0===a?void 0:a.price,discount:null===a||void 0===a?void 0:a.discount,isHave:null===a||void 0===a?void 0:a.isHave})),function(){return _()}}),[a,l]);var $=(0,D.jsxs)("div",{children:[h?(0,D.jsx)(A.Z,{}):(0,D.jsx)(H.Z,{}),(0,D.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),ee=null===d||void 0===d?void 0:d.map((function(e){return(0,D.jsx)(L,{value:e.id,children:e.name},e.id)})),ae=(0,i.Z)({onOk:function(){j.validateFields().then((function(e){console.log("data: ",e);var n=(0,i.Z)((0,i.Z)({},e),{},{image:y});if("update"===l)e.image=y,S({id:a.id,value:n}).unwrap().then((function(e){200===e.statusCode&&(r.ZP.success("Muvaffaqiyati tahrirlandi."),c((0,U.pC)({openModal:!1,modalType:""})),v(""),j.resetFields())})).catch((function(e){r.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));else if("create"===l){W(n).unwrap().then((function(e){200===e.statusCode&&(r.ZP.success("Muvaffaqiyati saqlandi."),c((0,U.pC)({openModal:!1,modalType:""})),_())})).catch((function(e){r.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}))}})).catch((function(e){return console.log("Form error: ",e)}))},confirmLoading:!!l.length&&("create"===l?V.isLoading:b.isLoading),forceRender:!0},s);return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(R.Z,(0,i.Z)((0,i.Z)({},ae),{},{children:(0,D.jsxs)(K.Z,(0,i.Z)((0,i.Z)({},G),{},{form:j,name:"basic",layout:"horizontal",autoComplete:"off",children:[(0,D.jsx)(K.Z.Item,{name:"image",label:n("image"),rules:[{required:!0,message:"Rasm yuklanmadi"}],children:(0,D.jsx)(T.Z,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"http://147.182.130.242:3000/image-upload",beforeUpload:X,onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&(B(e.file.response.result.url),function(e,a){var n=new FileReader;n.addEventListener("load",(function(){return a(n.result)})),n.readAsDataURL(e)}(e.file.originFileObj,(function(e){Q(!1),v(e)}))):Q(!0)},maxCount:1,children:f?(0,D.jsx)("img",{src:f,alt:"productImage",style:{width:"100%"}}):$})}),(0,D.jsx)(K.Z.Item,{name:"name",label:n("productsMenu.productName"),rules:[{required:!0,message:n("fieldErrorMessage")}],children:(0,D.jsx)(M.Z,{placeholder:"Nomini kiriting"})}),(0,D.jsx)(K.Z.Item,{name:"categoryId",label:n("productsMenu.category"),rules:[{required:!0,message:n("fieldErrorMessage")}],children:(0,D.jsx)(z.Z,{allowClear:!0,placeholder:"Kategoriyani tanlang",children:ee})}),(0,D.jsx)(K.Z.Item,{name:"description",label:n("productsMenu.description"),rules:[{required:!0,message:n("fieldErrorMessage")}],children:(0,D.jsx)(q,{allowClear:!0,autoSize:!0,placeholder:"Ta'rifni kiriting"})}),(0,D.jsx)(K.Z.Item,{name:"price",label:n("productsMenu.price"),style:{width:"100%"},rules:[{required:!0,message:n("fieldErrorMessage")}],children:(0,D.jsx)(F.Z,{addonAfter:"so'm",placeholder:"1000",style:{width:"100%"}})}),(0,D.jsx)(K.Z.Item,{name:"discount",label:n("productsMenu.discount"),rules:[{required:!0,message:n("fieldErrorMessage")}],children:(0,D.jsx)(F.Z,{addonAfter:"%",placeholder:"5",style:{width:"100%"}})}),(0,D.jsx)(K.Z.Item,{name:"isHave",label:n("productsMenu.isHaveonWareHouse"),rules:[{required:!0,message:n("fieldErrorMessage")}],children:(0,D.jsx)(I,{defaultChecked:!(null===a||void 0===a||!a.isHave)&&(null===a||void 0===a?void 0:a.isHave),size:"small"})})]}))}))})},W=function(){var e,a,n,s,c,A,u=(0,w.$)().t,g=(0,P.v9)((function(e){return e.productSlice})),E=g.openModal,h=g.modalType,Q=(0,P.I0)(),p=(0,o.useState)({page:1,pageSize:20}),m=(0,t.Z)(p,2),f=m[0],v=m[1],C=(0,J.qt)(),Z=(0,t.Z)(C,2),y=Z[0],B=(Z[1],(0,J.LX)()),M=(0,J.FA)(f),z=(0,J.dY)(),K=(0,t.Z)(z,2),R=K[0],T=K[1].isLoading,F=(0,o.useState)(),H=(0,t.Z)(F,2),Y=H[0],q=H[1],L=[{title:"\u2116",dataIndex:"id",key:"id",width:"5%",render:function(e,a,n){return(0,D.jsx)("span",{children:n+1})}},{title:u("productsMenu.name"),dataIndex:"name",key:"name",render:function(e,a){return(0,D.jsxs)(d.Z,{size:5,children:[(0,D.jsx)(l.Z,{width:30,height:30,src:"http://147.182.130.242:3000/".concat(a.image),fallback:"data:image/png;base64,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"}),e]})}},{title:u("productsMenu.description"),dataIndex:"description",key:"description",render:function(e,a){return(0,D.jsx)(D.Fragment,{children:e})}},{title:u("productsMenu.price"),dataIndex:"price",key:"price",render:function(e,a){return(0,D.jsx)(D.Fragment,{children:e})}},{title:u("productsMenu.discount"),dataIndex:"discount",key:"discount",render:function(e,a){return(0,D.jsx)(D.Fragment,{children:e})}},{title:u("productsMenu.isHaveonWareHouse"),dataIndex:"isHave",key:"isHave",width:"12%",render:function(e,a){return(0,D.jsx)(I,{defaultChecked:e,onChange:function(e){return y({id:a.id,value:(0,i.Z)((0,i.Z)({},a),{},{isHave:e})})},size:"small"})}},{title:u("actions"),key:"action",width:"20%",render:function(e,a,n){return(0,D.jsxs)(k.Z,{wrap:!1,gutter:5,children:[(0,D.jsx)(j.Z,{children:(0,D.jsx)(x.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){return q(e),void Q((0,U.pC)({openModal:!0,modalType:"update"}))},children:u("edit")})}),(0,D.jsx)(j.Z,{children:(0,D.jsx)(N.Z,{okText:u("yes"),cancelText:u("no"),onConfirm:function(){return a=e.id,void R({id:a}).unwrap().then((function(e){200===e.statusCode&&r.ZP.success("Muvaffaqiyati o'chirildi.")})).catch((function(e){r.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));var a},title:u("sureDelete"),children:(0,D.jsx)(x.Z,{size:"small",danger:!0,disabled:T,children:u("delete")})})})]})}}],G={total:(null===(e=M.data)||void 0===e||null===(a=e.meta)||void 0===a?void 0:a.total)*(null===(n=M.data)||void 0===n||null===(s=n.meta)||void 0===s?void 0:s.pagesize),page:f.page,pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,pageSize:f.pageSize,current:f.page,onChange:function(e,a){v({page:e,pageSize:a})}},X={title:u("update"===h?"edit":"add"),open:E,okText:u("update"===h?"edit":"add"),cancelText:u("close"),onCancel:function(){Q((0,U.pC)({openModal:!1,modalType:""})),q(void 0)}};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(k.Z,{children:[(0,D.jsx)(j.Z,{span:20,children:(0,D.jsx)(S.Z.Title,{level:2,children:u("menus.products")})}),(0,D.jsx)(j.Z,{span:4,children:(0,D.jsx)(x.Z,{type:"primary",onClick:function(){return Q((0,U.pC)({openModal:!0,modalType:"create"}))},children:u("add")})})]}),(0,D.jsx)(b.Z,{columns:L,dataSource:null===(c=M.data)||void 0===c?void 0:c.data,loading:M.isFetching,rowKey:function(e){return e.id},pagination:G}),(0,D.jsx)(O,(0,i.Z)({updateData:Y,t:u,modalType:h,categoryData:null===(A=B.data)||void 0===A?void 0:A.data},X))]})}}}]);
//# sourceMappingURL=34.23f6fad6.chunk.js.map