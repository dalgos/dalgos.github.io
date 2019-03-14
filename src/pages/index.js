import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

import PostItem from '../components/PostItem'
import ProfileHero from '../components/ProfileHero'
export default function Index({ data }) {
  // const { edges: posts } = data.allMarkdownRemark
  const posts =
    data.allMarkdownRemark.edges
      .map(({ node }) => node)
      .filter(node => node.frontmatter.title.length > 0)

  return (
    <Layout>

      {/* <ProfileHero
        title={headline.frontmatter.title}
        excerpt={headline.excerpt}
        path={headline.frontmatter.path}
      /> */}

      <div className="mw7 pv5 ph3 center">
        <section className="posts">
          <h3 className="f4 lh-copy">Latest Articles</h3>
          {posts.map((post, idx) => {
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
          }
        }
      }
    }
  }
`;