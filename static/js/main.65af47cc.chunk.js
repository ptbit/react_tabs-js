(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),s=n(1),r=(n(9),n(10),n(11),n(0)),d=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,i=function(t,e){var n=[];if(t.forEach((function(t){return n.push(t.id)})),n.includes(e))return e;return t[0].id}(e,n);return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:t.id===i?"is-active":"",children:Object(r.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){var e;(e=t).id!==n&&c(e)},children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:e.filter((function(t){return t.id===i}))[0].content})]})};var b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)(""),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsxs)("h1",{className:"title",children:["Selected tab is ",0===b.filter((function(t){return t.id===n})).length?b[0].title:b.filter((function(t){return t.id===n}))[0].title]}),Object(r.jsx)(d,{tabs:b,selectedTabId:n,onTabSelected:function(t){t.id!==n&&c(t.id)}})]})};i.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.65af47cc.chunk.js.map