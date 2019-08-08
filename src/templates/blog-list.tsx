import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import PostItem from '../components/PostItem'

interface Props {
  data: any;
  pageContext: {
    numPages: number;
    currentPage: number;
  };
}

const BlogList: React.FC<Props> = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const pages = Array.from({ length: numPages }).map<{
    href: string;
    isActive: boolean;
    title: string;
  }>((_, idx) => {
    return {
      href: `${idx === 0 ? '/' : '/blog/' + (idx + 1)}`,
      title: `${idx + 1}`,
      isActive: idx + 1 === currentPage,
    }
  })
  return (
    <Layout>
      <div className="mw7 pv5 ph3 center">
        <section className="posts">
          <h3 className="f4 lh-copy">
            {`${isFirst ? 'Latest ' : ''}Articles`}
          </h3>
          {posts.map(({ node }) => {
              return (
                <PostItem
                  key={node.fields.slug}
                  path={node.frontmatter.path}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.excerpt}
                />
              )
            })
          }
        </section>
      </div>
      {/* {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return <div key={node.fields.slug}>{title}</div>
      })} */}
      
      <Pagination pages={pages}/>
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
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