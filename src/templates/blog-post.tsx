import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import '../sass/index.scss'
import Layout from '../components/Layout'
import ArticleHeader from '../components/ArticleHeader'
import EntryHeader from '../components/EntryHeader'


export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title}`} />
      <article className="lh-copy _post">

        {/* <ArticleHeader
          title={post.frontmatter.title}
          subTitle={data.site.siteMetadata.description}
          date={post.frontmatter.date}
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        /> */}
        <EntryHeader title={post.frontmatter.title} />

        <div className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html,
      frontmatter{
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
