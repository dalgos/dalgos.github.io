import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import PostItem from '../components/PostItem'
import Nav from '../components/Nav'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <div>
        <Nav/>
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
                  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
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