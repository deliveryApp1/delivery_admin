"use strict";(self.webpackChunkdelivery_admin=self.webpackChunkdelivery_admin||[]).push([[958],{5958:function(e,i,t){t.r(i),t.d(i,{default:function(){return S}});var n=t(1413),a=t(9439),r=t(2791),o=t(3695),d=t(6755),l=t(6106),s=t(914),u=t(7309),c=t(1520),p=t(1756),m=t(5485),h=t(2972),f=t(8272),g=t(3168),v=t(7555),Z=t(4925),x=t(1095),y=t(2862),j=t(9553),k=t(9389),T=t(7106),b=t(9286),F=t(184),w=["updateData","modalType"],C=function(e){var i="image/jpeg"===e.type||"image/png"===e.type;i||o.ZP.error("Siz faqat JPG/PNG turdagi fayllarni yuklay olasiz!");var t=e.size/1024/1024<2;return t||o.ZP.error("Surat hajmi 2MB dan kichik bo'lishi kerak!"),i&&t},I=function(e){var i=e.updateData,t=e.modalType,d=(0,Z.Z)(e,w),l=(0,v.T)(),s=x.Z.useForm(),u=(0,a.Z)(s,1)[0],c=(0,r.useState)(!1),p=(0,a.Z)(c,2),m=p[0],g=p[1],I=(0,r.useState)(),S=(0,a.Z)(I,2),z=S[0],M=S[1],P=(0,r.useState)(),q=(0,a.Z)(P,2),L=q[0],D=q[1],X=(0,h.J_)(),R=(0,a.Z)(X,2),U=R[0],_=R[1],N=(0,h._I)(),A=(0,a.Z)(N,2),E=A[0],G=A[1];(0,r.useEffect)((function(){return i&&"update"===t&&(M("http://147.182.130.242:3000/".concat(null===i||void 0===i?void 0:i.image)),u.setFieldsValue({image:null===i||void 0===i?void 0:i.image,description:null===i||void 0===i?void 0:i.description,title:null===i||void 0===i?void 0:i.title})),function(){return M(""),void u.resetFields()}}),[i,t]);var J=(0,F.jsxs)("div",{children:[m?(0,F.jsx)(T.Z,{}):(0,F.jsx)(b.Z,{}),(0,F.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),O=(0,n.Z)({onOk:function(){u.validateFields().then((function(e){var a=(0,n.Z)((0,n.Z)({},e),{},{image:L});if("update"===t)e.image=L,E({id:null===i||void 0===i?void 0:i.id,value:a}).unwrap().then((function(e){200===e.statusCode&&(o.ZP.success("Muvaffaqiyati tahrirlandi."),M(""),u.resetFields(),l((0,f.Fb)({openModal:!1,modalType:""})))})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));else if("create"===t){U(a).unwrap().then((function(e){200===e.statusCode&&(o.ZP.success("Muvaffaqiyati saqlandi."),M(""),u.resetFields(),l((0,f.Fb)({openModal:!1,modalType:""})))})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}))}})).catch((function(e){return console.log("Form error: ",e)}))},confirmLoading:!!t.length&&("create"===t?_.isLoading:G.isLoading)},d);return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(y.Z,(0,n.Z)((0,n.Z)({},O),{},{children:(0,F.jsxs)(x.Z,{form:u,name:"basic",layout:"vertical",autoComplete:"off",children:[(0,F.jsx)(x.Z.Item,{name:"image",label:"Rasm:",rules:[{required:!0,message:"Rasm yuklanmadi"}],children:(0,F.jsx)(j.Z,{name:"file",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"http://147.182.130.242:3000/image-upload",beforeUpload:C,onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&(D(e.file.response.result.url),function(e,i){var t=new FileReader;t.addEventListener("load",(function(){return i(t.result)})),t.readAsDataURL(e)}(e.file.originFileObj,(function(e){g(!1),M(e)}))):g(!0)},maxCount:1,children:z?(0,F.jsx)("img",{src:z,alt:"productImage",style:{width:"100%"}}):J})}),(0,F.jsx)(x.Z.Item,{name:"title",label:"Sarlavha:",rules:[{required:!0,message:"Iltimos Sarlavhani kiriting"}],children:(0,F.jsx)(k.Z,{})}),(0,F.jsx)(x.Z.Item,{name:"description",label:"Tavsif:",rules:[{required:!0,message:"Iltimos Tavsifini kiriting"}],children:(0,F.jsx)(k.Z,{})})]})}))})},S=function(){var e,i,t,Z=(0,h.XL)(),x=(0,a.Z)(Z,2),y=x[0],j=x[1].isLoading,k=(0,g.$)().t,T=(0,v.C)((function(e){return e.discountSlice})),b=T.openModal,w=T.modalType,C=(0,v.T)(),S=(0,r.useState)({title:"",description:"",image:""}),z=(0,a.Z)(S,2),M=z[0],P=z[1],q=(0,r.useState)(1),L=(0,a.Z)(q,2),D=L[0],X=L[1],R=(0,h.I6)();console.log(null===(e=R.data)||void 0===e?void 0:e.meta);var U=[{title:"\u2116",dataIndex:"id",key:"id",width:"5%",render:function(e,i,t){return(0,F.jsx)("span",{children:t+1})}},{title:"Rasim",dataIndex:"image",key:"image",width:"5%",render:function(e,i){return(0,F.jsx)(d.Z,{width:30,height:30,src:"http://147.182.130.242:3000/".concat(i.image)})}},{title:"Name",dataIndex:"title",key:"title",width:"30%",render:function(e){return(0,F.jsx)("span",{children:e})}},{title:"Description",dataIndex:"description",key:"description",width:"40%",render:function(e){return(0,F.jsx)("span",{children:e})}},{title:"Action",key:"action",width:"20%",render:function(e){return(0,F.jsxs)(l.Z,{wrap:!1,gutter:5,children:[(0,F.jsx)(s.Z,{children:(0,F.jsx)(u.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){return P(e),void C((0,f.Fb)({openModal:!0,modalType:"update"}))},children:k("edit")})}),(0,F.jsx)(s.Z,{children:(0,F.jsx)(c.Z,{okText:k("yes"),cancelText:k("no"),onConfirm:function(){return i=e.id,void y({id:i}).unwrap().then((function(e){200===e.statusCode&&o.ZP.success("Muvaffaqiyati ochirildi.")})).catch((function(e){o.ZP.error("Xatolik yuz berdi. Xatolik: ".concat(e.message))}));var i},title:k("sureDelete"),children:(0,F.jsx)(u.Z,{size:"small",danger:!0,disabled:j,children:k("delete")})})})]})}}],_={title:"Diskont qo'shish",open:b,okText:k("update"===w?"edit":"add"),cancelText:k("close"),onCancel:function(){C((0,f.Fb)({openModal:!1,modalType:""})),P(void 0)}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(l.Z,{children:[(0,F.jsx)(s.Z,{span:20,children:(0,F.jsx)(m.Z.Title,{level:2,children:k("menus.discount")})}),(0,F.jsx)(s.Z,{span:4,children:(0,F.jsx)(u.Z,{type:"primary",onClick:function(){return C((0,f.Fb)({openModal:!0,modalType:"create"}))},children:k("add")})})]}),(0,F.jsx)(p.Z,{columns:U,dataSource:null===(i=R.data)||void 0===i?void 0:i.data,loading:R.isFetching,pagination:{total:null===(t=R.data)||void 0===t?void 0:t.data.length,pageSize:5,current:D,onChange:function(e){return function(e){X(e)}(e)},showSizeChanger:!1}}),(0,F.jsx)(I,(0,n.Z)({updateData:M,modalType:w},_))]})}},7555:function(e,i,t){t.d(i,{C:function(){return r},T:function(){return a}});var n=t(5010),a=function(){return(0,n.I0)()},r=n.v9}}]);
//# sourceMappingURL=958.7fb725f8.chunk.js.map