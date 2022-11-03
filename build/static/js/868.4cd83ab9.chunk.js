"use strict";(self.webpackChunkdelivery_admin=self.webpackChunkdelivery_admin||[]).push([[868],{713:function(e,t,n){n.d(t,{Pk:function(){return d},i$:function(){return u},iM:function(){return i},uJ:function(){return o},vc:function(){return s}});var r=n(2426),a=n.n(r),o=[{id:2,name:"ADMIN"},{id:3,name:"COURIER"}],i=[{text:"Pending",value:"PENDING"},{text:"In progress",value:"INPROGRESS"},{text:"On the way",value:"ONTHEWAY"},{text:"Delivered",value:"DELIVERED"}],d=function(e){return e&&e>=a()().endOf("day")},s="DD.MM.YYYY",u="DD.MM.YYYY HH:mm:ss"},868:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(1413),a=n(9439),o=n(2791),i=n(3695),d=n(6106),s=n(914),u=n(7309),l=n(1520),c=n(5485),p=n(9184),f=n(3168),h=n(4925),m=n(2972),v=n(3734),x=n(1095),g=n(2862),y=n(2126),j=n(3099),Z=n(2143),M=n(9286),I=n(9516),S=n(9336),k=n(5010),C=n(8885),b=n(7083),E=n(3405),O=n(4075),D=n(184),w=function(e){var t=e.open,n=e.setOpen,r=e.coords,i=e.setCoords,d=e.address,s=e.setAddress,u=e.t,l=(0,o.useRef)(),c=(0,o.useRef)(),p=(0,o.useRef)(),f=(0,o.useState)(!1),h=(0,a.Z)(f,2),m=h[0],v=h[1],x=function(e){var t,n;i(e),null===l||void 0===l||null===(t=l.current)||void 0===t||null===(n=t.geocode(e))||void 0===n||n.then((function(e){var t=e.geoObjects.get(0),n=[(t.getLocalities().length,t.getAddressLine())].filter(Boolean).join(", ");s(n)}))};return(0,D.jsx)(C.Z,{width:"45%",style:{padding:0},title:"".concat(u("ordersMenu.address"),": ").concat(d),placement:"right",onClose:function(){n(!1)},open:t,children:(0,D.jsx)(b.Z,{spinning:!m,children:(0,D.jsx)("div",{className:"location",children:(0,D.jsx)(E.Yy,{query:{apikey:O.Z.YnxMapKey},children:(0,D.jsxs)(E.D5,{defaultState:{center:[55.751574,37.573856],zoom:12,controls:["zoomControl","fullscreenControl"]},className:"mapYandex",onClick:function(e){var t,n,r=e.get("coords");p.current?p.current.geometry.setCoordinates(r):(p.current=function(e){if(l.current)return new l.current.Placemark(e)}(r),null===(t=c.current)||void 0===t||t.geoObjects.add(p.current),null===(n=p.current)||void 0===n||n.events.add("dragend",(function(){var e;x(null===(e=p.current)||void 0===e?void 0:e.geometry.getCoordinates())})));x(r)},onLoad:function(e){e&&(l.current=e,e.ready((function(){return v(!0)})))},modules:["geoObject.addon.balloon","Placemark","geocode","geoObject.addon.hint","borders","ObjectManager","geoObject.addon.editor","control.ZoomControl","control.FullscreenControl"],children:[(0,D.jsx)(E.ah,{options:{draggable:!0},geometry:r}),(0,D.jsx)(E.Bo,{options:{float:"left"}}),(0,D.jsx)(E.Sj,{options:{float:"right"}})]})})})})})},N=n(713),T=n(2482),z=n.n(T),P=n(763),q=["updateData","t","productData","modalType"],R=v.Z.Option,F={labelCol:{span:5},wrapperCol:{span:18}},Y=function(e){var t,n,d=e.updateData,s=e.t,l=(e.productData,e.modalType),c=(0,h.Z)(e,q),p=(0,m.te)({isHave:!0}),f=(0,k.I0)(),C=(0,o.useState)(!1),b=(0,a.Z)(C,2),E=b[0],O=b[1],T=(0,o.useState)([]),Y=(0,a.Z)(T,2),L=Y[0],A=Y[1],_=(0,o.useState)(""),G=(0,a.Z)(_,2),H=G[0],X=G[1],J=(0,o.useState)([]),V=(0,a.Z)(J,2),W=V[0],$=V[1],B=x.Z.useForm(),K=(0,a.Z)(B,1)[0],Q=(0,m.kx)(),U=(0,a.Z)(Q,2),ee=U[0],te=U[1],ne=(0,m.qH)(),re=(0,a.Z)(ne,2),ae=re[0],oe=re[1],ie=function(){A([]),X(""),$([]),K.resetFields()};(0,o.useEffect)((function(){if(d&&"update"===l){var e=d.data.products.map((function(e){return(0,r.Z)((0,r.Z)({},e.product),{},{quantity:e.quantity})})),t=d.data.products.map((function(e){return JSON.stringify(e.product)}));$(e),A([d.data.location.latitude,d.data.location.longitude]),X(d.data.location.address),K.setFieldsValue({productId:t,status:d.status})}return function(){return ie()}}),[d,l]);var de=null===p||void 0===p||null===(t=p.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map((function(e){return(0,D.jsx)(R,{value:JSON.stringify(e),children:e.name},e.id)})),se=N.iM.map((function(e){switch(e.value){case"PENDING":return(0,D.jsx)(R,{value:e.value,children:s("ordersMenu.pending")},e.value);case"INPROGRESS":return(0,D.jsx)(R,{value:e.value,children:s("ordersMenu.inprogress")},e.value);case"ONTHEWAY":return(0,D.jsx)(R,{value:e.value,children:s("ordersMenu.ontheway")},e.value);case"DELIVERED":return(0,D.jsx)(R,{value:e.value,children:s("ordersMenu.delivered")},e.value)}})),ue=W.reduce((function(e,t){return e+t.price*t.quantity}),0),le=(0,r.Z)({onOk:function(){K.validateFields().then((function(e){var t={data:{products:W.map((function(e){var t={};return t.productId=e.id,t.quantity=e.quantity,t})),location:{latitude:L[0],longitude:L[1],address:H}},status:e.status,courierId:1,clientId:1};if("update"===l)ee({id:d.id,value:t}).unwrap().then((function(e){200===e.statusCode&&(i.ZP.success("Muvaffaqiyati tahrirlandi."),f((0,S.sI)({openModal:!1,modalType:""})),K.resetFields())})).catch((function(e){i.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));else if("create"===l){ae(t).unwrap().then((function(e){200===e.statusCode&&(i.ZP.success("Muvaffaqiyati saqlandi."),f((0,S.sI)({openModal:!1,modalType:""})),ie())})).catch((function(e){i.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}))}})).catch((function(e){return console.log("Form error: ",e)}))},confirmLoading:!!l.length&&("create"===l?oe.isLoading:te.isLoading),forceRender:!0},c);return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(g.Z,(0,r.Z)((0,r.Z)({},le),{},{children:[(0,D.jsxs)(x.Z,(0,r.Z)((0,r.Z)({},F),{},{form:K,name:"basic",layout:"horizontal",autoComplete:"off",children:[(0,D.jsx)(x.Z.Item,{name:"productId",label:s("menus.products"),rules:[{required:!0,message:s("ordersMenu.select_product")}],children:(0,D.jsx)(v.Z,{mode:"multiple",allowClear:!0,showSearch:!0,placeholder:s("ordersMenu.searchProduct"),onChange:function(e){var t=e.map((function(e){var t=W.find((function(t){return t.id===JSON.parse(e).id}));return console.log("isExist: ",t),(0,r.Z)((0,r.Z)({},JSON.parse(e)),{},{quantity:t?t.quantity:1})}));$(t)},children:de})}),!(0,P.isEmpty)(W)&&(0,D.jsx)(x.Z.Item,{label:s("ordersMenu.choosen"),children:(0,D.jsx)(y.ZP,{itemLayout:"horizontal",bordered:!0,size:"small",dataSource:W,footer:(0,D.jsxs)(j.Z,{direction:"vertical",size:"small",children:[(0,D.jsxs)("span",{children:[s("ordersMenu.product_type"),": ",W.length]}),(0,D.jsxs)("span",{children:[s("ordersMenu.total_sum"),": ",(0,D.jsx)(z(),{value:ue,displayType:"text",thousandSeparator:!0})," (",s("ruble"),")"]})]}),renderItem:function(e){return(0,D.jsx)(y.ZP.Item,{extra:(0,D.jsxs)(j.Z,{size:5,wrap:!0,children:[(0,D.jsx)(u.Z,{size:"small",icon:(0,D.jsx)(Z.Z,{}),onClick:function(){var t;e.quantity>1&&(t=e.id,$(W.map((function(e){return e.id===t&&e.quantity--,e}))))}})," ",e.quantity,(0,D.jsx)(u.Z,{size:"small",onClick:function(){return t=e.id,void $(W.map((function(e){return e.id===t&&e.quantity++,e})));var t},icon:(0,D.jsx)(M.Z,{})})]}),actions:[(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(z(),{value:e.price*e.quantity,displayType:"text",thousandSeparator:!0})," ","(",s("ruble"),")"]})],children:e.name})}})}),(0,D.jsx)(x.Z.Item,{name:"map",label:s("ordersMenu.address"),rules:[{required:0===L.length,message:"Xatolik"}],children:(0,D.jsxs)(u.Z,{block:!0,onClick:function(){O(!0)},children:[0===L.length?s("ordersMenu.map_point"):s("ordersMenu.edit_map_point"),(0,D.jsx)(I.Z,{})]})}),"update"===l?(0,D.jsx)(x.Z.Item,{name:"status",label:s("ordersMenu.order_status"),children:(0,D.jsx)(v.Z,{allowClear:!0,placeholder:"Select status",children:se})}):null]})),(0,D.jsx)(w,{open:E,setOpen:O,coords:L,setCoords:A,address:H,setAddress:X,t:s})]}))})},L=n(2426),A=n.n(L),_=function(){var e,t,n,h,v,x,g=(0,f.$)().t,y=(0,k.v9)((function(e){return e.orderSlice})),j=y.openModal,Z=y.modalType,M=(0,k.I0)(),I=(0,o.useState)({page:1,pageSize:20}),C=(0,a.Z)(I,2),b=C[0],E=C[1],O=(0,m.FA)(b),w=(0,m.OT)(b),T=(0,m.tL)(),P=(0,a.Z)(T,2),q=P[0],R=P[1].isLoading,F=(0,o.useState)(),L=(0,a.Z)(F,2),_=L[0],G=L[1],H=[{title:"\u2116",dataIndex:"id",key:"id",width:"5%",render:function(e,t,n){return(0,D.jsx)("span",{children:n+1})}},{title:g("time"),dataIndex:"createdAt",key:"createdAt",render:function(e,t){return A()(e).format(N.i$)}},{title:(0,D.jsxs)(D.Fragment,{children:[g("productsMenu.price")," ","(",g("ruble"),")"]}),dataIndex:"total",key:"total",render:function(e,t){return(0,D.jsx)(z(),{value:e,displayType:"text",thousandSeparator:!0})}},{title:g("ordersMenu.address"),dataIndex:"data",key:"data",render:function(e,t){return e.location.address}},{title:g("ordersMenu.client"),dataIndex:"user",key:"user",render:function(e,t){return(0,D.jsxs)(D.Fragment,{children:[g("usersMenu.username"),": ",(0,D.jsx)("b",{children:e.username?e.username:"-"}),(0,D.jsx)("br",{}),g("usersMenu.phone_number"),": ",(0,D.jsx)("b",{children:e.phone})]})}},{title:g("ordersMenu.order_status"),dataIndex:"status",key:"status",render:function(e){switch(e){case"PENDING":return g("ordersMenu.pending");case"INPROGRESS":return g("ordersMenu.inprogress");case"ONTHEWAY":return g("ordersMenu.ontheway");case"DELIVERED":return g("ordersMenu.delivered")}},filters:[{text:g("ordersMenu.pending"),value:"PENDING"},{text:g("ordersMenu.inprogress"),value:"INPROGRESS"},{text:g("ordersMenu.ontheway"),value:"ONTHEWAY"},{text:g("ordersMenu.delivered"),value:"DELIVERED"}],onFilter:function(e,t){return t.status.includes(e)}},{title:g("actions"),key:"action",width:"20%",render:function(e,t,n){return(0,D.jsxs)(d.Z,{wrap:!1,gutter:5,children:[(0,D.jsx)(s.Z,{children:(0,D.jsx)(u.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){return G(t),void M((0,S.sI)({openModal:!0,modalType:"update"}))},children:g("edit")})}),(0,D.jsx)(s.Z,{children:(0,D.jsx)(l.Z,{okText:g("yes"),cancelText:g("no"),onConfirm:function(){return t=e.id,void q({id:t}).unwrap().then((function(e){200===e.statusCode&&i.ZP.success("Muvaffaqiyati o'chirildi.")})).catch((function(e){i.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));var t},title:g("sureDelete"),children:(0,D.jsx)(u.Z,{size:"small",danger:!0,disabled:R,children:g("delete")})})})]})}}],X={total:(null===(e=w.data)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.total)*(null===(n=w.data)||void 0===n||null===(h=n.meta)||void 0===h?void 0:h.pagesize),page:b.page,pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,pageSize:b.pageSize,current:b.page,onChange:function(e,t){E({page:e,pageSize:t})}},J={title:g("update"===Z?"edit":"add"),open:j,okText:g("update"===Z?"edit":"add"),cancelText:g("close"),onCancel:function(){M((0,S.sI)({openModal:!1,modalType:""})),G(void 0)}};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(d.Z,{children:[(0,D.jsx)(s.Z,{span:20,children:(0,D.jsx)(c.Z.Title,{level:2,children:g("menus.orders")})}),(0,D.jsx)(s.Z,{span:4,children:(0,D.jsx)(u.Z,{type:"primary",onClick:function(){return M((0,S.sI)({openModal:!0,modalType:"create"}))},children:g("add")})})]}),(0,D.jsx)(p.Z,{columns:H,dataSource:null===(v=w.data)||void 0===v?void 0:v.data,loading:w.isFetching,rowKey:function(e){return e.id},pagination:X}),(0,D.jsx)(Y,(0,r.Z)({updateData:_,t:g,modalType:Z,productData:null===(x=O.data)||void 0===x?void 0:x.data},J))]})}}}]);
//# sourceMappingURL=868.4cd83ab9.chunk.js.map