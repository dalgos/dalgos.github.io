import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

import PostItem from '../components/PostItem'
import Hero from '../components/Hero'
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>

      <Hero/>

      <div className="mw7 pv5 ph3 center">
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
                />
              )
            })
          }
        </section>
      </div>
    </Layout>
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
            featuredImage {
              childImageSharp{
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;