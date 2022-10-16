"use strict";(self.webpackChunkdelivery_admin=self.webpackChunkdelivery_admin||[]).push([[821],{713:function(e,n,a){a.d(n,{Pk:function(){return o},i$:function(){return d},uJ:function(){return t},vc:function(){return l}});var r=a(2426),i=a.n(r),t=[{id:2,name:"ADMIN"},{id:3,name:"COURIER"}],o=function(e){return e&&e>=i()().endOf("day")},l="DD.MM.YYYY",d="DD.MM.YYYY HH:mm:ss"},8821:function(e,n,a){a.r(n),a.d(n,{default:function(){return S}});var r=a(1413),i=a(9439),t=a(2791),o=a(3695),l=a(6106),d=a(914),s=a(7309),u=a(1520),c=a(5485),p=a(9184),h=a(3168),m=a(4925),f=a(2972),g=a(3734),Z=a(1095),x=a(2862),v=a(9389),y=a(3344),j=a(1666),k=a(5010),b=a(713),w=a(1490),M=a(2426),C=a.n(M),T=a(184),F=["updateData","t","modalType"],I=g.Z.Option,z={labelCol:{span:8},wrapperCol:{span:14}},D=function(e){var n=e.updateData,a=e.t,l=e.modalType,d=(0,m.Z)(e,F),s=(0,k.I0)(),u=Z.Z.useForm(),c=(0,i.Z)(u,1)[0],p=(0,f.rZ)(),h=(0,i.Z)(p,2),M=h[0],D=h[1],S=(0,f.Z)(),P=(0,i.Z)(S,2),q=P[0],Y=P[1];(0,t.useEffect)((function(){if(n&&"update"===l){var e=new Date(n.birthday);c.setFieldsValue({username:null===n||void 0===n?void 0:n.username,password:n.password,phone:null===n||void 0===n?void 0:n.phone,role:null===n||void 0===n?void 0:n.role,price:null===n||void 0===n?void 0:n.price,birthday:C()("".concat(e.getDate(),".").concat(e.getMonth()+1,".").concat(e.getFullYear()),b.vc)})}return function(){c.resetFields()}}),[n,l]);var R=b.uJ.map((function(e){return(0,T.jsx)(I,{value:e.name,children:e.name},e.id)})),X=(0,r.Z)({onOk:function(){c.validateFields().then((function(e){var a=(0,r.Z)((0,r.Z)({},e),{},{phone:e.phone.toString()});if(console.log("formData: ",a),"update"===l)M({id:n.id,value:a}).unwrap().then((function(e){200===e.statusCode&&(o.ZP.success("Muvaffaqiyati tahrirlandi."),s((0,w.de)({openModal:!1,modalType:""})),c.resetFields())})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));else if("create"===l){q(a).unwrap().then((function(e){200===e.statusCode&&(o.ZP.success("Muvaffaqiyati saqlandi."),s((0,w.de)({openModal:!1,modalType:""})),c.resetFields())})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}))}})).catch((function(e){return console.log("Form error: ",e)}))},confirmLoading:!!l.length&&("create"===l?Y.isLoading:D.isLoading),forceRender:!0},d);return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(x.Z,(0,r.Z)((0,r.Z)({},X),{},{children:(0,T.jsxs)(Z.Z,(0,r.Z)((0,r.Z)({},z),{},{form:c,name:"basic",layout:"horizontal",autoComplete:"off",children:[(0,T.jsx)(Z.Z.Item,{name:"username",label:a("usersMenu.username"),rules:[{required:!0,message:"Username kiriting"}],children:(0,T.jsx)(v.Z,{placeholder:"Username kiriting"})}),(0,T.jsx)(Z.Z.Item,{name:"password",label:"Parol:",rules:[{required:"create"===l,message:"Parol kiriting"}],children:(0,T.jsx)(v.Z,{placeholder:"Parol kiriting"})}),(0,T.jsx)(Z.Z.Item,{name:"phone",label:a("usersMenu.phone_number"),rules:[{type:"regexp",pattern:new RegExp(/^[0-9]*$/gm)},{required:!0,message:"Noto'g'ri format"}],children:(0,T.jsx)(y.Z,{style:{width:"100%"},placeholder:"Telefon raqamini kiriting"})}),(0,T.jsx)(Z.Z.Item,{name:"role",label:a("usersMenu.role"),rules:[{required:!0,message:"Rolini tanlang"}],children:(0,T.jsx)(g.Z,{allowClear:!0,placeholder:"Rolini tanlang",children:R})}),(0,T.jsx)(Z.Z.Item,{name:"birthday",label:a("usersMenu.birthday"),rules:[{required:!0,message:"Tug'ilgan sanasini kiriting"}],children:(0,T.jsx)(j.Z,{allowClear:!0,showNow:!0,format:b.vc,style:{width:"100%"},disabledDate:b.Pk,placeholder:"Sanani kiriting"})})]}))}))})},S=function(){var e,n,a,m,g,Z=(0,h.$)().t,x=(0,k.v9)((function(e){return e.usersSlice})),v=x.openModal,y=x.modalType,j=(0,k.I0)(),M=(0,t.useState)({page:1,pageSize:20}),F=(0,i.Z)(M,2),I=F[0],z=F[1],S=(0,f.xY)(I),P=(0,f.C5)(),q=(0,i.Z)(P,2),Y=q[0],R=q[1].isLoading,X=(0,t.useState)(),O=(0,i.Z)(X,2),L=O[0],_=O[1],E=[{title:"\u2116",dataIndex:"id",key:"id",width:"5%",render:function(e,n,a){return(0,T.jsx)("span",{children:a+1})}},{title:Z("usersMenu.username"),dataIndex:"username",key:"username"},{title:Z("usersMenu.phone_number"),dataIndex:"phone",key:"phone",render:function(e,n){return(0,T.jsx)(T.Fragment,{children:e})}},{title:Z("usersMenu.role"),dataIndex:"role",key:"role",render:function(e,n){return(0,T.jsx)(T.Fragment,{children:e})}},{title:Z("usersMenu.birthday"),dataIndex:"birthday",key:"birthday",render:function(e,n){return(0,T.jsx)(T.Fragment,{children:C()(e).format(b.vc)})}},{title:Z("actions"),key:"action",width:"20%",render:function(e,n,a){return(0,T.jsxs)(l.Z,{wrap:!1,gutter:5,children:[(0,T.jsx)(d.Z,{children:(0,T.jsx)(s.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){return _(e),void j((0,w.de)({openModal:!0,modalType:"update"}))},children:Z("edit")})}),(0,T.jsx)(d.Z,{children:(0,T.jsx)(u.Z,{okText:Z("yes"),cancelText:Z("no"),onConfirm:function(){return n=e.id,void Y({id:n}).unwrap().then((function(e){200===e.statusCode&&o.ZP.success("Muvaffaqiyati o'chirildi.")})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));var n},title:Z("sureDelete"),children:(0,T.jsx)(s.Z,{size:"small",danger:!0,disabled:R,children:Z("delete")})})})]})}}],J={title:Z("update"===y?"edit":"add"),open:v,okText:Z("update"===y?"edit":"add"),cancelText:Z("close"),onCancel:function(){j((0,w.de)({openModal:!1,modalType:""})),_(void 0)}},N={total:(null===(e=S.data)||void 0===e||null===(n=e.meta)||void 0===n?void 0:n.total)*(null===(a=S.data)||void 0===a||null===(m=a.meta)||void 0===m?void 0:m.pagesize),page:I.page,pageSizeOptions:["20","50","100"],showQuickJumper:!0,showSizeChanger:!0,pageSize:I.pageSize,current:I.page,onChange:function(e,n){z({page:e,pageSize:n})}};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(l.Z,{children:[(0,T.jsx)(d.Z,{span:20,children:(0,T.jsx)(c.Z.Title,{level:2,children:Z("menus.users")})}),(0,T.jsx)(d.Z,{span:4,children:(0,T.jsx)(s.Z,{type:"primary",onClick:function(){return j((0,w.de)({openModal:!0,modalType:"create"}))},children:Z("add")})})]}),(0,T.jsx)(p.Z,{columns:E,dataSource:null===(g=S.data)||void 0===g?void 0:g.data,loading:S.isFetching,pagination:N,rowKey:function(e){return e.id}}),(0,T.jsx)(D,(0,r.Z)({updateData:L,t:Z,modalType:y},J))]})}}}]);
//# sourceMappingURL=821.fa623efd.chunk.js.map