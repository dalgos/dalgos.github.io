(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(245),i=a.n(l),s=(a(237),a(240),a(116),a(261),a(260),a(241)),c=function(e){var t=e.title,a=void 0===t?"":t,n=e.date;return r.createElement("header",{className:"sans-serif"},r.createElement("div",{className:"mw9 center pa4 pa5-ns pb6-ns ph6-l bb b--gray"},n&&r.createElement("time",{className:"f6 mb2 dib ttu tracked"},r.createElement("small",null,n)),r.createElement("h3",{className:"f2 f1-m f-headline-l measure-narrow lh-title mv0"},r.createElement("span",{className:"pa1 tracked-tight"},a))))};function u(e){var t=e.data.markdownRemark;return n.a.createElement(s.a,null,n.a.createElement("article",{className:"lh-copy"},n.a.createElement(i.a,{title:""+t.frontmatter.title}),n.a.createElement(c,{title:t.frontmatter.title,date:t.frontmatter.date}),n.a.createElement("div",{className:"pa4 ph6-l mw9-l center",dangerouslySetInnerHTML:{__html:t.html}})))}a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return o});var o="2809955791"},237:function(e,t,a){"use strict";a(64);var r=a(63),n=a(5);t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var l=n(a(1)),i=n(a(0)),s=r(a(62));t.Link=s.default,t.withPrefix=s.withPrefix,t.push=s.push,t.replace=s.replace,t.navigateTo=s.navigateTo;var c=n(a(239));t.PageRenderer=c.default;var u=l.default.createContext({});t.StaticQueryContext=u;var o=function(e){return l.default.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=o,o.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},238:function(e,t,a){"use strict";var r=a(5);t.__esModule=!0,t.default=void 0;var n=r(a(1)),l=r(a(0)),i=r(a(115)),s=r(a(61)),c=function(e){var t=e.location,a=s.default.getResourcesForPathname(t.pathname);return n.default.createElement(i.default,{location:t,pageResources:a})};c.propTypes={location:l.default.shape({pathname:l.default.string.isRequired}).isRequired};var u=c;t.default=u},239:function(e,t,a){"use strict";var r;e.exports=(r=a(238))&&r.default||r},240:function(e,t,a){},241:function(e,t,a){"use strict";var r=a(243),n=a(1),l=a.n(n),i=a(245),s=a.n(i),c=a(237),u=a(242),o=function(){return n.createElement(c.StaticQuery,{query:"920827909",render:function(e){var t=e.site;return n.createElement("div",{className:"pa4-l pa3"},n.createElement(c.Link,{to:"/",className:"no-underline dib"},n.createElement("h1",{className:"f3 mv0"},t.siteMetadata.title)))},data:u})},d=function(e){return n.createElement("footer",{className:"fl w-100 pa4"},n.createElement("small",{className:"f6 db tc"},"© 2018 ",n.createElement("b",{className:"ttu"},"devs.tech"),"., All Rights Reserved"),n.createElement("div",{className:"tc mt3"},n.createElement("a",{className:"link near-black hover-silver dib mr3",href:"https://github.com/dalgos",title:"GitHub",style:{width:"1.5rem",height:"1.5rem"}},n.createElement("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},n.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})))))};a(240),t.a=function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"3470870683",render:function(e){return l.a.createElement("div",{className:"sans-serif"},l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:e.site.siteMetadata.meta}),l.a.createElement("div",{className:"w-100"},l.a.createElement(o,null),l.a.createElement("div",null,t)),l.a.createElement(d,null))},data:r})}},242:function(e){e.exports={data:{site:{siteMetadata:{title:"dev.logs"}}}}},243:function(e){e.exports={data:{site:{siteMetadata:{title:"dev.logs"}}}}},260:function(e,t,a){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===l)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},261:function(e){e.exports={data:{site:{siteMetadata:{title:"dev.logs"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fb09f3e04bd872b798a5.js.map