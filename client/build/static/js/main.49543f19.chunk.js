(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),s=t(15),o=t.n(s),i=(t(21),t(16)),r=t(3),u=(t(22),t(23),t(0)),l=function(e){return Object(u.jsxs)("div",{className:"img-div",children:[Object(u.jsx)("img",{className:"info-img",onMouseOver:function(n){return n.target.src=e.back},onMouseLeave:function(n){return n.target.src=e.front},src:e.front,alt:""}),Object(u.jsx)("button",{className:"catch-button",onClick:function(n){e.catch()},children:e.caught(e.name)})]})},h=function(e){return Object(u.jsx)("span",{onClick:function(){return e.changeType(e.type)},className:"type-span ".concat(e.type),children:Object(u.jsx)("h2",{children:e.type})})},j=function(e){var n=e.pokemon,t=e.catchHandler,c=e.changeType,a=e.caught,s=n.name,o=n.weight,i=n.height,r=n.types,j=n.pictures;return Object(u.jsxs)("div",{className:"info-block",children:[""!==s&&Object(u.jsx)(l,{catch:t,front:j.front,back:j.back,caught:a,name:s}),Object(u.jsx)("h3",{className:"info-name",children:s}),Object(u.jsx)("span",{className:"info-types",children:r.map((function(e){return Object(u.jsx)(h,{type:e,changeType:c},e)}))}),Object(u.jsx)("h2",{className:"info-height",children:"HEIGHT: "+i}),Object(u.jsx)("h2",{className:"info-weight",children:"WEIGHT: "+o})]})},f=function(e){var n=Object(c.useState)(""),t=Object(r.a)(n,2),a=t[0],s=t[1];return Object(u.jsxs)("span",{className:"search-span",children:[Object(u.jsx)("p",{children:!1===e.valid?"Pokemon not found":""}),Object(u.jsx)("input",{onChange:function(e){return s(e.target.value)},type:"text"}),Object(u.jsx)("button",{onClick:function(){return e.handler(a)},children:"search pokemon"})]})},m=function(e){return Object(u.jsxs)("div",{className:"list-item",onClick:function(){return e.change(e.name)},children:[Object(u.jsx)("img",{className:"icon",src:e.img,alt:""}),Object(u.jsx)("span",{children:e.name})]})},g=function(e){return Array.isArray(e.pokemon)&&e.pokemon.length>0?"types-list"===e.class?Object(u.jsx)("div",{className:e.class,children:e.pokemon.map((function(n){return Object(u.jsx)(m,{name:n,change:e.change},n)}))}):Object(u.jsx)("div",{className:e.class,children:e.pokemon.map((function(n){return Object(u.jsx)(m,{name:n.name,change:e.change,img:n.pictures.icon},n.name)}))}):null},p=t(25);var b=function(){var e=Object(c.useState)({name:"",weight:"",height:"",types:[]}),n=Object(r.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)([]),o=Object(r.a)(s,2),l=o[0],h=o[1],m=Object(c.useState)(!0),b=Object(r.a)(m,2),d=b[0],O=b[1],x=Object(c.useState)([]),k=Object(r.a)(x,2),v=k[0],y=k[1];function N(e){p.get("/api/pokemon/"+e).then((function(e){a(e.data),O(!0)})).catch((function(e){return O(!1)}))}function C(){p.get("/api/collection").then((function(e){h(e.data)})).catch((function(e){return console.log(e.message)}))}return Object(c.useEffect)((function(){return C()}),[]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"gameboy-div",children:[Object(u.jsx)("h1",{children:"Pokedex"}),Object(u.jsx)(f,{handler:N,valid:d}),Object(u.jsx)(j,{pokemon:t,catchHandler:function(){p.get("/api/collection").then((function(e){Object(i.a)(e.data).map((function(e){return e.id})).includes(t.id)?p.delete("/api/collection/release/"+t.name).then((function(e){console.log(e.data),C()})).catch((function(e){return console.log(e.message)})):p.post("/api/collection/catch",t).then((function(e){console.log(e.data),C()})).catch((function(e){return console.log(e.message)}))})).catch((function(e){return console.log(e.message)}))},changeType:function(e){p.get("/api/type/"+e).then((function(){return n=e,void p.get("/api/type/"+n).then((function(e){y(e.data)})).catch((function(e){return console.log(e.message)}));var n})).catch((function(e){return console.log(e.message)}))},caught:function(e){return console.log(l),l.find((function(n){return n.name===e}))?"release":"catch"}})]}),Object(u.jsx)(g,{class:"types-list",pokemon:v,change:N}),Object(u.jsx)(g,{class:"collection-list",pokemon:l,change:N})]})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),d()}},[[44,1,2]]]);
//# sourceMappingURL=main.49543f19.chunk.js.map