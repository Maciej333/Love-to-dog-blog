(this.webpackJsonpdogs_blog=this.webpackJsonpdogs_blog||[]).push([[0],{26:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),i=s(19),r=s.n(i),o=(s(26),s(7)),l=s(2),u=s(12),j=s(8),d=function(e){var t=e.url;return Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-img",style:{background:"url(".concat(t,") no-repeat center center / cover")}})})},b=function(e){var t=Object(n.useState)(null),s=Object(j.a)(t,2),c=s[0],a=s[1],i=Object(n.useState)(!1),r=Object(j.a)(i,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(e.ok)return e.json();throw new Error("bad response")})).then((function(e){return a(e)})).catch((function(e){l(!0)})),function(){return t.abort()}}),[e]),{datas:c,error:o}},m=function(e){return Object(c.jsxs)("div",{className:"links",children:[Object(c.jsx)(o.b,{to:"/Love-to-dog-blog/",style:{color:e.color},children:"Home"}),Object(c.jsx)(o.b,{to:"/Love-to-dog-blog/posts",style:{color:e.color},children:"Posts"}),Object(c.jsx)(o.b,{to:"/Love-to-dog-blog/gallery",style:{color:e.color},children:"Gallery"})]})},O=function(){return Object(c.jsxs)("div",{className:"fetch-error",children:[Object(c.jsx)("p",{children:"UPS... ERROR LOADING DATA"}),"Try again by refresh."]})},h=function(){return Object(c.jsx)("div",{className:"spinner-container",children:Object(c.jsx)("div",{className:"spinner"})})},g=function(){var e=0,t=Object(n.useState)(1),s=Object(j.a)(t,2),a=s[0],i=s[1],r=b("https://picsum.photos/v2/list?page=".concat(a,"&limit=12")),o=r.datas,l=r.error,g=Object(n.useState)([]),x=Object(j.a)(g,2),p=x[0],f=x[1];Object(n.useEffect)((function(){o&&f((function(e){return[].concat(Object(u.a)(e),Object(u.a)(o))}))}),[o]);var v=function(e){var t=e.currentTarget,s=t.scrollHeight;t.scrollTop>s-t.clientHeight-50&&i((function(e){return e+1}))};return Object(c.jsxs)("div",{className:"gallery",onScroll:v,children:[Object(c.jsx)("h1",{children:"YOUR PHOTOS"}),Object(c.jsx)("hr",{}),Object(c.jsx)(m,{color:"#000"}),Object(c.jsx)("div",{className:"gallery-images",onScroll:v,children:p.length>0?p.filter((function(e){return e})).map((function(t){return Object(c.jsx)(d,{url:t.download_url},e++)})):l?Object(c.jsx)(O,{}):Object(c.jsx)(h,{})})]})},x=s.p+"static/media/logo.102d6e89.png",p=function(){return Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("img",{src:x,alt:"logo"}),Object(c.jsx)(m,{})]})},f=function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(p,{color:"#fff"}),Object(c.jsx)("div",{className:"jumbotron",children:Object(c.jsxs)("h1",{children:["My goal is to share with You",Object(c.jsx)("br",{})," my passion to ",Object(c.jsx)("span",{children:"Dog!"})]})})]})},v=function(e){var t=e.imgSrc;return Object(c.jsx)("div",{className:"post-img",style:{background:"url(".concat(t,") no-repeat center center / cover")}})},N=function(e){var t=e.tags,s=e.date;return Object(c.jsxs)("div",{className:"post-info",children:[Object(c.jsx)("span",{className:"post-tags",children:t.map((function(e){return"#".concat(e," ")}))}),Object(c.jsx)("span",{className:"post-date",children:s})]})},y=function(e){var t=e.data,s=t.id,n=t.img,a=t.tags,i=t.date,r=t.title,l=t.desc;return Object(c.jsxs)("article",{className:"post",children:[Object(c.jsx)("div",{className:"post-new",style:{display:"true"===e.data.new?"flex":"none"},children:"NEW"}),Object(c.jsx)(v,{imgSrc:n}),Object(c.jsxs)("div",{className:"post-text",children:[Object(c.jsx)(N,{tags:a,date:i}),Object(c.jsx)(o.b,{to:"/Love-to-dog-blog/posts/".concat(s),style:{color:"#000"},children:Object(c.jsx)("h2",{children:r})}),Object(c.jsx)("p",{children:l})]})]})},S=function(){return Object(c.jsx)("header",{className:"posts-header",children:"POZNAJ LEPIEJ SWOJEGO PSA!"})},w=function(e){if(e.data[0]){var t=e.data[0],s=t.img,n=t.tags,a=t.date,i=t.title,r=t.desc;return Object(c.jsxs)("div",{className:"single-post",children:[Object(c.jsx)("h1",{children:String(i).toUpperCase()}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)(v,{imgSrc:s}),Object(c.jsxs)("div",{className:"post-text",children:[Object(c.jsx)(N,{tags:n,date:a}),Object(c.jsx)("p",{children:r})]})]}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra, erat id imperdiet malesuada, lorem leo eleifend nisl, sed tristique nisi ligula eget sem. Praesent sed sagittis odio. Pellentesque cursus risus vitae nunc vehicula, vel vulputate eros ultrices. Pellentesque sollicitudin sodales egestas. Integer non tincidunt mi. Proin malesuada, libero eget tincidunt posuere, ipsum nunc dapibus orci, vitae semper sapien arcu sed enim. Nullam euismod justo in neque sodales viverra. Morbi pharetra condimentum ipsum elementum luctus. Vestibulum ac mi ac odio dignissim interdum nec vel erat. Quisque nisi arcu, feugiat id libero sit amet, dapibus condimentum nulla. Aliquam tristique odio augue, non sagittis justo bibendum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla at enim sit amet diam facilisis ornare."}),Object(c.jsx)("p",{children:"Curabitur dictum, diam sed vestibulum maximus, ipsum augue egestas diam, sed fermentum erat sapien non ligula. Morbi sit amet eleifend dolor. Nullam dapibus molestie ex vitae semper. Nullam dignissim blandit ex, at tempor turpis consectetur at. Aenean eget interdum risus. Maecenas eleifend, neque quis pulvinar pharetra, leo magna vehicula felis, et cursus quam elit at massa. In in nulla sollicitudin, fermentum lectus nec, finibus ipsum."}),Object(c.jsx)(o.b,{to:"/Love-to-dog-blog/posts",children:"Back to all posts"})]})}return Object(c.jsx)("div",{className:"single-post-not-found",children:"Ups 404, Post not found"})},L=function(e){var t=e.active,s=e.totalPages,n=e.changePage;return Object(c.jsx)("div",{className:"pagination",children:Object(u.a)(Array(s).keys()).map((function(e){return s=e+1,Object(c.jsxs)("button",{className:t===s?"active":"",onClick:function(){return n(s)},children:[" ",s," "]},s);var s}))})},P=function(e){var t=Object(l.f)().id,s=Object(n.useState)(1),a=Object(j.a)(s,2),i=a[0],r=a[1],o=b("https://raw.githubusercontent.com/Maciej333/Love-to-dog-blog/master/src/Data/data_posts.json"),u=o.datas,d=o.error,g=["relation","health","young","eat","bauty","event"],x=Object(n.useState)(""),p=Object(j.a)(x,2),f=p[0],v=p[1],N=Object(n.useState)(""),P=Object(j.a)(N,2),q=P[0],k=P[1],C=function(e){var t=e.target.value;v(t.trimStart().toLowerCase()),r(1)},A=function(e){var t=e.target.value;k((function(e){return e.includes(t)?"":t})),r(1)},E=function(e){r(e)};return Object(c.jsxs)("div",{className:"blog",children:[Object(c.jsx)(S,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(m,{color:"#000"}),!t&&Object(c.jsx)("div",{className:"welcome"}),Object(c.jsx)("main",{className:"container",children:t?Object(c.jsx)(c.Fragment,{children:u&&Object(c.jsx)(w,{data:u.filter((function(e){return e.id===t}))})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"posts",children:[Object(c.jsx)("h1",{children:"NAJNOWSZE WPISY"}),Object(c.jsx)("hr",{}),u?u.filter((function(e){return e.title.toLowerCase().includes(f)})).filter((function(e){return!q||e.tags.includes(q)})).sort((function(e,t){return new Date(t.date)-new Date(e.date)})).slice(8*(i-1),8*(i-1)+8).map((function(e){return Object(c.jsx)(y,{data:e},e.id)})):d?Object(c.jsx)(O,{}):Object(c.jsx)(h,{}),Object(c.jsx)(L,{active:i,totalPages:u?Math.ceil(u.filter((function(e){return e.title.toLowerCase().includes(f)})).filter((function(e){return!q||e.tags.includes(q)})).length/8):0,changePage:E})]}),Object(c.jsxs)("section",{className:"filters",children:[Object(c.jsx)("h1",{children:"FILTRY"}),Object(c.jsx)("hr",{}),Object(c.jsx)("input",{type:"text",value:f,placeholder:"Search title..",onChange:C}),Object(c.jsx)("div",{className:"filters-tags",children:g.map((function(e){return Object(c.jsxs)("button",{value:e,onClick:A,style:{backgroundColor:q.includes(e)?"rgb(30, 205, 217)":"#fff"},children:["#",e]},e)}))})]})]})})]})};var q=function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/Love-to-dog-blog/",children:Object(c.jsx)(f,{})}),Object(c.jsx)(l.a,{path:"/Love-to-dog-blog/posts/:id?",children:Object(c.jsx)(P,{})}),Object(c.jsx)(l.a,{path:"/Love-to-dog-blog/gallery",children:Object(c.jsx)(g,{})}),Object(c.jsx)(l.a,{path:"*"})]})})})};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.20f0c927.chunk.js.map