(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),n=o.n(c),s=o(7),a=o.n(s),i=(o(13),o(3)),l=(o(14),o(8)),d=o(0),r=function(t){var e=t.setInputText,o=t.todos,c=t.setTodos,n=t.inputText,s=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:n,type:"text",className:"todo-input",onChange:function(t){e(t.target.value)}}),Object(d.jsx)("button",{className:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),c([].concat(Object(l.a)(o),[{text:n,completed:!1,id:1e3*Math.random()}])),e("")},children:Object(d.jsx)("i",{className:"fas fa-plus-square",children:"+"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(t){s(t.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"uncompleted"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.todo,c=t.todos,n=t.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(d.jsx)("button",{className:"complete-btn",onClick:function(){n(c.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},children:Object(d.jsx)("i",{className:"fas fa-chek",children:"\u2714"})}),Object(d.jsx)("button",{className:"trash-btn",onClick:function(){n(c.filter((function(t){return t.id!==o.id})))},children:Object(d.jsx)("i",{className:"fas fa-trash",children:"Del"})})]})},b=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)(j,{setTodos:o,todos:e,todo:t,text:t.text},t.id)}))})})};var f=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),a=Object(i.a)(s,2),l=a[0],u=a[1],j=Object(c.useState)("all"),f=Object(i.a)(j,2),m=f[0],p=f[1],O=Object(c.useState)([]),x=Object(i.a)(O,2),h=x[0],v=x[1];Object(c.useEffect)((function(){S()}),[]),Object(c.useEffect)((function(){g(),N()}),[l,m]);var g=function(){switch(m){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(l.filter((function(t){return!1===t.completed})));break;default:v(l)}},N=function(){localStorage.setItem("todos",JSON.stringify(l))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"To Do List"}),Object(d.jsx)(r,{inputText:o,setInputText:n,todos:l,setTodos:u,setStatus:p}),Object(d.jsx)(b,{setTodos:u,todos:l,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.c44c5e6b.chunk.js.map