(this.webpackJsonplogin_page=this.webpackJsonplogin_page||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(15),a=n.n(r),s=(n(40),n(11)),o=(n(41),n(42),n(23)),d=n(35),l=n(60),u=n(61),j=n(62),b=n(63),m=n(64),h=n(65),O=n(3),x=function(e){var t,n,i,c,r,a,s,x=e.isFirstSection,p=e.handleNext,f=e.onSubmit,v=e.isTimerVisible,g=e.timer,y=Object(d.a)(),N=y.register,k=y.handleSubmit,S=y.formState.errors;return Object(O.jsx)(l.a,{className:"w-50",children:Object(O.jsxs)(u.a,{children:[Object(O.jsxs)("form",{className:"register_form",onSubmit:k(f),children:[Object(O.jsxs)("span",{className:x?"visible":"hidden",children:[Object(O.jsxs)(j.a,{children:[Object(O.jsx)(b.a,{for:"nickname",children:"Type your nickname"}),Object(O.jsx)(m.a,Object(o.a)({type:"text",name:"nickname",id:"nickname",placeholder:"nickname"},N("nickname",{required:!0,minLength:3,maxLength:20,pattern:/[A-Za-z0-9_-]+/})))]}),Object(O.jsx)(h.a,{className:"btn-primary",type:"button",onClick:p,children:"Next"}),Object(O.jsx)("span",{className:"timer",children:v&&g})]}),Object(O.jsxs)("span",{className:x?"hidden":"visible",children:[Object(O.jsxs)(j.a,{children:[Object(O.jsx)(b.a,{for:"cardNo",children:"Your card's number"}),Object(O.jsx)(m.a,Object(o.a)({type:"number",name:"card",id:"cardNo",placeholder:"card number"},N("cardNo",{required:!0,minLength:10,maxLength:10})))]}),Object(O.jsx)(h.a,{className:"btn-primary",type:"submit",children:"Finish"}),Object(O.jsx)(h.a,{className:"btn-primary btn-icon btn-round btn-sm",type:"button",onClick:p,children:"\u140a"}),Object(O.jsx)("span",{className:"timer",children:v&&g})]})]}),("minLength"===(null===(t=S.nickname)||void 0===t?void 0:t.type)||"maxLength"===(null===(n=S.nickname)||void 0===n?void 0:n.type)||"pattern"===(null===(i=S.nickname)||void 0===i?void 0:i.type))&&"Nickname has min 3 and max 20 characters, only letters, digits, underscore or dash.\t","required"===(null===(c=S.nickname)||void 0===c?void 0:c.type)&&"Nickname is required.\t","required"===(null===(r=S.cardNo)||void 0===r?void 0:r.type)&&"Card is required.\t",("minLength"===(null===(a=S.cardNo)||void 0===a?void 0:a.type)||"maxLength"===(null===(s=S.cardNo)||void 0===s?void 0:s.type))&&"Card number should have 10 digits.\t"]})})},p=n(68),f=n(66),v=function(e){var t=e.isOpen;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(p.a,{isOpen:t,children:Object(O.jsx)(f.a,{children:Object(O.jsx)("p",{children:"You have registered succssesfully!"})})})})},g=n(67),y=function(e){var t=e.children;return Object(O.jsx)(g.a,{className:"container-fluid vh-100 d-flex justify-content-center align-items-center",children:t})},N=n(31),k=20,S=2e3,L=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!0),a=Object(s.a)(r,2),o=a[0],d=a[1],l=Object(i.useState)(k),u=Object(s.a)(l,2),j=u[0],b=u[1],m=Object(i.useState)(!1),h=Object(s.a)(m,2),p=h[0],f=h[1],g=Object(i.useState)(),L=Object(s.a)(g,2),F=L[0],q=L[1];Object(i.useEffect)((function(){0===j&&(!o&&I(),document.querySelector(".register_form").reset(),f(!1),clearInterval(F),b(k),C())}),[j]);var C=Object(N.a)({timeout:S,onIdle:function(){f(!0),function(){var e=setInterval((function(){b((function(e){return e-1}))}),1e3);q(e)}()},onActive:function(){f(!1),clearInterval(F),b(k)},debounce:500}).reset,I=function(){d(!o)},T=function(e){setTimeout((function(){return window.location.reload()}),e)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{isOpen:n}),Object(O.jsx)(y,{children:Object(O.jsx)(x,{isFirstSection:o,handleNext:I,onSubmit:function(){c(!0),T(3e3)},isTimerVisible:p,timer:j})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),F()}},[[59,1,2]]]);
//# sourceMappingURL=main.92801260.chunk.js.map