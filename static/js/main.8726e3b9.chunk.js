(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),o=(n(12),n(6)),u=n(2),i=n(1),m=function(e){var t=e.color,n=e.text,a=e.onClick;return r.a.createElement("button",{onClick:a,style:{backgroundColor:t},className:"btn"},n)};m.defaultProps={color:"steelblue"};var d=m,s=function(e){var t=e.title;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,t),r.a.createElement(d,{onClick:function(){console.log("Click")},color:"green",text:"Add"}))};s.defaultProps={title:"Task Tracker"};var f=s,E=n(5),b=function(e){var t=e.task,n=e.onDelete,a=e.onToggle;return r.a.createElement("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return a(t.id)}},r.a.createElement("h3",null,t.text," ",r.a.createElement(E.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})," "),r.a.createElement("p",null,t.day))},k=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(b,{key:e.id,task:e,onDelete:n,onToggle:a})}))},v=function(e){var t=e.onAdd,n=Object(a.useState)(""),l=Object(i.a)(n,2),c=l[0],o=l[1],u=Object(a.useState)(""),m=Object(i.a)(u,2),d=m[0],s=m[1],f=Object(a.useState)(!1),E=Object(i.a)(f,2),b=E[0],k=E[1];return r.a.createElement("div",null,r.a.createElement("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c,day:d,reminder:b}),o(""),s(""),k("False")):alert("Please add a task")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Task"),r.a.createElement("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Day & Time"),r.a.createElement("input",{type:"text",placeholder:"Add Day & Time",value:d,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-control form-control-check"},r.a.createElement("label",null,"Set Reminder"),r.a.createElement("input",{type:"checkbox",checked:b,value:b,onChange:function(e){return k(e.currentTarget.checked)}})),r.a.createElement("input",{type:"submit",value:"Save Task",className:"btn btn-block"})))};var p=function(){var e=Object(a.useState)([{id:1,text:"Code",day:"Jan 4 at 3:30 pm",reminder:!0},{id:2,text:"Eat",day:"Feb 1 at 2:30 pm",reminder:!0},{id:3,text:"Sleep",day:"Never",reminder:!0}]),t=Object(i.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(v,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,a=Object(u.a)({id:t},e);l([].concat(Object(o.a)(n),[a]))}}),n.length>0?r.a.createElement(k,{tasks:n,onDelete:function(e){l(n.filter(function(t){return t.id!==e}))},onToggle:function(e){l(n.map(function(t){return t.id===e?Object(u.a)({},t,{reminder:!t.reminder}):t}))}}):"No Tasks to show")},g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,16)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),g()},7:function(e,t,n){e.exports=n(15)}},[[7,3,2]]]);
//# sourceMappingURL=main.8726e3b9.chunk.js.map