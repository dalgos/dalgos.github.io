(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{212:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a(213),r=a.n(l),i=(a(214),a(219)),c=function(e){var t=e.title;return n.createElement("header",null,n.createElement("h1",{className:"f2-l f2 lh-title mv0 w-80",style:{letterSpacing:"-0.05rem"}},t),n.createElement("hr",{className:"mv5-l mv4"}))};function s(e){var t=e.data.markdownRemark;return n.createElement(i.a,null,n.createElement(r.a,{title:""+t.frontmatter.title}),n.createElement("article",{className:"lh-copy _post"},n.createElement(c,{title:t.frontmatter.title}),n.createElement("div",{className:"post",dangerouslySetInnerHTML:{__html:t.html}})))}a.d(t,"default",function(){return s}),a.d(t,"pageQuery",function(){return d});var d="1163354702"},215:function(e){e.exports={data:{site:{siteMetadata:{title:"cwa"}}}}},216:function(e){e.exports={data:{site:{siteMetadata:{title:"cwa"}}}}},219:function(e,t,a){"use strict";var n=a(215),l=a(0),r=a(213),i=a.n(r),c=a(93),s=a(218),d=(a(17),a(216)),m=a(217),o=function(e){var t=e.className,a=void 0===t?"":t,n=e.to,r=void 0===n?"#":n,i=e.title,s=void 0===i?"":i,d=e.text,o=void 0===d?"":d;return l.createElement(c.Link,{className:m("link white dim f6 f5-l dib-l db mr4-l pv1-l pv3 bb bn-l b--light-gray",a),to:r,title:s},o)},u=l.useEffect,v=l.useCallback,w=l.useState,f=function(e){var t=e.className,a=w(!1),n=a[0],r=a[1],i=w(!1),s=i[0],f=i[1],h=w({start:0,end:0}),E=(h[0],h[1]),b=v(function(e){r(e.deltaY>0&&window.scrollY>0)},[]),p=v(function(){f(function(e){return!e})},[]),g=v(function(e){E(function(t){return Object.assign({},t,{start:e.changedTouches[0].screenY})})},[]),N=v(function(e){var t=e.changedTouches[0].screenY;E(function(a){return console.log(a.start,t),r(a.start>t&&window.scrollY>0),Object.assign({},a,{end:e.changedTouches[0].screenY})})},[]);return u(function(){return window.addEventListener("wheel",b),window.addEventListener("touchstart",g),window.addEventListener("touchend",N),function(){window.removeEventListener("wheel",b),window.removeEventListener("touchstart",g),window.removeEventListener("touchend",N)}},[]),l.createElement(c.StaticQuery,{query:"3655728470",render:function(e){return l.createElement("nav",{className:m("db dt-l w-100 pa3 ph5-l fixed top-0 nav bg-white",t,{unpinned:n}),style:{zIndex:1e3}},l.createElement("div",{className:m("w-100 w-10-l mb0-l dib-l",{mb3:s})},l.createElement("h1",{className:"f4 f3-ns mv0 dib fw1 w-10-l w-50"},l.createElement(c.Link,{className:"db black dtc-l v-mid link dim w-100 w-10-l tl-l",to:"/",title:"Home"},e.site.siteMetadata.title)),l.createElement("div",{className:"w-50 dib tr dn-l"},l.createElement("a",{href:"javascript: void(0);",className:m("ball v-mid",{active:s}),onClick:p}))),l.createElement("nav",{className:m("w-90-l w-100 dib-l db-l dn bt bn-l b--light-gray bg-white",{db:s})},l.createElement("ul",{className:"list db dtc-l fw1 ttl v-mid ma0 pa0"},l.createElement("li",{className:"dib-l tl-l db tc"},l.createElement(o,{to:"/about",title:"About",text:"About"})))))},data:d})},h=function(e){var t=e.title;return l.createElement("footer",{className:"fl w-100 pa4"},l.createElement("small",{className:"f6 db tc"},"© 2018 ",l.createElement("b",{className:"ttu"},t),"., All Rights Reserved"),l.createElement("div",{className:"tc mt3"},l.createElement("a",{className:"link near-black hover-silver dib mr3",href:"https://github.com/dalgos",title:"GitHub",style:{width:"1.5rem",height:"1.5rem"}},l.createElement("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},l.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})))))};a(214);function E(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  margin: 0 auto;\n"]);return E=function(){return e},e}var b=s.a.div(E());t.a=function(e){var t=e.children;return l.createElement(c.StaticQuery,{query:"3470870683",render:function(e){return l.createElement("div",{className:"sans-serif page light"},l.createElement(i.a,{title:e.site.siteMetadata.title,meta:e.site.siteMetadata.meta}),l.createElement(f,null),l.createElement(b,{id:"content",className:"mw7 pv6-l pv5 ph5-l ph3"},l.createElement("div",{id:"primary",className:"w-100"},t)),l.createElement(h,{title:e.site.siteMetadata.title}))},data:n})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-4c780867283bd895678f.js.map