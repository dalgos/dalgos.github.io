import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import PreviewItem from '../components/PreviewItem'
import PostItem from '../components/PostItem'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <section className="posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, idx) => {
          return (
            <PostItem
              key={idx}
              path={post.frontmatter.path}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              coverImage={post.frontmatter.coverImage}
            />
          )
        })
      }
    </section>
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
                  #  coverImage {
                  #    childImageSharp {
                  #      resolutions(width: 400) {
                  #        width
                  #        height
                  #        src
                  #        srcSet
                  #      }
                  #    }
                  #  }
                 }
               }
             }
           }
         }
       `;