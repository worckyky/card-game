(this["webpackJsonpcard-game"]=this["webpackJsonpcard-game"]||[]).push([[0],{15:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2Pmg8",errorInput:"SuperInputText_errorInput__1dxM8",error:"SuperInputText_error__Po8__",input_wrapper:"SuperInputText_input_wrapper__VAy57"}},18:function(e,t,n){e.exports={default:"SuperButton_default__171CZ",red:"SuperButton_red__3n7Kb"}},21:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__gfnxy",spanClassName:"SuperCheckbox_spanClassName__1Rpq3"}},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(16),i=n.n(s),j=(n(34),n(35),n(11)),o=n(12),l=n(18),u=n.n(l),b=function(e){var t=e.red,n=(e.className,e.error),r=Object(o.a)(e,["red","className","error"]),a="".concat(n?"".concat(t?u.a.red:""):u.a.default," ").concat(u.a.default);return Object(c.jsx)("button",Object(j.a)({className:a},r))},d=n(15),h=n.n(d),x=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,s=e.error,i=e.inputclassName,l=e.spanClassName,u=Object(o.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","inputclassName","spanClassName"]),b="".concat(h.a.error," ").concat(l||""),d="".concat(s?h.a.errorInput:i||h.a.superInput);return Object(c.jsxs)("div",{className:h.a.input_wrapper,children:[Object(c.jsx)("input",Object(j.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&a&&a()},className:d},u)),s&&Object(c.jsx)("span",{className:b,children:s})]})},p=n(21),O=n.n(p),_=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),s=Object(o.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(O.a.checkbox," ").concat(r||"");return Object(c.jsxs)("label",{children:[Object(c.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:i},s)),a&&Object(c.jsx)("span",{className:O.a.spanClassName,children:a})]})},f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Component preview"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Button"}),Object(c.jsx)(b,{children:"Button"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Input"}),Object(c.jsx)(x,{})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Checkbox"}),Object(c.jsx)(_,{})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},v=n(3),m=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Login Page"}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Profile Page"}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},k=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Registration"}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"RecoverPassword"}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},N=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"AddPassword"}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},P=function(){return Object(c.jsx)("div",{})},y=n(5),I=n.n(y),w=n(9),S=function(){return Object(c.jsxs)("div",{className:I.a.links__container,children:[Object(c.jsx)(w.b,{to:"/component-view",activeClassName:I.a.link__active,className:I.a.link__default,children:"Preview"}),Object(c.jsx)(w.b,{to:"/login",activeClassName:I.a.link__active,className:I.a.link__default,children:"Login"}),Object(c.jsx)(w.b,{to:"/profile",activeClassName:I.a.link__active,className:I.a.link__default,children:"Profile"}),Object(c.jsx)(w.b,{to:"/registration",activeClassName:I.a.link__active,className:I.a.link__default,children:"Registration"}),Object(c.jsx)(w.b,{to:"/recover",activeClassName:I.a.link__active,className:I.a.link__default,children:"Recover"}),Object(c.jsx)(w.b,{to:"/add-pass",activeClassName:I.a.link__active,className:I.a.link__default,children:"AddPass"})]})};var T=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(S,{}),Object(c.jsxs)(v.d,{children:[Object(c.jsx)(v.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(v.a,{to:"/component-view"})}}),Object(c.jsx)(v.b,{path:"/component-view",render:function(){return Object(c.jsx)(f,{})}}),Object(c.jsx)(v.b,{path:"/login",render:function(){return Object(c.jsx)(m,{})}}),Object(c.jsx)(v.b,{path:"/profile",render:function(){return Object(c.jsx)(g,{})}}),Object(c.jsx)(v.b,{path:"/registration",render:function(){return Object(c.jsx)(k,{})}}),Object(c.jsx)(v.b,{path:"/recover",render:function(){return Object(c.jsx)(C,{})}}),Object(c.jsx)(v.b,{path:"/add-pass",render:function(){return Object(c.jsx)(N,{})}}),Object(c.jsx)(v.b,{path:"*",render:function(){return Object(c.jsx)(P,{})}}),Object(c.jsx)(v.a,{from:"*",to:"/404"})]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},B=n(13),R=n(26),A={},E={},F={},K=Object(B.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return e}}),J=Object(B.d)(K,Object(B.a)(R.a)),M=n(28);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w.a,{children:Object(c.jsx)(M.a,{store:J,children:Object(c.jsx)(T,{})})})}),document.getElementById("root")),L()},5:function(e,t,n){e.exports={link__default:"Links_link__default__17Rk0",links__container:"Links_links__container__3ULab",link__active:"Links_link__active__2WpzH"}}},[[41,1,2]]]);
//# sourceMappingURL=main.320ba1b2.chunk.js.map