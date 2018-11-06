import * as React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'
import Img from 'gatsby-image'

const Article = Styled.article`
  a {
    color: initial;
    &:hover {
      text-decoration: none;
    }
  }
`

export default ({ path, title, date, excerpt }) =>
  <article className="pa3">
    <Link
      to={path}
      className="no-underline black"
    >
      <h1 className="f1-l white">{title}</h1>
    </Link>
    <p className="lh-copy" dangerouslySetInnerHTML={{ __html: excerpt }}>
      
    </p>
    <div className="dib off-orange">
      <Link to={path} className="no-underline b off-orange">more</Link>
    </div>
    <div className="mt2 gray">{date}</div>
  </article>