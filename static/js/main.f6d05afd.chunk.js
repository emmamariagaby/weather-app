(this["webpackJsonpwheather-app"]=this["webpackJsonpwheather-app"]||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o=n(0),l=n(9),s=n.n(l),j=n(4),u=n(2),d=(n(17),function(e){var t=Object(o.useState)(null),n=Object(j.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(null),i=Object(j.a)(a,2),l=i[0],s=i[1],u=Object(o.useState)(null),d=Object(j.a)(u,2),h=d[0],b=d[1],p=Object(o.useState)(e),O=Object(j.a)(p,2),m=O[0],g=O[1];return Object(o.useEffect)((function(){m&&(b(!0),r(null),s(null),fetch(m).then((function(e){return e.json()})).then((function(e){b(!1),r(e)})).catch((function(e){b(!1),s(e)})))}),[m]),{data:c,error:l,isLoading:h,setUrl:g}}),h=n(3),b=n(1),p=h.a.div(c||(c=Object(u.a)(["\npadding: 1rem;\nmargin: 1rem;\ntext-align: center;\nheight: 280px;\nwidth: 240px;\nborder-radius: 20px;\ncolor: black;\nbackground-color: lightgrey;\n"]))),O=function(e){var t=e.dt,n=e.temp_min,c=e.temp_max,r=e.main,a=e.icon,i=new Date(t);return Object(b.jsxs)(p,{children:[Object(b.jsx)("img",{variant:"top",src:"http://openweathermap.org/img/wn/".concat(a,"@2x.png"),alt:"img"}),Object(b.jsx)("p",{children:r}),Object(b.jsxs)("p",{children:[i.toLocaleDateString()," - ",i.toLocaleTimeString()]}),Object(b.jsxs)("p",{children:["Min: ",n]}),Object(b.jsxs)("p",{children:["Max: ",c]})]})},m=h.a.div(r||(r=Object(u.a)(["\nmargin: 1rem;\ndisplay: flex;\nflex-flow: row wrap;\njustify-content: center;\nbackground-color: orange;\nborder: solid 0.5rem darkorange;\n"]))),g=function(e){var t=e.weathers;return t.pop(),Object(b.jsx)(m,{children:t.map((function(e){var t=e.dt,n=e.temp,c=e.weather;return Object(b.jsx)("div",{children:Object(b.jsx)(O,{temp_max:n.max,temp_min:n.min,dt:1e3*t,main:c[0].main,icon:c[0].icon})},t)}))})},x=h.a.div(a||(a=Object(u.a)(["\nmargin: 5rem;\nfont-size: 40px;\ncolor: orange;\nfont-weight: bolder;\n"]))),f=h.a.div(i||(i=Object(u.a)(["\nmargin: 1rem;\nfont-size: 30px;\ncolor: orange;\nfont-weight: light;\n"]))),v=function(){var e=d(),t=e.data,n=e.error,c=e.isLoading,r=e.setUrl,a=Object(o.useState)(""),i=Object(j.a)(a,2),l=i[0],s=i[1];Object(o.useEffect)((function(){console.log(l)}),[l]);var u=["59.32","18.06"],h=["52.52","13.40"],p=["59.91","10.75"],O="";return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{children:"Choose city to check weather"}),Object(b.jsxs)("select",{className:"select",value:l,onChange:function(e){return function(e){s(e.target.value),console.log(l+34);var t="",n="";"sthlm"===l?(t=u[0],n=u[1]):"berlin"===l?(t=h[0],n=h[1]):(t=p[0],n=p[1]),O="".concat("https://api.openweathermap.org/","data/2.5/onecall?lat=")+t+"&lon="+n+"&exclude=".concat("hourly,minutely,current,alerts","&units=metric&appid=").concat("3cfb96dd5ec2730ca9ea11397535e2b7"),r(O)}(e)},children:[Object(b.jsx)("option",{value:"cities",children:" -- cities -- "}),Object(b.jsx)("option",{value:"sthlm",children:" STOCKHOLM "}),Object(b.jsx)("option",{value:"berlin",children:" BERLIN "}),Object(b.jsx)("option",{value:"oslo",children:" OSLO "})]}),n?Object(b.jsxs)(f,{children:["Error when fetching: ",n]}):!t&&c?Object(b.jsx)(f,{children:"LOADING..."}):t?Object(b.jsx)(g,{weathers:t.daily}):null]})};s.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f6d05afd.chunk.js.map