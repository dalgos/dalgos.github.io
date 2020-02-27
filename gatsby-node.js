/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve('src/templates/blog-post.tsx')

//   const result = await graphql(`{
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           html
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             date
//             path
//             title
//           }
//         }
//       }
//     }
//   }`)

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   const posts = result.data.allMarkdownRemark.edges
//   posts.forEach(({ node }, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node
//     createPage({
//       path: node.frontmatter.path,
//       component: blogPostTemplate,
//       context: {
//         slug: node.fields.slug,
//         previous,
//         next,
//       }
//     })
//   })
//     // Create blog-list pages
//   const postsPerPage = 5
//   const numPages = Math.ceil(posts.length / postsPerPage)
//   Array.from({ length: numPages }).forEach((_, idx) => {
//     createPage({
//       path: `${idx === 0 ? '/' : '/blog/' + (idx + 1)}`,
//       component: path.resolve('./src/templates/blog-list.tsx'),
//       context: {
//         limit: postsPerPage,
//         skip: idx * postsPerPage,
//         numPages,
//         currentPage: idx + 1,
//       }
//     })
//   })
// }

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode, ...rest }, options) => {

  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    // const fileNode = getNode(node.parent)
    // const source = fileNode.sourceInstanceName
    const value = createFilePath({ node, getNode })
    // console.log(source, value)
    createNodeField({
      // 추가하는 필드명
      name: 'slug',
      // MDX Node
      node,
      // 'post' prefix를 기반으로 포스트를 작성한다.
      value: `${node.frontmatter.path}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
              title
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // post page를 생성합니다.
  const posts = result.data.allMdx.edges
  posts.forEach(({ node: { frontmatter, id, fileAbsolutePath } }, idx) => {
    console.log(frontmatter.path)
    createPage({
      path: frontmatter.path,
      component: fileAbsolutePath,
      context: { id },
    })
  })
}

