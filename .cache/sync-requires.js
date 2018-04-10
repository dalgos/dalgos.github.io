// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/layout-index.json"),
  "2018-04-10-01.json": require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/2018-04-10-01.json"),
  "404.json": require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/404.json"),
  "index.json": require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/index.json"),
  "page-2.json": require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/page-2.json"),
  "404-html.json": require("/Users/kwangs/Documents/GIT/private/dalgos.github.io/.cache/json/404-html.json")
}