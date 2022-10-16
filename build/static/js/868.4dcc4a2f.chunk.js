"use strict";(self.webpackChunkdelivery_admin=self.webpackChunkdelivery_admin||[]).push([[868],{713:function(e,t,n){n.d(t,{Pk:function(){return i},i$:function(){return s},uJ:function(){return r},vc:function(){return d}});var a=n(2426),o=n.n(a),r=[{id:2,name:"ADMIN"},{id:3,name:"COURIER"}],i=function(e){return e&&e>=o()().endOf("day")},d="DD.MM.YYYY",s="DD.MM.YYYY HH:mm:ss"},868:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(1413),o=n(9439),r=n(2791),i=n(3695),d=n(6106),s=n(914),u=n(7309),l=n(1520),c=n(5485),p=n(9184),f=n(3168),m=n(4925),h=n(2972),g=n(3734),x=n(1095),y=n(2862),Z=n(2126),v=n(3099),j=n(2143),k=n(9286),C=n(9516),S=n(9336),M=n(5010),I=n(8885),b=n(7083),z=n(3405),q=n(4075),T=n(184),O=function(e){var t=e.open,n=e.setOpen,a=e.coords,i=e.setCoords,d=e.address,s=e.setAddress,u=e.t,l=(0,r.useRef)(),c=(0,r.useRef)(),p=(0,r.useRef)(),f=(0,r.useState)(!1),m=(0,o.Z)(f,2),h=m[0],g=m[1],x=function(e){var t,n;i(e),null===l||void 0===l||null===(t=l.current)||void 0===t||null===(n=t.geocode(e))||void 0===n||n.then((function(e){var t=e.geoObjects.get(0),n=[(t.getLocalities().length,t.getAddressLine())].filter(Boolean).join(", ");s(n)}))};return(0,T.jsx)(I.Z,{width:"45%",style:{padding:0},title:"".concat(u("ordersMenu.address"),": ").concat(d),placement:"right",onClose:function(){n(!1)},open:t,children:(0,T.jsx)(b.Z,{spinning:!h,children:(0,T.jsx)("div",{className:"location",children:(0,T.jsx)(z.Yy,{query:{apikey:q.Z.YnxMapKey},children:(0,T.jsxs)(z.D5,{defaultState:{center:[55.751574,37.573856],zoom:12,controls:["zoomControl","fullscreenControl"]},className:"mapYandex",onClick:function(e){var t,n,a=e.get("coords");p.current?p.current.geometry.setCoordinates(a):(p.current=function(e){if(l.current)return new l.current.Placemark(e)}(a),null===(t=c.current)||void 0===t||t.geoObjects.add(p.current),null===(n=p.current)||void 0===n||n.events.add("dragend",(function(){var e;x(null===(e=p.current)||void 0===e?void 0:e.geometry.getCoordinates())})));x(a)},onLoad:function(e){e&&(l.current=e,e.ready((function(){return g(!0)})))},modules:["geoObject.addon.balloon","Placemark","geocode","geoObject.addon.hint","borders","ObjectManager","geoObject.addon.editor","control.ZoomControl","control.FullscreenControl"],children:[(0,T.jsx)(z.ah,{options:{draggable:!0},geometry:a}),(0,T.jsx)(z.Bo,{options:{float:"left"}}),(0,T.jsx)(z.Sj,{options:{float:"right"}})]})})})})})},w=n(2482),D=n.n(w),P=n(763),F=["updateData","t","productData","modalType"],Y=g.Z.Option,L={labelCol:{span:5},wrapperCol:{span:18}},A=function(e){var t,n,d=e.updateData,s=e.t,l=(e.productData,e.modalType),c=(0,m.Z)(e,F),p=(0,h.te)({isHave:!0}),f=(0,M.I0)(),I=(0,r.useState)(!1),b=(0,o.Z)(I,2),z=b[0],q=b[1],w=(0,r.useState)([]),A=(0,o.Z)(w,2),N=A[0],X=A[1],J=(0,r.useState)(""),R=(0,o.Z)(J,2),_=R[0],E=R[1],H=(0,r.useState)([]),$=(0,o.Z)(H,2),B=$[0],K=$[1],U=x.Z.useForm(),Q=(0,o.Z)(U,1)[0],V=(0,h.kx)(),G=(0,o.Z)(V,2),W=G[0],ee=G[1],te=(0,h.qH)(),ne=(0,o.Z)(te,2),ae=ne[0],oe=ne[1],re=function(){X([]),E(""),K([]),Q.resetFields()};(0,r.useEffect)((function(){if(d&&"update"===l){var e=d.data.products.map((function(e){return(0,a.Z)((0,a.Z)({},e.product),{},{quantity:e.quantity})})),t=d.data.products.map((function(e){return JSON.stringify(e.product)}));console.log("updateData: ",e),K(e),X([d.data.location.latitude,d.data.location.longitude]),E(d.data.location.address),Q.setFieldsValue({productId:t})}return function(){return re()}}),[d,l]);var ie=null===p||void 0===p||null===(t=p.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map((function(e){return(0,T.jsx)(Y,{value:JSON.stringify(e),children:e.name},e.id)})),de=B.reduce((function(e,t){return e+t.price*t.quantity}),0),se=(0,a.Z)({onOk:function(){Q.validateFields().then((function(e){console.log("data: ",e),console.log("products: ",B);var t={data:{products:B.map((function(e){var t={};return t.productId=e.id,t.quantity=e.quantity,t})),location:{latitude:N[0],longitude:N[1],address:_}},courierId:1,clientId:1};if("update"===l)W({id:d.id,value:t}).unwrap().then((function(e){200===e.statusCode&&(i.ZP.success("Muvaffaqiyati tahrirlandi."),f((0,S.sI)({openModal:!1,modalType:""})),Q.resetFields())})).catch((function(e){i.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));else if("create"===l){ae(t).unwrap().then((function(e){200===e.statusCode&&(i.ZP.success("Muvaffaqiyati saqlandi."),f((0,S.sI)({openModal:!1,modalType:""})),re())})).catch((function(e){i.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}))}})).catch((function(e){return console.log("Form error: ",e)}))},confirmLoading:!!l.length&&("create"===l?oe.isLoading:ee.isLoading),forceRender:!0},c);return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(y.Z,(0,a.Z)((0,a.Z)({},se),{},{children:[(0,T.jsxs)(x.Z,(0,a.Z)((0,a.Z)({},L),{},{form:Q,name:"basic",layout:"horizontal",autoComplete:"off",children:[(0,T.jsx)(x.Z.Item,{name:"productId",label:s("menus.products"),rules:[{required:!0,message:s("ordersMenu.select_product")}],children:(0,T.jsx)(g.Z,{mode:"multiple",allowClear:!0,showSearch:!0,placeholder:s("ordersMenu.searchProduct"),onChange:function(e){var t=e.map((function(e){var t=B.find((function(t){return t.id===JSON.parse(e).id}));return console.log("isExist: ",t),(0,a.Z)((0,a.Z)({},JSON.parse(e)),{},{quantity:t?t.quantity:1})}));K(t)},children:ie})}),!(0,P.isEmpty)(B)&&(0,T.jsx)(x.Z.Item,{label:"Tanlanganlar",children:(0,T.jsx)(Z.ZP,{itemLayout:"horizontal",bordered:!0,size:"small",dataSource:B,footer:(0,T.jsxs)(v.Z,{direction:"vertical",size:"small",children:[(0,T.jsxs)("span",{children:["Mahsulotlar soni: ",B.length]}),(0,T.jsxs)("span",{children:["Umumiy summa: ",(0,T.jsx)(D(),{value:de,displayType:"text",thousandSeparator:!0})]})]}),renderItem:function(e){return(0,T.jsx)(Z.ZP.Item,{extra:(0,T.jsxs)(v.Z,{size:5,wrap:!0,children:[(0,T.jsx)(u.Z,{size:"small",icon:(0,T.jsx)(j.Z,{}),onClick:function(){var t;e.quantity>1&&(t=e.id,K(B.map((function(e){return e.id===t&&e.quantity--,e}))))}})," ",e.quantity,(0,T.jsx)(u.Z,{size:"small",onClick:function(){return t=e.id,void K(B.map((function(e){return e.id===t&&e.quantity++,e})));var t},icon:(0,T.jsx)(k.Z,{})})]}),actions:[(0,T.jsx)(D(),{value:e.price*e.quantity,displayType:"text",thousandSeparator:!0})],children:e.name})}})}),(0,T.jsx)(x.Z.Item,{name:"map",label:s("ordersMenu.address"),rules:[{required:0===N.length,message:"Xatolik"}],children:(0,T.jsxs)(u.Z,{block:!0,onClick:function(){q(!0)},children:[0===N.length?s("ordersMenu.map_point"):s("ordersMenu.edit_map_point"),(0,T.jsx)(C.Z,{})]})})]})),(0,T.jsx)(O,{open:z,setOpen:q,coords:N,setCoords:X,address:_,setAddress:E,t:s})]}))})},N=n(713),X=n(2426),J=n.n(X),R=function(){var e,t,n,m,g,x,y=(0,f.$)().t,Z=(0,M.v9)((function(e){return e.orderSlice})),v=Z.openModal,j=Z.modalType,k=(0,M.I0)(),C=(0,r.useState)({page:1,pageSize:20}),I=(0,o.Z)(C,2),b=I[0],z=I[1],q=(0,h.FA)(b),O=(0,h.OT)(b),w=(0,h.tL)(),P=(0,o.Z)(w,2),F=P[0],Y=P[1].isLoading,L=(0,r.useState)(),X=(0,o.Z)(L,2),R=X[0],_=X[1],E=[{title:"\u2116",dataIndex:"id",key:"id",width:"5%",render:function(e,t,n){return(0,T.jsx)("span",{children:n+1})}},{title:y("time"),dataIndex:"createdAt",key:"createdAt",render:function(e,t){return J()(e).format(N.i$)}},{title:y("productsMenu.price"),dataIndex:"total",key:"total",render:function(e,t){return(0,T.jsx)(D(),{value:e,displayType:"text",thousandSeparator:!0})}},{title:y("ordersMenu.address"),dataIndex:"data",key:"data",render:function(e,t){return e.location.address}},{title:y("actions"),key:"action",width:"20%",render:function(e,t,n){return(0,T.jsxs)(d.Z,{wrap:!1,gutter:5,children:[(0,T.jsx)(s.Z,{children:(0,T.jsx)(u.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){return _(t),void k((0,S.sI)({openModal:!0,modalType:"update"}))},children:y("edit")})}),(0,T.jsx)(s.Z,{children:(0,T.jsx)(l.Z,{okText:y("yes"),cancelText:y("no"),onConfirm:function(){return t=e.id,void F({id:t}).unwrap().then((function(e){200===e.statusCode&&i.ZP.success("Muvaffaqiyati o'chirildi.")})).catch((function(e){i.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));var t},title:y("sureDelete"),children:(0,T.jsx)(u.Z,{size:"small",danger:!0,disabled:Y,children:y("delete")})})})]})}}],H={total:(null===(e=O.data)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.total)*(null===(n=O.data)||void 0===n||null===(m=n.meta)||void 0===m?void 0:m.pagesize),page:b.page,pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,pageSize:b.pageSize,current:b.page,onChange:function(e,t){z({page:e,pageSize:t})}},$={title:y("update"===j?"edit":"add"),open:v,okText:y("update"===j?"edit":"add"),cancelText:y("close"),onCancel:function(){k((0,S.sI)({openModal:!1,modalType:""})),_(void 0)}};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(d.Z,{children:[(0,T.jsx)(s.Z,{span:20,children:(0,T.jsx)(c.Z.Title,{level:2,children:y("menus.orders")})}),(0,T.jsx)(s.Z,{span:4,children:(0,T.jsx)(u.Z,{type:"primary",onClick:function(){return k((0,S.sI)({openModal:!0,modalType:"create"}))},children:y("add")})})]}),(0,T.jsx)(p.Z,{columns:E,dataSource:null===(g=O.data)||void 0===g?void 0:g.data,loading:O.isFetching,rowKey:function(e){return e.id},pagination:H}),(0,T.jsx)(A,(0,a.Z)({updateData:R,t:y,modalType:j,productData:null===(x=q.data)||void 0===x?void 0:x.data},$))]})}}}]);
//# sourceMappingURL=868.4dcc4a2f.chunk.js.map