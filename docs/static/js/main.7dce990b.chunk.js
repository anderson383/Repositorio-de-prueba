(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),u=a.n(c),l=(a(24),a(2)),i=a(18),o=function(e){var t=e.setCategorias,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,u),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[u].concat(Object(i.a)(e))})),o("")}},r.a.createElement("input",{type:"text",name:"texto",value:u,onChange:function(e){o(e.target.value)}})))},m=function(e){var t=e.dataImg;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-custom animate__animated animate__bounce"},r.a.createElement("img",{className:"card-img",src:t.url,alt:"img"}),r.a.createElement("p",null,t.title)))},s=a(5),d=a.n(s),p=a(16),f=a(17),g=a.n(f),E=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.giphy.com/v1/gifs/search?api_key=R7RJjPDcvzDKZC7alVjnmYHdRy42jdi3&q=".concat(encodeURI(t),"&limit=8"));case 2:return a=e.sent,n=a.data.data,e.abrupt("return",n.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({loading:!0,data:[]}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){E(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),c=a.data,u=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),u&&r.a.createElement("p",null,"Cargando..."),r.a.createElement("div",{className:"container-card"},c.map((function(e){return r.a.createElement(m,{key:e.id,dataImg:e})}))))},b=function(){var e=Object(n.useState)(["Hola"]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Gif expert app"),r.a.createElement("hr",null),r.a.createElement(o,{setCategorias:c}),a.map((function(e,t){return r.a.createElement(v,{key:t,category:e})}))))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7dce990b.chunk.js.map