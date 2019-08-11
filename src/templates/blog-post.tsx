import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import '../sass/index.scss'
import Layout from '../components/Layout'
import ArticleHeader from '../components/ArticleHeader'
import EntryHeader from '../components/EntryHeader'
import Pager from '../components/Pager'

interface Node {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    data: string;
    path: string;
    title: string;
  };
  html: string;
  id: string;
}

interface Props {
  data: any;
  pageContext: {
    previous?: Node;
    next?: Node;
  }
}

export default function Template ({ data, pageContext }: Props) {
  const { markdownRemark: post } = data
  console.log(data)
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

      <Pager
        next={pageContext.next}
        previous={pageContext.previous}
      />
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
