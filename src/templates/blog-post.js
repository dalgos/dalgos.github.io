import React from 'react'
import Helmet from 'react-helmet'
import Styled from 'styled-components'

import '../sass/index.scss'

const PostTitle = Styled.h2`
  font-size: 2.5rem;
`

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <div className="col">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <small>{post.frontmatter.date}</small>
        <div
          className="blog-post-content mt-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
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
  }
`
