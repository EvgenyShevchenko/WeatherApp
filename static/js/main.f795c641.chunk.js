(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{19:function(e,t,a){},49:function(e){e.exports=JSON.parse('["Peru","Moscow","Krasnodar","London","China"]')},50:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(6),r=a.n(n),s=a(4),i=a(7),o=a.n(i),d=a(1);var l=function(e){var t=e.weather,a=e.city,n=e.active,r=e.setActive;Object(c.useEffect)((function(){var e=function(e){27===e.keyCode&&r(!1)};return document.addEventListener("keydown",(function(t){return e(t)})),function(){return document.removeEventListener("keypress",(function(t){return e(t)}))}}),[]);var s=function(){r(!1)},i={temp:t.temp,feels_like:t.feels_like,humidity:t.humidity,pressure:t.pressure},o=i.temp,l=i.feels_like,j=i.humidity,u=i.pressure;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:n?"modal active":"modal",onClick:s,children:Object(d.jsxs)("div",{className:"modal__content",children:[Object(d.jsx)("div",{className:"modal__content-close",onClick:s,children:"x"}),Object(d.jsx)("h2",{className:"modal__title",children:a}),Object(d.jsxs)("div",{className:"modal__text",children:[Object(d.jsxs)("div",{className:"modal__content-temp",children:[Object(d.jsx)("p",{children:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),o,"\u2103"]}),Object(d.jsxs)("div",{className:"modal__content-feels",children:[Object(d.jsx)("p",{children:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a"}),l,"\u2103"]}),Object(d.jsxs)("div",{className:"modal__content-humidity",children:[Object(d.jsx)("p",{children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),j,"%"]}),Object(d.jsxs)("div",{className:"modal__content-pressure",children:[Object(d.jsx)("p",{children:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),u]})]}),Object(d.jsx)("div",{className:"modal__add",onClick:function(){return function(){var e=localStorage.getItem("favorite")||"";e.includes(a)||localStorage.setItem("favorite",e+" "+a)}()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})})})};var j=function(e){var t=e.data,a=e.cityName;return Object(d.jsxs)("div",{className:"favoriteCard",children:[Object(d.jsx)("h3",{className:"favoriteCard__title",children:a}),Object(d.jsxs)("div",{className:"favoriteCard__temp",children:[Math.floor(t.temp),"\u2103"]}),Object(d.jsxs)("div",{className:"favoriteCard__content-feels",children:[Object(d.jsx)("p",{children:"Feels_like: "}),Object(d.jsxs)("b",{children:[Math.floor(t.feels_like),"\u2103"]})]}),Object(d.jsxs)("div",{className:"favoriteCard__content-humidity",children:[Object(d.jsx)("p",{children:"Humidity: "}),Object(d.jsxs)("b",{children:[t.humidity,"%"]})]}),Object(d.jsxs)("div",{className:"favoriteCard__content-pressure",children:[Object(d.jsx)("p",{children:"Pressure: "}),Object(d.jsx)("b",{children:t.pressure})]})]})};var u=function(e){var t=e.favoriteCity,a=e.apiKey,n=(e.city,Object(c.useState)([])),r=Object(s.a)(n,2),i=r[0],l=r[1];return Object(c.useEffect)((function(){if(t){var e=t.map((function(e){return o()("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat(a))}));Promise.all(e).then((function(e){l(e)})).catch((function(e){return console.log('\u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 EN:"London"')}))}}),[t]),Object(d.jsx)("div",{className:"favoriteWeather",children:0!==i.length?i.map((function(e,t){return Object(d.jsx)(j,{data:e.data.main,cityName:e.data.name},t+e.data)})):Object(d.jsx)("div",{className:"favoriteWeather__noData",children:"\u0414\u0430\u043d\u043d\u044b\u0445 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u043d\u0435\u0442."})})},h=a(8),m=a(10),b=a(65);var O=function(e){e.changeMode;var t=e.toggleChangeMode,a=Object(c.useState)({checkedA:!0,checkedB:!0}),n=Object(s.a)(a,2),r=n[0],i=n[1];return Object(d.jsxs)("div",{className:"changeMode",children:["Change mode:",Object(d.jsx)(b.a,{checked:r.checkedA,onChange:function(e){i(Object(m.a)(Object(m.a)({},r),{},Object(h.a)({},e.target.name,e.target.checked))),t()},name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}})]})};var p=function(e){var t=e.apiKey,n=Object(c.useState)([]),r=Object(s.a)(n,2),i=r[0],l=r[1],u=a(49);return Object(c.useEffect)((function(){if(u){var e=u.map((function(e){return o()("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat(t))}));Promise.all(e).then((function(e){l(e)}))}}),[]),Object(d.jsx)("div",{className:"favoriteWeather",children:i.map((function(e,t){return Object(d.jsx)(j,{data:e.data.main,cityName:e.data.name},t+e.data)}))})};var f=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({}),i=Object(s.a)(r,2),j=i[0],h=i[1],m=Object(c.useState)(!1),b=Object(s.a)(m,2),f=b[0],v=b[1],x=Object(c.useState)([]),_=Object(s.a)(x,2),y=_[0],N=_[1],g=Object(c.useState)(!0),k=Object(s.a)(g,2),C=k[0],w=k[1],S=Object(c.useState)(""),E=Object(s.a)(S,2),M=E[0],A=E[1],K="432e0e516b136001af816e0e90e80ca2",P=localStorage.getItem("favorite"),L=P?P.slice(1).split(" "):P;return Object(c.useEffect)((function(){N(L)}),[]),Object(d.jsxs)("div",{className:"search-wrapper",children:[Object(d.jsx)("span",{className:"search-label",children:"Search City"}),Object(d.jsx)(O,{changeMode:w,toggleChangeMode:function(){w(!C)}}),Object(d.jsx)("input",{type:"text",className:"search-input",value:a,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(o.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&units=metric&appid=").concat(K)).then((function(e){var t=e.data;h(t.main),A(t.name)})),v(!0),e.target.blur())},placeholder:"Enter the city. Example: London"}),Object(d.jsx)(l,{weather:j,active:f,setActive:v,city:M}),C?Object(d.jsx)(u,{favoriteCity:y,apiKey:K,city:M}):Object(d.jsx)(p,{apiKey:K})]})};a(19);var v=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{className:"title",children:"Weather App"}),Object(d.jsx)(f,{})]})};r.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f795c641.chunk.js.map