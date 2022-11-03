"use strict";(self.webpackChunkdelivery_admin=self.webpackChunkdelivery_admin||[]).push([[821],{713:function(e,n,a){a.d(n,{Pk:function(){return l},i$:function(){return s},iM:function(){return o},uJ:function(){return i},vc:function(){return d}});var t=a(2426),r=a.n(t),i=[{id:2,name:"ADMIN"},{id:3,name:"COURIER"}],o=[{text:"Pending",value:"PENDING"},{text:"In progress",value:"INPROGRESS"},{text:"On the way",value:"ONTHEWAY"},{text:"Delivered",value:"DELIVERED"}],l=function(e){return e&&e>=r()().endOf("day")},d="DD.MM.YYYY",s="DD.MM.YYYY HH:mm:ss"},8821:function(e,n,a){a.r(n),a.d(n,{default:function(){return S}});var t=a(1413),r=a(9439),i=a(2791),o=a(3695),l=a(6106),d=a(914),s=a(7309),u=a(1520),c=a(5485),p=a(9184),h=a(3168),m=a(4925),f=a(2972),g=a(3734),Z=a(1095),x=a(2862),v=a(9389),y=a(3344),j=a(1666),k=a(5010),w=a(713),M=a(1490),b=a(2426),C=a.n(b),I=a(184),D=["updateData","t","modalType"],T=g.Z.Option,F={labelCol:{span:8},wrapperCol:{span:14}},P=function(e){var n=e.updateData,a=e.t,l=e.modalType,d=(0,m.Z)(e,D),s=(0,k.I0)(),u=Z.Z.useForm(),c=(0,r.Z)(u,1)[0],p=(0,f.rZ)(),h=(0,r.Z)(p,2),b=h[0],P=h[1],S=(0,f.Z)(),z=(0,r.Z)(S,2),Y=z[0],q=z[1];(0,i.useEffect)((function(){if(n&&"update"===l){var e=new Date(n.birthday);c.setFieldsValue({username:null===n||void 0===n?void 0:n.username,password:n.password,phone:null===n||void 0===n?void 0:n.phone,role:null===n||void 0===n?void 0:n.role,price:null===n||void 0===n?void 0:n.price,birthday:C()("".concat(e.getDate(),".").concat(e.getMonth()+1,".").concat(e.getFullYear()),w.vc)})}return function(){c.resetFields()}}),[n,l]);var E=w.uJ.map((function(e){return(0,I.jsx)(T,{value:e.name,children:e.name},e.id)})),R=(0,t.Z)({onOk:function(){c.validateFields().then((function(e){var a=(0,t.Z)((0,t.Z)({},e),{},{phone:e.phone.toString()});if(console.log("formData: ",a),"update"===l)b({id:n.id,value:a}).unwrap().then((function(e){200===e.statusCode&&(o.ZP.success("Muvaffaqiyati tahrirlandi."),s((0,M.de)({openModal:!1,modalType:""})),c.resetFields())})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));else if("create"===l){Y(a).unwrap().then((function(e){200===e.statusCode&&(o.ZP.success("Muvaffaqiyati saqlandi."),s((0,M.de)({openModal:!1,modalType:""})),c.resetFields())})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}))}})).catch((function(e){return console.log("Form error: ",e)}))},confirmLoading:!!l.length&&("create"===l?q.isLoading:P.isLoading),forceRender:!0},d);return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(x.Z,(0,t.Z)((0,t.Z)({},R),{},{children:(0,I.jsxs)(Z.Z,(0,t.Z)((0,t.Z)({},F),{},{form:c,name:"basic",layout:"horizontal",autoComplete:"off",children:[(0,I.jsx)(Z.Z.Item,{name:"username",label:a("usersMenu.username"),rules:[{required:!0,message:"Username kiriting"}],children:(0,I.jsx)(v.Z,{placeholder:"Username kiriting"})}),(0,I.jsx)(Z.Z.Item,{name:"password",label:"Parol:",rules:[{required:"create"===l,message:"Parol kiriting"}],children:(0,I.jsx)(v.Z,{placeholder:"Parol kiriting"})}),(0,I.jsx)(Z.Z.Item,{name:"phone",label:a("usersMenu.phone_number"),rules:[{type:"regexp",pattern:new RegExp(/^[0-9]*$/gm)},{required:!0,message:"Noto'g'ri format"}],children:(0,I.jsx)(y.Z,{style:{width:"100%"},placeholder:"Telefon raqamini kiriting"})}),(0,I.jsx)(Z.Z.Item,{name:"role",label:a("usersMenu.role"),rules:[{required:!0,message:"Rolini tanlang"}],children:(0,I.jsx)(g.Z,{allowClear:!0,placeholder:"Rolini tanlang",children:E})}),(0,I.jsx)(Z.Z.Item,{name:"birthday",label:a("usersMenu.birthday"),rules:[{required:!0,message:"Tug'ilgan sanasini kiriting"}],children:(0,I.jsx)(j.Z,{allowClear:!0,showNow:!0,format:w.vc,style:{width:"100%"},disabledDate:w.Pk,placeholder:"Sanani kiriting"})})]}))}))})},S=function(){var e,n,a,m,g,Z=(0,h.$)().t,x=(0,k.v9)((function(e){return e.usersSlice})),v=x.openModal,y=x.modalType,j=(0,k.I0)(),b=(0,i.useState)({page:1,pageSize:20}),D=(0,r.Z)(b,2),T=D[0],F=D[1],S=(0,f.xY)(T),z=(0,f.C5)(),Y=(0,r.Z)(z,2),q=Y[0],E=Y[1].isLoading,R=(0,i.useState)(),O=(0,r.Z)(R,2),N=O[0],X=O[1],L=[{title:"\u2116",dataIndex:"id",key:"id",width:"5%",render:function(e,n,a){return(0,I.jsx)("span",{children:a+1})}},{title:Z("usersMenu.username"),dataIndex:"username",key:"username"},{title:Z("usersMenu.phone_number"),dataIndex:"phone",key:"phone",render:function(e,n){return(0,I.jsx)(I.Fragment,{children:e})}},{title:Z("usersMenu.role"),dataIndex:"role",key:"role",render:function(e,n){return(0,I.jsx)(I.Fragment,{children:e})}},{title:Z("usersMenu.birthday"),dataIndex:"birthday",key:"birthday",render:function(e,n){return(0,I.jsx)(I.Fragment,{children:C()(e).format(w.vc)})}},{title:Z("actions"),key:"action",width:"20%",render:function(e,n,a){return(0,I.jsxs)(l.Z,{wrap:!1,gutter:5,children:[(0,I.jsx)(d.Z,{children:(0,I.jsx)(s.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){return X(e),void j((0,M.de)({openModal:!0,modalType:"update"}))},children:Z("edit")})}),(0,I.jsx)(d.Z,{children:(0,I.jsx)(u.Z,{okText:Z("yes"),cancelText:Z("no"),onConfirm:function(){return n=e.id,void q({id:n}).unwrap().then((function(e){200===e.statusCode&&o.ZP.success("Muvaffaqiyati o'chirildi.")})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));var n},title:Z("sureDelete"),children:(0,I.jsx)(s.Z,{size:"small",danger:!0,disabled:E,children:Z("delete")})})})]})}}],_={title:Z("update"===y?"edit":"add"),open:v,okText:Z("update"===y?"edit":"add"),cancelText:Z("close"),onCancel:function(){j((0,M.de)({openModal:!1,modalType:""})),X(void 0)}},H={total:(null===(e=S.data)||void 0===e||null===(n=e.meta)||void 0===n?void 0:n.total)*(null===(a=S.data)||void 0===a||null===(m=a.meta)||void 0===m?void 0:m.pagesize),page:T.page,pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,pageSize:T.pageSize,current:T.page,onChange:function(e,n){F({page:e,pageSize:n})}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(l.Z,{children:[(0,I.jsx)(d.Z,{span:20,children:(0,I.jsx)(c.Z.Title,{level:2,children:Z("menus.users")})}),(0,I.jsx)(d.Z,{span:4,children:(0,I.jsx)(s.Z,{type:"primary",onClick:function(){return j((0,M.de)({openModal:!0,modalType:"create"}))},children:Z("add")})})]}),(0,I.jsx)(p.Z,{columns:L,dataSource:null===(g=S.data)||void 0===g?void 0:g.data,loading:S.isFetching,pagination:H,rowKey:function(e){return e.id}}),(0,I.jsx)(P,(0,t.Z)({updateData:N,t:Z,modalType:y},_))]})}}}]);
//# sourceMappingURL=821.a9d2dc68.chunk.js.map