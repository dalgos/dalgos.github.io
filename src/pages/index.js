import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import PreviewItem from '../components/PreviewItem'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <PreviewItem
              path={post.frontmatter.path}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
            />
          )
        })
      }
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`