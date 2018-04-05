// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/hello-world.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/layouts/index.js")
}