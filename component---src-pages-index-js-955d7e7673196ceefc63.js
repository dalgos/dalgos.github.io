(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(241),i=a(259),c=a.n(i),s=a(237);function o(){var e=c()(["\n  a {\n    color: initial;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);return o=function(){return e},e}a(258).a.article(o());var u=function(e){var t=e.path,a=e.title,r=e.date,l=e.excerpt;return e.sizes,n.createElement("article",{className:"pa3"},n.createElement(s.Link,{to:t,className:"no-underline black"},n.createElement("h1",{className:"f1-l"},a)),n.createElement("p",{className:"lh-copy",dangerouslySetInnerHTML:{__html:l}}),n.createElement("div",{className:"dib off-orange"},n.createElement(s.Link,{to:t,className:"no-underline b off-orange"},"more")),n.createElement("div",{className:"mt2 gray"},r))},d=a(249),m=function(){return n.createElement(s.StaticQuery,{query:"3491956481",render:function(e){return n.createElement("div",{className:"sans-serif bb b--gray bg-pastel-green"},n.createElement("div",{className:"mw9 center pa4 pt7-ns pb6-ns ph6-l"},n.createElement("h3",{className:"f2 f1-m f-headline-l measure-narrow lh-title mv0"},n.createElement("span",{className:"bg-black lh-copy white pa1 tracked-tight",dangerouslySetInnerHTML:{__html:e.site.siteMetadata.description}})),n.createElement("h4",{className:"f3 fw1 georgia i black"},"#javascript #react")))},data:d})};function f(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(l.a,null,r.a.createElement(m,null),r.a.createElement("div",{className:"mw7 center"},r.a.createElement("section",{className:"posts"},t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e,t){var a=e.node;return r.a.createElement(u,{key:t,path:a.frontmatter.path,title:a.frontmatter.title,date:a.frontmatter.date,excerpt:a.excerpt,fluid:a.frontmatter.featuredImage.childImageSharp.fluid})}))))}a.d(t,"default",function(){return f}),a.d(t,"pageQuery",function(){return p});var p="907132527"},237:function(e,t,a){"use strict";a(64);var n=a(63),r=a(5);t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var l=r(a(1)),i=r(a(0)),c=n(a(62));t.Link=c.default,t.withPrefix=c.withPrefix,t.push=c.push,t.replace=c.replace,t.navigateTo=c.navigateTo;var s=r(a(239));t.PageRenderer=s.default;var o=l.default.createContext({});t.StaticQueryContext=o;var u=function(e){return l.default.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=u,u.propTypes={data:i.default.object,query:i.default.string.isRequired,render:i.default.func,children:i.default.func}},238:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var r=n(a(1)),l=n(a(0)),i=n(a(115)),c=n(a(61)),s=function(e){var t=e.location,a=c.default.getResourcesForPathname(t.pathname);return r.default.createElement(i.default,{location:t,pageResources:a})};s.propTypes={location:l.default.shape({pathname:l.default.string.isRequired}).isRequired};var o=s;t.default=o},239:function(e,t,a){"use strict";var n;e.exports=(n=a(238))&&n.default||n},240:function(e,t,a){},241:function(e,t,a){"use strict";var n=a(243),r=a(1),l=a.n(r),i=a(245),c=a.n(i),s=a(237),o=a(242),u=function(){return r.createElement(s.StaticQuery,{query:"920827909",render:function(e){var t=e.site;return r.createElement("div",{className:"pa4-l pa3 bg-pastel-green"},r.createElement(s.Link,{to:"/",className:"no-underline dib black"},r.createElement("h1",{className:"f3 mv0"},t.siteMetadata.title)))},data:o})},d=function(e){return r.createElement("footer",{className:"fl w-100 pa4"},r.createElement("small",{className:"f6 db tc"},"© 2018 ",r.createElement("b",{className:"ttu"},"devs.tech"),"., All Rights Reserved"),r.createElement("div",{className:"tc mt3"},r.createElement("a",{className:"link near-black hover-silver dib mr3",href:"https://github.com/dalgos",title:"GitHub",style:{width:"1.5rem",height:"1.5rem"}},r.createElement("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})))))};a(240),t.a=function(e){var t=e.children;return l.a.createElement(s.StaticQuery,{query:"3470870683",render:function(e){return l.a.createElement("div",{className:"sans-serif"},l.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:e.site.siteMetadata.meta}),l.a.createElement("div",{className:"w-100"},l.a.createElement(u,null),l.a.createElement("div",null,t)),l.a.createElement(d,null))},data:n})}},242:function(e){e.exports={data:{site:{siteMetadata:{title:"dev.logs"}}}}},243:function(e){e.exports={data:{site:{siteMetadata:{title:"dev.logs"}}}}},249:function(e){e.exports={data:{site:{siteMetadata:{description:"The Developer's Guide to the Web"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-955d7e7673196ceefc63.js.map