import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import '../sass/index.scss'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import ArticleHeader from '../components/ArticleHeader'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    // <div className="col">
    //   <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
    //   <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
    //   <div className="blog-post">
    //     {post.coverImage}
    //     <PostTitle>{post.frontmatter.title}</PostTitle>
    //     <small>{post.frontmatter.date}</small>
    //     <div
    //       className="blog-post-content mt-4"
    //       dangerouslySetInnerHTML={{ __html: post.html }}
    //     />
    //   </div>
    // </div>
    <Layout>
      <article className="lh-copy _post">
        <Helmet title={`${post.frontmatter.title}`} />

        <ArticleHeader
          title={post.frontmatter.title}
          date={post.frontmatter.date}
        />

        <div className="pa4 ph6-l mw9-l center" dangerouslySetInnerHTML={{ __html: post.html }} />

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
  }
`
