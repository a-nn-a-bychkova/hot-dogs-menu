/*! For license information please see main.4a19549e.chunk.js.LICENSE.txt */
(this["webpackJsonphot-dogs-menu"]=this["webpackJsonphot-dogs-menu"]||[]).push([[0],{19:function(e,t,n){e.exports={header:"AppBar_header__317Ml",img:"AppBar_img__13nDv",crudText:"AppBar_crudText__UGQCY"}},23:function(e,t,n){e.exports={List:"AllHotDogsView_List__1Uclz",Item:"AllHotDogsView_Item__1HgG8"}},34:function(e,t,n){e.exports={container:"Container_container__3MeKM"}},4:function(e,t,n){e.exports={Container:"Card_Container__2X6Rq",Image:"Card_Image__vKY95",Name:"Card_Name__p3t3J",Price:"Card_Price__1OEYQ",Description:"Card_Description__1_8Il",EditBtn:"Card_EditBtn__2TEX1",BtnContainer:"Card_BtnContainer__1RaFc",Btn:"Card_Btn__4B0Ek",Input:"Card_Input__3lk_s",Textarea:"Card_Textarea__1YKNK"}},44:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),i=n.n(r),o=n(7),u=(n(44),n(34)),s=n.n(u),d=n(1);function l(e){var t=e.children;return Object(d.jsx)("div",{className:s.a.container,children:t})}var j=n(6),b=n.p+"static/media/logo.43ea7e6b.JPG",m=n(19),p=n.n(m),O=n(11),h=n.n(O),f=(n(33),n(2)),g=(Object(f.b)("menu/addHotDogRequest",(function(e){return{payload:{img:e.img,price:e.price,name:e.name,description:e.description}}})),Object(f.b)("menu/deleteHotDogRequest"),Object(f.b)("menu/fetchHotDogsRequest")),v=Object(f.b)("menu/fetchHotDogsSuccess"),x=Object(f.b)("menu/fetchHotDogsError"),_=Object(f.b)("menu/addHotDogRequest"),D=Object(f.b)("menu/addHotDogSuccess"),C=Object(f.b)("menu/addHotDogError"),N=Object(f.b)("menu/deleteHotDogRequest"),T=Object(f.b)("menu/deleteHotDogSuccess"),I=Object(f.b)("menu/deleteHotDogError"),y=Object(f.b)("menu/updateHotDogRequest"),B=Object(f.b)("menu/updateHotDogSuccess"),E=Object(f.b)("menu/updateHotDogError");h.a.defaults.baseURL="http://localhost:8080/api";var H=function(e){var t=e.name,n=e.img,a=e.price,c=e.description;return function(e){var r={name:t,img:n,price:a,description:c};e(_()),h.a.post("/hotdog",r).then((function(t){var n=t.data;return e(D(n))})).catch((function(t){return e(C(t.message))}))}},S=function(e){return function(t){t(N()),h.a.delete("/hotdog/".concat(e)).then((function(){return t(T(e))})).catch((function(e){return t(I(e.message))}))}},q=function(e){var t=e.id,n=e.currName,a=e.currImg,c=e.currPrice,r=e.currDescription;return function(e){e(y()),h.a.put("/hotdog/".concat(t),{name:n,img:a,price:c,description:r}).then((function(t){var n=t.data;e(B(n))})).catch((function(t){return e(E(t.message))}))}},k=function(e){e(g()),h.a.get("/hotdog").then((function(t){var n=t.data;return e(v(n))})).catch((function(t){return e(x(t.message))}))},M=function(e){return e.menu.hotDogs},F=n(8),P=n.n(F);function w(e){var t=e.onToggleModal,n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1],u=Object(a.useState)(""),s=Object(j.a)(u,2),l=s[0],b=s[1],m=Object(a.useState)(""),p=Object(j.a)(m,2),O=p[0],h=p[1],f=Object(a.useState)(""),g=Object(j.a)(f,2),v=g[0],x=g[1],_=Object(o.c)((function(e){return e.menu.hotDogs})),D=Object(o.b)(),C=Object(a.useRef)();function N(){i(""),h(""),x(""),b("")}return Object(a.useEffect)((function(){function e(e){C.current.contains(e.target)||t()}return window.addEventListener("mouseup",e),function(){window.removeEventListener("mouseup",e)}}),[]),Object(d.jsx)("div",{className:P.a.Overlay,children:Object(d.jsxs)("div",{className:P.a.Container,ref:C,children:[Object(d.jsx)("h2",{children:"Add new hot-dog"}),Object(d.jsxs)("form",{className:P.a.Form,children:[Object(d.jsx)("input",{className:P.a.Input,type:"text",name:"name",value:r,placeholder:"Name",onChange:function(e){e.preventDefault(),i(e.currentTarget.value)},required:!0}),Object(d.jsx)("input",{className:P.a.Input,type:"text",name:"price",value:O,placeholder:"Price",onChange:function(e){e.preventDefault(),h(e.currentTarget.value)},required:!0}),Object(d.jsx)("textarea",{className:P.a.Textarea,type:"text",name:"description",value:v,placeholder:"Description",onChange:function(e){e.preventDefault(),x(e.currentTarget.value)},required:!0}),Object(d.jsx)("input",{className:P.a.Input,name:"image",value:l,placeholder:"Image",onChange:function(e){e.preventDefault(),b(e.currentTarget.value)},required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"reset",className:P.a.Btn,onClick:function(e){e.preventDefault(),N(),t(!0)},children:"No Thanks"}),Object(d.jsx)("button",{type:"submit",className:P.a.Btn,onClick:function(e){e.preventDefault();var n=_.map((function(e){return e.name})).includes(r);""!==v?n?alert("This hotdog exists"):(D(H({name:r,img:l,price:O,description:v})),N(),t()):alert("Fill the form please")},children:"Add"})]})]})})}function R(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("header",{className:p.a.header,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:b,alt:"logo",width:"32",className:p.a.img}),Object(d.jsx)("span",{className:p.a.crudText,children:"CRUD"})]}),Object(d.jsx)("button",{type:"button",onClick:function(){c(!0)},children:"Add hot-dog"}),n&&Object(d.jsx)(w,{onToggleModal:function(){c(!1)}})]})}var A=n(4),L=n.n(A);function J(e){var t=e.id,n=e.price,c=e.name,r=e.description,i=e.img,u=Object(o.c)((function(e){return e.menu.hotDogs})),s=Object(a.useState)(c),l=Object(j.a)(s,2),b=l[0],m=l[1],p=Object(a.useState)(i),O=Object(j.a)(p,2),h=O[0],f=O[1],g=Object(a.useState)(n),v=Object(j.a)(g,2),x=v[0],_=v[1],D=Object(a.useState)(r),C=Object(j.a)(D,2),N=C[0],T=C[1],I=Object(a.useState)(!1),y=Object(j.a)(I,2),B=y[0],E=y[1],H=Object(o.b)();return Object(a.useEffect)((function(){H(q)}),[H]),Object(d.jsxs)("div",{children:[!B&&Object(d.jsxs)("div",{className:L.a.Card,children:[Object(d.jsx)("img",{src:h,className:L.a.Image}),Object(d.jsx)("h2",{className:L.a.Name,children:c}),Object(d.jsxs)("p",{className:L.a.Price,children:[n,"$"]}),Object(d.jsx)("p",{className:L.a.Description,children:r}),Object(d.jsx)("button",{type:"button",className:L.a.EditBtn,onClick:function(e,t){t.preventDefault(),E(!0)}.bind(this,t),children:"Edit"})]}),B&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{className:L.a.Form,children:[Object(d.jsx)("input",{className:L.a.Input,type:"url",name:"image",value:h,placeholder:"Image",onChange:function(e){e.preventDefault(),f(e.currentTarget.value)},required:!0}),Object(d.jsx)("input",{className:L.a.Input,type:"text",name:"name",value:b,placeholder:"Name",onChange:function(e){e.preventDefault(),m(e.currentTarget.value)},required:!0}),Object(d.jsx)("input",{className:L.a.Input,type:"text",name:"price",value:x,placeholder:"Price",onChange:function(e){e.preventDefault(),_(e.currentTarget.value)},required:!0}),Object(d.jsx)("textarea",{className:L.a.Textarea,type:"text",name:"description",value:N,placeholder:"Description",onChange:function(e){e.preventDefault(),T(e.currentTarget.value)},required:!0})]}),Object(d.jsxs)("div",{className:L.a.BtnContainer,children:[Object(d.jsx)("button",{type:"submit",className:L.a.Btn,onClick:function(e,t){var n=u.map((function(t){if(t.id!==e)return t.name})).includes(b);""!==N?n?alert("This hot-dog exists"):(H(q({id:e,currName:b,currImg:h,currPrice:x,currDescription:N})),E(!1)):alert("Fill the form please")}.bind(this,t),children:"Upgrade"}),Object(d.jsx)("button",{type:"submit",className:L.a.Btn,onClick:function(e,t){H(S(e))}.bind(this,t),children:"Delete"})]})]})]})}var K=n(23),U=n.n(K);function Y(){var e=Object(o.c)(M),t=Object(o.b)();return Object(a.useEffect)((function(){t(k),t(q)}),[t]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"All hot-dogs"}),Object(d.jsx)("ul",{className:U.a.List,children:e&&e.map((function(e){var t=e.id,n=e.img,a=e.price,c=e.name,r=e.description;return Object(d.jsx)("li",{className:U.a.Item,children:Object(d.jsx)(J,{id:t,img:n,price:a,name:c,description:r})},t)}))})]})}var z,G=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(R,{}),Object(d.jsx)(l,{children:Object(d.jsx)(Y,{})})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},V=n(13),X=n(10),Z=n(9),$=n(24),W=n(3),ee=Object(f.c)([],(z={},Object(Z.a)(z,v,(function(e,t){return t.payload})),Object(Z.a)(z,D,(function(e,t){var n=t.payload;return[].concat(Object(V.a)(e),[n])})),Object(Z.a)(z,B,(function(e,t){var n=t.payload,a=e.map((function(e){return e.id===n.id?Object($.a)(Object($.a)({},e),n):e}));return Object(V.a)(a)})),Object(Z.a)(z,T,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),z)),te=Object(W.b)({hotDogs:ee}),ne=n(35),ae=n.n(ne),ce=[].concat(Object(V.a)(Object(f.d)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})),[ae.a]),re={store:Object(f.a)({reducer:{menu:te},middleware:ce,devTools:!1})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(o.a,{store:re.store,children:Object(d.jsx)(G,{})})}),document.getElementById("root")),Q()},8:function(e,t,n){e.exports={Overlay:"Modal_Overlay__zkhIi",Container:"Modal_Container__YT0Po",Form:"Modal_Form__2jLJa",Input:"Modal_Input__1i9TP",Textarea:"Modal_Textarea__3iKi4",Btn:"Modal_Btn__2ZMQf"}}},[[73,1,2]]]);
//# sourceMappingURL=main.4a19549e.chunk.js.map