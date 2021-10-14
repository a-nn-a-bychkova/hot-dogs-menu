(this["webpackJsonphot-dogs-menu"]=this["webpackJsonphot-dogs-menu"]||[]).push([[0],{18:function(e,t,n){e.exports={header:"AppBar_header__317Ml",img:"AppBar_img__13nDv",crudText:"AppBar_crudText__UGQCY"}},19:function(e,t,n){e.exports={Container:"AllHotDogsView_Container__2zflj",List:"AllHotDogsView_List__1Uclz",Item:"AllHotDogsView_Item__1HgG8"}},32:function(e,t,n){e.exports={container:"Container_container__3MeKM"}},4:function(e,t,n){e.exports={Container:"Card_Container__2X6Rq",Image:"Card_Image__vKY95",Name:"Card_Name__p3t3J",Price:"Card_Price__1OEYQ",Description:"Card_Description__1_8Il",EditBtn:"Card_EditBtn__2TEX1",Form:"Card_Form__cB5O3",BtnContainer:"Card_BtnContainer__1RaFc",Btn:"Card_Btn__4B0Ek",Input:"Card_Input__3lk_s",Textarea:"Card_Textarea__1YKNK"}},42:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),o=n(7),s=(n(42),n(32)),u=n.n(s),l=n(1);function d(e){var t=e.children;return Object(l.jsx)("div",{className:u.a.container,children:t})}var j=n(6),b=n.p+"static/media/logo.43ea7e6b.JPG",m=n(18),p=n.n(m),O=n(11),h=n.n(O),f=n(2),g=Object(f.b)("menu/fetchHotDogsRequest"),_=Object(f.b)("menu/fetchHotDogsSuccess"),v=Object(f.b)("menu/fetchHotDogsError"),x=Object(f.b)("menu/addHotDogRequest"),C=Object(f.b)("menu/addHotDogSuccess"),D=Object(f.b)("menu/addHotDogError"),N=Object(f.b)("menu/deleteHotDogRequest"),T=Object(f.b)("menu/deleteHotDogSuccess"),I=Object(f.b)("menu/deleteHotDogError"),y=Object(f.b)("menu/updateHotDogRequest"),B=Object(f.b)("menu/updateHotDogSuccess"),E=Object(f.b)("menu/updateHotDogError");h.a.defaults.baseURL="http://localhost:8080/api";var H=function(e){var t=e.name,n=e.img,a=e.price,c=e.description;return function(e){var r={name:t,img:n,price:a,description:c};e(x()),h.a.post("/hotdog",r).then((function(t){var n=t.data;return e(C(n))})).catch((function(t){return e(D(t.message))}))}},S=function(e){return function(t){t(N()),h.a.delete("/hotdog/".concat(e)).then((function(){return t(T(e))})).catch((function(e){return t(I(e.message))}))}},F=function(e){var t=e.id,n=e.currName,a=e.currImg,c=e.currPrice,r=e.currDescription;return function(e){e(y()),h.a.put("/hotdog/".concat(t),{name:n,img:a,price:c,description:r}).then((function(t){var n=t.data;e(B(n))})).catch((function(t){return e(E(t.message))}))}},k=function(e){e(g()),h.a.get("/hotdog").then((function(t){var n=t.data;return e(_(n))})).catch((function(t){return e(v(t.message))}))},q=function(e){return e.menu.hotDogs},M=n(8),w=n.n(M);function P(e){var t=e.onToggleModal,n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),u=Object(j.a)(s,2),d=u[0],b=u[1],m=Object(a.useState)(""),p=Object(j.a)(m,2),O=p[0],h=p[1],f=Object(a.useState)(""),g=Object(j.a)(f,2),_=g[0],v=g[1],x=Object(o.c)((function(e){return e.menu.hotDogs})),C=Object(o.b)(),D=Object(a.useRef)();function N(){i(""),h(""),v(""),b("")}return Object(a.useEffect)((function(){function e(e){D.current.contains(e.target)||t()}return window.addEventListener("mouseup",e),function(){window.removeEventListener("mouseup",e)}}),[t]),Object(l.jsx)("div",{className:w.a.Overlay,children:Object(l.jsxs)("div",{className:w.a.Container,ref:D,children:[Object(l.jsx)("h2",{children:"Add new hot-dog"}),Object(l.jsxs)("form",{className:w.a.Form,children:[Object(l.jsx)("input",{className:w.a.Input,type:"text",name:"name",value:r,placeholder:"Name",onChange:function(e){e.preventDefault(),i(e.currentTarget.value)},required:!0}),Object(l.jsx)("input",{className:w.a.Input,type:"text",name:"price",value:O,placeholder:"Price",onChange:function(e){e.preventDefault(),h(e.currentTarget.value)},required:!0}),Object(l.jsx)("textarea",{className:w.a.Textarea,type:"text",name:"description",value:_,placeholder:"Description",onChange:function(e){e.preventDefault(),v(e.currentTarget.value)},required:!0}),Object(l.jsx)("input",{className:w.a.Input,type:"url",name:"image",value:d,placeholder:"Image",onChange:function(e){e.preventDefault(),b(e.currentTarget.value)},required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"reset",className:w.a.Btn,onClick:function(e){e.preventDefault(),N(),t(!0)},children:"No Thanks"}),Object(l.jsx)("button",{type:"submit",className:w.a.Btn,onClick:function(e){e.preventDefault();var n=x.map((function(e){return e.name})).includes(r);""!==_?n?alert("This hotdog exists"):(C(H({name:r,img:d,price:O,description:_})),N(),t()):alert("Fill the form please")},children:"Add"})]})]})})}function A(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("header",{className:p.a.header,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:b,alt:"logo",width:"32",className:p.a.img}),Object(l.jsx)("span",{className:p.a.crudText,children:"CRUD"})]}),Object(l.jsx)("button",{type:"button",onClick:function(){c(!0)},children:"Add hot-dog"}),n&&Object(l.jsx)(P,{onToggleModal:function(){c(!1)}})]})}var L=n(4),R=n.n(L);function J(e){var t=e.id,n=e.price,c=e.name,r=e.description,i=e.img,s=Object(o.c)((function(e){return e.menu.hotDogs})),u=Object(a.useState)(c),d=Object(j.a)(u,2),b=d[0],m=d[1],p=Object(a.useState)(i),O=Object(j.a)(p,2),h=O[0],f=O[1],g=Object(a.useState)(n),_=Object(j.a)(g,2),v=_[0],x=_[1],C=Object(a.useState)(r),D=Object(j.a)(C,2),N=D[0],T=D[1],I=Object(a.useState)(!1),y=Object(j.a)(I,2),B=y[0],E=y[1],H=Object(o.b)();return Object(a.useEffect)((function(){H(F)}),[H]),Object(l.jsxs)("div",{children:[!B&&Object(l.jsxs)("div",{className:R.a.Card,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:h,className:R.a.Image,alt:b}),Object(l.jsx)("h2",{className:R.a.Name,children:c}),Object(l.jsxs)("p",{className:R.a.Price,children:[n,"$"]}),Object(l.jsx)("p",{className:R.a.Description,children:r})]}),Object(l.jsx)("button",{type:"button",className:R.a.EditBtn,onClick:function(e,t){t.preventDefault(),E(!0)}.bind(this,t),children:"Edit"})]}),B&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{className:R.a.Form,children:[Object(l.jsx)("input",{className:R.a.Input,type:"url",name:"image",value:h,placeholder:"Image",onChange:function(e){e.preventDefault(),f(e.currentTarget.value)},required:!0}),Object(l.jsx)("input",{className:R.a.Input,type:"text",name:"name",value:b,placeholder:"Name",onChange:function(e){e.preventDefault(),m(e.currentTarget.value)},required:!0}),Object(l.jsx)("input",{className:R.a.Input,type:"text",name:"price",value:v,placeholder:"Price",onChange:function(e){e.preventDefault(),x(e.currentTarget.value)},required:!0}),Object(l.jsx)("textarea",{className:R.a.Textarea,type:"text",name:"description",value:N,placeholder:"Description",onChange:function(e){e.preventDefault(),T(e.currentTarget.value)},required:!0})]}),Object(l.jsxs)("div",{className:R.a.BtnContainer,children:[Object(l.jsx)("button",{type:"submit",className:R.a.Btn,onClick:function(e,t){var n=s.filter((function(t){return t.id!==e})).map((function(e){return e.name})).includes(b);""!==N?n?alert("This hot-dog exists"):(H(F({id:e,currName:b,currImg:h,currPrice:v,currDescription:N})),E(!1)):alert("Fill the form please")}.bind(this,t),children:"Upgrade"}),Object(l.jsx)("button",{type:"submit",className:R.a.Btn,onClick:function(e,t){H(S(e))}.bind(this,t),children:"Delete"})]})]})]})}var K=n(19),U=n.n(K);function Y(){var e=Object(o.c)(q),t=Object(o.b)();return Object(a.useEffect)((function(){t(k)}),[t]),Object(l.jsxs)("div",{className:U.a.Container,children:[Object(l.jsx)("h1",{children:"All hot-dogs"}),Object(l.jsx)("ul",{className:U.a.List,children:e&&e.map((function(e){var t=e.id,n=e.img,a=e.price,c=e.name,r=e.description;return Object(l.jsx)("li",{className:U.a.Item,children:Object(l.jsx)(J,{id:t,img:n,price:a,name:c,description:r})},t)}))})]})}var z,G=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A,{}),Object(l.jsx)(d,{children:Object(l.jsx)(Y,{})})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},V=n(13),X=n(10),Z=n(9),$=n(23),W=n(3),ee=Object(f.c)([],(z={},Object(Z.a)(z,_,(function(e,t){return t.payload})),Object(Z.a)(z,C,(function(e,t){var n=t.payload;return[].concat(Object(V.a)(e),[n])})),Object(Z.a)(z,B,(function(e,t){var n=t.payload,a=e.map((function(e){return e.id===n.id?Object($.a)(Object($.a)({},e),n):e}));return Object(V.a)(a)})),Object(Z.a)(z,T,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),z)),te=Object(W.b)({hotDogs:ee}),ne=n(33),ae=n.n(ne),ce=[].concat(Object(V.a)(Object(f.d)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})),[ae.a]),re={store:Object(f.a)({reducer:{menu:te},middleware:ce,devTools:!1})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:re.store,children:Object(l.jsx)(G,{})})}),document.getElementById("root")),Q()},8:function(e,t,n){e.exports={Overlay:"Modal_Overlay__zkhIi",Container:"Modal_Container__YT0Po",Form:"Modal_Form__2jLJa",Input:"Modal_Input__1i9TP",Textarea:"Modal_Textarea__3iKi4",Btn:"Modal_Btn__2ZMQf"}}},[[63,1,2]]]);
//# sourceMappingURL=main.20808a66.chunk.js.map