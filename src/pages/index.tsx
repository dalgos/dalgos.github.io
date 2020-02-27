import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

export default function Index({ data: { allMdx } }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="mw7 pv5 ph3 center">
        <section className="posts">
          <h3 className="f4 lh-copy">Latest Articles</h3>
          {allMdx.edges.map(({ node: { fields, frontmatter } }) => {
            return (
              <PostItem
                key={fields.slug}
                title={frontmatter.title}
                path={fields.slug}
                date=""
                excerpt=""
              />
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export const recentPostQuery = graphql`
  query RecentPostsQuery {
    allMdx(limit: 5) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
