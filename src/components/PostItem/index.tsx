import * as React from 'react'
import { Link } from 'gatsby'
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

export default ({ path, title, date, excerpt, sizes }) =>
  <article className="pa3 pa5-ns">
    <Link
      to={path}
      className="no-underline black"
    >
      <h1 className="f3 f1-m f-headline-l">{title}</h1>
    </Link>
    <p className="measure lh-copy">
      {excerpt}
    </p>
    <div>{date}</div>
  </article>