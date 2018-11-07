import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import '../sass/index.scss'
import Layout from '../components/Layout'
import ArticleHeader from '../components/ArticleHeader'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <article className="lh-copy _post">
        <Helmet title={`${post.frontmatter.title}`} />

        <ArticleHeader
          title={post.frontmatter.title}
          subTitle={data.site.siteMetadata.description}
          date={post.frontmatter.date}
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />

        <div className="pa4 ph6-l mw9 mw8-l center" dangerouslySetInnerHTML={{ __html: post.html }} />

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
        featuredImage{
          childImageSharp{
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
